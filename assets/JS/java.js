var header = document.getElementById("header");
var mobileMenu = document.getElementById("mobile-menu");
var headerHeight = header.clientHeight;
// Đóng/mở mobile menu
mobileMenu.onclick = function () {
  var isClosed = header.clientHeight === headerHeight;
  if (isClosed) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};
//Tự động đóng khi mở menu
var menuItems = document.querySelectorAll('.nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];

  menuItem.onclick = function () {
    var isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("sub-nav");
    if (!isParentMenu) {
      header.style.height = null;
    }
  };
}
