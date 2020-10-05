 function validate(){
     var itemname=document.getElementById("name").value;
     var itemprice=document.getElementById("price").value;
     var itemdate=document.getElementById("dateOfLaunch").value;
     var itemCategory=document.getElementById("category").value;
     if (itemname == ""){
         alert("Title is required");
     }
     if (itemprice == ""){
         alert("Price is required");
     }
     if (itemdate == ""){
         alert("Date of launch is required");
     }
     if (itemCategory == ""){
         alert("Category is required");
     }
 }
function deleted(){
    alert("deleted");
    return false;
}