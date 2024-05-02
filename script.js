function selectLanguage() {
    var name = document.getElementById('username').value;
    if (name.trim() === '') {
        alert('Please enter your name.');
        return;
    }
    document.getElementById('name-entry').style.display = 'none';
    document.getElementById('language-selection').style.display = 'block';
}

function showTranslations() {
    var selectedLanguage = document.getElementById('language-select').value;
    // You can fetch translations based on the selected language from a database or API
    var translations = getTranslations(selectedLanguage);
    displayTranslations(translations);
}

function displayTranslations(translations) {
    var translationsList = document.getElementById('translations-list');
    translationsList.innerHTML = '';
    translations.forEach(function(item) {
        var listItem = document.createElement('li');
        listItem.textContent = item.word + ' - ' + item.translation;
        translationsList.appendChild(listItem);
    });
    document.getElementById('language-selection').style.display = 'none';
    document.getElementById('word-translations').style.display = 'block';
}

// This function is just a placeholder for fetching translations from a database or API
function getTranslations(language) {
    // Example data structure: [{ word: 'Hello', translation: 'नमस्ते' }, ...]
    // You can replace this with actual data retrieval logic
    var translations = [
        { word: 'Hello', translation: 'नमस्ते' },
        // Add more translations for other words
    ];
    return translations;
}
