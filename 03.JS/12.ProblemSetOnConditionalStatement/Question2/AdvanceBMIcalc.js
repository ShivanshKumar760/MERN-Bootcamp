function bmiCalculator (weight, height) {
    let bmi=weight/(height**2);
    
    if(bmi<18.5)
    {   bmi=Math.round(bmi);
        return `Your BMI is ${bmi}, so you are underweight.`;
    }
    else if(bmi>18.5&&bmi<(24.9))
    {   bmi=Math.round(bmi);
        return  `Your BMI is ${bmi}, so you have a normal weight.`;
    }
    else if(bmi>(24.9))

    {   Math.round(bmi);
        bmi=bmi.toString();
        return  "Your BMI is "+bmi+", so you are overweight.";
    }
}

const prompt =require('prompt-sync')();
w=prompt("Enter your Weight:");
h=prompt("Enter your height in m:");
console.log(bmiCalculator(w,h));