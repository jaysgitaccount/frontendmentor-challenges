const data = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
]

displayResults(data);

function displayResults(data) {
    const display = document.getElementById('data-display');

    data.forEach(item => {
        const clone = display.querySelector('template').content.cloneNode(true);

        clone.querySelector('div').classList.add(`${item.category}`);
        clone.querySelector('.category').textContent = item.category; 
        clone.querySelector('.score').textContent = item.score; 
        clone.querySelector('.icon').src = item.icon;

        display.appendChild(clone);
    })
}