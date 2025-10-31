setInterval ( () => {
    let h1 = document.querySelector('h1');
    let h2 = document.querySelector('h2');
    let h3 = document.querySelector('h3');
    let tarikh = document.querySelector('.tarikh');
    let moh = document.querySelector('.moh');
    let sal = document.querySelector('.sal');
    h1.innerText = new Date().getHours();
    h2.innerText = new Date().getMinutes();
    h3.innerText = new Date().getSeconds();
    tarikh.innerText = new Date().getDate();
    moh.innerText = new Date().getMonth();
    sal.innerText = new Date().getFullYear();
} , 1000 );