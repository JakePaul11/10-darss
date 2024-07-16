function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  var div = document.getElementById("d1")

    if (taskInput.value.trim() !== "") {
        var div2 = document.createElement("div");
        div.appendChild(div2)
      var li = document.createElement("li");
      li.textContent = taskInput.value;
      div2.appendChild(li);
      taskInput.value = "";
      var knopka = document.createElement("button")
      knopka.innerHTML = "Delete"
      div2.appendChild(knopka);
    }
  }
 
//   knopka.addEventListener("click", function(remove) {
//     function remove() {
//         var result = confirm("Are you sure you want to delete this item?");
//         if (result) {
//             const element = document.getElementById('el');
//             element.remove();
//         }
//     }
//     })
 


//   delete div.property


//   function saveTasks() {
//     var tasks = [];
//     var taskList = document.getElementById("taskList").getElementsByTagName("li");
  
//     for (var i = 0; i < taskList.length; i++) {
//       tasks.push(taskList[i].textContent);
//     }
  
//     var blob = new Blob([tasks.join("\n")], {type: "text/plain"});
//     var url = URL.createObjectURL(blob);
  
//     var a = document.createElement("a");
//     a.style.display = "none";
//     a.href = url;
//     a.download = "tasks.txt";
//     document.body.appendChild(a);
//     a.click();
  
//     setTimeout(function() {
//       document.body.removeChild(a);
//       window.URL.revokeObjectURL(url);
//     }, 0);
//   }