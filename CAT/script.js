document
  .getElementById("cat-query")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const environment = document.querySelector(
      'input[name="environment"]:checked'
    );
    const personality = document.querySelector(
      'input[name="personality"]:checked'
    );

    if (environment && personality) {
      alert(
        `You have a ${environment.value} cat that is ${personality.value}.`
      );
    } else {
      alert("Please select both options.");
    }
  });
