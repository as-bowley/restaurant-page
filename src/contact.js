function contact() {
  const contactContainer = document.createElement("div");
  contactContainer.setAttribute("id", "contact-container");
  contactContainer.classList.add("page");

  const contactLeft = document.createElement("div");
  contactLeft.setAttribute("id", "contact-left");

  const contactTitle = document.createElement("div");
  contactTitle.setAttribute("id", "contact-title");
  contactLeft.appendChild(contactTitle);

  const contactDesc = document.createElement("div");
  contactDesc.setAttribute("id", "contact-desc");
  contactDesc.innerHTML = `<b>You can find us at:</b> <br><br>1234 Test Street<br>Testtown 51121 <br>Bonn <br>Germany <br>
  <br><b>Want to book a table? Call us on:</b> <br>0123456789 <br><br>
  <b>For any other enquires, please e-mail us here:</b> <br>test@email.com"`;
  contactLeft.appendChild(contactDesc);

  contactContainer.appendChild(contactLeft);

  const contactRight = document.createElement("div");
  contactRight.setAttribute("id", "contact-right");

  const contactRightImg = document.createElement("div");
  contactRightImg.setAttribute("id", "map-img");
  contactRight.appendChild(contactRightImg);

  contactContainer.appendChild(contactRight);

  return contactContainer;
}

function loadContact() {
  const content = document.getElementById("content");

  document.querySelectorAll(".page").forEach((e) => e.remove());

  content.appendChild(contact());
}

export default loadContact;
