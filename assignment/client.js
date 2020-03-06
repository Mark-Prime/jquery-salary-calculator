console.log('js');

let totalSalary = 12000000100;

$(readyNow);

function readyNow() {
    console.log('jQ');
    $('#btn-submit').on('click', addToTable);
    $('.btn-table').on('click', deleteTableRow);
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

        // Adds the values to the table
        $('#main-table').append(`<tr id="${firstName}-${id}" ><td>${firstName}</td><td>${lastName}</td><td>#${id}</td><td>${title}</td><td class="salaryCell">$${salary}</td><td><button type="button" class="btn-table" id="${firstName}-${id}">Delete</button></td></tr>`);
        $('.btn-table').on('click', deleteTableRow);
        // Adds value to the total value
        totalSalary += Number(salary);
        $('h3').text(`Total Salary: $${totalSalary}`);

    }// Ends if all filled
    
}

function deleteTableRow(event) {
    console.log('event:', event.target.id);
    let eventID = event.target.id;
    let eventLine = $(`#${eventID}`);

    eventLine.each(function () {
        let salary = $(this).find(".salaryCell").html();
        salary = Number(salary.slice(1));
        console.log('salary', salary);
        totalSalary -= salary;
        console.log('total salary', totalSalary);

        
        $('h3').text(`Total Salary: $${totalSalary}`);
        
    });

    eventLine.remove();
}