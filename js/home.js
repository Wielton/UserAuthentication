function userLogout(){
    Cookies.remove('sessionToken');
    window.location.href='/index.html';
}
// 
function colorLoad(){
    axios.request({
        method: "GET",
        url: 'https://reqres.in/api/unknown'
    }).then(loadSuccess).catch(fail);
}
function loadSuccess(response){
    Cookies.get('sessionToken');
    let colorsArray = response.data.data;
    console.log(colorsArray);
    let color = colorsArray[
        Math.floor(Math.random() * colorsArray.length)
    ]
    console.log(color.name, color.year, color.color);
    document.getElementById('colorName').innerText="This color is " +color.name;
    document.getElementById('yearCreated').innerText="It was created in " +color.year;
    document.getElementById('colorBox').style.backgroundColor=color.color;
    /*
    colorsArray.forEach(color => {
    console.log(color);
    console.log(color.name);
    console.log(color.year);
    console.log(color.color);
    document.getElementById('colorName').innerText
    })
    */
}
function fail(error){
    console.log(error);
}

// On page load will check for an active cookie and if not active will redirect to login screen
function checkCookie(){  
        if(document.cookie.length!=0){  
            console.log(document.cookie);  
        } else {  
            returnToLoginScreen();
            }  
    } 
    function returnToLoginScreen(){
        // Get modal and display failed login message
        
        modal.style.display = "block";
        var returnMessage = document.getElementById('returnToLogin');
        returnMessage.innerText = "You are not logged in.  Click the button to return to login page";
        var returnBtn = document.getElementById('returnToLoginBtn');
        returnBtn.addEventListener('click', buttonReturn);
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
function buttonReturn(){
    window.location.href='/index.html';
}

var modal = document.getElementById("returnToLoginModal");
document.getElementById('logoutBtn').addEventListener('click', userLogout);
window.addEventListener('load', colorLoad);
