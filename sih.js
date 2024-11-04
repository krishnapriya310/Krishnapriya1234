document.getElementById('farmerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting immediately

    const farmerName = document.getElementById('farmerName').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const farmerIdFile = document.getElementById('farmerId').files[0];
    const farmLocation = document.getElementById('farmLocation').value;
    
    const buyerName = document.getElementById('buyerName').value;
    const companyName = document.getElementById('companyName').value;
    const businessRegNo = document.getElementById('businessRegNo').value;
    const buyerAddress = document.getElementById('buyerAddress').value;

    if (!farmerName || !contactNumber || !farmerIdFile || !buyerName || !companyName || !businessRegNo || !buyerAddress) {
        alert('Please fill all the fields and upload the Farmer ID.');
    } else {
        alert('Form submitted successfully!');
        // You can handle form submission here (e.g., using AJAX or form action)
    }
});
