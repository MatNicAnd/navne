const persons = [
  { firstName: "Mathias", lastName: "Ulrich", age: 25 },
  { firstName: "John", lastName: "Doe", age: 28 },
  { firstName: "Jane", lastName: "Smith", age: 31 },
  { firstName: "Mathias", lastName: "Doe", age: 23 },
  { firstName: "Jane", lastName: "Doe", age: 34 },
  { firstName: "Mathias", lastName: "Smith", age: 29 },
  { firstName: "John", lastName: "Smith", age: 27 },
  { firstName: "Lærke", lastName: "Mikkelsen", age: 19 },
  { firstName: "Simon", lastName: "Svendborg", age: 45 },
  { firstName: "Isabella", lastName: "Højbjerg", age: 18 },
  { firstName: "Viktor", lastName: "Hedegaard", age: 55 },
  { firstName: "Emilia", lastName: "Nordby", age: 7 },
  { firstName: "Magnus", lastName: "Mortensen", age: 12 },
  { firstName: "Amalie", lastName: "Thyregod", age: 36 },
  { firstName: "Sebastian", lastName: "Egebjerg", age: 42 },
  { firstName: "Clara", lastName: "Bramming", age: 3 },
  { firstName: "Oscar", lastName: "Lysgaard", age: 9 },
  { firstName: "Nora", lastName: "Bonde", age: 14 },
  { firstName: "Noah", lastName: "Kjærsgaard", age: 37 },
];

function sortByAgeDifference(results, targetAge) {
  results.sort(
    (a, b) => Math.abs(a.age - targetAge) - Math.abs(b.age - targetAge)
  );
}

// Event handler for name matching
document.getElementById("submitName").addEventListener("click", function () {
  const trimmedSearch = document
    .getElementById("search")
    .value.replace(/[,:\s]+/g, " ")
    .trim()
    .toLowerCase();

  const results = persons.filter((person) => {
    const fullName = `${person.firstName.toLowerCase()} ${person.lastName.toLowerCase()}`;
    const reverseFullName = `${person.lastName.toLowerCase()} ${person.firstName.toLowerCase()}`;

    let nameMatch =
      fullName.includes(trimmedSearch) ||
      reverseFullName.includes(trimmedSearch);

    return nameMatch;
  });

  clearOldResults();
  displayResults(results);
});

// Event handler for age matching
document.getElementById("submitAge").addEventListener("click", function () {
  const searchAge = parseInt(document.getElementById("age").value, 10);
  const ageCondition = document.querySelector(
    'input[name="ageCondition"]:checked'
  ).value;

  const results = persons.filter((person) => {
    let ageMatch;
    if (ageCondition === "at") {
      ageMatch = person.age === searchAge;
    } else if (ageCondition === "under") {
      ageMatch = person.age < searchAge;
    } else if (ageCondition === "over") {
      ageMatch = person.age > searchAge;
    }

    console.log(ageCondition, ageMatch, person.age, searchAge);

    return ageMatch;
  });
  sortByAgeDifference(results, searchAge);
  clearOldResults();
  displayResults(results);
});

function clearOldResults() {
  // when submit is pressed clear old results
  const oldResults = document.querySelector("div");
  if (oldResults) {
    oldResults.remove();
  }
}

function displayResults(results) {
  const resultsDiv = document.createElement("div");
  results.forEach((person) => {
    const personDiv = document.createElement("div");
    personDiv.textContent = `${person.firstName} ${person.lastName} - Age: ${person.age}`;
    resultsDiv.appendChild(personDiv);
  });

  // Append results to the body or any other container
  document.body.appendChild(resultsDiv);
}
