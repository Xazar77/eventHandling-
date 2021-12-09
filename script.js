'use strict';

const btn = document.getElementById('btn'),
    square = document.getElementById('square'),
    btnSmoll = document.getElementById('e_btn');
let text = document.getElementById('text'),
    range = document.getElementById('range'),
    rangeSpan = document.getElementById('range-span'),
    circle = document.getElementById('circle');
    
console.log(circle);

btn.addEventListener('click', (e) => {
    e.preventDefault();
    square.style.backgroundColor = text;
    document.getElementById('text').value = '';
    btnSmoll.style.display = 'none';
});

text.addEventListener('input', (e) => {
    e.preventDefault();
    text = e.target.value;
});


range.addEventListener('input', (e) => {
    e.preventDefault();
    rangeSpan.textContent = e.target.value;
    circle.style.height = rangeSpan.textContent + '%';
    circle.style.width = rangeSpan.textContent + '%';    
});


