const indexButton = document.querySelector('.index');
const navbar = document.querySelector('.navbar');

indexButton.addEventListener('click', function(){
    console.log("clicked");
    if (navbar.style.display === "none"){
    navbar.style.display = "block";
}else {
    navbar.style.display = "none";
}
    console.log(navbar.style.display);
});