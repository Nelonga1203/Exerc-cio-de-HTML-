var num1 = 3
 var num2 = 4

 function mult(num1,num2){

    let mult=num1*num2;  
    document.getElementById("mult").textContent = mult;
    return mult;
    
 }

 mult(num1,num2);

 function soma(num1,num2){
    let soma=num1+num2;
    document.getElementById("soma").textContent = soma;
    return soma;
 }
  soma(num1,num2);

  function sub(num1,num2){
    let sub=num1-num2;
    document.getElementById("sub").textContent = sub;
    return sub;
  }
   sub(num1,num2);

   function div(num1,num2){
    let div=num1/num2
    document.getElementById("div").textContent = div;
   }
   div(num1,num2)
  

