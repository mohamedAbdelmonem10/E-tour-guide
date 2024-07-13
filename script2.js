document.getElementById('show').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('you have Booked your tour successfully!');
    window.location.href = 'pay.html';
});
