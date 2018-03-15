var pic = document.getElementById("pic");
var switchButt = document.getElementById("switch");
var country = document.getElementById("country");
var isGermany = true;

var temp = [14.2, 16.4, 11.9, 15.2, 18.5, 22.1,19.4,25.1,23.4,18.1,22.6,17.2];
var sales = [215,325,185,332,406,522,412,614,544,421,445,408];

var display = function(){
    var gold = document.createElementNS("http://www.w3.org/2000/svg","circle");
    gold.setAttribute("cx", 100);
    gold.setAttribute("cy", 100);
    gold.setAttribute("r",10);
    gold.setAttribute("fill", "#FFD700");
    
    var i;
    for(i = 0; i < temp.length; i++){
	var point = document.createElementNS("http://www.w3.org/2000/svg","circle");
	point.setAttribute("r",10);
	point.setAttribute("fill", "lightsteelblue");
	pic.appendChild(point);
    }
    
    pic.appendChild(gold);
    pic.appendChild(silver);
    pic.appendChild(bronze);
}

var medalize = function(e){
    var medals;
    if(isGermany){
	medals = d3.selectAll("circle").data(Germany);
    }
    else{
	medals = d3.selectAll("circle").data(Canada);
    }
    medals.attr("r", function(d){return d*5;});
}

var switchFxn = function(e){
    isGermany = !isGermany;
    if(isGermany)
	country.innerHTML = "Germany";
    else
	country.innerHTML = "Canada";
    medalize();
}

switchButt.addEventListener("click", switchFxn);

display();
medalize();
