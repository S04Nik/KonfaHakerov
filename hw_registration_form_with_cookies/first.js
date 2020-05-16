//
//Валидация 
    //Проверка полей Password и RepetPassword 
    //Если не совпадают - выводим ошибку
    //Если валидация не пройдена Return false

    if(typeof sign_up !== "undefined") {
        if(getCookie("Email") && getCookie("Password")){
            window.location="second_page.html";
        }
        
        
        sign_up.addEventListener("click", function(event){
            
            console.log(email_id);
            
            event.preventDefault();
            
            //if(getCookie()){}
        
            setCookie("Email", email_id.value, 1);
            setCookie("Password", psw.value, 1)
            window.location="second_page.html";
          });
    }

    if(typeof second_button !== "undefined") {
        if(!getCookie("Email") && !getCookie("Password")){
            window.location="first_page.html";
        }
    }

console.log(getCookie("Email"));

    



function setCookie(name, value, hours) {
    var expires = "";
    if (hours) {
        var date = new Date();
        date.setTime(date.getTime() + (hours*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}