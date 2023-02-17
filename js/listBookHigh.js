// Crear una nueva solicitud HTTP
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "../books.xml", false);
xmlhttp.send();

// Obtener el documento XML
var xmlDoc = xmlhttp.responseXML;

// Seleccionar todos los elementos book
var books = xmlDoc.evaluate("//book", xmlDoc, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

// Crear una lista y agregar cada libro ordenado por precio descendente
var list = document.createElement("ul");
var booksArray = [];

for (var i = 0; i < books.snapshotLength; i++) {
  var book = books.snapshotItem(i);
  var title = book.getElementsByTagName("title")[0].textContent;
  var author = book.getElementsByTagName("author")[0].textContent;
  var rating = book.getElementsByTagName("rating")[0].textContent;
  var price = book.getElementsByTagName("price")[0].textContent;

  var bookObject = {
    title: title,
    author: author,
    rating: rating,
    price: price
  };
  
  booksArray.push(bookObject);
}

booksArray.sort(function(a, b) {
  var priceA = parseInt(a.price.replace("$",""));
  var priceB = parseInt(b.price.replace("$",""));
  return priceB - priceA;
});

for (var i = 0; i < booksArray.length; i++) {
  var listItem = document.createElement("li");
  listItem.textContent = booksArray[i].title + " por " + booksArray[i].author + " - " + booksArray[i].rating + " estrellas" + "| "+ "Precio: " + booksArray[i].price +" |" ;
  list.appendChild(listItem);
}

// Agregar la lista al elemento HTML con el id "libros"
document.getElementById("libros").appendChild(list);
