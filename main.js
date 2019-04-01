// 1
console.log('#1');


var loremArr = ['Lorem ipsum', 'Blanditiis,eaque', 'lure,quis', 'lure,voluptatum', 'Maxime,veniam', 'Inventore,a', 'Eius,qui', 'Accusantium,amet', 'Nemo,eos', 'Vero,guos'];

var loremArr0 = loremArr.filter(function(lorem){
  if (lorem.indexOf('o') > -1)
  {
    return this;
  } 
})

console.log(loremArr0);

// 1
console.log('#1(option 2)');

let myloremArr = ['Lorem ipsum', 'Blanditiis,eaque', 'lure,quis', 'lure,voluptatum', 'Maxime,veniam', 'Inventore,a', 'Eius,qui', 'Accusantium,amet', 'Nemo,eos', 'Vero,guos'];
    
let isLetterInTheWord = (arr, letter) => arr.filter((word) => word.indexOf(letter) > -1);
    
console.log(isLetterInTheWord(myloremArr, 'o'));

// 2
console.log('#2');

var date = new Date()
// var month = (date.getMonth() +1) < 10 ? '0' + (date.getMonth() +1) : (date.getMonth() +1);
// var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
// var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
// var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

// console.log(date.getFullYear() + '-' + month + '-' + day + ',' + hours + ':' + minutes);

var d1 = new Date().toISOString();
console.log(d1);

var d2 = new Date().toLocaleString();
console.log(d2);

// 5
console.log('#5(option 2)');

function getDateAgo(date, days) {
  date.setDate(date.getDate() - days);
  return date.getDate();
}

function getDateAgo(date, days) {
  var dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

var date = new Date(2019, 3, 2);

console.log( getDateAgo(date, 1) );
console.log( getDateAgo(date, 2) ); 
console.log( getDateAgo(date, 365) ); 


// 3
console.log('#3');

function getWeekDay(date) {
  var day = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

    return day[date.getDay()];
}

var date = new Date();
console.log(getWeekDay(date));

// 3
console.log('#3(option 2)');


let getWeekDay1 = (d) => {
	const date = new Date(d);
  const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

  return days[date.getDay()];
}

console.log( getWeekDay1('2019-04-01') );

// 4
console.log('#4');

function getLocalDay(date) {
  var day = date.getDay();

  return day === 0 ? 7 : day;
}

var date = new Date();
console.log(getLocalDay(date));

// 4
console.log('#4(option 2)');

let getLocalDay1 = (d) => {
	const date = new Date(d);
  let day = date.getDay();

  if (day == 0) {
    day = 7;
  }
  return day;
}

console.log(getLocalDay1('2019-04-01'));

// 5
console.log('#5');

function getDateAgo(date, days) {
  date.setDate(date.getDate() - days);
  var year = date.getFullYear();
  var month = (date.getMonth() +1) < 10 ? '0' + (date.getMonth() +1) : (date.getMonth() +1);
  var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

  return day + '.' + month + '.' + year;
}

console.log(getDateAgo(date, 0));

