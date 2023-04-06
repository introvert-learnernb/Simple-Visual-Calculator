

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
}



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

//making working tabs....

const tabBtns = document.querySelectorAll('.tab__item');
const contents = document.querySelectorAll('.tabcontent');
// console.log(tabBtns);

tabBtns.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{

    //looping through all the buttons and removing active class...
    tabBtns.forEach((button)=>{
      if(button.classList.contains('active')){
        button.classList.remove('active');
      }
    })

    //adding active class to clicked btn...
    const clickedBtn = e.currentTarget;
    clickedBtn.classList.add('active');


    const id = clickedBtn.dataset.id;
    const desiredContent = document.getElementById(id);

    //looping through all the contents and removing active class..
    contents.forEach((content)=>{
      if(content.classList.contains('active')){
        content.classList.remove('active');
      }
    })


    //adding active class to the content which has corresponding id to button..
    desiredContent.classList.add('active');

  })
})








