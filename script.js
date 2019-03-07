let n = prompt("Enter a number of divisions. Between 20 and 1000 is best.");
let percWidth = 100 / n;
let divInnerHTML = "";
for (i=0;i<n;i++) {
  divInnerHTML += `<div class="column" width="${100/n}%" id="${i}">&nbsp;</div>`;
}
let t = 0;
let increment = 4*Math.PI/n;
document.querySelector('#mainContainer').innerHTML = divInnerHTML;
let divCollection = document.querySelectorAll('.column');
function updateColorArray (object) {
    let x = parseInt(object.id);
    object.style.background = `rgba(255,${255*Math.abs(Math.sin((4*x*Math.PI/n)+t))},${255*Math.abs(Math.sin((4*x*Math.PI/n)+t))},${Math.abs(Math.cos((4*x*Math.PI/n)+t))})`;
}
function myLoop () {
  setTimeout(function () {
    divCollection.forEach(updateColorArray);
    t += increment;
    myLoop();
  }
  ,100)
}
myLoop();
