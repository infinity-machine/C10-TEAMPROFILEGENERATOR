// EMPLOYEE CARD
function createEmpCard(data) {
    for (i = 0; i < data.length; i++) {
        return `<div>
            <h1>${data[i].name}</h1>
            <p>${data[i].empID}</p>
            <p>${data[i].eMail}</p>
            <p>${Object.values(data[i])[3]}</p>
        </div>`
    }
}

// HTML TEMPLATE
function createTemplate (data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>GENERATED TEAM PROFILE</title>
    </head>
    <body>
        ${createEmpCard(data)}
    </body>
    </html>`
}

module.exports = createTemplate;

