const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value=== ""){
        alert("write something");

    }
    else{
       
        let li = document.createElement("li");
        let ttext = document.createElement("div");
        listContainer.appendChild(li);
        ttext.innerHTML=inputBox.value;
       
        let check = document.createElement("input");
        check.type= "checkbox";
        check.id="check";
        // li.innerText = inputBox.value;
        li.appendChild(check);
        li.appendChild(ttext);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);   

    }
    inputBox.value="";
    saveData()
}


listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "INPUT"){
        e.target.parentElement.classList.toggle("checked");
        saveData()

    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();


const today = new Date();
const options = {year:'numeric',month:'long',day:'numeric',weekday:'long'}
const formattedDate = new Intl.DateTimeFormat('en-us',options).format(today)
document.querySelector(".heading").innerText=formattedDate;
console.log(today);

timeNow();
function timeNow(){
    var now = new Date();
    var hours = String(now.getHours()).padStart(2,"0");
    var minutes = String(now.getMinutes()).padStart(2,"0");
    var seconds = String(now.getSeconds()).padStart(2,"0");
    const ampm = hours >=12 ? 'PM':'AM';
    hours = hours % 12;
    hours = hours ? hours :12;

    document.querySelector(".clock").innerText =`${hours}:${minutes}:${seconds} ${ampm}` ;

    setTimeout(timeNow,1000);


}