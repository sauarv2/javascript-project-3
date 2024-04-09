const content = document.querySelectorAll(".content");
const list_item = document.querySelectorAll("nav ul li");

list_item.forEach((list, idx) => {
  // This iterates over each list item in the list_item collection. The idx parameter represents the index of the current list item within the collection.

  list.addEventListener("click", () => {
    RemoveContent();
    removeactive();
    list.classList.add("active");
    content[idx].classList.add("show");
  });
});

function RemoveContent() {
  content.forEach((content) => {
    content.classList.remove("show");
  });
}
function removeactive() {
  list_item.forEach((item) => {
    item.classList.remove("active");
  });
}

/*RemoveContent(); is called to remove the "show" class from all content elements.


removeactive(); is called to remove the "active" class from all list items.



list.classList.add("active"); adds the "active" class to the clicked list item, highlighting it as the active navigation item.


content[idx].classList.add("show"); adds the "show" class to the content element corresponding to the clicked list item, making it visible.


*/
