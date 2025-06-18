function changeTheme() {
    const body = document.getElementById("myBox");
    const toggleBtn = document.getElementById("mode");
    const icon = document.querySelector("#myBox i");

    if(body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
    }

    else {
        body.classList.add("dark-theme");
        body.classList.remove("light-theme")
    }

    if(icon.classList.contains("fa-moon")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
    else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}