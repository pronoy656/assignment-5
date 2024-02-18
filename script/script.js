const allBtn = document.getElementsByClassName('btn-click');
let seat = 0;
let seatLeft = 40;
for(const btn of allBtn){

    btn.addEventListener('click',function (e){
        seat = seat + 1;
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
         const convertGrandTOtal = parseInt(grandTotal);
         document.getElementById('grand-total').innerText = convertGrandTOtal + parseInt(ticketPrice );


        if(seat > 4){
              return alert('YOU CAN"T CHOOSE MORE THEN 4');
        }

        document.getElementById('seat-number').innerText = seat;
        document.getElementById('seat-left').innerText = seatLeft;
    })

}


document.getElementById('apply-btn').addEventListener('click',function(){
  const inputValue =   document.getElementById('input-text').value
  const couponCode = inputValue.split(' ').join('')
  if(couponCode === 'NEW15'){
    const discount = document.getElementById('discount');
    const discountAmount = 'convertTotalCost' + parseInt(ticketPrice ) * 0.15;
    discount.innerText = discountAmount;

  }
  else{
    console.log('invalid')
  }
})

const spanTotal = document.getElementById('span-total');
const spanDiscount = document.getElementById('span-discount');
const spanGrandTotal = document.getElementById('span-grand-total');
function calculate(){
    const total = parseInt(spanTotal.innerText);
    const discount = parseInt(spanDiscount.innerText);
    const grandTotal = parseInt(spanGrandTotal.innerText);
}