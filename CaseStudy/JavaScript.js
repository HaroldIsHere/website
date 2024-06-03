var attempt = 0;

function logIn() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password1").value;

    if (username == "fritzbautista100@gmail.com" && password == "bautista") {
        window.location.href = "index.html";
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
    window.location.href = "index.html";
}

const product = [
    {
        id: 1,
        image: 'img/Phones/Apple/iPhone15ProMax.png',
        color1: "#2a2a2a",
        color2: "#383e70",
        color3: "#dfded8",
        title: 'iPhone 15 Pro Max',
        price: 89990,
    },
    {
        id: 2,
        image: 'img/Phones/Apple/iphone15pro.png',
        color1: "#2a2a2a",
        color2: "#383e70",
        color3: "#dfded8",
        title: 'iPhone 15 Pro',
        price: 79990,
    },
    {
        id: 3,
        image: 'img/Phones/Apple/iphone15plus.png',
        color1: "#b7eef8",
        color2: "#faafd0",
        color3: "#faf5af",
        title: 'iPhone 15 Plus',
        price: 79990,
    },
    {
        id: 4,
        image: 'img/Phones/Apple/iphone15.png',
        color1: "#2a2a2a",
        color2: "#383e70",
        color3: "#dfded8",
        title: 'iPhone 15',
        price: 79990,
    },
    {
        id: 5,
        image: 'img/Phones/Apple/iphone14.png',
        color1: "#2a2a2a",
        color2: "#fef575",
        color3: "#f3caf8",
        title: 'iPhone 14',
        price: 79990,
    },
    {
        id: 6,
        image: 'img/Phones/Samsung/s24ultra.png',
        color1: "#2a2a2a",
        color2: "#fef575",
        color3: "#f3caf8",
        title: 'Samsung S24 Ultra',
        price: 79990,
    },
    {
        id: 7,
        image: 'img/Phones/Samsung/s24plus.png',
        color1: "#2a2a2a",
        color2: "#fef575",
        color3: "#f3caf8",
        title: 'Samsung S24 Plus',
        price: 79990,
    },
    {
        id: 8,
        image: 'img/Phones/Samsung/s24.png',
        title: 'Samsung S24',
        price: 79990,
    },
    {
        id: 9,
        image: 'img/Phones/Samsung/a55.png',
        title: 'Samsung A55',
        price: 79990,
    },
    {
        id: 10,
        image: 'img/Phones/Samsung/a35.png',
        title: 'Samsung A35',
        price: 79990,
    },
    {
        id: 11,
        image: 'img/Phones/Samsung/a05.png',
        title: 'Samsung A05',
        price: 79990,
    },
    {
        id: 12,
        image: 'img/Tablets/Apple/iPad Pro 12.9.png',
        title: 'iPad Pro 12.9 Inch M4',
        price: 79990,
    },
    {
        id: 13,
        image: 'img/Tablets/Apple/iPad Pro 11.png',
        title: 'iPad Pro 11 Inch M4',
        price: 79990,
    },
    {
        id: 14,
        image: 'img/Tablets/Apple/iPad Air 11.png',
        title: 'iPad Air M2',
        price: 79990,
    },
    {
        id: 15,
        image: 'img/Tablets/Apple/iPad 10th Gen.png',
        title: 'iPad 10th Generation',
        price: 79990,
    },
    {
        id: 16,
        image: 'img/Tablets/Apple/iPad Mini 6.png',
        title: 'iPad Mini 6',
        price: 79990,
    },
    {
        id: 17,
        image: 'img/Tablets/Samsung/s9 Ultra.png',
        title: 'Samsung Tab S9 Ultra',
        price: 79990,
    },
    {
        id: 18,
        image: 'img/Tablets/Samsung/s9 Plus.png',
        title: 'Samsung Tab S9 Ultra',
        price: 79990,
    },
    {
        id: 19,
        image: 'img/Tablets/Samsung/Samsung Tab S9.png',
        title: 'Samsung Tab S9 Ultra',
        price: 79990,
    },
    {
        id: 20,
        image: 'img/Tablets/Samsung/Samsung Tab s9 FE.png',
        title: 'Samsung Tab S9 FE',
        price: 79990,
    },
    {
        id: 21,
        image: 'img/Tablets/Samsung/Samsung Tab A9+.png',
        title: 'Samsung Tab S9 FE',
        price: 79990,
    },
    {
        id: 22,
        image: 'img/Tablets/Samsung/Samsung Tab A9.png',
        title: 'Samsung Tab S9 FE',
        price: 79990,
    },
    {
        id: 23,
        image: 'img/Laptops/Apple/Macbook Pro M3 2023.png',
        title: 'Macbook Pro M3 2023',
        price: 79990,
    },
    {
        id: 24,
        image: 'img/Laptops/Apple/Macbook Air M3 2023.png',
        title: 'Macbook Air M3 2023',
        price: 79990,
    },
    {
        id: 25,
        image: 'img/Laptops/Apple/Macbook Pro M1 2021.png',
        title: 'Macbook Pro M1 2021',
        price: 79990,
    },
    {
        id: 26,
        image: 'img/Laptops/Apple/Mac Mini.png',
        title: 'Mac Mini',
        price: 79990,
    },
    {
        id: 27,
        image: 'img/Laptops/Apple/Macbook Air M1 2021.png',
        title: 'Macbook Air M1 2021',
        price: 79990,
    },
    {
        id: 28,
        image: 'img/Laptops/Apple/Macbook Air M1 2021.png',
        title: 'Macbook Air M1 2021',
        price: 79990,
    },
    {
        id: 29,
        image: 'img/Laptops/Apple/Macbook Air M1 2021.png',
        title: 'Macbook Air M1 2021',
        price: 79990,
    }
];

