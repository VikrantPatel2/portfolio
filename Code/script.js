
// app.js


const changedata = [
  "Frontend Developer",
  "Seeking Backend Development",
  "Traveller",
  "Designer",
];
let i = 0;

setInterval(() => {
  document.getElementById("change").textContent = changedata[i];
  i = (i + 1) % changedata.length;
}, 1000);
