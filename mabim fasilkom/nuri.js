function Login() {
    var done = 0;
    var username = document.login.username.value;
    var password = document.login.password.value;
    if (username == "Nuricantik" && password =="himasi"){
            if(confirm("Apakah Ingin Login?") == true){
                window.location.href = "https://github.com/Nuricantikk";
            } else {
                alert("Membatalkan login!");
            }
            
    } else{
            if (done==0) {
                alert("Username/Pasword Salah");
            }
        }
    }