const form=document.getElementById('form');
var inputData=document.getElementById('num');
var select=document.getElementById('select');
var label=document.getElementById('label');



form.addEventListener('submit',()=>{
    event.preventDefault();
   var data=inputData.value;
   index=select.options.selectedIndex;
   myvalue=select.options[index].value;
   if(myvalue=='cel'){
    var celData=Math.round((data-32)/1.8000);
    label.innerHTML=`Temperature in Celcius ${celData}`


   }
   else{
    var celData=Math.round((data*1.8)+32);
    label.innerHTML=`Temperature in Fahrenheit ${celData}`



   }
   



    
})
 
