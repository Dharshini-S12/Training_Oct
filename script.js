function validate(){
    var uname=document.getElementById("uname").value;
    var pword=document.getElementById("pword").value;
    var  confrim_pword=document.getElementById("Confrim_pword").value;
    var x= uname.length();
    if(x<5){
        alert("more than")
    }
   

    if(pword==confrim_pword){
        document.getElementById("success").innerHTML='<font color="green"></font>';
    }
    else{
        document.getElementById("success").innerHTML='<font color="red">*Enter correct password</font>';
    }
}
function fn()
{
    var checked=document.getElementById("check").checked;
    var pwd=document.getElementById("pword");
    if(checked)
    {
        //show
        pwd.setAttribute("type","text");
    }else{
        //hide
        pwd.setAttribute("type","password");
    }
}
function fn1(){
    var t1=document.getElementById("t1").value;
    if(t1!=null){
        t1.style.backgroundColor="yellow";
    }
}