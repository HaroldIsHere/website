var attempt = 0;

function logIn() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password1").value;

    if (username == "fritzbautista100@gmail.com" && password == "bautista") {
        window.location.href = "Shop.html";
        return true;
    } else {
        attempt++
        if(attempt == 3) {
            alert("Cannot login. Attempts exceeded!");
            document.getElementById("btn_login").disabled = true;
            document.getElementById("username").disabled = true;
            document.getElementById("password1").disabled = true;
            document.getElementById("username").value = null;
            document.getElementById("password1").value = null;
            return false;
        } else {
            alert("incorrect username or password.");
            return false;
        }
    }
}

function toggle(){
    document.getElementById("addToCart").style.display = "flex";
    document.getElementById("shop-container").style.filter = "blur(10px)";
    document.getElementById("body1").style.overflow = "hidden";
    document.getElementById("shop-container").style.pointerEvents = "none";
}

function toggleOff(){
    document.getElementById("addToCart").style.display = "none";
    document.getElementById("shop-container").style.filter = "blur(0px)";
    document.getElementById("body1").style.overflow = "visible";
    document.getElementById("shop-container").style.pointerEvents = "all";
}

function addCart() {

}

function goToLaptopShop() {
    window.location.href = "laptop.html";
}

function goToTabShop() {
    window.location.href = "tablet.html";
}

function goToPhoneShop() {
    window.location.href = "phone.html";
}

function gotoHome(){
    window.location.href = "Shop.html";
}

const product = [
    {
        id: 1,
        image: 'img/iPhone15ProMax.png',
        color1: "#2a2a2a",
        color2: "#383e70",
        color3: "#dfded8",
        title: 'iPhone 15 Pro Max',
        Storage: 256,
        price: 89990,
    },
    {
        id: 1.1,
        image: 'img/iphone15pro.png',
        color1: "#2a2a2a",
        color2: "#383e70",
        color3: "#dfded8",
        title: 'iPhone 15 Pro',
        Storage: 512,
        price: 109990,
    },
    {
        id: 2,
        image: 'img/iphone15pro.png',
        color1: "#2a2a2a",
        color2: "#383e70",
        color3: "#dfded8",
        title: 'iPhone 15 Pro',
        price: 69990,
    },
    {
        id: 3,
        image: 'img/iphone15plus.png',
        color1: "#b7eef8",
        color2: "#faafd0",
        color3: "#faf5af",
        title: 'iPhone 15 Plus',
        price: 79990,
    },
    {
        id: 4,
        image: 'img/iphone15.png',
        color1: "#2a2a2a",
        color2: "#383e70",
        color3: "#dfded8",
        title: 'iPhone 15',
        price: 79990,
    },
    {
        id: 5,
        image: 'img/iphone14.png',
        color1: "#2a2a2a",
        color2: "#fef575",
        color3: "#f3caf8",
        title: 'iPhone 14',
        price: 79990,
    },
    {
        id: 6,
        image: 'img/Samsung/s24ultra.png',
        color1: "#2a2a2a",
        color2: "#fef575",
        color3: "#f3caf8",
        title: 'Samsung S24 Ultra',
        price: 79990,
    },
    {
        id: 7,
        image: 'img/Samsung/s24plus.png',
        color1: "#2a2a2a",
        color2: "#fef575",
        color3: "#f3caf8",
        title: 'Samsung S24 Plus',
        price: 79990,
    },
    {
        id: 8,
        image: 'img/Samsung/s24.png',
        title: 'Samsung S24',
        price: 79990,
    },
    {
        id: 9,
        image: 'img/Samsung/a55.png',
        title: 'Samsung A55',
        price: 79990,
    },
    {
        id: 10,
        image: 'img/Samsung/a35.png',
        title: 'Samsung A35',
        price: 79990,
    },
    {
        id: 11,
        image: 'img/Samsung/a05.png',
        title: 'Samsug A05',
        price: 79990,
    },
    {
        id: 12,
        image: 'img/Samsung/a05.png',
        title: 'Samsug A05',
        price: 79990,
    },
    {
        id: 13,
        image: 'img/Samsung/a05.png',
        title: 'Samsug A05',
        price: 79990,
    },
    {
        id: 14,
        image: 'img/Samsung/a05.png',
        title: 'Samsug A05',
        price: 79990,
    },
    {
        id: 15,
        image: 'img/Samsung/a05.png',
        title: 'Samsug A05',
        price: 79990,
    }
];

