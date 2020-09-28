const baseURL = "https://cat-fact.herokuapp.com/facts"

let factElement = document.getElementById('fact');


//EVENT LISTENER 
let btn = document.getElementById('clickThis');

btn.addEventListener('click', async (event) => {
    const fact = await fetchResult(event)
    console.log(fact)
    factElement.innerText = fact; 
}); 



//FECTH
const fetchResult = async (event) => {
    event.preventDefault();
    const apiResponse = await fetch(baseURL);
    let facts = await apiResponse.json();
    let randomIndex = getRandomInt(facts.all.length);
    let fact = facts.all[randomIndex];
    return fact.text
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
}
