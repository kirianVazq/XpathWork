
	// Crear una nueva solicitud HTTP
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", "books.xml", false);
		xmlhttp.send();

		// Obtener el documento XML
		var xmlDoc = xmlhttp.responseXML;

		// Obtener una lista de todos los libros
		var books = xmlDoc.evaluate("//book", xmlDoc, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

		// Seleccionar un libro al azar de la lista de libros
		var randomBook = books.snapshotItem(Math.floor(Math.random() * books.snapshotLength));

		// Obtener los detalles del libro seleccionado al azar
		var title = randomBook.getElementsByTagName("title")[0].textContent;
		var author = randomBook.getElementsByTagName("author")[0].textContent;
		var rating = randomBook.getElementsByTagName("rating")[0].textContent;
		var price = randomBook.getElementsByTagName("price")[0].textContent;

		// Mostrar el libro seleccionado al azar en la página
		window.onload = function() {
			var bookDetails = document.createElement("libros");
			bookDetails.innerHTML = "<h2>" + title + "</h2><p>Autor: " + author + "</p><p>Valoración: " + rating + "</p><p>Precio: " + price + "</p>";
			document.body.appendChild(bookDetails);
		};
