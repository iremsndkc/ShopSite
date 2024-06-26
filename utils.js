export function saveToLocalStorage(cart) {
    //local storageye veri ekleme
    localStorage.setItem("cart", JSON.stringify(cart));
}
export function getCartFromLocalStorage() {
    //*local storagede cart adında bir key varsa onları json formatında getir.
    //*yoksada boş bir dizi dönder
    return JSON.parse(localStorage.getItem("cart")) || [];
}

  export function calculateCartTotal(cart) {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
//* Sepetteki ürün miktarını hesaplar
export function updateCartIcon(cart) {
    console.log(cart);
    const cartIcon = document.getElementById("cart-icon");
    const i = document.querySelector(".bxs-shopping-bag-alt");
    console.log(i);
    let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    console.log(totalQuantity);
    i.setAttribute("data-quantity", totalQuantity);
    cartIcon.setAttribute("data-quantity", totalQuantity);
  }
  
  