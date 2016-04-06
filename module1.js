function hello() {
    var temp = document.querySelector('body');
    temp.innerHTML = temp.innerHTML + 'modified';
}

export { hello };