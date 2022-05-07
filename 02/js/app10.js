function change() {
    document.getElementById("episodes").classList.add('active');


    document.getElementById("seasons").classList.remove('active');
}
if(change() ) {
    document.getElementById("holds").style.display = "block";
}