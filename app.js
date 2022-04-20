function displayPassword() {
    var show = document.getElementById("password");
    if(show.value === ""){
        alert("Please Enter Password");
    }
    if (show.type === "password") {
      show.type = "text";
    }
     else {
      show.type = "password";
    }
}