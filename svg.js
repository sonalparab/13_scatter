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
    points.attr("cx", function(d){return d*20;});
    points.data(sales);
    points.attr("cy", function(d){return 700 - d;});
}

//Draw points
display();

//Add axes
var svg = d3.select("svg");

//Axes scale
var xscale = d3.scaleLinear().domain([0, 30]).range([0, 600]);
var yscale = d3.scaleLinear().domain([700, 0]).range([0, 700]);

var x_axis = d3.axisBottom().scale(xscale);
var y_axis = d3.axisLeft().scale(yscale);

//Draw axes and move them
svg.append("g").attr("transform", "translate(0, 680)").call(x_axis);
svg.append("g").attr("transform", "translate(30, 0)").call(y_axis);
