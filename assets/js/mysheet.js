 
   function filterFunction() {
  var input, filter, ul, li, a, i;
  $("#Username")
  input = $("#myInput");
  filter = input.val().toUpperCase();
  div = $("#myDropdown");
  console.log(div)
  if (div.length) {
    a = div.find('a');
  }
  // a = $("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
    
// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

      


  