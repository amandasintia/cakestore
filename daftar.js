const tombol = document.getElementById("daftar");
tombol.onclick = regis;

function regis(e){
    
    e.preventDefault();
    let username = document.getElementById("daf_username");
    let email = document.getElementById("daf_email");
    let pass = document.getElementById("daf_pass");

    let user = {
        username:username,
        password:password
    }

    localStorage.setItem('user',JSON.stringify(user))

    console.log(JSON.stringify(user))

    localStorage.setItem("Username", username.value)
    localStorage.setItem("Email", email.value)
    localStorage.setItem("Password", pass.value)

    alert("Register Success");
}

