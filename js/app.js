const loadData=()=>{
    const countrySearch=document.getElementById('country-search')
    const inputValue=countrySearch.value
    const url=`https://restcountries.com/v3.1/name/${inputValue}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayData(data))
    if(inputValue===''){
        return alert('Please enter country name')
    }
    countrySearch.value='';
}
const displayData=countris=>{
    const displayCountry=document.getElementById('display-country')
    countris.forEach(country=>{
       displayCountry.innerHTML=''
       console.log(country);
        const div=document.createElement('div')
        div.classList.add('country')
       const language=Object.values(country.languages)
        div.innerHTML=`
            <img width="200px" src="${country.flags.png}">
            <h2>${country.name.common}</h2>
            <h2>${country.name.official}</h2>
            <h5>Capital: ${country.capital}</h5>
            <p>Population: ${country.population}</p>
            <p>Time Zone: ${country.timezones}</p>
            <p>Language: ${language}</p>
            <p>Continent: ${country.continents}</p>
            <p>Sort Spelling: ${country.altSpellings[0]}</p>
        `
        displayCountry.appendChild(div);
    })
}