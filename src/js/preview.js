let productoPreview = document.getElementById('preview');
let previewShop = document.getElementById('previewShop');
let contenidoCarrito = document.getElementById('vista-previa');
let bolsaCompras = document.getElementById('carrito');
let carrito = [];

bolsaCompras.addEventListener('click', previewCarrito);

function previewCarrito() {
    contenidoCarrito.classList.toggle('-translate-y-[100rem]')
};

// Contenido de la vista previa del carrito [uso de ternarios]
carrito.length < 0 ? 
contenidoCarrito.innerHTML = `
<section class="pt-6 pb-3 px-2 font-bold text-lg mx-2 flex justify-center items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="9" x2="8.01" y2="9" stroke-width="2.5" stroke-linecap="round"></line><line x1="15.99" y1="9" x2="16" y2="9" stroke-width="2.5" stroke-linecap="round"></line><path d="M7.39,16.05a5,5,0,0,1,2.66-2.66,5.07,5.07,0,0,1,3.9,0,5,5,0,0,1,2.66,2.66"></path></svg>
    <h2 class="ml-2">Cesta vacía</h2>
</section>

<section>
    <div class="carro-vista py-2 px-3 flex justify-center items-center  mx-2 text-sm">
        Aún no tienes ningún artículo en la cesta, <br> descubre todo lo que tenemos para ti
    </div>
</section>

<section class="py-3 pb-6 px-3 w-full shadow">
    <div class="pagar flex justify-center text-white rounded-md">
        <a href="./views/shop.html" class="font-bold bg-red-300 p-3 rounded text-sm" id="tramitar-pedido">Descubre los productos</a>
    </div>
</section>
` : 
contenidoCarrito.innerHTML = `Estoy lleno`;

// Vista previa de los productos
producto.addEventListener('click', showProduct);

function showProduct(event) {
    const button = event.target;
    const item = button.closest('.producto');
    console.log(item);
};