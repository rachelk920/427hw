var div1 = document.getElementById('div1'); //selecting entire element with called id

var uniycle = document.getElementsByClassName('unicycle'); //selecting ALL elements with that class name

var uniycle = div1.getElementsByClassName('unicycle'); //selecting ALL elements with that class name WITHIN particular div

var paragraphs = document.getElementsByTagName('p'); //selects all elements with that tag

var paragraphs = div1.getElementsByTagName('p'); //selects all elements with that tag WITHIN particular div

var queryUnicycle = document.querySelector('.unicycle'); //returns first element within document that matches particular selection

var queryAll = document.querySelectorAll('.unicycle, #div2'); //returns array of elements within document that match

var text = "<h1>Hello World</h1>";

div1.innerHTML = text;

queryUnicycle.textContent = text;

for (i = 0; i < queryAll.length; ++i) {
  queryAll[i].innerHTML = text;
}
