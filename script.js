var inputFields = document.querySelectorAll('input[type="number"]');

inputFields.forEach(function(input) {
    input.addEventListener('input', function() {
        populateInvoiceItems();  
    });
});

function populateInvoiceItems(){
    var total=0;
    var gstrate=18;
    for (let i=1;i<=10;i++){
        var price= document.getElementById('Price'+i).value;
        var count= document.getElementById('count'+i).value;
        var totals=(price*count);
        document.getElementById('Total'+i).value=totals;
        total=total+totals;
    }
    var gst=(total*gstrate)/100;
    document.getElementById('gst').innerText=gst.toFixed(2);
    document.getElementById('total').innerText=(total+gst).toFixed(2);
}