var pic = document.getElementById("pic");

var temp = [14.2, 16.4, 11.9, 15.2, 18.5, 22.1,19.4,25.1,23.4,18.1,22.6,17.2];
var sales = [215,325,185,332,406,522,412,614,544,421,445,408];

var display = function(){
    
    var i;
    for(i = 0; i < temp.length; i++){
	var point = document.createElementNS("http://www.w3.org/2000/svg","circle");
	point.setAttribute("r",10);
	point.setAttribute("fill", "lightsteelblue");
	pic.appendChild(point);
    }

    var points = d3.selectAll("circle").data(temp);
    points.attr("cx", function(d){return d*15;});
    points.data(sales);
    points.attr("cy", function(d){return d-150;});
}


display();

var axisScale = d3.scale.linear()
                        .domain([0,500])
                        .range([0,500]);

var xAxis = d3.svg.axis()
    .scale(axisScale);

var xAxisGroup = d3.select("body").append("g").call(xAxis);

//typeof(xAxis);
