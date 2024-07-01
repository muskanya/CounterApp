const btnDecrement = document.querySelector('#decrement');
const btnReset = document.querySelector('#reset');
const btnIncrement = document.querySelector('#increment');

const maintitle=document.querySelector('#title');
let curValue = 0;


btnIncrement.addEventListener('click',() =>{
    curValue =  curValue +1;
    maintitle.textContent = curValue; 
});


btnDecrement.addEventListener('click',() =>{
   
    curValue =  curValue - 1;
    maintitle.textContent = curValue; 
});


btnReset.addEventListener('click',() =>{
   
    curValue = 0;
    maintitle.textContent = curValue; 
});


