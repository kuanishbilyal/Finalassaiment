var name, password, done, error ;

function signup() {
    name = document.getElementById("name").value;
    password = document.getElementById("password").value;
    confrim = document.getElementById("confrim").value
    error = " WRITE CORRECTLY ";
    done = "That's right, you can go to our main site"
    if (name==="" || password==="" || password===""){
        document.getElementById("results").innerHTML = error;}
    else if (confrim != password){
        document.getElementById("results").innerHTML = error;
    }
    else {
        document.getElementById("results").innerHTML = done;
    }
}
$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
    });
});