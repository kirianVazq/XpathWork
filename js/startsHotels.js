var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "turismo.xml", false);
xmlhttp.send();
var xmlDoc = xmlhttp.responseXML;
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "turismo.xml", false);
xmlhttp.send();
var xmlDoc = xmlhttp.responseXML;

// Seleccionar todas las entidades con más de 3 estrellas
var xpathQuery = "//book";
var libros = xmlDoc.evaluate(xpathQuery, xmlDoc, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

// Agregar cada libro a la lista
for (var i = 0; i < libros.snapshotLength; i++) {
  var libro = libros.snapshotItem(i);
  var titulo = libro.getElementsByTagName("title")[0].childNodes[0].nodeValue;
  var autor = libro.getElementsByTagName("author")[0].childNodes[0].nodeValue;
  var rating = libro.getElementsByTagName("rating")[0].childNodes[0].nodeValue;

  var listItem = document.createElement("li");
  listItem.textContent = titulo + " - " + autor + " - " + rating + " estrellas";
  document.getElementById("libros").appendChild(listItem);
}