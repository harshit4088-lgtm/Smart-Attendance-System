let students = JSON.parse(localStorage.getItem("data")) || [];

// ADD STUDENT
function addStudent() {

let n = document.getElementById("name").value;
let r = document.getElementById("roll").value;
let a = document.getElementById("att").value;

console.log(n, r, a); // 🔥 debug

if(n === "" || r === "" || a === ""){
alert("Fill all fields");
return;
}

students.push({
name: n,
roll: r,
att: parseInt(a)
});

localStorage.setItem("data", JSON.stringify(students));

render();

// clear fields
document.getElementById("name").value = "";
document.getElementById("roll").value = "";
document.getElementById("att").value = "";
}

// RENDER
function render(){
let html = "";

students.forEach(s=>{
html += `
<tr>
<td>${s.name}</td>
<td>${s.roll}</td>
<td>${s.att}%</td>
<td><button onclick="del('${s.roll}')">❌</button></td>
</tr>`;
});

document.getElementById("data").innerHTML = html;
}

// DELETE
function del(r){
students = students.filter(s => s.roll !== r);
localStorage.setItem("data", JSON.stringify(students));
render();
}

// LOAD
render();

// PWA
if ("serviceWorker" in navigator) {
navigator.serviceWorker.register("sw.js");
}
