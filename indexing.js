function filterText() {
    const userInput = document.getElementById('textInput').value;
    fetch('/filter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "text": userInput })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('filteredText').innerText = data.filteredText;
    })
    .catch(error => console.error('Error:', error));
}