let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
 
menu.onclick=() =>{
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');

}

window.onscroll=() =>{
    menu.classList.remove('bx-x');
  navbar.classList.remove('active');


}
const typed=new Typed('.multiple-text',{

  strings:['Full Stack Developer', 'Software Engineer','Gen-AI Developer'],
  typeSpeed:80,
  backSpeed:80,
  backDelay:1200,
  loop:true,


});

const paragraphTyped = new Typed('#typed-paragraph', {
  strings: [
    "I build responsive and user-focused web applications.",
    "I enjoy solving problems and turning ideas into functional solutions.",
    "I am continuously improving my skills in Full Stack Development.",
    "I love learning new technologies and building real-world projects."
  ],
  typeSpeed: 30,
  backSpeed: 15,
  backDelay: 1800,
  startDelay: 500,
  loop: true,

  showCursor: true,
  cursorChar: '▌'
});