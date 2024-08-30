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
  console.log(triangleID)
  const triangleEl = document.getElementById(triangleID)
  const elementToHide = dropdownEl.nextElementSibling

  // down arrow: 9660
  // up arrow: 9650
  elementToHide.style.display = "none";
  triangleEl.innerHTML = "&#" + 9660 + ";";
  console.log(triangleEl)

  dropdownEl.addEventListener("click", () => {
    // change down arrow to up arrow
    if (elementToHide.style.display === "none") {
      triangleEl.innerHTML = "&#" + 9650 + ";";
      elementToHide.style.display = hiddenElementDisplayStyle;
    } else {
      triangleEl.innerHTML = "&#" + 9660 + ";";
      elementToHide.style.display = "none";
    }
  })
}
