function menuItems() {
  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "menu-container");
  menuContainer.classList.add("page");

  menuContainer.appendChild(
    createMenuItem(
      "item1",
      "<b>PITER MANTA</b><br> Uyghur-style steamed buns stuffed with beef and onions, and seasoned with black pepper and house spices.<br> <b>€12</b>"
    )
  );
  menuContainer.appendChild(
    createMenuItem(
      "item2",
      "<b>SAMSA</b><br> Oven-baked buns with minced beef and onions seasoned with black pepper and sprinkled with sesame sprinkles.<br> <b>€12</b>"
    )
  );
  menuContainer.appendChild(
    createMenuItem(
      "item3",
      "<b>CHUCHURA</b><br> Mini-dumpling soup with minced beef, lamb, and onions, and seasoned with black pepper.<br> <b>€12</b>"
    )
  );
  menuContainer.appendChild(
    createMenuItem(
      "item4",
      "<b>SUI ROU LAGHMAN</b><br> Sauteed beef and various combination of vegetables topped hand-pulled chewy noodles.<br> <b>€12</b>"
    )
  );
  menuContainer.appendChild(
    createMenuItem(
      "item5",
      "<b>NAAN KORDAK</b><br> Soft lamb braised with onions, carrots, and potatoes, topped with fresh naan bread.<br> <b>€12</b>"
    )
  );
  menuContainer.appendChild(
    createMenuItem(
      "item6",
      "<b>RIB KEBAB</b><br> Four lamb chops cooked to perfection and topped with sautéed onions (Mild and spicy versions available).<br> <b>€12</b>"
    )
  );
  menuContainer.appendChild(
    createMenuItem(
      "item7",
      "<b>FRIED TOFU</b><br> Green and red bell peppers, onions, dry black fungus, soy sauce, sugar, vinegar and tomato paste.<br> <b>€12</b>"
    )
  );
  menuContainer.appendChild(
    createMenuItem(
      "item8",
      "<b>BAKLAVA</b><br> Fine flour, egg, pistachio, lemon salt, sugar, and butter (three pieces).<br> <b>€12</b>"
    )
  );

  return menuContainer;
}

function createMenuItem(itemNum, itemDesc) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");
  const menuItemDiv = document.createElement("div");
  menuItemDiv.setAttribute("id", itemNum);
  menuItem.appendChild(menuItemDiv);
  const menuItemDesc = document.createElement("div");
  menuItemDesc.classList.add("item-desc");
  menuItemDesc.innerHTML = itemDesc;
  menuItem.appendChild(menuItemDesc);

  return menuItem;
}

function loadMenu() {
  const content = document.getElementById("content");

  document.querySelectorAll(".page").forEach((e) => e.remove());

  content.appendChild(menuItems());
}

export default loadMenu;
