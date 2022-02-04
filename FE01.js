// fetching data using async
async function fetchData() {
  const result = await fetch(
    "https://akabab.github.io/starwars-api/api/all.json"
  )
    .then((response) => {
      return response.json();
    })
    .catch((e) => {
      console.log(e);
      return [];
    });
  // this add a html in the current main class
  result.slice(0, 20).map((element) => {
    const main = document.getElementById("appendId");
    main.innerHTML +=
      '<div class="card" id="' +
      element.id +
      '"><div class="card-image"><img src="' +
      element.image +
      '" alt=""/></div><div class="card-name"><div class="name">' +
      element.name +
      "  " +
      element.mass +
      "kg  " +
      element.gender +
      " character Id : " +
      element.id +
      "</div></div></div>";
  });
}

fetchData();
