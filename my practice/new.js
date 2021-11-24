// Total calculate function
function totalPrice(){
    const bestPrice = getPriceValue('best-price');
    const memoryPrice = getPriceValue('memory-cost');
    const storagePrice = getPriceValue('storage-cost');
    const deliveryCharge = getPriceValue('delivery-charge');
    let totalPrice = document.getElementById('total-price');
    const totalCost = totalPrice.innerText = bestPrice + memoryPrice + storagePrice + deliveryCharge;
    const finalCost = document.getElementById('final-price');
    let finalprice = parseInt(finalCost.innerText);
    finalCost.innerText = totalPrice.innerText;
    
 }


// rea of Memory----------------///

document.getElementById('8gb-memory').addEventListener('click', function(){
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 0;
    const totalPrice = document.getElementById('total-price');
    const subtotal = 1299 + parseFloat(memoryCost.innerText);
    totalPrice.innerText = subtotal;
    totalPrice()
})


document.getElementById('16gb-memory').addEventListener('click', function(){
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 180;
    const totalPrice = document.getElementById('total-price');
    const subtotal = 1299 + parseFloat(memoryCost.innerText);
    totalPrice.innerText = subtotal;
    totalPrice()
})


//----------------The area of Storage----------------//
document.getElementById('256gb-storage').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 0;
    const totalPrice = document.getElementById('total-price');
    const subtotal = 1299 + parseFloat(storageCost.innerText);
    totalPrice.innerText = subtotal;
    totalPrice()
})
// 512gb
document.getElementById('512gb-storage').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 100;
    const totalPrice = document.getElementById('total-price');
    const subtotal = 1299 + parseFloat(storageCost.innerText);
    totalPrice.innerText = subtotal;
    totalPrice()

})
// 1tb ssd
document.getElementById('1tb-storage').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 180;
    const totalPrice = document.getElementById('total-price');
    const subtotal = 1299 + parseFloat(storageCost.innerText);
    totalPrice.innerText = subtotal;
    totalPrice()
})

//-----------Choose your delivery option------------//
document.getElementById('prime-delivery').addEventListener('click', function(){
    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = 0;
    const totalPrice = document.getElementById('total-price');
    const subtotal = 1299 + parseFloat(deliveryCharge.innerText);
    totalPrice.innerText = subtotal;
    totalPrice()
})
//
document.getElementById('charge-delivery').addEventListener('click', function(){
    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = 20;
    const totalPrice = document.getElementById('total-price');
    const subtotal = 1299 + parseFloat(deliveryCharge.innerText);
    totalPrice.innerText = subtotal;
    totalPrice()
})

// update cost function
function updateCost(id, price){
    const updatePrice = document.getElementById(id);
    updatePrice.innerText = price;
}
// get price value function on-1
function getPriceValue(id){
    let updatedPriceValue = document.getElementById(id);
    updatedPriceValue = parseFloat(updatedPriceValue.innerText);
    return updatedPriceValue;
}
