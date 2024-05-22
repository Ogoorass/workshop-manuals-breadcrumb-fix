localStorage.setItem("displayPopup", "0");

var breadcrumb_xml = new XMLHttpRequest();

breadcrumb_xml.onreadystatechange = function () {
  var breadcrumb = this.responseText
    .match(/<ul class=navigation-breadcrumb>(.*)<\/ul>/g)
    .toString();
  // var sidebar = document.querySelector(".sidebar");
  // breadcrumb = breadcrumb.slice(32, breadcrumb.length - 5);
  // console.log(breadcrumb);
  // sidebar.innerHTML = breadcrumb;
};
// /<ul class=\"navigation-breadcrumb\">(.\*)<\/ul>/g
breadcrumb_xml.open(
  "GET",
  "https://workshop-manuals.com/volkswagen/golf-mk4/fullindex/"
);

breadcrumb_xml.send();
