function nav_menu(){
    document.getElementById('display-menu').classList.toggle('show');
}

const hamburger_button = document.getElementById('hamburger');

hamburger_button.onclick = nav_menu;