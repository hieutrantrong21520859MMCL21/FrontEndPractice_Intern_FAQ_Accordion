const body = document.getElementsByTagName('body');
const question_lst = document.querySelectorAll('.container ul li .question')
const plus_lst = document.querySelectorAll('.container ul li .question .plus');
const minus_lst = document.querySelectorAll('.container ul li .question .minus');
const answer_lst = document.querySelectorAll('.container ul li .answer');


console.log(body)

/* Event */
for (let i = 0; i < question_lst.length; i++)
{

  question_lst[i].addEventListener('click', function() {
        
      plus_lst[i].classList.toggle('hidden');
      minus_lst[i].classList.toggle('hidden');
      answer_lst[i].classList.toggle('active');

      let copied_ans_lst = Array.from(answer_lst).slice()
      copied_ans_lst.splice(i, 1);

      let copied_plus_lst = Array.from(plus_lst).slice();
      copied_plus_lst.splice(i, 1);

      let copied_minus_lst = Array.from(minus_lst).slice();
      copied_minus_lst.splice(i, 1);

      // Close the others
      copied_ans_lst.forEach(ele => {

        if (ele.classList.contains('active'))
        {
          ele.classList.remove('active');
        }

      })

      copied_plus_lst.forEach(ele => {
        
        if (ele.classList.contains('hidden'))
        {
          ele.classList.remove('hidden');
        }
      })

      copied_minus_lst.forEach(ele => {
        
        if (!ele.classList.contains('hidden'))
        {
          ele.classList.add('hidden');
        }
      })
  })
}