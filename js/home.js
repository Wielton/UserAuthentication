function userLogout(){
    Cookies.remove('sessionToken');
    window.location.href='/index.html';
}
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
    document.getElementById('colorName').innerText=color.name;
    document.getElementById('yearCreated').innerText=color.year;
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
function checkCookie(){  
        if(document.cookie.length!=0){  
            console.log(document.cookie);  
        } else {  
            window.location.href='/index.html'; 
        }  
    } 


document.getElementById('logoutBtn').addEventListener('click', userLogout);
window.addEventListener('load', colorLoad);
// window.addEventListener('load', cookieCheck);
// 