const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(data => data.json())
        .then(data => allCountryDisplay(data))
}

const allCountryDisplay = (countries) => {
    // console.log(countries)
    const countriesHTML = countries.map(country => getCountryHTML(country))
    // console.log(countriesHTML)

    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ')
}



const getCountryHTML = country => {
    return `
    <div class="contry-div">
    <h2>${country.name.common} </h2>
    <p>${country.capital}</p>
    <img src="${country.flags.png}" alt="">
</div>
    `
}



loadCountries()


