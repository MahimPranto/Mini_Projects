function calculateBMI(){
    const weight=document.getElementById('weightInput').value;
    const height=document.getElementById('heightInput').value
    const bmi= (weight/ (height/100 * height/100)).toFixed(2);

    if (weight<=0 || height<=0)
        document.querySelector('.result').innerHTML ="Invalid Input";
    else if(bmi<18.5)
        document.querySelector('.result').innerHTML ="Your BMI is: "+bmi+" (Underweight)";
    else if (bmi>=18.5 && bmi<25)
        document.querySelector('.result').innerHTML ="Your BMI is: "+bmi+" (Healthy)";
    else if (bmi>=25 && bmi<=29.9)
        document.querySelector('.result').innerHTML ="Your BMI is: "+bmi+" (Overweight)";
    else
        document.querySelector('.result').innerHTML ="Your BMI is: "+bmi+" (Obese)";

}

document.getElementById('calculateBtn').addEventListener('click', calculateBMI);