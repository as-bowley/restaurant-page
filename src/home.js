function subHead() {
  const subhead = document.createElement("div");
  subhead.setAttribute("id", "hero-subheadline");
  subhead.classList.add("page");
  subhead.textContent = "Great Bonn Restaurant";

  return subhead;
}

function heroHead() {
  const heroHead = document.createElement("div");
  heroHead.setAttribute("id", "hero-headline");
  heroHead.classList.add("page");
  heroHead.textContent = "Delicious Uyghur Food in Bonn";

  return heroHead;
}

function ctaButton() {
  const ctaButtonDiv = document.createElement("div");
  ctaButtonDiv.setAttribute("id", "hero-ctabutton");
  ctaButtonDiv.classList.add("page");
  const ctaButton = document.createElement("button");
  ctaButton.setAttribute("id", "image");
  ctaButton.textContent = "See Our Menu";
  ctaButtonDiv.appendChild(ctaButton);

  return ctaButtonDiv;
}

function heroImage() {
  const heroImage = document.createElement("div");
  heroImage.setAttribute("id", "hero-image");
  heroImage.classList.add("page");
  const imageDiv = document.createElement("div");
  imageDiv.setAttribute("id", "image");
  heroImage.appendChild(imageDiv);

  return heroImage;
}

function loadHome() {
  const content = document.getElementById("content");

  document.querySelectorAll(".page").forEach((e) => e.remove());

  content.appendChild(subHead());
  content.appendChild(heroHead());
  content.appendChild(ctaButton());
  content.appendChild(heroImage());
}

export default loadHome;
