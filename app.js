/* Generate HTML code using JavaScript */
const body = document.querySelector('body');

// Background image
const div_img = document.createElement('div');
div_img.classList.add('image');

// Container
// Create a container
const div_cont = document.createElement('div');
div_cont.classList.add('container');

// Header
const header = document.createElement('header');

const header_img = document.createElement('img');
header_img.setAttribute('src', './assets/images/icon-star.svg');
header_img.setAttribute('alt', 'icon-start');

const header_h1 = document.createElement('h1');
header_h1.textContent = 'FAQs';

header.appendChild(header_img); // add to header
header.appendChild(header_h1); // add to header

// Main
const main = document.createElement('main');

// Question 1 - Answer 1
const div_ques1 = document.createElement('div');
div_ques1.classList.add('question');

const ques1_h4 = document.createElement('h4');
ques1_h4.textContent = ' What is Frontend Mentor, and how will it help me?';

const ques1_img_plus = document.createElement('img');
ques1_img_plus.setAttribute('src', './assets/images/icon-plus.svg');
ques1_img_plus.setAttribute('alt', 'icon-plus');
ques1_img_plus.classList.add('plus');

const ques1_img_minus = document.createElement('img');
ques1_img_minus.setAttribute('src', './assets/images/icon-minus.svg');
ques1_img_minus.setAttribute('alt', 'icon-minus');
ques1_img_minus.classList.add('minus', 'hidden');

div_ques1.appendChild(ques1_h4);
div_ques1.appendChild(ques1_img_plus);
div_ques1.appendChild(ques1_img_minus);

const div_ans1 = document.createElement('div');
div_ans1.classList.add('answer', 'hidden');
div_ans1.textContent = `Frontend Mentor offers realistic coding challenges to help developers improve their 
                        frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
                        all levels and ideal for portfolio building.`;

main.appendChild(div_ques1);
main.appendChild(div_ans1);

// Question 2 - Answer 2
const div_ques2 = document.createElement('div');
div_ques2.classList.add('question');

const ques2_h4 = document.createElement('h4');
ques2_h4.textContent = 'Is Frontend Mentor free?';

const ques2_img_plus = document.createElement('img');
ques2_img_plus.setAttribute('src', './assets/images/icon-plus.svg');
ques2_img_plus.setAttribute('alt', 'icon-plus');
ques2_img_plus.classList.add('plus');

const ques2_img_minus = document.createElement('img');
ques2_img_minus.setAttribute('src', './assets/images/icon-minus.svg');
ques2_img_minus.setAttribute('alt', 'icon-minus');
ques2_img_minus.classList.add('minus', 'hidden');

div_ques2.appendChild(ques2_h4);
div_ques2.appendChild(ques2_img_plus);
div_ques2.appendChild(ques2_img_minus);

const div_ans2 = document.createElement('div');
div_ans2.classList.add('answer', 'hidden');
div_ans2.textContent = `Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
                        option providing access to a range of projects suitable for all skill levels.`;

main.appendChild(div_ques2);
main.appendChild(div_ans2);

// Question 3 - Answer 3
const div_ques3 = document.createElement('div');
div_ques3.classList.add('question');

const ques3_h4 = document.createElement('h4');
ques3_h4.textContent = 'Can I use Frontend Mentor projects in my portfolio?';

const ques3_img_plus = document.createElement('img');
ques3_img_plus.setAttribute('src', './assets/images/icon-plus.svg');
ques3_img_plus.setAttribute('alt', 'icon-plus');
ques3_img_plus.classList.add('plus');

const ques3_img_minus = document.createElement('img');
ques3_img_minus.setAttribute('src', './assets/images/icon-minus.svg');
ques3_img_minus.setAttribute('alt', 'icon-minus');
ques3_img_minus.classList.add('minus', 'hidden');

div_ques3.appendChild(ques3_h4);
div_ques3.appendChild(ques3_img_plus);
div_ques3.appendChild(ques3_img_minus);

const div_ans3 = document.createElement('div');
div_ans3.classList.add('answer', 'hidden');
div_ans3.textContent = `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
                        way to showcase your skills to potential employers!`;

main.appendChild(div_ques3);
main.appendChild(div_ans3);

// Question 4 - Answer 4
const div_ques4 = document.createElement('div');
div_ques4.classList.add('question');

const ques4_h4 = document.createElement('h4');
ques4_h4.textContent = "How can I get help if I'm stuck on a challenge?";

const ques4_img_plus = document.createElement('img');
ques4_img_plus.setAttribute('src', './assets/images/icon-plus.svg');
ques4_img_plus.setAttribute('alt', 'icon-plus');
ques4_img_plus.classList.add('plus');

const ques4_img_minus = document.createElement('img');
ques4_img_minus.setAttribute('src', './assets/images/icon-minus.svg');
ques4_img_minus.setAttribute('alt', 'icon-minus');
ques4_img_minus.classList.add('minus', 'hidden');

div_ques4.appendChild(ques4_h4);
div_ques4.appendChild(ques4_img_plus);
div_ques4.appendChild(ques4_img_minus);

const div_ans4 = document.createElement('div');
div_ans4.classList.add('answer', 'hidden');
div_ans4.textContent = `The best place to get help is inside Frontend Mentor's Discord community. There's a help 
                        channel where you can ask questions and seek support from other community members.`;

main.appendChild(div_ques4);
main.appendChild(div_ans4);

div_cont.appendChild(header); // add to container
div_cont.appendChild(main); // add to container

body.appendChild(div_img); // add to body
body.appendChild(div_cont); // add to body

/* Event */
const question_lst = document.querySelectorAll('.container main .question')
const plus_lst = document.querySelectorAll('.container main .plus');
const minus_lst = document.querySelectorAll('.container main .minus');
const answer_lst = document.querySelectorAll('.container main .answer');

for (let i = 0; i < question_lst.length; i++)
{
    question_lst[i].addEventListener('click', function() {
        
        plus_lst[i].classList.toggle('hidden');
        minus_lst[i].classList.toggle('hidden');
        answer_lst[i].classList.toggle('hidden');
    })
}