<?php
// Programmer 1: Mr. Tan Wei Kang, Developer
// Programmer 2: Ms. Lim Jia Yong, Project Manager
// Description: Query database to display relevant data in the form of graphs and charts
// Edited on: 29 March 2022

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Transaction;
use App\Models\User;
use Carbon\Carbon;
use DateInterval;
use DatePeriod;
use DateTime;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function __construct() {
        $this->middleware('auth');
    }

    public function index() {
        if (auth()->user()->role != 'admin')
            abort(403, 'This route is only meant for admin.');

        // General variables useful for all charts / graphs
        $lastMonthDate = Carbon::now()->subDays(30)->toDateTimeString();
        $today = Carbon::today()->toDateString();
        $oneMonthTransactions = Transaction::where('created_at', '>=', $lastMonthDate)->get();
        
        // ================   Calculate Revenue   ========================
        $totalRevenue = $oneMonthTransactions->sum("final_amount");
        // $dailyRevenue will store date-revenue pair for the past 30 days
        $dailyRevenue = Transaction::select(
            DB::raw('date(created_at) as date'), DB::raw('SUM(final_amount) as revenue'))
            ->where('created_at', '>=', $lastMonthDate)
            ->groupBy('date')->orderBy('date')->get();
        // =============   End of Calculate Revenue   =====================

        // ================   Calculate Estimated Cost   =====================
        $totalCost = 0;
        foreach ($oneMonthTransactions as $transaction) {
            $totalCost += $transaction->order->getTotalCost();
        }
        // ===============   End of Calculate Estimated Cost   ===============

        // ================   Calculate Gross Profit   =====================
        $grossProfit = $totalRevenue - $totalCost;
        // ================   End of Calculate Gross Profit   =====================

        // ================   Total Orders   =====================
        $totalOrders = $oneMonthTransactions->count();
        $dailyOrders = Order::select(
            DB::raw('date(dateTime) as date'), DB::raw('COUNT(*) as orders'))
            ->where('created_at', '>=', $lastMonthDate)
            ->groupBy('date')->orderBy('date')->get();
        // =============   End of Total Orders   =====================

        // ================   Product Category   =====================
        $categoricalSales = [0, 0, 0, 0, 0, 0, 0];
        foreach ($oneMonthTransactions as $transaction) {
            $cartItems = $transaction->order->cartItems;

            foreach ($cartItems as $item) {
                $itemType = $item->menu->type;
                $itemPrice = $item->menu->price;

                switch($itemType) {
                    case "Appetizer":
                        $categoricalSales[0] += $itemPrice;
                    case "Bento":
                        $categoricalSales[1] += $itemPrice;
                    case "Beverage":
                        $categoricalSales[2] += $itemPrice;
                    case "Dessert":
                        $categoricalSales[3] += $itemPrice;
                    case "Ramen":
                        $categoricalSales[4] += $itemPrice;
                    case "Sushi":
                        $categoricalSales[5] += $itemPrice;
                    case "Temaki":
                        $categoricalSales[6] += $itemPrice;
                }
            }
        }
        for ($i=0; $i < count($categoricalSales) ; $i++) {
            $categoricalSales[$i] = number_format((float)$categoricalSales[$i], 2, '.', '');
        }
        // =============   End of Product Category   =====================


        // Ensure the arrays are complete even when there is no order for that day
        $interval = DateInterval::createFromDateString('1 day');
        $period = new DatePeriod(new DateTime($lastMonthDate), $interval, new DateTime($today));  
        
        foreach ($period as $date) {
            $date = $date->format('Y-m-d');
            if (!$dailyRevenue->contains('date', $date))
                $dailyRevenue->push(array('date' => $date, 'revenue' => 0));
            if (!$dailyOrders->contains('date', $date))
                $dailyOrders->push(array('date' => $date, 'orders' => 0));
        }

        // Sort arrays by date
        $dailyRevenue = $dailyRevenue->toArray();
        $dailyOrders = $dailyOrders->toArray();
        $dates = array_column($dailyRevenue, 'date');
        array_multisort($dates, $dailyRevenue);
        $dates = array_column($dailyOrders, 'date');
        array_multisort($dates, $dailyOrders);
        $dailyRevenue = json_encode($dailyRevenue);
        $dailyOrders = json_encode($dailyOrders);
        $categoricalSales = json_encode($categoricalSales);

        // calculate times of discount code being used
        $discountCodeUsed = Transaction::where("discount_id", "!=", null)->count();

        // calculate number of customer
        $numCustomer = User::where("role", "customer")->count();
        
        $startDate = Carbon::parse($lastMonthDate)->format('Y-m-d');
        return view('dashboard', compact("startDate", "today", "totalRevenue", "dailyRevenue", "totalCost", "grossProfit",
                "totalOrders", "dailyOrders", "discountCodeUsed", "numCustomer", "categoricalSales")); 
    }
}
