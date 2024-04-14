let box = document.querySelector(".box");
let task = document.querySelector("input");
let addButtonTask = document.querySelector("button");
let del;

for (let i = 0; i < localStorage.length; i++) {
  key = localStorage.key(i);
  let dv = document.createElement("div");
  let sp = document.createElement("span");
  let text = document.createTextNode(localStorage.getItem(`${key}`));
  del = document.createElement(`button`);
  let textDel = document.createTextNode(`❌`);
  del.appendChild(textDel);
  sp.appendChild(text);
  dv.appendChild(sp);
  dv.appendChild(del);
  dv.classList.add("task");
  box.appendChild(dv);

  //console.log(localStorage.getItem(`${key}`))
}
addButtonTask.onclick = () => {
  if (task.value.length > 0) {
    let numberOfTasks = localStorage.length;

    localStorage.setItem(`task${numberOfTasks + 1}`, task.value);
    location.reload();
  

  }
};
let dels = document.querySelectorAll(".task button");
dels.forEach((element) => {
  element.onclick = function () {
    for (let i = 0; i < localStorage.length; i++) {
      key = localStorage.key(i);
      if (localStorage.getItem(key) == this.previousElementSibling.innerHTML) {
        localStorage.removeItem(key);
        this.parentElement.remove();
        break;
      }
    }
  };
});
