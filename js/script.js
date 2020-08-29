const url = "https://elephant-api.herokuapp.com/elephants";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainer = document.querySelector(".results");

async function makeApiCall() {
    try {
        const response = await fetch(corsFix);

        const results = await response.json();

        console.log(results);

        for(let i = 0; i < results.length; i++) {

            if(!results[i].name) {
                continue;
            }

            resultsContainer.innerHTML += `<div class="card">
                                            <h4>${results[i].name}</h4>
                                            <img src="${results[i].image}" alt="${results[i].name}" />
                                        </div>`
        }



    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }
}

makeApiCall();
