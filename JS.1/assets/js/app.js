document.body.style.backgroundImage = 'linear-gradient(90deg, rgba(2,0,36,1) 2%, rgba(135,18,224,1) 31%, rgba(126,80,152,1) 61%, rgba(0,0,0,1) 100%)';
var timedate = new Date()
var hours = timedate.getHours();

console.log(hours);

if (hours >= 0 && hours < 6) {
    alert('Good Night')
    document.body.style.backgroundColor = 'black';
}
else if (hours >= 6 && hours < 12) {
    alert('Good Morning')
    document.body.style.backgroundColor = 'yellow';
}
else if (hours >= 12 && hours < 18) {
    alert('Good AfterNoon')
    document.body.style.backgroundColor = 'orange';
}
else if (hours >= 18 && hours <= 23) {
    alert('Good Evening')
    document.body.style.backgroundColor = 'gray';
}



function Plus() {
    var a = Number(document.getElementById('inp1').value);
    var b = Number(document.getElementById('inp2').value);
    var plus = a + b;
    document.getElementById('number').innerHTML = plus;
}

function Minus() {
    var a = Number(document.getElementById('inp1').value);
    var b = Number(document.getElementById('inp2').value);
    var minus = a - b;
    document.getElementById('number').innerHTML = minus;
}

function Multiply() {
    var a = Number(document.getElementById('inp1').value);
    var b = Number(document.getElementById('inp2').value);
    var multiply = a * b;
    document.getElementById('number').innerHTML = multiply;


}

function Divide() {
    var a = Number(document.getElementById('inp1').value);
    var b = Number(document.getElementById('inp2').value);
    var divide = a / b;
    document.getElementById('number').innerHTML = divide;


}