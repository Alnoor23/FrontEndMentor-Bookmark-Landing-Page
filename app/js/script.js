const hamburger = document.querySelector('#hamburger');
const hamburger1 = document.querySelector('.header__toggle');
const menu = document.querySelector('.header__menu');
const logo = document.querySelector('.header__logo');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

const ts1 = document.querySelector('#ts1');
const ts2 = document.querySelector('#ts2');
const ts3 = document.querySelector('#ts3');
const tab1 = document.querySelector('#tab1');
const tab2 = document.querySelector('#tab2');
const tab3 = document.querySelector('#tab3');

const q1 = document.querySelector('#q1');
const q2 = document.querySelector('#q2');
const q3 = document.querySelector('#q3');
const q4 = document.querySelector('#q4');

const a1 = document.querySelector('.ans1');
const a2 = document.querySelector('.ans2');
const a3 = document.querySelector('.ans3');
const a4 = document.querySelector('.ans4');

const EmailSubmitBtn = document.querySelector('#text-submit');

hamburger.addEventListener('click', function(){
    if(header.classList.contains('open')){ // close hamburger menu
        header.classList.remove('open');
        body.classList.remove('noscroll');
        logo.classList.remove('to-white');
        hamburger1.classList.remove('to-white');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');    
        });
    }
    else { // open hamburger menu
        body.classList.add('noscroll');
        header.classList.add('open');
        logo.classList.add('to-white');
        hamburger1.classList.add('to-white');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});


ts1.addEventListener('click', function(){
    ts1.classList.add('active');
    tab1.classList.add('visible');
    ts2.classList.remove('active');
    ts3.classList.remove('active');
    tab2.classList.remove('visible');
    tab3.classList.remove('visible');
});
ts2.addEventListener('click', function(){
    ts2.classList.add('active');
    tab2.classList.add('visible');
    ts1.classList.remove('active');
    ts3.classList.remove('active');
    tab1.classList.remove('visible');
    tab3.classList.remove('visible');
});
ts3.addEventListener('click', function(){
    ts3.classList.add('active');
    tab3.classList.add('visible');
    ts1.classList.remove('active');
    ts2.classList.remove('active');
    tab1.classList.remove('visible');
    tab2.classList.remove('visible');
});


q1.addEventListener('click', function(){
    if(a1.classList.contains('expand')) {
        a1.classList.remove('expand');
        a1.classList.add('collapse');
        document.querySelector('.que-btn1').style.stroke = "#5267DF";
        document.querySelector('.que-btn1').setAttribute("transform", "rotate(0)");
    } else {
        document.querySelector('.que-btn1').setAttribute("transform", "rotate(180)");
        document.querySelector('.que-btn1').style.stroke = "#e45858";
        a1.classList.add('expand');
        a1.classList.remove('collapse');
    }
});
q2.addEventListener('click', function(){
    if(a2.classList.contains('expand')) {
        a2.classList.add('collapse');
        a2.classList.remove('expand');
        document.querySelector('.que-btn2').style.stroke = "#5267DF";
        document.querySelector('.que-btn2').setAttribute("transform", "rotate(0)");
    } else {
        document.querySelector('.que-btn2').setAttribute("transform", "rotate(180)");
        document.querySelector('.que-btn2').style.stroke = "#e45858";
        a2.classList.add('expand');
        a2.classList.remove('collapse');
    }
});
q3.addEventListener('click', function(){
    if(a3.classList.contains('expand')) {
        a3.classList.add('collapse');
        a3.classList.remove('expand');
        document.querySelector('.que-btn3').style.stroke = "#5267DF";
        document.querySelector('.que-btn3').setAttribute("transform", "rotate(0)");
    } else {
        document.querySelector('.que-btn3').setAttribute("transform", "rotate(180)");
        document.querySelector('.que-btn3').style.stroke = "#e45858";
        a3.classList.add('expand');
        a3.classList.remove('collapse');
    }
});
q4.addEventListener('click', function(){
    if(a4.classList.contains('expand')) {
        a4.classList.add('collapse');
        a4.classList.remove('expand');
        document.querySelector('.que-btn4').style.stroke = "#5267DF";
        document.querySelector('.que-btn4').setAttribute("transform", "rotate(0)");
    } else {
        document.querySelector('.que-btn4').setAttribute("transform", "rotate(180)");
        document.querySelector('.que-btn4').style.stroke = "#e45858";
        a4.classList.add('expand');
        a4.classList.remove('collapse');
    }
});

function ValidateEmail() {
    const email = document.getElementById('text').value;
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const ErrBack = document.querySelector('.red-cover');
    const Errtext = document.querySelector('.form--error');
    const ErrIcon = document.querySelector('.icon-error');

    if(validRegex.test(email)){
        ErrBack.style.backgroundColor = "inherit";
        Errtext.style.opacity = 0;
        ErrIcon.style.opacity = 0;
    } else {
        ErrBack.style.backgroundColor = "#e04040";
        Errtext.style.opacity = 1;
        ErrIcon.style.opacity = 1;
    }
}

EmailSubmitBtn.addEventListener('click', function() {
    ValidateEmail();
});