const shop_products = [];

var idStore = 0;
var colorStore = 0;
var storageStore;

function collectData(Getid){
    for(let i = 0; i < product.length; i++){
        var value1 = product[i].id;
        if(Getid == value1) {
            document.getElementById('Title1').innerHTML = product[i].title;
            document.getElementById('imagePreview').src = product[i].image;
            document.getElementById('priceInfo').innerHTML = "₱" + product[i].price;
            document.getElementById("color1").style.backgroundColor = product[i].color1;
            document.getElementById("color2").style.backgroundColor = product[i].color2;
            document.getElementById("color3").style.backgroundColor = product[i].color3;
            idStore = Getid;
            break;
        }
    }
}

function getColor(colorID) {
    colorStore = colorID;
    if(colorStore == "color1"){
        document.getElementById(colorID).style.border = "solid rgba(0, 0, 0, 0.237)";
        document.getElementById("color2").style.border = "none";
        document.getElementById("color3").style.border = "none";
    } else if (colorStore == "color2") {
        document.getElementById(colorID).style.border = "solid rgba(0, 0, 0, 0.237)";
        document.getElementById("color1").style.border = "none";
        document.getElementById("color3").style.border = "none";
    } else if (colorStore == "color3") {
        document.getElementById(colorID).style.border = "solid rgba(0, 0, 0, 0.237)";
        document.getElementById("color1").style.border = "none";
        document.getElementById("color2").style.border = "none";
    }
}

function getStorage(storageID) {
    storageStore = storageID;

    if(storageStore == "stor1") {
        document.getElementById(storageID).style.backgroundColor = "dimgrey";
        document.getElementById("stor2").style.backgroundColor = "#e5e5e5";
    } else if (storageStore == "stor2") {
        document.getElementById(storageID).style.backgroundColor = "dimgrey";
        document.getElementById("stor1").style.backgroundColor = "#e5e5e5";
    }
}

function addItemToCart() {
    var item = {
        id: idStore,
        image: product[idStore].image,
        title: product[idStore].title,
        price: product[idStore].price,
        color: colorStore,
    }

    shop_products.push(item);
}

function addtocart1(event) {
    const button = event.target;
    const container = button.closest('#addToCart');
    const name = container.querySelector('#Title1').textContent;

    if (!shop_products.some(item => item.title === name)) {
        const image = container.querySelector('#imagePreview').src;
        const price = container.querySelector('#priceInfo').textContent;

        const cartItem = document.createElement('div');
        cartItem.classList.add('items');

        const cartImage = document.createElement('div');
        cartImage.classList.add('tabimg');
        const img = document.createElement('img');
        img.src = image;
        cartImage.appendChild(img);

        const cartName = document.createElement('div');
        cartName.classList.add('itemname');
        cartName.textContent = name;

        const cartPrice = document.createElement('div');
        cartPrice.classList.add('itemprice');
        cartPrice.textContent = price;

        const cartQuantity = document.createElement('div');
        cartQuantity.classList.add('quantity');
        cartQuantity.innerHTML = `
            <span><input type="button" value="-" class="quantitysubtract" onclick="decrement(event)"></span>
            <span class="itemquantity" id="${name}">1</span>
            <span><input type="button" value="+" class="quantityadd" id="${name}" onclick="increment(event)"></span>
            <span><input type="button" value="X" class="remove" id="${name}" onclick="removeitem(event)"></span>
        `;

        cartItem.appendChild(cartImage);
        cartItem.appendChild(cartName);
        cartItem.appendChild(cartPrice);
        cartItem.appendChild(cartQuantity);

        document.querySelector('#listContainer').appendChild(cartItem);
    }
}

function addToCart() {
    document.getElementById("container4").style.display = "block";
    document.getElementById("container4").style.animation = "enter 1s ease-in-out";
}

function exitCart() {
    document.getElementById("container4").style.animation = "out 1s ease-in-out forwards";
}