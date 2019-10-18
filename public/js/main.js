//GLOBAL
var products=[];
var cartItems=[];
var cart_n = document.getElementById('cart_n');
//DIVS
var bDiv = document.getElementById("bDIV");
var cDiv = document.getElementById("cDIV");
var dDiv = document.getElementById("dDIV");
//INFORMATION
var B=[
    {name:'ba',price:1},
    {name:'bb',price:1},
    {name:'bc',price:1},
    {name:'bd',price:1},
    {name:'be',price:1},
    {name:'bf',price:1}
];
var C=[
    {name:'ca',price:1},
    {name:'cb',price:1},
    {name:'cc',price:1}];
var D=[
    {name:'da',price:1},
    {name:'db',price:1},
    {name:'dc',price:1}
];
//HTML
function HTMLbProduct(con) {
    let URL = `../img/b/b${con}.jpeg`;
    let btn = `btnB${con}`;
    return `
        <div class="card mb-4 shadow-sm">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                <i style="color:orange;" class="fa fa-star" > </i>
                <i style="color:orange;" class="fa fa-star" > </i>
                <i style="color:orange;" class="fa fa-star" > </i>
                <i style="color:orange;" class="fa fa-star" > </i>
                <i style="color:orange;" class="fa fa-star" > </i>
                <p class="card-text">${B[con-1].name}</p>
                <p class="card-text">${B[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart2('${B[con-1].name}','${B[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secundary" ><a style="color:inherit;" href="/cart">Comprar</a></button>
                        <button id="${btn}" type="button" onclick="cart('${B[con-1].name}','${B[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secundary" > Añadir</button>
                     </div>
                     <small class="text-muted">Envio gratis</small>
                    </div>
                </div>
            </div>
        </div>
    `
}
function HTMLcProduct(con) {
    let URL = `../img/c/c${con}.jpeg`;
    let btn = `btnC${con}`;
    return `
        <div class="card mb-4 shadow-sm">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                <i style="color:orange;" class="fa fa-star" > </i>
                <i style="color:orange;" class="fa fa-star" > </i>
                <i style="color:orange;" class="fa fa-star" > </i>
                <i style="color:orange;" class="fa fa-star" > </i>
                <i style="color:orange;" class="fa fa-star" > </i>
                <p class="card-text">${C[con-1].name}</p>
                <p class="card-text">${C[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart2('${C[con-1].name}','${C[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secundary" ><a style="color:inherit;" href="/cart">Comprar</a></button>
                        <button id="${btn}" type="button" onclick="cart('${C[con-1].name}','${C[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secundary" > Añadir</button>
                     </div>
                     <small class="text-muted">Envio gratis</small>
                    </div>
                </div>
            </div>
        </div>
    `    
}
function HTMLdProduct(con) {
    let URL = `../img/d/d${con}.jpeg`;
    let btn = `btnD${con}`;
    return `
        <div class="card mb-4 shadow-sm">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                <i style="color:orange;" class="fa fa-star" > </i>
                <i style="color:orange;" class="fa fa-star" > </i>
                <i style="color:orange;" class="fa fa-star" > </i>
                <i style="color:orange;" class="fa fa-star" > </i>
                <i style="color:orange;" class="fa fa-star" > </i>
                <p class="card-text">${D[con-1].name}</p>
                <p class="card-text">${D[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart2('${D[con-1].name}','${D[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secundary" ><a style="color:inherit;" href="/cart">Comprar</a></button>
                        <button id="${btn}" type="button" onclick="cart('${D[con-1].name}','${D[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secundary" > Añadir</button>
                     </div>
                     <small class="text-muted">Envio gratis</small>
                    </div>
                </div>
            </div>
        </div>
    `    
}
//ANIMATION
function animation(){
    const toast=swal.mixin({
        toast:true,
        position:'top-end',
        showConfirmButton:false,
        timer:100
    });
    toast({
        type:'success',
        title: 'Added to shopping cart'
    });
}
// CART FUNCTIONS
function cart(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage==null) {
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    } else {
        products= JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products=JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
    document.getElementById(btncart).style.display="none";
    animation();
}
function cart2(name,price,url,con,btncart) {
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage= JSON.parse(localStorage.getItem("cart"));
    if (storage==nul) {
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    } else {
    products= JSON.parse(localStorage.getItem("cart"));
    products.push(item);
    localStorage.setItem("cart",JSON.stringify(products));        
    }
    products= JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
    document.getElementById(btncart).style.display="none";
}


(()=>{
    for (let index = 1; index < 6; index++){
    bDiv.innerHTML+=`${HTMLbProduct(index)}`        
    }
    for (let index = 1; index < 3; index++) {
        cDiv.innerHTML+=`${HTMLcProduct(index)}`;
        dDiv.innerHTML+=`${HTMLdProduct(index)}`;
    }
    if(localStorage.getItem("cart")==null){

    }else{
        products=JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`;
    }
})();