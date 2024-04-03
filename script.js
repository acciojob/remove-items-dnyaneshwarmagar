//your JS code here. If required.

let btn = document.querySelector("input");
btn.addEventListener("click",removeColor)
function removeColor() {
      var selectElement = document.getElementById("colorSelect");
      var selectedIndex = selectElement.selectedIndex;
      
      if (selectedIndex !== -1) { // Check if any option is selected
        selectElement.remove(selectedIndex); // Remove the selected option
      }
    }