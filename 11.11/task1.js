let a = parseInt(prompt("Birinshi qabirga sanin engiz: "));
let b = parseInt(prompt("Ekinshi qabirga sanin engiz: "));
let c = parseInt(prompt("Ushinshi qabirga sanin engiz: "));

if (a + b > c && a + c > b && b + c > a) {
  alert("Бұл үшбұрыш жасай алады");
} else {
  alert("Бұл үшбұрыш жасай алмайды");
}