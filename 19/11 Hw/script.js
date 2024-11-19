let num = +(prompt("Enter number: "))

function JupTak() {
    if (num % 2 == 0){
        return "Jup san"
    }else {
        return "Tak san"
    }
}

alert(JupTak() + " - " + num);

console.log(JupTak() + " - " + num);