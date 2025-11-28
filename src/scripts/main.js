import "../styles/main.scss";

let checkCount = 0;

const form = document.querySelector(".container-form");
const inputItem = document.getElementById("input-item");
const list = document.querySelector(".container-list");

function addItem() {
  checkCount++;

  const li = document.createElement("li");
  li.className = "list-item";

  //checkbox
  const checkboxDiv = document.createElement("div");
  checkboxDiv.className = "checkbox-wrapper";

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = `check${checkCount}`;
  input.className = "list-item-checkbox";

  const label = document.createElement("label");
  label.setAttribute("for", `check${checkCount}`);

  const itemName = document.createElement("p");
  itemName.className = "list-item-text";
  itemName.textContent = inputItem.value;

  checkboxDiv.appendChild(input);
  checkboxDiv.appendChild(label);
  checkboxDiv.appendChild(itemName);

  const removeButton = document.createElement("button");
  removeButton.className = "list-item-btn";

  const trashIco = document.createElement("i");
  trashIco.className = "fa-regular fa-trash-can";

  removeButton.appendChild(trashIco);

  li.appendChild(checkboxDiv);
  li.appendChild(removeButton);

  list.appendChild(li);

  const alert = document.querySelector(".container-alert");
  const alertRemove = document.querySelector(".container-alert-btn-ico");

  let alertTimeout = null;

  removeButton.addEventListener("click", () => {
    li.remove();
    alert.classList.add("show");

    if (alertTimeout) {
      clearTimeout(alertTimeout);
    }

    alertTimeout = setTimeout(() => {
      alert.classList.remove("show");
    }, 3000);

    alertRemove.addEventListener("click", () => {
      alert.style.display = "none";
      if (alertTimeout) clearTimeout(alertTimeout);
    });
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addItem();
  inputItem.value = "";
});
