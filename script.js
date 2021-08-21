      // ------changeable price id-----
const macBookPrice = document.getElementById('best-price');
const memoryCost = document.getElementById('extramemory-cost');
const storageCost = document.getElementById('extrastorage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const totalPrice = document.getElementById('total-price');
let subTotalText =document.getElementById("sub-total");
let subtotal =Number(subTotalText.innerText);


//----8gb memory----
document.getElementById('memory-8gb').addEventListener('click',function(){
   const memoryCost =document.getElementById('extramemory-cost');

 memoryCost.innerText =0;

 totalCalc();

  })

// ----16gb memory----

document.getElementById('memory-16gb').addEventListener('click',function(){
   const memoryCost =document.getElementById('extramemory-cost');
memoryCost.innerText =180;
totalCalc();
 
})

// --256GB storage--

document.getElementById('ssd-256gb').addEventListener('click',function(){
 const ssdCost =document.getElementById('extrastorage-cost');
ssdCost.innerText =0;
totalCalc();
})
//----512GB storage-----
function storage512(){
document.getElementById('ssd-512gb').addEventListener('click',function(){
   const ssdCost =document.getElementById('extrastorage-cost');
  ssdCost.innerText =100;
  totalCalc();
})
}
storage512()
//----1TB storage----
document.getElementById('ssd-1tb').addEventListener('click',function(){
 const ssdCost =document.getElementById('extrastorage-cost');
ssdCost.innerText =180;
totalCalc();
})

//---- delivery area---
document.getElementById('free-delivery').addEventListener('click',function(){
 const deliveryCost =document.getElementById('delivery-cost');
deliveryCost.innerText =0;
totalCalc();
})
document.getElementById('charge-delivery').addEventListener('click',function(){
 const deliveryCost =document.getElementById('delivery-cost');
deliveryCost.innerText =20;
totalCalc();
})



// -----------discount result function-----------
function disCountFunction(){
   document.getElementById('apply').addEventListener('click',function(){
    const promoDiscount =  document.getElementById('promo-discount');
     promoDiscount.value='stevekaku'; 
      if( promoDiscount.value =='stevekaku'){ 
         promoDiscount.value ='' 
        const discountAmount = totalCalc()*0.2; 
    return subTotalText.innerText= grandTotal -discountAmount;
    
      }
      
      })
}
 disCountFunction();

// -----------final result function-----
function totalCalc(){
 
   const bestPrice = Number(macBookPrice.innerText);
   const extraMemoryCost = Number(memoryCost.innerText);
   const extraStorageCost = Number(storageCost.innerText);
   const extraDeliveryCost = Number(deliveryCost.innerText);
   grandTotal = bestPrice + extraMemoryCost + extraStorageCost + extraDeliveryCost;
   totalPrice.innerText =grandTotal;
   
   subTotalText.innerText= grandTotal;
    return grandTotal;
}








