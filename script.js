let students = JSON.parse(localStorage.getItem("data")) || [];

// Add student
function addStudent(){
let n = document.getElementById("name").value;
let r = document.getElementById("roll").value;
let a = document.getElementById("att").value;

if(!n || !r || !a){
alert("Fill all fields");
return;
}

students.push({
name: n,
roll: r,
att: parseInt(a)
});

save();

// clear input
document.getElementById("name").value="";
document.getElementById("roll").value="";
document.getElementById("att").value="";
}

// Save + render
function save(){
localStorage.setItem("data", JSON.stringify(students));
render();
}

// Render
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

// Delete
function del(r){
students = students.filter(s => s.roll !== r);
save();
}

// First load
render();

// PWA fix
if ("serviceWorker" in navigator) {
navigator.serviceWorker.register("sw.js");
}
