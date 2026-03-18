const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");
const tilDateInput = document.querySelector("#til-date");
const tilTitleInput = document.querySelector("#til-title");
const tilContentInput = document.querySelector("#til-content");

tilForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const tilItem = document.createElement("article");
  const tilDate = document.createElement("time");
  const tilTitle = document.createElement("h3");
  const tilContent = document.createElement("p");

  tilItem.className = "til-item";
  tilDate.textContent = tilDateInput.value;
  tilTitle.textContent = tilTitleInput.value.trim();
  tilContent.textContent = tilContentInput.value.trim();

  tilItem.append(tilDate, tilTitle, tilContent);
  tilList.prepend(tilItem);

  tilForm.reset();
  tilDateInput.focus();
});
