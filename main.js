// carrito vacio
let cart = [];

//función para agregar productos al carrito
function addToCart(product) {
  cart.push(product);
  DataTransfer.forEach(product =>{
    const card = documente.createElement ('div')
        card.innerHTML = `<div class= containerProducts> 
                              <p class="add-product" ${product.name} ha sido agregado al carrito.> </p>
                           </div>
        
        `})
  
}

// función para quitar productos del carrito
function removeFromCart(product) {
  const index = cart.indexOf(product);
  if (index > -1) {
    cart.splice(index, 1);
    const card = document.createElement ('div')
    card.innerHTML = `<div class= "p"> <p class="product-name" ${product.name} ha sido eliminado del carrito. </p>
    </div>
    `} else {
    const card = document.createElement ('div')
    card.innerHTML = `<div class= "p">
    <p class= "product-name" ${product.name} no se encontró en el carrito. </p>
    </div> 
    `}
}

// función para mostrar el contenido del carrito
function showCart() {
    innerHTML=  `<div class= "p"> Hay ${cart.length} productos en el carrito: </p> </div>
    cart.forEach(product) => <div class= "p"> <p> ${product.name}</p> </div>
  `}



  //ingresar la informacion en la funcion loadproducts

  function loadProducts (data){
      data.forEach(product => {
          const card = document.createElement ('div')
            card.innerHTML = `  
                                 <div class= "containerProducts"> 
                                   <img src= "${prod.img}" class="card-img-top" alt="${namep.product}
                                    <div class= "card-body">
                                       <h2 class= "card-title"> ${product.price}</h2>
                                       <h2 class= "${product.category}"></h2>
                                       <p class= "${product.decription}"></p>
                                       <button id${product.id} class="btn btnBuy btn-primary buttonCard">Add to Cart</button> 
                                     </div>   
                                 </div>
            
            `});
            stock.apendChild (row);
  }
  let buttonBuy = document.querySelectorAll('btnBuy'); // nodeList (similar a un array) con todos los botones

  //ingresamos los eventos a los buttones, incluyendo el id de cada producto

btnBuy .forEach (el => {
    el.addEventListener ('click', (e) => 
    AddtoCart(e.target.id,data))
})

if (discount) {
    resolve("the discount was applied");
  } else {
    reject("the discount could not be applied");
  }


