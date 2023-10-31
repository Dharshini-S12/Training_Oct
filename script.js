function validate(){
    var uname=document.getElementById("uname").value;
    var pword=document.getElementById("pword").value;
    var  confrim_pword=document.getElementById("Confrim_pword").value;
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