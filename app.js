// Effectuer la requête pour récupérer les données JSON
fetch('https://fichier-json-des-visages.vercel.app/')  // Assurez-vous que le fichier JSON est bien dans le même répertoire que le HTML ou ajustez le chemin
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors du chargement du fichier JSON');
        }
        return response.json();  // Retourner les données JSON
    })
    .then(data => {
        displayBooks(data);  // Passer les données à la fonction pour les afficher
        console.log(data)
    })
    

// Fonction pour afficher les livres dans le conteneur
function displayBooks(books) {
    const booksContainer = document.getElementById('container');  // Sélectionner le conteneur où afficher les livres
    
    // Vérifier si le conteneur existe
    if (!booksContainer) {
        console.error('Le conteneur avec l\'id "container" n\'existe pas dans le HTML');
        return;
    }

    // Parcourir chaque livre dans les données JSON
    books.forEach(book => {
        // Créer un élément pour chaque livre
        const bookElement = document.createElement('div');
        bookElement.classList.add('book-item');  // Ajouter une classe pour styliser les livres

        // Créer une image pour le livre
        const img = document.createElement('img');
        img.src = book.img;  // L'URL de l'image du livre
        img.alt = 'Book Image';  // Texte alternatif si l'image ne se charge pas
        img.width = 300;  // Définir la largeur de l'image
        img.height = 400;  // Définir la hauteur de l'image

        // Créer un paragraphe pour la catégorie du livre
        const category = document.createElement('p');
        category.textContent = book.category;  // Ajouter le texte de la catégorie

        // Ajouter l'image et la catégorie dans l'élément du livre
        bookElement.appendChild(img);
        bookElement.appendChild(category);

        // Ajouter l'élément du livre au conteneur
        booksContainer.appendChild(bookElement);
    });
}
