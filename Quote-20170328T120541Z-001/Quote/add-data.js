
   var text = '{"quote":"Lorem Ipsum","category":"Life"}';

var obj = JSON.parse(text);

document.getElementById("quote").innerHTML =
obj.quote; 
