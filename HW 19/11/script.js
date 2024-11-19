let number = 40;

function Sansuraw(){

  while (true) {

    const qupiya = +prompt("1 den 100ge deyingi sandi jazip, jasinilgan sandi tabiniz! ");

    if (qupiya === number) {
      alert("Keremet! Siz jasinilgan sandi taptiniz! ");
      break;
    } else if (qupiya < number) {
      alert("San ulkenirek! ");
    } else {
      alert("San kishirek! ");
    }
    
  }
}


console.log(Sansuraw);