// Crear una nueva solicitud HTTP
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "../books.xml", false);
xmlhttp.send();

// Obtener el documento XML
var xmlDoc = xmlhttp.responseXML;

// Seleccionar todos los elementos book con una puntuación de 5
var books = xmlDoc.evaluate("//book[genre='Historia' and rating='5']", xmlDoc, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

// Crear una lista y agregar cada libro
var list = document.createElement("ul");
for (var i = 0; i < books.snapshotLength; i++) {
  var book = books.snapshotItem(i);
  var title = book.getElementsByTagName("title")[0].textContent;
  var author = book.getElementsByTagName("author")[0].textContent;
  var rating = book.getElementsByTagName("rating")[0].textContent;

  var listItem = document.createElement("li");
  listItem.textContent = title + " por " + author +" /Nota: "+ rating;
  list.appendChild(listItem);
}

// Agregar la lista al elemento HTML con el id "libros"
document.getElementById("libros").appendChild(list);
