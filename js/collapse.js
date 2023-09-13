function toggle_visibility(parent) {
  var collapsible_element = parent.querySelector(".collapse-inner"),
      collapse_button = parent.querySelector(".collapse-button");
  if (collapsible_element.style.display == "none") {
    collapsible_element.style.display = "block";
    collapse_button.innerHTML = "<img src=\"images/up-arrow.svg\" class=\"inline-image\" />Show less";
  } else {
    collapsible_element.style.display = "none";
    collapse_button.innerHTML = "<img src=\"images/down-arrow.svg\" class=\"inline-image\" />Show more";
  }
}

function visibility_wrapper(target_object) { toggle_visibility(target_object.target.parentElement); }

var collapsible_elements = document.getElementsByClassName("collapsible");
for (element of collapsible_elements) {
  // Adding the button dynamically is a bit odd, but I do it to ensure JavaScript is enabled
  element.innerHTML = "<button class=\"collapse-button\"></button><div class=\"collapse-inner\">" + element.innerHTML + "</div>";
  var button = element.querySelector(".collapse-button");
  button.addEventListener("click", visibility_wrapper);
  toggle_visibility(element);
}

var links = document.querySelectorAll("a");

for (link of links) {
  link.innerHTML = "<div class=\"inline-div\"><img src=\"images/right-arrow.svg\" class=\"inline-image\" />" + link.innerHTML + "</div>";
}
