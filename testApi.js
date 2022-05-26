
const sheetID =  '1tkUIhpOCoxfjx4gMUuIpSZEUHG50ms1mMt7879_w-rQ';
const baseURL =  `https://docs.google.com/spreadsheets/d/${sheetID}/edit#gid=0`;
const sheetName = 'Slide';
const qu = 'SELECT A'
const query = encodeURIComponent(qu);
const url =  `${baseURL}&sheet=${sheetName}&tq=${query}`;
const data = [];
document.addEventListener('DOMContentLoaded',init);

const output = document.querySelector('.output');

function init(){
    fetch(url)
        .then(res => res.text())
        .then(rep => console.log(rep) ) 
        // .then(rep => {const jsDATA = JSON.parse(rep.substring)} ) 
    }