var math = 87;
var science = 91;
var computer = .89;
var mapeh =-92;
var english = 85;
var average = (math + science + computer + mapeh + english) / 5;
var averageSpan = document.getElementById("grade");
averageSpan.textContent = average.toFixed(1);