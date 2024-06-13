document.getElementById('personalizationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const picture = document.getElementById('picture').files[0];
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const userPageContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Personalisierte Seite von ${name}</title>
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
                <h1>Willkommen, ${name}!</h1>
                <img src="${e.target.result}" alt="User Picture">
            </body>
            </html>
        `;
        
        downloadHTML(userPageContent, `${name}_personalized_page.html`);
    }
    reader.readAsDataURL(picture);
});

function downloadHTML(content, filename) {
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
