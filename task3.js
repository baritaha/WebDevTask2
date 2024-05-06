
const sgin_in_btn=document.querySelector('#Sgin-In-btn');
const sgin_up_btn=document.querySelector('#Sgin-Up-btn');
const container=document.querySelector('.container');

sgin_up_btn.addEventListener('click',()=>{
   container.classList.add("sgin-up-mode");  
});
sgin_in_btn.addEventListener('click', () => {
    container.classList.remove("sgin-up-mode")  ;    
});
//alert("the sound background will play  when the page is loaded");
