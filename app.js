const question_lst = document.querySelectorAll('.container .main .question')
const plus_lst = document.querySelectorAll('.container .main .plus');
const minus_lst = document.querySelectorAll('.container .main .minus');
const answer_lst = document.querySelectorAll('.container .main .answer');

console.log(question_lst)

for (let i = 0; i < question_lst.length; i++)
{
    question_lst[i].addEventListener('click', function() {
        
        plus_lst[i].classList.toggle('hidden');
        minus_lst[i].classList.toggle('hidden');
        answer_lst[i].classList.toggle('hidden');
    })
}