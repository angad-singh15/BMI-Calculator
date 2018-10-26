
function resetWeight(){ //resets the weight input
	var resetweight= document.getElementById('weight');
	resetweight.value = ''; }

function resetHeight(){ //resets the weight input
	var resetheight = document.getElementById('height');
	resetheight.value = ''; 
}

function check(){ //checks if the input is a valid number
	var weight = document.getElementById('weight').value;
	if(isNaN(weight)){
		alert("Enter a number only!");
		return false;
	}
}

function checkSelection(){ //changes the selection 
	document.getElementById('typeH').addEventListener('change', function(e) {
	var el = e.target;
    // Mark all of them as hidden
    for(var i = 0; i < el.options.length; i++) {
      var spanEl = document.getElementById(el.options[i].value);
      spanEl.className = 'hidden';
      // Reset all of the input options
      var inputs = spanEl.querySelectorAll('input');
      for(var j = 0; j < inputs.length; j++) {
        inputs[j].value = '';
      }
    }
    // Show the one that was selected
    document.getElementById(el.options[el.selectedIndex].value).className = '';
  	
   });
}

function calculateBMI(){ 
	var weight= document.getElementById('weight').value;
	var height= document.getElementById('height').value;
	var height2= document.getElementById('height2').value;
	var typeW = document.getElementById("type").value;
	var typeH = document.getElementById("typeH").value;

	//check if weight is in lbs or kg
	if(typeW === "lbs"){
	weight = weight * 0.45;
	}	
	else if(typeW === "kg"){
		weight = weight;
	}
	if(typeH === "feet"){
		height = height * 0.3048;
	height2 = height2 * 0.0254;
	var totalheight = height + height2;
	}
	else if (typeH === "cm"){
		totalheight = height * 100;
			}
			
	var total = weight/ (totalheight * totalheight);
	roundToTwo(total);
	document.getElementById('result').value = roundToTwo(total);
}

function bmiConclusion(){ //concludes result according to BMI
	var tot = document.getElementById('result').value ;
	if(tot < 18.5){ document.getElementById('conclusion').innerHTML = "You are underweight";}
	else if(tot >= 18.5 && tot <=24.9){ document.getElementById('conclusion').innerHTML = "You are in Normal weight"; }
	else if(tot >= 25 && tot <=29.9){ document.getElementById('conclusion').innerHTML = "You are overweight"; }
	else if(tot>=30){ document.getElementById('conclusion').innerHTML = "You are obese"; }
}

function roundToTwo(num) {    
return +(Math.round(num + "e+2")  + "e-2");
}

//inserting the image 
var img = document.createElement("img");
img.src = "bmi.png";
var src = document.getElementById("x");

src.appendChild(img);

function change(){
	var element = document.getElementById("optionft"); // notice the change
	element.parentNode.removeChild(element);

}

