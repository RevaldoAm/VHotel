

function validateRegistration() {
    var name = document.getElementById("name");
    var checkInDate = new Date(document.getElementById("checkin").value);
    var checkOutDate = new Date(document.getElementById("checkout").value);
    var roomType = new Selection(document.getElementById("select").value);
    
    if (name.value.length < 5) {
        name.value = "";
        name.placeholder = "Must be more than 5 characters";
        name.style.color = "red";
        return;
    }

    if(checkOutDate <= checkInDate){
        alert('Check out date must come after the Check in');
        return;
    }

    

}