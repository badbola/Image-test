var form = document.getElementById("form");
var id = document.getElementById("TaskID");
var Tname = document.getElementById("TaskName");
var detail = document.getElementById("detail");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var reader = new FileReader();

  //   var name = document.getElementById("image").files[0].name;
  reader.addEventListener("load", function () {
    if (this.result && localStorage) {
      window.localStorage.setItem("ID", id.value);
      window.localStorage.setItem("Name", Tname.value);
      window.localStorage.setItem("Details", detail.value);
      window.localStorage.setItem(id.value + " " + "Instructor", this.result);
      alert("Task Created");
      location.reload();
    } else {
      alert("Task cannot be Created");
    }
  });
  reader.readAsDataURL(document.getElementById("image").files[0]);
  //   console.log(name);
});
