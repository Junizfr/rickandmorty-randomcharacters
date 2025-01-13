const btn = document.getElementById('fetch');
let used = false

/**
 * @summary Fetches the Rick and Morty API and returns the character data.
 * @returns {Promise<Object[]>} An array of character objects.
 */
 const fetchData = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    return data.results
}

/**
 * @summary Create a card element for a character and add it to the page.
 * @param {Object} character - Character object with image and name properties.
 */
const createCard = (character) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <img src="${character.image}" alt="${character.name}" />
    <h2>${character.name}</h2>
    `;
    
    document.body.appendChild(card);
}

btn.addEventListener('click', async () => {
    const characters = await fetchData()
    const random = Math.floor(Math.random() * characters.length);
    const character = characters[random];
    
    if(!used) {
        createCard(character);
        used = true
    } else {
        document.querySelector('.card').remove()
        createCard(character);
    }
});