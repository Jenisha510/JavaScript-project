let outputScreen=document.querySelector(".output-screen");
function display(num){
    outputScreen.value +=num;
}
function Calculate(){
    try{
        outputScreen.value=eval( outputScreen.value)
    }
    catch(err){
     alert("invalid data");
    }
}
    function Clear(){
        outputScreen.value=" ";
    }
    function Del(){
    outputScreen.value=outputScreen.value.slice(0,-1);
}
