/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/dashboard.js":
/*!***********************************!*\
  !*** ./resources/js/dashboard.js ***!
  \***********************************/
/***/ (() => {

eval("// https://apexcharts.com/javascript-chart-demos/dashboards/modern/\ndocument.addEventListener('DOMContentLoaded', function () {\n  var dailyRevenue = JSON.parse(document.querySelector('#generated-revenue').dataset.daily);\n  var generatedRevenue = parseFloat(document.querySelector('#generated-revenue').dataset.total);\n  Apex.grid = {\n    padding: {\n      right: 0,\n      left: 0\n    }\n  };\n  Apex.dataLabels = {\n    enabled: false\n  }; // Chart variables\n\n  var revenue = {\n    chart: {\n      id: 'sparkline1',\n      group: 'sparklines',\n      type: 'area',\n      height: 160,\n      sparkline: {\n        enabled: true\n      }\n    },\n    stroke: {\n      curve: 'straight'\n    },\n    fill: {\n      opacity: 1\n    },\n    series: [{\n      name: 'Revenue',\n      data: dailyRevenue.map(function (record) {\n        return record.revenue.toFixed(2);\n      })\n    }],\n    labels: dailyRevenue.map(function (record) {\n      return record.date;\n    }),\n    yaxis: {\n      min: 0\n    },\n    xaxis: {\n      type: 'datetime'\n    },\n    colors: ['#DCE6EC'],\n    title: {\n      text: \"RM\".concat(generatedRevenue),\n      offsetX: 30,\n      style: {\n        fontSize: '24px',\n        cssClass: 'apexcharts-yaxis-title'\n      }\n    },\n    subtitle: {\n      text: 'Revenue',\n      offsetX: 30,\n      style: {\n        fontSize: '14px',\n        cssClass: 'apexcharts-yaxis-title'\n      }\n    }\n  }; // Render charts\n\n  new ApexCharts(document.querySelector(\"#generated-revenue\"), revenue).render();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGFzaGJvYXJkLmpzPzg3MmQiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGFpbHlSZXZlbnVlIiwiSlNPTiIsInBhcnNlIiwicXVlcnlTZWxlY3RvciIsImRhdGFzZXQiLCJkYWlseSIsImdlbmVyYXRlZFJldmVudWUiLCJwYXJzZUZsb2F0IiwidG90YWwiLCJBcGV4IiwiZ3JpZCIsInBhZGRpbmciLCJyaWdodCIsImxlZnQiLCJkYXRhTGFiZWxzIiwiZW5hYmxlZCIsInJldmVudWUiLCJjaGFydCIsImlkIiwiZ3JvdXAiLCJ0eXBlIiwiaGVpZ2h0Iiwic3BhcmtsaW5lIiwic3Ryb2tlIiwiY3VydmUiLCJmaWxsIiwib3BhY2l0eSIsInNlcmllcyIsIm5hbWUiLCJkYXRhIiwibWFwIiwicmVjb3JkIiwidG9GaXhlZCIsImxhYmVscyIsImRhdGUiLCJ5YXhpcyIsIm1pbiIsInhheGlzIiwiY29sb3JzIiwidGl0bGUiLCJ0ZXh0Iiwib2Zmc2V0WCIsInN0eWxlIiwiZm9udFNpemUiLCJjc3NDbGFzcyIsInN1YnRpdGxlIiwiQXBleENoYXJ0cyIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFHQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsRCxNQUFNQyxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixRQUFRLENBQUNLLGFBQVQsQ0FBdUIsb0JBQXZCLEVBQTZDQyxPQUE3QyxDQUFxREMsS0FBaEUsQ0FBckI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBR0MsVUFBVSxDQUFDVCxRQUFRLENBQUNLLGFBQVQsQ0FBdUIsb0JBQXZCLEVBQTZDQyxPQUE3QyxDQUFxREksS0FBdEQsQ0FBbkM7QUFFQUMsRUFBQUEsSUFBSSxDQUFDQyxJQUFMLEdBQVk7QUFDVkMsSUFBQUEsT0FBTyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxDQUFUO0FBQVlDLE1BQUFBLElBQUksRUFBRTtBQUFsQjtBQURDLEdBQVo7QUFHQUosRUFBQUEsSUFBSSxDQUFDSyxVQUFMLEdBQWtCO0FBQUVDLElBQUFBLE9BQU8sRUFBRTtBQUFYLEdBQWxCLENBUGtELENBU2xEOztBQUNBLE1BQUlDLE9BQU8sR0FBRztBQUNaQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsRUFBRSxFQUFFLFlBREM7QUFFTEMsTUFBQUEsS0FBSyxFQUFFLFlBRkY7QUFHTEMsTUFBQUEsSUFBSSxFQUFFLE1BSEQ7QUFJTEMsTUFBQUEsTUFBTSxFQUFFLEdBSkg7QUFLTEMsTUFBQUEsU0FBUyxFQUFFO0FBQUVQLFFBQUFBLE9BQU8sRUFBRTtBQUFYO0FBTE4sS0FESztBQVFaUSxJQUFBQSxNQUFNLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFO0FBQVQsS0FSSTtBQVNaQyxJQUFBQSxJQUFJLEVBQUU7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FUTTtBQVVaQyxJQUFBQSxNQUFNLEVBQUUsQ0FBQztBQUNQQyxNQUFBQSxJQUFJLEVBQUUsU0FEQztBQUVQQyxNQUFBQSxJQUFJLEVBQUU3QixZQUFZLENBQUM4QixHQUFiLENBQWlCLFVBQUFDLE1BQU07QUFBQSxlQUFJQSxNQUFNLENBQUNmLE9BQVAsQ0FBZWdCLE9BQWYsQ0FBdUIsQ0FBdkIsQ0FBSjtBQUFBLE9BQXZCO0FBRkMsS0FBRCxDQVZJO0FBY1pDLElBQUFBLE1BQU0sRUFBRWpDLFlBQVksQ0FBQzhCLEdBQWIsQ0FBaUIsVUFBQUMsTUFBTTtBQUFBLGFBQUlBLE1BQU0sQ0FBQ0csSUFBWDtBQUFBLEtBQXZCLENBZEk7QUFlWkMsSUFBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEdBQUcsRUFBRTtBQUFQLEtBZks7QUFnQlpDLElBQUFBLEtBQUssRUFBRTtBQUFFakIsTUFBQUEsSUFBSSxFQUFFO0FBQVIsS0FoQks7QUFpQlprQixJQUFBQSxNQUFNLEVBQUUsQ0FBQyxTQUFELENBakJJO0FBa0JaQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsSUFBSSxjQUFPbEMsZ0JBQVAsQ0FEQztBQUVMbUMsTUFBQUEsT0FBTyxFQUFFLEVBRko7QUFHTEMsTUFBQUEsS0FBSyxFQUFFO0FBQUVDLFFBQUFBLFFBQVEsRUFBRSxNQUFaO0FBQW9CQyxRQUFBQSxRQUFRLEVBQUU7QUFBOUI7QUFIRixLQWxCSztBQXVCWkMsSUFBQUEsUUFBUSxFQUFFO0FBQ1JMLE1BQUFBLElBQUksRUFBRSxTQURFO0FBRVJDLE1BQUFBLE9BQU8sRUFBRSxFQUZEO0FBR1JDLE1BQUFBLEtBQUssRUFBRTtBQUFFQyxRQUFBQSxRQUFRLEVBQUUsTUFBWjtBQUFvQkMsUUFBQUEsUUFBUSxFQUFFO0FBQTlCO0FBSEM7QUF2QkUsR0FBZCxDQVZrRCxDQXdDbEQ7O0FBQ0EsTUFBSUUsVUFBSixDQUFlaEQsUUFBUSxDQUFDSyxhQUFULENBQXVCLG9CQUF2QixDQUFmLEVBQTZEYSxPQUE3RCxFQUFzRStCLE1BQXRFO0FBQ0QsQ0ExQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2FwZXhjaGFydHMuY29tL2phdmFzY3JpcHQtY2hhcnQtZGVtb3MvZGFzaGJvYXJkcy9tb2Rlcm4vXHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBjb25zdCBkYWlseVJldmVudWUgPSBKU09OLnBhcnNlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnZW5lcmF0ZWQtcmV2ZW51ZScpLmRhdGFzZXQuZGFpbHkpO1xyXG4gIGNvbnN0IGdlbmVyYXRlZFJldmVudWUgPSBwYXJzZUZsb2F0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnZW5lcmF0ZWQtcmV2ZW51ZScpLmRhdGFzZXQudG90YWwpO1xyXG5cclxuICBBcGV4LmdyaWQgPSB7XHJcbiAgICBwYWRkaW5nOiB7IHJpZ2h0OiAwLCBsZWZ0OiAwIH1cclxuICB9XHJcbiAgQXBleC5kYXRhTGFiZWxzID0geyBlbmFibGVkOiBmYWxzZSB9XHJcbiAgXHJcbiAgLy8gQ2hhcnQgdmFyaWFibGVzXHJcbiAgdmFyIHJldmVudWUgPSB7XHJcbiAgICBjaGFydDoge1xyXG4gICAgICBpZDogJ3NwYXJrbGluZTEnLFxyXG4gICAgICBncm91cDogJ3NwYXJrbGluZXMnLFxyXG4gICAgICB0eXBlOiAnYXJlYScsXHJcbiAgICAgIGhlaWdodDogMTYwLFxyXG4gICAgICBzcGFya2xpbmU6IHsgZW5hYmxlZDogdHJ1ZSB9LFxyXG4gICAgfSxcclxuICAgIHN0cm9rZTogeyBjdXJ2ZTogJ3N0cmFpZ2h0JyB9LFxyXG4gICAgZmlsbDogeyBvcGFjaXR5OiAxIH0sXHJcbiAgICBzZXJpZXM6IFt7XHJcbiAgICAgIG5hbWU6ICdSZXZlbnVlJyxcclxuICAgICAgZGF0YTogZGFpbHlSZXZlbnVlLm1hcChyZWNvcmQgPT4gcmVjb3JkLnJldmVudWUudG9GaXhlZCgyKSksXHJcbiAgICB9XSxcclxuICAgIGxhYmVsczogZGFpbHlSZXZlbnVlLm1hcChyZWNvcmQgPT4gcmVjb3JkLmRhdGUpLFxyXG4gICAgeWF4aXM6IHsgbWluOiAwIH0sXHJcbiAgICB4YXhpczogeyB0eXBlOiAnZGF0ZXRpbWUnIH0sXHJcbiAgICBjb2xvcnM6IFsnI0RDRTZFQyddLFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgdGV4dDogYFJNJHtnZW5lcmF0ZWRSZXZlbnVlfWAsXHJcbiAgICAgIG9mZnNldFg6IDMwLFxyXG4gICAgICBzdHlsZTogeyBmb250U2l6ZTogJzI0cHgnLCBjc3NDbGFzczogJ2FwZXhjaGFydHMteWF4aXMtdGl0bGUnIH1cclxuICAgIH0sXHJcbiAgICBzdWJ0aXRsZToge1xyXG4gICAgICB0ZXh0OiAnUmV2ZW51ZScsXHJcbiAgICAgIG9mZnNldFg6IDMwLFxyXG4gICAgICBzdHlsZTogeyBmb250U2l6ZTogJzE0cHgnLCBjc3NDbGFzczogJ2FwZXhjaGFydHMteWF4aXMtdGl0bGUnICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFJlbmRlciBjaGFydHNcclxuICBuZXcgQXBleENoYXJ0cyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dlbmVyYXRlZC1yZXZlbnVlXCIpLCByZXZlbnVlKS5yZW5kZXIoKTtcclxufSlcclxuIl0sImZpbGUiOiIuL3Jlc291cmNlcy9qcy9kYXNoYm9hcmQuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/dashboard.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/dashboard.js"]();
/******/ 	
/******/ })()
;