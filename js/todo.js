const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = []; // 기존 저장된 todos를 로드하고 저장하기 위해 let으로 변경

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function paintListToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❌";

  span.innerText = newToDo;
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);

  button.addEventListener("click", deleteButtonClick);
}

function deleteButtonClick(event) {
  const li = event.target.parentElement;
  li.remove();
  const text = li.querySelector("span").innerText;
  toDos = toDos.filter((toDo) => toDo !== text);
  saveToDos();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newToDo);
  saveToDos();
  paintListToDo(newToDo); // 새 항목만 추가 렌더링
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function loadToDos() {
  const savedToDos = localStorage.getItem("todos");
  if (savedToDos !== null) {
    toDos = JSON.parse(savedToDos);
    toDos.forEach((toDo) => paintListToDo(toDo));
  }
}

loadToDos(); // 페이지 로드 시 저장된 todos를 불러와 렌더링
