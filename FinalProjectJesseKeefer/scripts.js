
var name;
var USERNAME;

function RegisterSession(){
    name= document.getElementById("txtName").value;

    if(name== ""){
        document.getElementById("divError").innerHTML="Please enter a name";
    return;
    }else{
        document.getElementById("divError").innerHTML="";
    }sessionStorage.setItem(USERNAME,name);
    window.location.href="session.html";
}


function SaveSession(){
    sessionStorage.setItem("",);
    sessionStorage.setItem("",);
}

function RetrieveSession(){
    ____=parseFloat(sessionStorage.getItem("__"));

    ____=parseFloat(sessionStorage.getItem("__"));

    document.getElementById("__").innerHTML= ____;
    document.getElementById("__").innerHTML= ____;

    if(sessionStorage.getItem("__")!= null){
        ___=parseFloat(sessionStorage.getItem("__"));
    }else{
        ___=0;
    }
    if(sessionStorage.getItem("__")!= null){
        ___=parseFloat(sessionStorage.getItem("__"));
    }else{
        ___=0;
    }
}


















