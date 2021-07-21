let decreaseBtn = document.getElementById("button__decrease");
let increaseBtn = document.getElementById("button__increase");
let counter = document.getElementById("counter");

let count = 0;

decreaseBtn.addEventListener('click', ()=>{
  if (count > 0 ) count--;
  counter.innerHTML = count;
})

increaseBtn.addEventListener('click', ()=>{
  count ++;
  counter.innerHTML = count;
})