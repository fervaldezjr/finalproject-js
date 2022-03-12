let shopContent = document.getElementById('shop');
let PRODUCTS_URL = 'https://fakestoreapi.com/products';
let produc = document.getElementById('productos');

// Productos pintados en Shop
async function productData() {
    const response = await fetch(PRODUCTS_URL);
    const data = await response.json();
    return data;
};

produc.addEventListener('click', agregar)

function agregar(e) {
    const button = e.target;
    const item = button.closest('.producto');
    console.log(item);
};

productData()
.then(data => shopContent.innerHTML = data.map((producto) => `
    <div class="producto flex-col items-center justify-center p-3 cursor-pointer" id="productos">
        <img class="max-h-80" src=${producto.image} />
        <h2 class="text-xs fonnt-semibold p-3 pb-0">${producto.title}</h2>
        <p class="text-sm font-bold p-3 pt-0">€ ${producto.price}</p>
    </div>
`).join(''))
.catch(err => console.log('errors :' + err.message));