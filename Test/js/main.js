  'use strict';

var test = [
{
  title: 'Хто є основоположником нової української літератури?',
  ask1: 'І. П. Котляревський;',
  ask2: 'Г. Ф. Квітка-Основ’яненко;',
  ask3: 'Т.Г.Шевченко.'
},
{
  title: 'Як називалась і коли була видана перша збірка Т. Шевченка?',
  ask1: '«Кобзар» 1840 p.;',
  ask2: '«Гайдамаки» 1841 p.;',
  ask3: '«Іван Підкова» 1839 р.'
},
{
  title: 'Де і коли народився Т. Г. Шевченко?',
  ask1: 'у Каневі 1815 p.;',
  ask2: 'у Моринцях 1814 p.;',
  ask3: 'у Петербурзі 1861 р.'
}
];

//записую данні в localStorage, перетворюючи обєкт в JSON

localStorage.setItem('infoObj', JSON.stringify(test));
// Беру дані з localStorage і розпарсюю їх
var wrap = localStorage.getItem('infoObj');

test = JSON.parse(wrap);
//описую шаблон, який ставить HTML фрагмент на сторінку з використанням зворотньої кавички
const page = obj => `
   <h2 class="title">Тест</h2>
   <form id="test">
     ${obj.map(obj => `
       <div class='block'>
       <h4 class="question">${obj.title}</h4>
       <label class="answer"><input id="checkbox" type='checkbox'><i>${obj.ask1}</i></label>
       <label class="answer"><input id="checkbox" type='checkbox'><i>${obj.ask2}</i></label>
       <label class="answer"><input id="checkbox" type='checkbox'><i>${obj.ask3}</i></label>
       </div>
       `).join('')}
       <label><input id="button" type="submit" class="btn  btn-danger  center-block btn-lg"  value='Результат!'></label>
   </form>
`;
// ставимо шаблон на строніку
var parent = document.getElementsByClassName('container')[0];
parent.innerHTML = page(test);



// ставимо колбек на клік мишкою по кнопці перевірити результат
var btn = document.getElementById('button');
btn.addEventListener("click", results);

// функція, яка показує результат
function results() {
  var answers = [false, false, true, true, false, false, false, true, false];
  var elems = document.getElementsByTagName("input");
  var res = Array.from(elems, x => x.checked);
  var tmp = answers.length;

  var result = arr(answers, res, tmp);
     if(result) {
        alert('Умнічка! Все правильно!');
    } else {
       alert('Нажаль, неправильно! Спробуй ще!');
  }
}
//функція, яка порівнює два масиви
  function arr(arr1, arr2, arrayLength) {
      for (var i = 0; i < arrayLength; i++) {
          if (arr1[i] !== arr2[i]) {
              return false;
          }
      }
 return true;
  }
