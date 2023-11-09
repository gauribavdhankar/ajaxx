function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById('demo').innerHTML = this.responseText;
    }else {
      // Handle error
      console.error('Error loading document');
  }
    };
    xhttp.open('GET', 'ajax_info.txt' , true);
    xhttp.send();
    }

    function loadXMLDoc() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var xmlDoc = xmlhttp.responseXML;
        var items = xmlDoc.getElementsByTagName("p");
        console.log(items);
        displayXMLData(items);
        }else {
          // Handle error
          console.error('Error loading document');
      }
        };
        xmlhttp.open("GET", "sample_data/sample.xml", true);
        xmlhttp.send();
    }

    function displayXMLData(items){
        var output = "<ul>";
        for (var i = 0; i < items.length; i++) {
          var item = items[i].childNodes[0].nodeValue;
          output += "<li>" + item + "</li>";
        }
        output += "</ul>";
        document.getElementById("output").innerHTML = output;
  }

  function loadJSON() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var data = JSON.parse(xhr.responseText);
        displayData(data);
      }else {
        // Handle error
        console.error('Error loading document');
    }
    };

    xhr.open("GET", "sample.json", true);
    xhr.send();
  }

  // function displayData(data) {
  //   var output = "<ul>";

  //   data.items.forEach(function (item) {
  //     output += "<li>" + item + "</li>";
  //   });

  //   output += "</ul>";
  //   document.getElementById("output").innerHTML = output;
  // }

  function displayData(data) {
    var output = "<ul>";
  
    data.items.forEach(function (item) {
      // Assuming each item is an object with 'name' and 'price' properties
      var itemName = item.name || "No item";
      output += "<li>" + itemName +  "</li>";
    });
  
    output += "</ul>";
    document.getElementById("output").innerHTML = output;
  }
  var exampleData = {
    items : [
      {name: "Gauri"},
      {name: "Rups"},
      {name: "laxmi"},
      {name: "Sana"}
    ]
  };

  function postData() {
    var xhr = new XMLHttpRequest();
    var url = "sample.php";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var response = xhr.responseText;
        document.getElementById("output").innerHTML = response;
      }else {
        // Handle error
        console.error('Error loading document');
    }
    };
    var data = {
      param1: "value1",
      param2: "value2",
      param3: "value3",
    };

    xhr.send(JSON.stringify(data));
  }