let egypt = document.getElementById('Egypt');
let france = document.getElementById('France');
let japan = document.getElementById('Japan');
let italy = document.getElementById('Italy');
let australia = document.getElementById('Australia');
let spain = document.getElementById('Spain');
let btnSearch = document.getElementById('btnSearch');
let searchBox = document.getElementById('search-box');
let xicon = document.getElementById('icon');
btnSearch.onclick = function(){
if(searchBox.value != ''){
        if('egypt'.includes(searchBox.value)){
            france.style.display = 'none';
            japan.style.display = 'none';
            italy.style.display = 'none';
            australia.style.display = 'none';
            spain.style.display = 'none';
            egypt.style.display = 'block';
        }
        else if('france'.includes(searchBox.value)){
            
            egypt.style.display = 'none';
            japan.style.display = 'none';
            italy.style.display = 'none';
            australia.style.display = 'none';
            spain.style.display = 'none';
            france.style.display = 'block';
        }
        else if('japan'.includes(searchBox.value)){
            
            egypt.style.display = 'none';
            france.style.display = 'none';
            italy.style.display = 'none';
            australia.style.display = 'none';
            spain.style.display = 'none';
            japan.style.display = 'block';
        }
        else if('italy'.includes(searchBox.value)){
            
            egypt.style.display = 'none';
            france.style.display = 'none';
            japan.style.display = 'none';
            australia.style.display = 'none';
            spain.style.display = 'none';
            italy.style.display = 'block';
        }
        else if('australia'.includes(searchBox.value)){
            
            egypt.style.display = 'none';
            france.style.display = 'none';
            italy.style.display = 'none';
            japan.style.display = 'none';
            spain.style.display = 'none';
            australia.style.display = 'block';
        }
        else if('spain'.includes(searchBox.value)){
            
            egypt.style.display = 'none';
            france.style.display = 'none';
            italy.style.display = 'none';
            japan.style.display = 'none';
            australia.style.display = 'none';
            spain.style.display = 'block';
        }
    }
    btnSearch.style.display = 'none';
    xicon.style.display = 'block';
}
xicon.onclick = function(){
    searchBox.value = '';
    france.style.display = 'block';
    japan.style.display = 'block';
    italy.style.display = 'block';
    australia.style.display = 'block';
    spain.style.display = 'block';
    egypt.style.display = 'block';
    xicon.style.display = 'none';
    btnSearch.style.display = 'block';
}
window.onscroll = function(){fixNavbar()};
var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;
function fixNavbar(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("fixed");
    }else{
        navbar.classList.remove("fixed");
    }
}