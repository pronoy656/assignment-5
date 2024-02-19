const allBtn = document.getElementsByClassName('btn-click');
let seat = 0;
let seatLeft = 40;
let convertGrandTOtal =0;
for(const btn of allBtn){

    btn.addEventListener('click',function (e){
        seat = seat + 1;
        
        if(seat > 4){
            return alert('YOU CAN"T CHOOSE MORE THEN 4');
      }
        seatLeft = seatLeft - 1;
// console.log(e.target)
e.target.classList.add('bg-green-400');
       

        const seatName = e.target.innerText;
        const seatClass = document.getElementById('class').innerText;
        const ticketPrice = document.getElementById('ticket-price').innerText;

// ---------------------------------place seat name class and mrp-------------------
         const container = document.getElementById('selected-container');

         const li = document.createElement('li')

         const p = document.createElement('p');
         p.innerText = seatName;
         const p1 = document.createElement('p');
         p1.innerText = seatClass;
         const p2 = document.createElement('p');
         p2.innerText = ticketPrice;

         li.appendChild(p);
         li.appendChild(p1);
         li.appendChild(p2);

         container.appendChild(li);

        //  ----------------------total cost and grand total cost ---------------------

         const totalCost = document.getElementById('total-cost').innerText;
         const convertTotalCost = parseInt(totalCost);
         document.getElementById('total-cost').innerText =  convertTotalCost + parseInt(ticketPrice ) ;

         const grandTotal = document.getElementById('grand-total').innerText;
          convertGrandTOtal = parseInt(grandTotal);
         document.getElementById('grand-total').innerText = convertGrandTOtal + parseInt(ticketPrice );


        document.getElementById('seat-number').innerText = seat;
        document.getElementById('seat-left').innerText = seatLeft;

    })

}


document.getElementById('apply-btn').addEventListener('click',function(){
    
  const inputValue =   document.getElementById('input-text').value
  const couponCode = inputValue
  if(couponCode === 'NEW15'){
    const discount = document.getElementById('discount');
    const discountAmount = parseInt(document.getElementById('total-cost').innerText) * 0.15;
    discount.innerText = discountAmount;
    const grandTotalPriceAfterCoupon =  document.getElementById('grand-total');
    grandTotalPriceAfterCoupon.innerText =  document.getElementById('total-cost').innerText - discountAmount;

  }
 else if(couponCode === 'Couple 20'){
  const discount = document.getElementById('discount');
  const discountAmount = parseInt(document.getElementById('total-cost').innerText) * 0.2;
  discount.innerText = discountAmount;
  const grandTotalPriceAfterCoupon =  document.getElementById('grand-total');
  grandTotalPriceAfterCoupon.innerText =  document.getElementById('total-cost').innerText - discountAmount;
  }
  else{
   return alert ('INVALID COUPON');
  }
})

document.getElementById('reload').addEventListener('click',function(){
  window.location.reload();
})

// const input = document.getElementsByClassName('input-field');
// const button = document.getElementById('next-button');

// input.addEventListener('input',function(){
//      if(input.value.length > 3){
//        button.disabled = false;
//      }
// })
