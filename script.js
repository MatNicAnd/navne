const persons = [
  { firstName: "Mathias", lastName: "Ulrich" },
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
  { firstName: "Mathias", lastName: "Doe" },
  { firstName: "Jane", lastName: "Doe" },
  { firstName: "Mathias", lastName: "Smith" },
  { firstName: "John", lastName: "Smith" },
];

document.getElementById("submit").addEventListener("click", function () {
  const searchTerm = document.getElementById("search").value.toLowerCase();
  const results = persons.filter((person) => {
    const fullName = `${person.firstName.toLowerCase()} ${person.lastName.toLowerCase()}`;
    const reverseFullName = `${person.lastName.toLowerCase()} ${person.firstName.toLowerCase()}`;
    return (
      fullName.includes(searchTerm) || reverseFullName.includes(searchTerm)
    );
  });

  displayResults(results);
});

function displayResults(results) {
  const resultsDiv = document.createElement("div");
  results.sort((a, b) => a.lastName.localeCompare(b.lastName)); // Sort by last name
  results.forEach((person) => {
    const personDiv = document.createElement("div");
    personDiv.textContent = `${person.firstName} ${person.lastName}`;
    resultsDiv.appendChild(personDiv);
  });

  // Append results to the body or any other container
  document.body.appendChild(resultsDiv);
}
