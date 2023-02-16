
<script>
function loadXMLDoc(filename) {
    if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
    else {
        xhttp = new XMLHttpRequest();
    }
    xhttp.open("GET", filename, false);
    try {
        xhttp.responseType = "msxml-document"
    } catch (err) {}
    xhttp.send("");
    return xhttp.responseXML;
}

function displayResult() {
    xmlDoc = loadXMLDoc("data.xml");
    path = document.getElementById("xpath").value;
    if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        var nodes = xmlDoc.selectNodes(path);
        var result = "";
        for (i = 0; i < nodes.length; i++) {
            result += nodes[i].childNodes[0].nodeValue + "<br>";
        }
        document.getElementById("result").innerHTML = result;
    }
    else {
        var evaluator = new XPathEvaluator();
        var nodes = evaluator.evaluate(path, xmlDoc, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        var output = "";
        while (result) {
            output += result.childNodes[0].nodeValue + "<br>";
            result = nodes.iterateNext();
        }
        document.getElementById("result").innerHTML = output;
    }
}
</script>