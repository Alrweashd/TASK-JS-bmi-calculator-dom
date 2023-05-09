function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  
  let bmi = weight/(heightInMeter*heightInMeter);
  alert("BMI of: " + bmi);

 

  switch(true){
    case bmi<=18.5:
      alert("Which means that you are in: " + /*bmi +*/ " underweight.")
      break;

    case bmi>=18.5 && bmi <=24.9:
      alert("Which means that you are in: " + /*bmi +*/ " Healthy Weight")
      break;
    case bmi>=25 && bmi <=29.9:
        alert("Which means that you are in: " + /*bmi +*/ " Overweight")
        break;
    case bmi>=30:
          alert("Which means that you are in: " + /*bmi +*/ " Obesity")
          break;
    
  }
  // changing

  // if ((age >=19 && age <=25)&&(bmi>=19 && bmi<= 24)){
  //   alert("Healthy");
  // } else if ((age >=25 && age <=34)&&(bmi>=20 && bmi<= 25)){
  //   alert("Healthy");
  // }else if ((age >=35 && age <=44)&&(bmi>=21 && bmi<= 26)){
  //   alert("Healthy");
  // }else if ((age >=45 && age <=54)&&(bmi>=22 && bmi<= 27)){
  //   alert("Healthy");
  // }else if ((age >=55 && age <=64)&&(bmi>=23 && bmi<= 28)){
  //   alert("Healthy");
  // }else if ((age >65)&&(bmi>=24 && bmi<= 29)){
  //   alert("Healthy");
  // }else{
  //   alert("Unhealthy");
  // }

  let cond = ( (age >=19 && age <=25)&&(bmi>=19 && bmi<= 24) ||
  (age >=25 && age <=34)&&(bmi>=20 && bmi<= 25) ||
  (age >=35 && age <=44)&&(bmi>=21 && bmi<= 26) ||
  (age >=45 && age <=54)&&(bmi>=22 && bmi<= 27) ||
  (age >=55 && age <=64)&&(bmi>=23 && bmi<= 28) ||
  (age >65)&&(bmi>=24 && bmi<= 29)
  ) ? "Healthy":"Unhealthy";

  alert(cond);

  

}
