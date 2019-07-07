// JS for Menu Drop Down Items Starts

var dropdown = document.getElementsByClassName("dropdown-btn");
var iconDropDown = document.getElementsByClassName("menu-drop-icon");
function rotateIcon(e){
  e.classList.toggle("icon-rotate");
}

var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    

    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
    
  });
}

// JS for Menu Drop Down Items Ends
var x = document.querySelectorAll('#demo li');
console.log(x);

function myfunction(index){
  var color = index == 0? "red" : "green";
  if(index == 0)
  x[index].style.color = "red";
  else
  x[index].style.color = "green";
}


