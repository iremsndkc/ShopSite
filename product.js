export async function fetchProducts(){
    try {
        //db.json dosyasına fetch ile istek attık
        const response = await fetch("db.json");
        
        if (!response.ok){
            //hata oluşturduk
           throw new Error("URL yanlış");
        }
        // gelen cevabı json formatına çeviridk ve dışarıya return ettik
        return await response.json();
    } catch (error) {
        console.log(error);
        return[];
    }
}
//*ürünlerin sayfaya render eden fonksiyonu tanımlıyoruz.
export function renderProducts(products, addToCartCallback) {
    //*html dosyasından ürünlerin listeleeceği elementi seçeriz.
    const productList = document.getElementById("productList");
    
    productList.innerHTML = products
    //*ürünlerin html formatında listeye eklenmesi için products dizisini dönüp her bir product için ekrana product cartını aktardık.
      .map(
        (product) => `
    <div class="product">
           <img
           src=${product.img}
           alt=""
           class="product-img"
           />
           <div class="product-info">
             <h2 class="product-title">${product.title}</h2>
             <p class="price">${product.price}</p>
             <a class="add-to-cart" data-id="${product.id}">Add To Cart</a>
           </div>
         </div>
    `
       )
    .join("");

    //* "Add to cart" butonları seçiliyor
  const addToCartButtons = document.getElementsByClassName("add-to-cart");
  //* Her bir "Add to cart" butonuna tıklama olayı ekleniyor.
  for (let i = 0; i < addToCartButtons.length; i++) {
    const addToCartButton = addToCartButtons[i];
    addToCartButton.addEventListener("click", addToCartCallback);
  }
}