const generateTeam = team => {
    // create manager profile
    const createMan = manager => {
        return `
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>`
    }

    // create engineer profile
    const createEng = engineer => {
        return `
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Engineer</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>`
    }

    // create intern profile
    const createInt = intern => {
        return `
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Intern</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>`
    };
    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => createMan(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => createEng(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => createInt(intern))
        .join("")
    );

    return html.join("");

}


module.exports = team => {

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>

    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    ${generateTeam(team)}
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};