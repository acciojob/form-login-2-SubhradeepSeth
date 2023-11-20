//your JS code here. If required.
function myFunction(){
    var firstName = document.getElementById('f_name').value;
    var lastName = document.getElementById('l-name').value;
    var phoneNumber = document.getElementById('ph-number').value;
    var email = document.getElementById('email').value;

    var alertMessage = "First Name: " + firstName + "\n" +
                       "Last Name: " + lastName + "\n" +
                       "Phone Number: " + phoneNumber + "\n" +
                       "Email ID: " + email;

    alert(alertMessage);
}