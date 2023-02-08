const { Chart } = require("chart.js");
var canvasElement = document.getElementById("chartDisp");
var config = {
    type:"bar",
    data:{labels:["jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets:[{label:"Income", data:[19770,29926,21500,29023,24486,29245,28474,25398,333953,30650,20149,30613]},
    {label:"Expenses", data:[3438,25382,26737,18685,22691,13706,10402,12039,3411,26110,9971,20821]}]},



}
var chaty = new Chart(canvasElement,config);
