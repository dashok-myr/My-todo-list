const addForm = document.querySelector("#add");
const list = document.querySelector(".container__list");
const search = document.querySelector(".form input");

// ADD TODOS
const generareTemplate = todo => {
  const count = list.children.length + 1;

  const html = `
    <li class="item">
        <span class="count">${count}.</span><span>${todo}</span><i class="fas fa-trash delete"></i>
     </li>
    `;

  list.innerHTML += html;
};

addForm.addEventListener("submit", e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if (todo.length) {
    generareTemplate(todo);
    addForm.reset();
  }
});

//DELETE TODOS

const organizeList = () => {
    // Update counter for all the list items
    const counters = document.querySelectorAll(".count");

    for (let i in counters) {
      counters[i].innerText = parseInt(i) + 1 + '.';
    }
}

list.addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    organizeList();
  }
});

const filterTodos = term => {
  const childrenArray = Array.from(list.children);

  //// add filtered class
  childrenArray
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add("filtered"));

  //// remove filtered class
  childrenArray
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove("filtered"));
};

//keyup event
// filter todos event
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
