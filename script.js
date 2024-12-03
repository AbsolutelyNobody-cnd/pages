// Define a template using Mustache.js
var template = `
    <ul>
        {{#data}}
        <li>Name: {{name}}, Age: {{age}}, City: {{city}}</li>
        {{/data}}
    </ul>
`;

// Get the 'output' div element
var output = document.getElementById('output');

// Fetch JSON data from the file
fetch('data.json')
    .then(function(response) {
        return response.json(); // Parse JSON from the response
    })
    .then(function(data) {
        // Render the data using the template
        var rendered = Mustache.render(template, { data: data });
        output.innerHTML = rendered; // Inject rendered HTML into the output div
    })
    .catch(function(error) {
        console.error('Error:', error); // Log any errors to the console
    });
