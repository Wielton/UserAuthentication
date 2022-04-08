function userLogin(){
    axios.request({
        method: "POST",
        url: "https://reqres.in/api/login",
        headers: {
            'Content-type': 'application/json'
        },
        data: {
            "email": document.getElementById('email').value,
            "password": document.getElementById('password').value
        }
    }).then(loginSuccess).catch(loginFail);
}
function loginSuccess(response){
    console.log(response);
    let passInput = document.getElementById('password').value;
    if(passInput === "cityslicka"){
        Cookies.set('sessionToken', response.data.token);
        window.location.href='/home.html';
    }else {
        loginFail();
    }
    
    

}
function loginFail(error){
    console.log(error);
    failModalDisplay();

}
function failModalDisplay(){
    // Get modal and display failed login message
    
    modal.style.display = "block";
    var failMessage = document.getElementById('failMessage');
    failMessage.innerText= "Login failed. Please try again...";
}

// When the user clicks on <span> (x), the activity modal closes
function closeModal(){
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    
    if (event.target == modal) {
    modal.style.display = "none";
    }
}
// 

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("failMessageModal");
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('submitBtn').addEventListener('click', userLogin);
