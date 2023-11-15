function generateTable() {
    // Read form values
    const startMultiplier = parseInt(document.getElementById('startMultiplier').value);
    const endMultiplier = parseInt(document.getElementById('endMultiplier').value);
    const startMultiplicand = parseInt(document.getElementById('startMultiplicand').value);
    const endMultiplicand = parseInt(document.getElementById('endMultiplicand').value);

    // Validate input
    if (isNaN(startMultiplier) || isNaN(endMultiplier) || isNaN(startMultiplicand) || isNaN(endMultiplicand)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    // Generate multiplication table
    let tableHTML = '<table>';
    for (let i = startMultiplicand - 1; i <= endMultiplicand; i++) {
        tableHTML += '<tr>';
        for (let j = startMultiplier - 1; j <= endMultiplier; j++) {
            if (i === startMultiplicand - 1 && j === startMultiplier - 1) {
                // First cell in the table is empty
                tableHTML += '<th></th>';
            } else if (i === startMultiplicand - 1) {
                // Header row
                tableHTML += `<th>${j}</th>`;
            } else if (j === startMultiplier - 1) {
                // Header column
                tableHTML += `<td>${i}</td>`;
            } else {
                // Multiply and fill in the table cells
                tableHTML += `<td>${i * j}</td>`;
            }
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';

    // Display the table
    document.getElementById('tableContainer').innerHTML = tableHTML;
}