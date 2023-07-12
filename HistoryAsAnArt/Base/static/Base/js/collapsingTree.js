var togglers = document.getElementsByClassName("collapsing_tree__toggler_header");

for ( var i = 0; i < togglers.length; i++) {
  togglers[i].addEventListener("click", function() {
    this.parentElement.querySelector(".collapsing_tree__toggler_body").classList.toggle("active");
  });
} 