// add to cart Function...................
var addItem = 0;

function Cart(item) {
  //   select the ID OF CART ********************
  const cartID = document.getElementById("cartItem");
  // **********************
  addItem += 1;
  const cartdiv = document.createElement("div");
  cartdiv.classList.add("cartIMG");
  cartdiv.setAttribute("id", addItem);

  //   **** SET THE IMAGE ****************************

  var image = document.createElement("img");
  image.setAttribute("src", item.children[0].currentSrc);

  //  *** SET THE IMAGE *************************
  const cartTitle = document.createElement("div");

  cartTitle.innerText = item.children[1].innerText;

  //  *** SET THE LABEL *************************

  const cartLabel = document.createElement("div");
  cartLabel.innerText = item.children[2].innerText;

  //  *** SET THE VALUE *************************

  const select = document.createElement("span");
  select.innerText = item.children[2].children[1].value;

  //  ***  DELETE THE ITEM **********************
  const deletetItem = document.createElement("button");
  deletetItem.innerText = "Delete";

  deletetItem.setAttribute("onclick", "del(" + addItem + ")");
  deletetItem.setAttribute("class", "btn btn-primary");

  //   CALL THE ALL ITEM TO DISPLAY BY CLICK ADD-TO-CART *********************

  cartLabel.append(select);
  cartID.append(cartdiv);
  cartdiv.append(image);
  cartdiv.append(cartTitle);
  cartdiv.append(cartLabel);
  cartdiv.append(deletetItem);
}

// *** Delete the item function***********************

function del(items) {
  document.getElementById(items).remove();
}

/**************************************************** */
