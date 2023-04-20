const subtractBtn = document.querySelector(".btn1");
const resetBtn = document.querySelector(".btn2");
const addBtn = document.querySelector(".btn3");

subtractBtn.addEventListener("click", subtract);
resetBtn.addEventListener("click", reset);
addBtn.addEventListener("click", add);

let sum=0;

function subtract(){
    document.querySelector(".counter").innerHTML--;
}
function add(){
    document.querySelector(".counter").innerHTML++;
}
function reset(){
    document.querySelector(".counter").innerHTML=0;
}


const btn1=document.querySelector(".btn1");
const btn2=document.querySelector(".btn2");
const btn3=document.querySelector(".btn3");
btn1.addEventListener("mouseover", () => {
    btn1.style.backgroundColor = "yellow";
    btn1.style.cursor="pointer";
});
btn1.addEventListener("mouseout", () => {
    btn1.style.backgroundColor = "red";
});

btn2.addEventListener("mouseover", () => {
    btn2.style.backgroundColor = "yellow";
    btn2.style.cursor="pointer";
});
btn2.addEventListener("mouseout", () => {
    btn2.style.backgroundColor = "lightblue";
});

btn3.addEventListener("mouseover", () => {
    btn3.style.backgroundColor = "yellow";
    btn3.style.cursor="pointer";
});
btn3.addEventListener("mouseout", () => {
    btn3.style.backgroundColor = "lawngreen";
});