// add to cart Function...................
var addItem = 0;

function Cart(item) {
  //   select the ID OF CART ********************
  const cartID = document.getElementById("cartItem");
  // **********************
  addItem += 1;

  const html = `<div class= "cartIMG"   >
              <img src="${item.children[0].currentSrc}"    />
              <div class="card-title">${item.children[1].innerText}</div>
              <div>
                <label>size:${item.children[2].children[1].value}</label>
                <button></button>`;

  cartID.insertAdjacentHTML("afterbegin", html);

  //  ***  DELETE THE ITEM **********************
  const deletetItem = document.createElement("button");
  deletetItem.innerText = "Delete";

  deletetItem.setAttribute("onclick", "del(" + addItem + ")");
  deletetItem.setAttribute("class", "btn btn-primary");

  //   CALL THE ALL ITEM TO DISPLAY BY CLICK ADD-TO-CART *********************
}

// *** Delete the item function***********************

function del(items) {
  document.getElementById(items).remove();
}

/**************************************************** */
