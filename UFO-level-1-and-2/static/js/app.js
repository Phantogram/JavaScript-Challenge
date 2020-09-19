// Data from data.js
var tableData = data;

// Select the "tbody"
var tbody = d3.select("tbody");

// Create the init function
// Append the table data 
function init(data) {
  tbody.html("");

  data.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
// Run the init function for table data
init(tableData)

// Select the button
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input elements and get the raw HTML node
    var dateElement = d3.select("#datetime");
    var cityElement = d3.select("#city");
    var stateElement = d3.select("#state");
    var countryElement = d3.select("#country");
    var shapeElement = d3.select("#shape");

    // Get the value properties of the input elements
    var dateValue = dateElement.property("value");
    var cityValue = cityElement.property("value");
    var stateValue = stateElement.property("value");
    var countryValue = countryElement.property("value");
    var shapeValue = shapeElement.property("value");

    // Filter data and render to table
    var filteredData = tableData
    if (dateValue) {
      filteredData = filteredData.filter(row => row.datetime === dateValue);
    }
    if (cityValue) {
      filteredData = filteredData.filter(row => row.city === cityValue);
    }
    if (stateValue) {
      filteredData = filteredData.filter(row => row.state === stateValue);
    }
    if (countryValue) {
      filteredData = filteredData.filter(row => row.country === countryValue);
    }
    if (shapeValue) {
      filteredData = filteredData.filter(row => row.shape === shapeValue);
    }
    // Run init function for the filtered data
    init(filteredData)
}

// Run console.log to check script status
    // console.log(tableData);
    // console.log(inputValue);
    // console.log(filteredData);