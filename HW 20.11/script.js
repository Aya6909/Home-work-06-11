var totaldistance = 0;

const Find = () =>{

    while (true) {

      var distance = +prompt("Qashiqtiqti engiziniz: ");
      if (distance == 0) {
        break;
      }

      var unit = prompt("Olshem birlikti engiz m, dm, km ");

      if (unit == "m") {
        totalDistance += distance;
      } else if (unit == "dm") {
        totalDistance += distance / 10;
      } else if (unit == "km") {
        totalDistance += distance * 1000;
      }

    }

    return totaldistance

}
console.log(Find());
