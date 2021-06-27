function changecontent(){
    let x=document.getElementById("Knowmore").style.display="block";
    if(x.style.display=="block")
    {
        x.style.display="none";
    }
    else{
        x.style.display="block";
    }
}
function validation(){
    let x=document.getElementById("nameinput").value;
    let y=document.getElementById("emailinput").value;
    let z=document.getElementById("Batchinput").value;
    if(x=="")
    {
        document.getElementById("name-validation").style.display;
    }
    if(y=="")
    {
        document.getElementById("email-validation").style.display;
    }
    if(z=="")
    {
        document.getElementById("Batch-validation").style.display;
    }
    if((x|| y||z)==""){
        return false;
    }
    
}