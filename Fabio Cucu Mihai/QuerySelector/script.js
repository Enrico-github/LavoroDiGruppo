document.querySelector('.btn').addEventListener('click', function(){
    document.querySelector('#idp').textContent='buongiorno'; 
    document.querySelector('#idp').style.marginLeft='10%';
    document.querySelector('#idp').style.background='#99ff33';

});
document.querySelector('.btn2').addEventListener('click',function(){
    const myp = document.querySelectorAll('.prova');
    myp.forEach(p=>p.textContent='informatica');
});