const shop_products = [];
let dataTransfer = [];

var idStore = 0;
var colorStore = 0;
var colorName = "";
var storageStore;
var storageCapacity ="";

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
        colorName = product[idStore].color1;
    } else if (colorStore == "color2") {
        document.getElementById(colorID).style.border = "solid rgba(0, 0, 0, 0.237)";
        document.getElementById("color1").style.border = "none";
        document.getElementById("color3").style.border = "none";
        colorName = product[idStore].color2;
    } else if (colorStore == "color3") {
        document.getElementById(colorID).style.border = "solid rgba(0, 0, 0, 0.237)";
        document.getElementById("color1").style.border = "none";
        document.getElementById("color2").style.border = "none";
        colorName = product[idStore].color3;
    }
}

function getStorage(storageID) {
    storageStore = storageID;
    if(storageStore == "stor1") {
        document.getElementById(storageID).style.backgroundColor = "dimgrey";
        document.getElementById("stor2").style.backgroundColor = "#e5e5e5";
        storageCapacity = 256;
    } else if (storageStore == "stor2") {
        document.getElementById(storageID).style.backgroundColor = "dimgrey";
        document.getElementById("stor1").style.backgroundColor = "#e5e5e5";
        storageCapacity = 512;
    }
}

function addtocart1(event) {
    if(colorName == "" && storageCapacity == ""){
        alert("Please choose a color and storage capacity first!")
    } else if (colorName == "") {
        alert("Please choose a color first!")
    } else if (storageCapacity == ""){
        alert("Please choose a storage capacity first!")
    } else {
    const button = event.target;
    const container = button.closest('#addToCart');
    const name = container.querySelector('#Title1').textContent;

    if (!shop_products.some(item => item.title === name)) {
        shop_products.push(name);
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

        const cartColorTitle = document.createElement('div');
        cartColorTitle.classList.add('colorTitle1');
        cartColorTitle.textContent = "Color:";

        const cartStorageTitle = document.createElement('div');
        cartStorageTitle.classList.add('storageTitle1');
        cartStorageTitle.textContent = "Storage:";

        const cartColor = document.createElement('div');
        cartColor.classList.add('color');
        cartColor.style.backgroundColor = colorName;

        const cartStorage = document.createElement('div');
        cartStorage.classList.add('storage');
        cartStorage.textContent = storageCapacity;

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
        cartItem.appendChild(cartColor);
        cartItem.appendChild(cartColorTitle);
        cartItem.appendChild(cartStorageTitle);
        cartItem.appendChild(cartStorage);
        cartItem.appendChild(cartPrice);
        cartItem.appendChild(cartQuantity);

        document.querySelector('#listContainer').appendChild(cartItem);
        dataTransfer.push(cartItem);

        let priceValue = price.replace(/₱|,/g, "");
        const parsedPrice = parseFloat(priceValue);

        updateTotal(parsedPrice, 1);
        sessionStorage.setItem('itemArray', JSON.stringify(shop_products))
        toggleOff();
        } else {
        alert("Item is already in the cart!");
    }
}
}

function updateTotal(price, quantity) {
const currentTotalElement = document.querySelector('.totalPrice');
const currentTotal = parseFloat(currentTotalElement.textContent.replace(/₱|,/g, "")) || 0;
const newTotal = currentTotal + (price * quantity);
currentTotalElement.textContent = `₱${newTotal.toLocaleString()}`;
}

function increment(event) {
const button = event.target;
const itemContainer = button.closest('.items');
const quantityElement = itemContainer.querySelector('.itemquantity');
let quantity = parseInt(quantityElement.textContent);
quantity++;
quantityElement.textContent = quantity;

const priceElement = itemContainer.querySelector('.itemprice');
let priceValue = priceElement.textContent.replace(/₱|,/g, "");
const price = parseFloat(priceValue);
updateTotal(price, 1);
}

function decrement(event) {
const button = event.target;
const itemContainer = button.closest('.items');
const quantityElement = itemContainer.querySelector('.itemquantity');
let quantity = parseInt(quantityElement.textContent);
if (quantity > 1) {
    quantity--;
    quantityElement.textContent = quantity;

    const priceElement = itemContainer.querySelector('.itemprice');
    let priceValue = priceElement.textContent.replace(/₱|,/g, "");
    const price = parseFloat(priceValue);
    updateTotal(price, -1);
}
}

function removeitem(event) {
const button = event.target;
const itemContainer = button.closest('.items');
const quantityElement = itemContainer.querySelector('.itemquantity');
const quantity = parseInt(quantityElement.textContent);

const priceElement = itemContainer.querySelector('.itemprice');
let priceValue = priceElement.textContent.replace(/₱|,/g, "");
const price = parseFloat(priceValue);

updateTotal(-price, quantity);

itemContainer.remove();
}


function addToCart() {
    document.getElementById("container4").style.display = "block";
    document.getElementById("container4").style.animation = "enter 1s ease-in-out";
}

function exitCart() {
    document.getElementById("container4").style.animation = "out 1s ease-in-out forwards";
}

function renderArray() {
    dataTransfer.forEach((item, index) => {
        document.querySelector('#listContainer').appendChild(item);
    });
}

function saveArray() {
    const arrayString = JSON.stringify(dataTransfer);
    localStorage.setItem('myArray', arrayString);
    alert('Array saved!');
}

function loadArray() {
    const arrayString = localStorage.getItem('myArray');
    if (arrayString) {
        dataTransfer = JSON.parse(arrayString);
        renderArray();
        alert('Array loaded!');
    } else {
        alert('No saved array found.');
    }
}
