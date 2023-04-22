
let principalAmount = document.getElementById('loanAmount');
let interest = document.getElementById('rate')
let years = document.getElementById('year')

function emi(){
    let pa = parseInt(principalAmount.value) ;
    let int = parseInt(interest.value);
    let year = parseInt(years.value);
    console.log(typeof int);

    let ints = (pa * (int/100))
    let total_amount = pa + (ints * year *12);
    let emi = (total_amount/(year*12)) ;
    let value = total_amount  - pa;
    console.log(emi.toLocaleString('en-IN'));
 

    let month =document.getElementById('month');
    month.innerHTML = emi.toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR'
    });

    let amount = document.getElementById('amount');
    amount.innerHTML = "₹ " + total_amount.toLocaleString('en-IN')


    let interests = document.getElementById('interest');
    interests.innerHTML = "₹ " + value.toLocaleString('en-IN');
    let chartVisible = document.getElementById('chartContainer');
    chartVisible.style.display = "block";
    let footer = document.getElementById('footer');
    footer.style.backgroundColor = "white"
    footer.style.padding = "50px 0 10px 0"
    var chart = new CanvasJS.Chart("chartContainer",
    {
        title:{
        
      },

      data: [
      {
       indexLabelPlacement: "outside",
       type: "doughnut",
       dataPoints: [
       {  y: value, indexLabel:"Extra Money" },
       {  y: total_amount, indexLabel: "Total Amount", exploded: true },
       
       ]
     }
     ]
   });

    chart.render();

}




document.getElementById('btn').addEventListener('click' , ()=>{
    emi()

})













