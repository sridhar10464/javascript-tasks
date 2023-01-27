// fetch("https://restcountries.com/v3.1/all")
// .then((data) => data.json())
// .then((countries) => console.log(countries))
// .catch((errMsg) => console.log( "An error occured:", errMsg));

// const country = {
//     flag: "https://flagcdn.com/in.svg",
//     name: "India",
//     population: "1380004385",
//     region: "Asia",
//     capital: "New Delhi",
// };

// document.body.innerHTML = `<div class="country-container">
// <img src="${country.flag}" alt="indian flag"/>
// <div class="content-container">
//   <h2>${country.name}</h2>
//   <p><span>Population:</span> ${country.population} </p>
//   <p><span>Region:</span> ${country.region} </p>
//   <p><span>Capital:</span> ${country.capital} </p>
// </div>
// </div>`;

const countries = [
    {
        flag: "https://flagcdn.com/in.svg",
        name: "India",
        population: "1380004385",
        region: "Asia",
        capital: "New Delhi",
    },
    {
        flag: "https://flagcdn.com/in.svg",
        name: "Germany",
        population: "1380004385",
        region: "Asia",
        capital: "New Delhi",
    },
    {
        flag: "https://flagcdn.com/in.svg",
        name: "Spain",
        population: "1380004385",
        region: "Asia",
        capital: "New Delhi",
    },
]

function createCountries(countries) {
countries.forEach((country) => {
    document.body.innerHTML += `<div class="country-container">
 <img src="${country.flags.svg}" alt="indian flag"/>
 <div class="content-container">
   <h2>${country.name.common}</h2>
   <p><span>latlng:</span> ${country.latlng} </p>
   <p><span>Region:</span> ${country.region} </p>
   <p><span>Sub-region:</span> ${country.subregion}</p>
   <p><span>Populations:</span> ${country.population} </p>
   <p><span>Capital:</span> ${country.capital} </p>
 </div>
 </div>`;
}) ;
}

// creatCountries(countries);

fetch("https://restcountries.com/v3.1/all")
.then((data) => data.json())
.then((countries) => createCountries(countries))
.catch((errMsg) => console.log( "An error occured:", errMsg));

const P1 = fetch("https://restcountries.com/v3.1/all");


// how to compare two JSON have the same properties without order?
// a) let obj1 = {name: "Person 1", age:5};
// b) let obj2 = {age:5, name: "Person 1"};


// You can use the JSON.stringify() method to compare two JSON objects and see if they are equal. For example:

let isEqual = JSON.stringify(obj1) === JSON.stringify(obj2);

//isEqual will be true

