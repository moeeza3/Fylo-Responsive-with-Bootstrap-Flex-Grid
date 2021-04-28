 var a;
function  checkmessage(){
     if(a==1)
     {
       document.getElementById("message-me").style.display="flex";
       document.getElementById("email").style.borderColor="red";
      
     
      return a=0;
     }
     else{
       document.getElementById("message-me").style.display="none";
       
       return a=1;
     }
}
var b;
function  checkmessage2(){
  if(b==1)
  {
    
    document.getElementById("emailme").style.borderColor="red";
    document.getElementById("message").style.display="flex";
  
   return b=0;
  }
  else{
  
    document.getElementById("message").style.display="none";
    return b=1;
  }
}








