function printAll(name) {
    console.log("".concat(name, " called this function"));
}
function random(num) {
    var rand = Math.floor(Math.random() * num);
    return rand;
}
function main() {
    console.log('Main Function');
    printAll('Mex');
    console.log(random(19));
}
main();
