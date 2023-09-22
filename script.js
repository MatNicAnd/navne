let listeStr =
  "Richard Madsen 52, André Mackus 39, Maja Miskeri 22, Mathias Ulrich 28, Tobias Michaelsen 23, Philip Schiøler 23, Nicklas Pedersen 23, Per Pedersen 60";
let listeArr = listeStr.split(", ");
let deltagere = [];
for (let i = 0; i < listeArr.length; i++) {
  let temp = listeArr[i].split(" ");
  deltagere.push({ forNavn: temp[0], efterNavn: temp[1], alder: temp[2] });
}
console.log(deltagere);

function sortDeltagereDescendingByName(a, b) {
  // Compare the last names first
  const lastNameComparison = b.efterNavn.localeCompare(a.efterNavn);

  // If the last names are the same, compare the first names
  if (lastNameComparison === 0) {
    return b.forNavn.localeCompare(a.forNavn);
  }

  return lastNameComparison;
}

console.log(deltagere);
