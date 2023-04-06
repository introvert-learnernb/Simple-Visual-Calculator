<<<<<<< HEAD
import { product__details } from "./products.js";
=======
>>>>>>> 3d27426 (previous changes to be pushed..)


//to make working tabs.... 
// window. is written to make openTab function of global scope so that 
// onclick can work in index.html...

window.openTab = function (evt, category) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(category).style.display = "block";
  evt.currentTarget.className += " active";
};


<<<<<<< HEAD
// it returns an array of elements having class (product__item__box)
const box = document.getElementsByClassName("product__item__box");

// it returns the list item 
let totalItem = document.getElementById('total-item'); // total-counter

//it loops through each element of the array box...
let totalCounter = 0;

/*============== Making changes to the modal ============ */




let tableBody = document.getElementById('tableBody');
let str = "";
let totalBill = document.getElementById('total-bill');
let totalBillNumber = 0;
let displayCounter = document.getElementById('display-calculate');



for (let i = 0; i < box.length; i++) {

  box[i].addEventListener("click", function() {

    let counter = document.getElementsByClassName('counter')[i];
    let counterNumber = counter.innerText;
    if (counterNumber == 0) {
      ++counterNumber;
      counter.innerText = counterNumber;

      totalCounter++;
      totalItem.innerText = totalCounter;


      let product__Name = [];
    let product__Price = [];
    let product__Qty = [];
    let product__Total = [];
    product__Name[i] = product__details[i]['Name'];
    product__Price[i] = product__details[i]['Price'];
    product__Qty[i] = counterNumber;
    product__Total[i] = product__Qty[i] * product__Price[i];
    
    totalBillNumber += product__Total[i];
    totalBill.innerText = totalBillNumber;
    displayCounter.innerText = totalBillNumber;

    window.decremented = function () {
      product__Qty[i]--;
      console.log(product__Qty);
    };

    window.incremented = function () {
      product__Qty[i]++;
      console.log(product__Qty);
    };

    str += `
    <tr>
      <td class = "item__Name">${product__Name[i]}</td>
      <td class = "item__Price">${product__Price[i]}</td>
      <td class = "item__Qty">
      <i class="ri-arrow-left-s-fill" onclick="decremented()"></i>${product__Qty[i]}<i class="ri-arrow-right-s-fill" onclick="incremented()" ></i>
      </td>
      <td class = "item__Total">${product__Total[i]}</td>
    </tr>
`;

    
tableBody.innerHTML = str;

    } else {
      box[i].disabled = true;

    }

  

  })



  // console.log(totalItems);

=======



let product__boxes = document.getElementsByClassName('product__item__box');
let cart__icons = document.getElementsByClassName('counter');
let totalCounter = 0;
let totalListNumber = document.getElementById('total-item');
let displayCounter = document.getElementById('display-calculate');

for(let i = 0; i < product__boxes.length ; i++){
  let product__box = product__boxes[i];
  let cart__icon = cart__icons[i];
  cart__icon.addEventListener('click', cartButtonGlow);
  cart__icon.addEventListener('click', productBoxClicked);
 

  function productBoxClicked(){
    let productName = product__box.querySelector('.product__name');
    let productPrice = product__box.querySelector('.product__price');
    let productimgSrc = product__box.querySelector('.product__img').src;
    console.log(productName,productPrice,productimgSrc);
    addItemToCart(productName,productPrice,productimgSrc);
    
    updateTotal();
  }


  function addItemToCart(productName,productPrice,productimgSrc){
    let cartRow = document.createElement('tr');
    cartRow.classList.add('cartRow');
    console.log(cartRow);

    let Name = productName.innerText;
    let Price = productPrice.innerText;

    let cartItem = document.getElementById('tableBody');
    let cartItemNames = cartItem.getElementsByClassName('cart__name');
    for(let i = 0 ; i < cartItemNames.length ; i++){
      if(cartItemNames[i].innerText === productName.innerText){
        alert('This item is already added.');
        return;
      }
    }

    totalCounter++;
    totalListNumber.innerText = totalCounter;

    let cartRowContents = `
    <td class = "cart__item">
        <div class="cart__img"><img src="${productimgSrc}" alt="cart image"></div>
        <div class="cart__name">${Name}</div>
    </td>
    <td class = "item__Price">${Price}</td>
    <td class = "item__Qty">
        <input type="number"  class="cart__qty"  value="1" >
        <button class="delete__btn btn"><i class="ri-close-fill"></i></button>
    </td>
    
    `;

    cartRow.innerHTML = cartRowContents;
    cartItem.append(cartRow);
    cartRow.querySelector('.delete__btn').addEventListener('click',removeCartItem);
    cartRow.querySelector('.cart__qty').addEventListener('change', quantityChanged);
  }

  function cartButtonGlow(event){
    let counterCircle = product__box.getElementsByClassName('counter')[0];
    counterCircle.classList.add('active');
    console.log(counterCircle);
    console.log('clicked');
  }
}


let deleteBtns = document.getElementsByClassName('delete__btn');
for (let i = 0 ; i < deleteBtns.length ; i++){
  let deleteBtn = deleteBtns[i];
  deleteBtn.addEventListener('click', removeCartItem);
  
}

function removeCartItem(event){
  let item = event.target;
  let cartRow = item.parentElement.parentElement;
  cartRow.remove();
  --totalCounter;
  totalListNumber.innerText = totalCounter;
  updateTotal();
}


let quantityBtns = document.getElementsByClassName('cart__qty');
for(let i = 0 ; i < quantityBtns.length ; i++){
  let quantityBtn = quantityBtns[i];
  quantityBtn.addEventListener('change', quantityChanged);

}

function quantityChanged(event){
  let item = event.target;
  let value = item.value;
  console.log(value);
  console.log('quantity changed');
  if(value <= 0 || isNaN(value)){
    quantityBtn.value = 1;
  }
  updateTotal();
}


let paidBtn = document.querySelector('.paid__btn');
paidBtn.addEventListener('click', paidClicked);

function paidClicked(){
  alert('Thank you for your purchase!!!')
  let cartBody = document.getElementById('tableBody');
  while(cartBody.hasChildNodes()){
    cartBody.removeChild(cartBody.firstChild);
  }
  updateTotal();
  location.reload();
>>>>>>> 3d27426 (previous changes to be pushed..)
}



<<<<<<< HEAD


=======
function updateTotal(){
  let cartRows = document.getElementsByClassName('cartRow');
  let total = 0;
  for (let i = 0; i < cartRows.length; i++){
    let cartRow = cartRows[i];
    let cartPrice = cartRow.getElementsByClassName('item__Price')[0];
    let cartQty = cartRow.getElementsByClassName('cart__qty')[0];
    total += Number(cartPrice.innerText.replace('NRs','')) * cartQty.value;
    // console.log(total);
  }
  document.querySelector('.cart__total').innerText = total;
  displayCounter.innerText = total;
}
>>>>>>> 3d27426 (previous changes to be pushed..)



/* ================== DARK/LIGHT THEME ============== */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//We validate if the user previously choose a topic
if (selectedTheme) {
  //If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

//Activate /Deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  //Add or remove the dark icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  //We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})



/* =================== TO SHOW AND HIDE THE LIST ================= */
let modal = document.getElementById('pop__modal'); // the modal..
let list = document.getElementById('the-list'); // the list...
let close = document.getElementById('pop-close'); // close button


list.addEventListener('click', function () {
  modal.classList.add('active');
});

close.addEventListener('click', function () {
  modal.classList.remove('active');
});


<<<<<<< HEAD
// /* ======================== GETTING THE NAMES OF ELEMENTS FROM OBJECTS ============== */
let nameProduct = document.querySelectorAll('.product__name');



for (let i = 0; i < nameProduct.length; i++) {
  nameProduct[i].innerText = product__details[i]['Name'];

}
=======

>>>>>>> 3d27426 (previous changes to be pushed..)





