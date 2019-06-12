function toogle_menu() {
  var f = document.getElementsByClassName("aside-section");
   if(f[0].style.display == 'flex') {
      f[0].style.display = "none";
      f[1].style.display = "none";
  } else {
      f[0].style.display = 'flex';
      f[1].style.display = "flex";
  }
}
