// 1
console.log('#1')

var defaultString = 'Default string',
    str1 = '' || defaultString,
    str2 = 'Some text' || defaultString;

console.log(str1);
console.log(str2);

// 1 (option 2 )
console.log('#1 (option 2 )')

function outputLine (myString) {
    if (myString) {
        console.log(myString);
    }
    else {
        console.log('Please enter a string');
    }
    return myString;
}

outputLine('Hello world');
outputLine('');

// 2
console.log('#2')

var browser =  {
    name: 'Chrome',
    release: 2008,
    version: '73.0.3683.86'
};

console.log(browser);
console.log(browser.name);
console.log(browser.release);
console.log(browser.version);


// 2 (option 2)
console.log('#2 (option 2 )')

var browser1 =  {
    name: 'Chrome',
    release: 2008,
    version: '73.0.3683.86'
};

console.log(browser1);
console.log(browser1.name);
console.log(browser1.release);
console.log(browser1.version);

// 3
console.log('#3')

browser.myMethod = function() {
    return browser.name + ' is is the best browser.';
  }
  
console.log(browser);
console.log(browser.myMethod());

// 3 (option 2 )
console.log('#3 (option 2 )')

var browser1 = Object.create({x: 10, y: 20});

browser1.z = 30;

console.log(browser1);
console.log(browser1.x);
console.log(browser1.y);
console.log(browser1.z);

// 4
console.log('#4')

var i;
    for (var i = 1; i < 21; i++) {
        if (i % 2 === 0){
        console.log(i);
        }
    }

// 5
console.log('#5')

var CityName = 'Kharkov',
    Status;

switch(CityName) {
  case 'Kharkov': Status = 'City'; break;
  case 'Andreevka': Status = 'Village'; break;
  case 'Bezlyudovka': Status = 'Township'; break;
  default: Status = 'somewhere in Ukraine';
}

console.log(CityName + ' ' + Status);

// 5 (option 2 )
console.log('#5 (option 2 )')

var myNumber = 1000,
    Number;
switch (true) {
    case '10020' : Number = '1003'; break;
    case '10567' : Number = '1001'; break;
    case '100' : Number = '1008'; break;
    default: Number = 'random';
}

console.log(myNumber + ' ' + Number);

//6
console.log('#6')

var x = 10;
var text = x > 10 ? 'x больше 10' : x < 10 ? 'x меньше 10' : 'x равен 10';

console.log(text);

// 6 (option 2 )
console.log('#6 (option 2 )')

function categoryAge (age) {
    age  < 100 ? console.log('больше'): age > 100 ? console.log('меньше'): console.log('равно');
  }
  
categoryAge(90);
categoryAge(120);
categoryAge(100);

// 7
console.log('#7')

var i = 0;
while (i <= 7) {
  console.log(i++);
}

// 8
console.log('#8')

function func (arg1, arg2, callback) {
    console.log('Число ' + arg1 + ' в степени ' + arg2);
    var arg3 = Math.pow(arg1,arg2);
    callback(arg3);
  }

func (2, 4, function(result) {
    console.log('Результат ' + result);
  })