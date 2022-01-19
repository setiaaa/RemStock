/*1*/
function welcome(argument){
    alert("Selamat Datang");
}

/*2*/
function login(argument){
    alert("Anda Berhasil Login");
}

/*3*/
$(document).ready(function(){
    $('#articleslidedown').hide();
    $('#articleslidedown').fadeIn('slow');
});

/*4*/
$(document).ready(function(){
    $('#nav-categoryslidedown').hide();
    $('#nav-categoryslidedown').fadeIn('slow')
})

/*5*/
function dark(argument){
    const toggle = document.getElementById("toggle");
    console.log(toggle)
    toggle.addEventListener("change", (e) =>{
    document.body.classList.toggle("dark", e.target.checked)
    });
}

/*6*/
$(document).ready(function(){
    $('#showinput').hide();
    $('#showinput2').hide();
    $('#showinput3').hide();
    $('#showinput4').hide();
    $('#showinput5').hide();
})

/*7*/
function showinputfunction(argument){
    $('#showinput').fadeIn('slow');
    $('#showinput2').fadeIn('slow');
    $('#showinput3').fadeIn('slow');
    $('#showinput4').fadeIn('slow');
    $('#showinput5').fadeIn('slow');
}

/*8*/
function hideinputfunction(argument){
    $('#showinput').fadeOut();
    $('#showinput2').fadeOut();
    $('#showinput3').fadeOut();
    $('#showinput4').fadeOut();
    $('#showinput5').fadeOut();
}

