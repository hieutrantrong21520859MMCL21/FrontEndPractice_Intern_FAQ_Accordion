/* Generate HTML code using JavaScript */
const body = document.querySelector("body");

// Background image
const div_img = document.createElement("div");
div_img.classList.add("image");

// Container
// Create a container
const div_cont = document.createElement("div");
div_cont.classList.add("container");

// Header
const header = document.createElement("header");

const header_img = document.createElement("img");
header_img.setAttribute("src", "./assets/images/icon-star.svg");
header_img.setAttribute("alt", "icon-start");

const header_h1 = document.createElement("h1");
header_h1.textContent = "FAQs";

header.appendChild(header_img); // add to header
header.appendChild(header_h1); // add to header

// Main
const main = document.createElement("main");

const data = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer: `Frontend Mentor offers realistic coding challenges to help developers improve their 
                         frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
                         all levels and ideal for portfolio building.`,
  },
  {
    question: "Is Frontend Mentor free?",
    answer: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
                         option providing access to a range of projects suitable for all skill levels.`,
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
                         way to showcase your skills to potential employers!`,
  },
  {
    question: "How can I get help if I'm stuck on a challenge?",
    answer: `The best place to get help is inside Frontend Mentor's Discord community. There's a help 
                         channel where you can ask questions and seek support from other community members.`,
  },
];

data.forEach((item) => {

  const div_ques = document.createElement("div");
  div_ques.classList.add("question");

  const ques_h4 = document.createElement("h4");
  ques_h4.textContent = item.question;

  const ques_img_plus = document.createElement("img");
  ques_img_plus.setAttribute("src", "./assets/images/icon-plus.svg");
  ques_img_plus.setAttribute("alt", "icon-plus");
  ques_img_plus.classList.add("plus");

  const ques_img_minus = document.createElement("img");
  ques_img_minus.setAttribute("src", "./assets/images/icon-minus.svg");
  ques_img_minus.setAttribute("alt", "icon-minus");
  ques_img_minus.classList.add("minus", "hidden");

  div_ques.appendChild(ques_h4);
  div_ques.appendChild(ques_img_plus);
  div_ques.appendChild(ques_img_minus);

  const div_ans = document.createElement("div");
  div_ans.classList.add("answer", "hidden");
  div_ans.textContent = item.answer;

  main.appendChild(div_ques);
  main.appendChild(div_ans);

  div_ques.addEventListener('click', function() {

    ques_img_plus.classList.toggle('hidden');
    ques_img_minus.classList.toggle('hidden');
    div_ans.classList.toggle('hidden');
  })
});

div_cont.appendChild(header); // add to container
div_cont.appendChild(main); // add to container

body.appendChild(div_img); // add to body
body.appendChild(div_cont); // add to body