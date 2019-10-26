//GLOBAL E
var products=[];
var cartItems=[];
var cart_n = document.getElementById('cart_n');
//DIVS
var bDiv = document.getElementById("aDIV");
var cDiv = document.getElementById("bDIV");
var dDiv = document.getElementById("cDIV");
//INFORMATION
var A=[
    {name:'aa',price:1},
    {name:'ab',price:1},
    {name:'ac',price:1},
    {name:'ad',price:1},
    {name:'ae',price:1},
    {name:'af',price:1}
];
var B=[
    {name:'ba',price:1},
    {name:'bb',price:1},
    {name:'bc',price:1}];
var C=[
    {name:'ca',price:1},
    {name:'cb',price:1},
    {name:'cc',price:1}
];
//HTML
function HTMLaProduct(con) {
    let URL = `../img/a/a${con}.jpeg`;
    let btn = `btnA${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                <i style="color:orange;" class="fa fa-star" > </i>
                <i style="color:orange;" class="fa fa-star" > </i>
                <i style="color:orange;" class="fa fa-star" > </i>
                <i style="color:orange;" class="fa fa-star" > </i>
                <i style="color:orange;" class="fa fa-star" > </i>
                <p class="card-text">${A[con-1].name}</p>
                <p class="card-text">${A[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart2('${A[con-1].name}','${A[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secundary" ><a style="color:inherit;" href="/cart">Comprar</a></button>
                        <button id="${btn}" type="button" onclick="cart('${A[con-1].name}','${A[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secundary" > Añadir</button>
                     </div>
                     <small class="text-muted">Envio gratis</small>
                    </div>
                </div>
            </div>
        </div>
    `
}
function HTMLbProduct(con) {
    let URL = `../img/b/b${con}.jpeg`;
    let btn = `btnB${con}`;
    return `
        <div class="col-md-4">
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
        <div class="col-md-4">
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
//ANIMATION
function animation(){
    const toast=swal.mixin({
        toast:true,
        position:'top-end',
        showConfirmButton:false,
        timer:1000
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
    
}


(()=>{
    for (let index = 1; index < 6; index++){
    bDiv.innerHTML+=`${HTMLaProduct(index)}`        
    }
    for (let index = 1; index < 3; index++) {
        cDiv.innerHTML+=`${HTMLbProduct(index)}`;
        dDiv.innerHTML+=`${HTMLcProduct(index)}`;
    }
    if(localStorage.getItem("cart")==null){

    }else{
        products=JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`;
    }
})();