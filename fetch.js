var searchEle = document.getElementById("sId");
var parentDiv = document.getElementById("result");
function searchData() {
  var ele = searchEle.value;
  if (localStorage.getItem(ele + " " + "Student") !== null) {
    parentDiv.innerHTML = "";
    console.log(JSON.parse(localStorage.getItem(ele + " " + "Student")));
    var a = JSON.parse(localStorage.getItem(ele + " " + "Student"));
    var names = JSON.parse(localStorage.getItem(ele + " " + "Name"));
    for (let index = 0; index < a.length; index++) {
      let res = a[index];
      let na = names[index];
      var div = document.createElement("div");
      var para = document.createElement("P");
      var inp = document.createElement("input");
      var but = document.createElement("button");
      but.setAttribute("type", "button");
      but.setAttribute("onClick", "MarksSub()");
      but.innerHTML = "Submit";
      inp.setAttribute("type", "number");
      inp.setAttribute("placeholder", "Enter Marks");
      inp.setAttribute("id", "MarksEle");
      inp.setAttribute("required", "");
      var NameOfStudent = document.createTextNode(na);
      para.appendChild(NameOfStudent);
      var image = new Image();
      image.src = res;
      div.appendChild(image);
      div.appendChild(para);
      div.appendChild(inp);
      div.appendChild(but);
      div.setAttribute("class", "innerRes");
      parentDiv.appendChild(div);
    }
  }
}

function MarksSub() {
  var ele = searchEle.value;
  var marksEle = document.getElementById("MarksEle").value;
  if (marksEle < 0 || marksEle > 10) {
    alert("Marks should be in the limit of 0 to 10");
    return;
  }
  if (localStorage.getItem(ele + " " + "Marks") == null) {
    localStorage.setItem(ele + " " + "Marks", "[]");
  }
  var old_data = JSON.parse(localStorage.getItem(ele + " " + "Marks"));
  old_data.push(marksEle);

  localStorage.setItem(ele + " " + "Marks", JSON.stringify(old_data));
  alert("Marks Marked");
}
