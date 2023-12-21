document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const emailName = document.getElementById('name').value;
    const emailInput = document.getElementById('email').value;
    const emailMessage = document.getElementById('message').value;
    console.log('Form submitted!');
    alert('Response recorded!');
});
