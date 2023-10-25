console.log("connected");
var btn = document.getElementById("btn_click");

function clickPara(element) {
  console.log("THIS SELECT", element.className);
  btn.className += " neClass"; //myBtn neClass
  btn.style.background = "red";
  btn.style.border = "0px";
}

function changeImageClick(id, path) {
  console.log("ID", id);
  document.getElementById(id).src = path;
}
