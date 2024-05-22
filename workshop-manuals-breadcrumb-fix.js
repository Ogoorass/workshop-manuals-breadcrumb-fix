let style = document.createElement("style");

let css =
  "li > ul { display: none; } ul.navigation-breadcrumb > ul, .shown { display: block; } .dropdown-button:hover { cursor: pointer; }";

style.appendChild(document.createTextNode(css));
document.getElementsByTagName("head")[0].appendChild(style);

let first_element = document.querySelector(
  "ul.navigation-breadcrumb > ul > ul"
);
console.log(first_element.childElementCount);

let new_breadcrumb = document.createElement("ul");
first_element.childNodes.forEach((x) => {
  new_breadcrumb.appendChild(x.cloneNode(true));
});

first_element.remove();

let old_breadcrumb = document.querySelector("ul.navigation-breadcrumb > ul");
console.log(old_breadcrumb.childElementCount);
old_breadcrumb.childNodes.forEach((x) => {
  new_breadcrumb.appendChild(x.cloneNode(true));
});

console.log(new_breadcrumb.childElementCount);

old_breadcrumb.replaceWith(new_breadcrumb);

let all_li = document.querySelectorAll("li");
all_li.forEach((x) => {
  if (x.lastChild.nodeName != "A" && x.lastChild.nodeName != "#text") {
    let button = document.createElement("span");
    button.classList = "dropdown-button";
    button.appendChild(document.createTextNode("🠿"));
    button.onclick = function () {
      this.parentNode.lastChild.classList.toggle("shown");
      if (this.parentNode.lastChild.classList.value.includes("shown")) {
        this.firstChild.nodeValue = "🠽";
      } else {
        this.firstChild.nodeValue = "🠿";
      }
    };
    x.insertBefore(button, x.children[x.children.length - 1]);
  }
});
