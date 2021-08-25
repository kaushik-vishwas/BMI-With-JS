function getbmivalue(){
var weight = document.getElementById('weight').value;
var height = document.getElementById('height').value;

height = height * 12;
height = height * 0.025;

var newval = weight / Math.pow(height, 2);
newval = Math.round(newval);
document.getElementById('showvalue').value = newval;

   //doctots colclussion
    if(newval>=19 && newval<=25){
        var note = "Congratulations, Your BMI is Under Control";
        document.getElementById('notification').innerHTML = note;
    }
    else if(newval>25){
        var note = "Your BMI is Higher Than Standered, Take Care";
        document.getElementById('notification').innerHTML = note;
    }
    else if(newval<19){
        var note = "Your BMI is Lower Than Standered, Take Care";
        document.getElementById('notification').innerHTML = note;
    }
    else{
        var note = "Please Enter The Requirements To Calculate Your BMI";
        document.getElementById('notification').innerHTML = note;
    }



}
    