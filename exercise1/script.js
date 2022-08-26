// link to form
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");

//Add event submit 
form1.addEventListener("submit" , submitMessage);
form2.addEventListener("submit" , submitMessage2)
//make function
function submitMessage(e) {
e.preventDefault()
 console.log(e.target.value.value)

if (e.target.value.value == ""){
    alert("Write Some Text");
} else {
    const ol = document.getElementById("today");
    const newLi = document.createElement("li");   
    newLi.innerHTML = e.target.value.value;
       ol.appendChild(newLi);
    e.target.value.value = "";
}
}
function submitMessage2(e) {
    e.preventDefault()
     console.log(e.target.value.value)
    
    if (e.target.value.value == ""){
        alert("Write Some Text");
    } else {
        const ol = document.getElementById("today2");
        const newLi = document.createElement("li");   
        newLi.innerHTML = e.target.value.value;
           ol.appendChild(newLi);
        e.target.value.value = "";
    }
    }
