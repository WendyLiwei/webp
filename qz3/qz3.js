var text = document.getElementById('text');
//event listener
document.addEventListener('keydown',logKey);
function logKey(e) {
    text.textContent+=`${e.key}`;
}
