console.log('js');

$(readyNow);

function readyNow() {
    console.log('jQ');
    $('#btn-submit').on('click', addToTable)
}

// Adds the items from the inputs to the table below
function addToTable( event ) {

    // prevent page refresh on submit button click
    event.preventDefault();

    // Gathers the data from the inputs
    let firstName = $('#in-firstname').val();
    let lastName = $('#in-lastname').val();
    let id = $('#in-id').val();
    let title = $('#in-title').val();
    let salary = $('#in-salary').val();
    
    // Ensures no values are blank
    if (!firstName || !lastName || !id || !title || !salary) {
        // Alerts user to fill in all boxes
        alert('Please fill in all boxes')

    } else{ //If all values are filled in
        // Clears the inputs for further use
        $('#in-firstname').val('');
        $('#in-lastname').val('');
        $('#in-id').val('');
        $('#in-title').val('');
        $('#in-salary').val('');
    }// Ends if all filled
    
}