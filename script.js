let countrycontainer = document.querySelector(".countrycontainer");
console.log(countrycontainer)
const searchinput = document.querySelector(".search-container");
console.dir(searchinput);

fetch("https://restcountries.com/v3.1/all").then((res) => {
    return res.json();
}).then((data) => {
    data.forEach((Element,i) => {
        console.log(Element,i);
        let countrycard = document.createElement("a");
        countrycard.classList.add("country-card");
    let cardhtml = ` 
    <img src=${Element.flags.svg} alt="">
                <div class="crad-text">
                    <h3 class="card-title">${Element.name.common}</h3>
                    <p><strong>population: </strong>${Element.population}</p>
                    <p><strong>region: </strong>${Element.region}</p>
                    <p><strong>capital: </strong>${Element.capital}</p>
                </div>`
countrycard.innerHTML = cardhtml;
countrycontainer.appendChild(countrycard);
    });
});

searchinput.addEventListener("input", (evt) => {
    console.log(evt.target.value);
});

// let countrycard = document.createElement("a");
// countrycard.classList.add("country-card");
// let cardhtml =` 
// <img src="https://flagcdn.com/is.svg" alt="">
//                 <div class="crad-text">
//                     <h3 class="card-title">india</h3>
//                     <p><strong>population: </strong>87,900,7000</p>
//                     <p><strong>region: </strong>asia</p>
//                     <p><strong>capital: </strong>delhi</p>
//                 </div>`
// countrycard.innerHTML = cardhtml;
// console.log(img);