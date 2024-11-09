fetch('./fichier.json')
    .then(response => response.json())
    .then(data => {
        test(data);
        // Limiter à 54 livres, vous pouvez ajuster la limite si nécessaire
       
    })
    .catch(error => {
        console.error('Erreur de chargement du fichier JSON :', error);
    });

    function test(data){


        const booksToDisplay = data;

        // Trouver le conteneur où les livres seront affichés
        const booksContainer = document.getElementById('books-container');

        // Boucle pour itérer sur chaque livre
        booksToDisplay.forEach(book => {
            // Créer un nouvel élément pour chaque livre
          let bookElement = document.createElement('div');
            bookElement.classList.add('book-item')

           let titre = document.createElement('h3');
           let descri = document.createElement('p');
           let pic = document.createElement('img');
           let price = document.createElement('p');
           let strong = document.createElement('strong');

           titre.textContent = book.titre;
           descri.textContent = book.description;
           pic.src = book.img;
           pic.width=300;
           pic.height=400;
           price.textContent = book.price;

            // Ajouter le livre à la page
            booksContainer.appendChild(bookElement);
            bookElement.appendChild(titre);
            bookElement.appendChild(descri);
            bookElement.appendChild(pic);
            price.appendChild(strong)
            bookElement.appendChild(price);

        });
    }