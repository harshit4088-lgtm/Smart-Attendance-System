let students = JSON.parse(localStorage.getItem("data")) || [];

function addStudent(){
let n=name.value,r=roll.value,a=att.value;
if(!n||!r||!a) return alert("Fill all");

students.push({name:n,roll:r,att:parseInt(a)});
save();

name.value="";
roll.value="";
att.value="";
}

function save(){
localStorage.setItem("data",JSON.stringify(students));
render();
}

function render(){
let html="";
students.forEach(s=>{
html+=`
<tr>
<td>${s.name}</td>
<td>${s.roll}</td>
<td>${s.att}%</td>
<td><button onclick="del('${s.roll}')">❌</button></td>
</tr>`;
});
data.innerHTML=html;
}

function del(r){
students=students.filter(s=>s.roll!==r);
save();
}

render();

// PWA
if ("serviceWorker" in navigator) {
navigator.serviceWorker.register("sw.js");
}
