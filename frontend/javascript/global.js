const createTriangleDropdown =
  (dropdownID, trianglePrefix="", hiddenElementDisplayStyle="flex") => {
  /**
   * Takes in the id of the dropdown tag, will hide the next element
   * Assumes that triangle has id triangle-dropdown
   * @param [str] dropdownID: element id of value to make into a dropdown
   * @param [str] trianglePrefix: optional parameter to designate triangle ID's prefix value
   * @param [str] hiddenElementDisplayStyle: optional parameter to say block or flex
   *
  */
  const dropdownEl = document.getElementById(dropdownID);
  const triangleID= trianglePrefix ? trianglePrefix + "-triangle-dropdown" : "triangle-dropdown"
  const triangleEl = document.getElementById(triangleID)
  const elementToHide = dropdownEl.nextElementSibling

  // down arrow: 9660
  // up arrow: 9650

  // Set initial conditions of dropdown menu
  elementToHide.style.display = "none";
  triangleEl.innerHTML = "&#" + 9660 + ";";

  // change down arrow to up arrow and display/hide element on click
  dropdownEl.addEventListener("click", () => {
    if (elementToHide.style.display === "none") {
      triangleEl.innerHTML = "&#" + 9650 + ";";
      elementToHide.style.display = hiddenElementDisplayStyle;
    } else {
      triangleEl.innerHTML = "&#" + 9660 + ";";
      elementToHide.style.display = "none";
    }
  })
}
