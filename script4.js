document.getElementById('paymentMethod').addEventListener('change', function () {
    var creditCardInfo = document.getElementById('creditCardInfo');
    if (this.value === 'creditCard') {
        creditCardInfo.style.display = 'block';
    } else {
        creditCardInfo.style.display = 'none';
    }
});

document.getElementById('paymentForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var paymentMethod = document.getElementById('paymentMethod').value;
    if (paymentMethod === 'fawry') {
        alert('Payment will be made via fawry');
        
    } else if (paymentMethod === 'creditCard') {
        alert('Payment will be made via credit card');
        
    }
});
