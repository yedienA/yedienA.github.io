const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            alert('Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.');
            contactForm.reset();
        } else {
            alert('Vul alle velden in alstublieft!');
        }
    });
}
