// Function to change the background color when the button is clicked
document.getElementById('changeColorButton').addEventListener('click', function() {
    // Get a random color
    const randomColor = getRandomColor();
    // Change the background color of the body
    document.body.style.backgroundColor = randomColor;
});

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Form validation and handling submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        document.getElementById('formMessage').textContent = 'Thank you for contacting us, ' + name + '! Your message has been sent.';
        document.getElementById('formMessage').style.color = 'green';
    } else {
        document.getElementById('formMessage').textContent = 'Please fill in all fields.';
        document.getElementById('formMessage').style.color = 'red';
    }
});
