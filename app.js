function getinfo(){
    let query = document.getElementById("query").value;
    let img = document.getElementById("img");
    let languages = document.getElementById("languages");
    let country = document.getElementById("country");
    let capital = document.getElementById("capital");
    let currency = document.getElementById("currency");
    let popu = document.getElementById("popu");
    let region = document.getElementById("region");
    let cur = document.getElementById("cur");
    const api = `https://restcountries.eu/rest/v2/name/${query}?fullText=true`;
    fetch(api).then(response=>{
        return response.json();
    }).then(data=>{
        img.innerHTML = `<img src="${data[0].flag}">`;
        country.innerText = `Name: ${data[0].name} , Native Name: ${data[0].nativeName}`;
        languages.innerText = `Language: ${data[0].languages[0].name}, Native name: ${data[0].languages[0].nativeName}`;
        capital.innerText = `Capital: ${data[0].capital}`;
        currency.innerText = `Currency: ${data[0].currencies[0].name}(${data[0].currencies[0].symbol})`;
        popu.innerText = `Population: ${data[0].population}`;
        region.innerText = `Region: ${data[0].region}`;
    })
}