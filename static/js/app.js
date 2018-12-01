// from data.js
var tableData = data;

console.log(tableData);

var tbody = d3.select("tbody");

var submit = d3.select("#filter-btn");

// Select the submit button
/////var submit = d3.select("#filter-btn");

tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });










  var submit2 = d3.select("#filter-btn2");

  submit2.on("click", function() {
  
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#date");
    var inputElement2 = d3.select("#city");
    var inputElement3 = d3.select("#state");
    var inputElement4 = d3.select("#country");
    var inputElement5 = d3.select("#shape");
    var inputElement6 = d3.select("#duration");
    var inputElement7 = d3.select("#comments");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    var inputValue2 = inputElement2.property("value");
    var inputValue3 = inputElement3.property("value");
    var inputValue4 = inputElement4.property("value");
    var inputValue5 = inputElement5.property("value");
    var inputValue6 = inputElement6.property("value");
    var inputValue7 = inputElement7.property("value");
  
    console.log(inputValue);
    console.log(inputValue2);
    console.log(inputValue3);
    console.log(inputValue4);
    console.log(inputValue5);
    console.log(inputValue6);
    console.log(inputValue7);

    var table = d3.select("#ufo-table");

    var tbody = d3.select("tbody");

    var row = tbody.append("tr");

    row.append("td").text(inputValue);
    row.append("td").text(inputValue2);
    row.append("td").text(inputValue3);
    row.append("td").text(inputValue4);
    row.append("td").text(inputValue5);
    row.append("td").text(inputValue6);
    row.append("td").text(inputValue7);

  });


  submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // var stateElement = d3.select("#datetime");
    // var cityElement = d3.select("#datetime");
    // var countryElement = d3.select("#datetime");
    // var shapeElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    // var stateValue = stateElement.property("value");
    // var cityValue = cityElement.property("value");
    // var countryValue = countryElement.property("value");
    // var shapeValue = shapeElement.property("value");
  
    // console.log(inputValue);
    // /////console.log(tableData);
    // console.log(stateValue);
    // console.log(cityValue);
  
    var timeData = tableData.filter(x => x.datetime === inputValue);
    var stateData = tableData.filter(x => x.state === inputValue);
    var cityData = tableData.filter(x => x.city === inputValue);
    var countryData = tableData.filter(x => x.country === inputValue);
    var shapeData = tableData.filter(x => x.shape === inputValue);
    /////var narrowData = filteredData.filter(x => x.state === stateValue);
  
    console.log(timeData);
    console.log(stateData);
    console.log(cityData);
    console.log(countryData);
    console.log(shapeData);
    /////console.log(narrowData);

      // clear the existing output
        //var row = tbody.append("tr");
    tbody.html("");

    timeData.forEach((incident) => {
        var row = tbody.append("tr");
        Object.entries(incident).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
        });
      });

      stateData.forEach((incident) => {
        var row = tbody.append("tr");
        Object.entries(incident).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
        });
      });

      cityData.forEach((incident) => {
        var row = tbody.append("tr");
        Object.entries(incident).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
        });
      });

      countryData.forEach((incident) => {
        var row = tbody.append("tr");
        Object.entries(incident).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
        });
      });

      shapeData.forEach((incident) => {
        var row = tbody.append("tr");
        Object.entries(incident).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
        });
      });


  });





