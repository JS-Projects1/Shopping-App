var btnAdd = document.querySelectorAll(".btn-add");
var cart = document.querySelector(".cart");
var badgeContainer = document.querySelector(".badge-container");
var btnShow = document.querySelector(".btn-show");
var showTotalPrice = document.querySelector(".modal-body .total");
var numberCart = +cart.textContent;
var total = 0;

btnAdd.forEach(function (item) {
  item.onclick = function () {
    cart.innerHTML = ++numberCart;
    total += +item.getAttribute("price");
    var newSpan = document.createElement("span");
    newSpan.className = "badge badge-primary p-2 m-1";
    newSpan.textContent = item.getAttribute("product");
    badgeContainer.appendChild(newSpan);
  };
});

btnShow.onclick = function () {
  showTotalPrice.innerHTML = total + " $";
};
