const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info : {
        title : "Library Management System",
        description : "API Documentation for Library Management System",
    },
    host : "https://lms-c15i.onrender.com",
    };
    const outputFile = './swagger_output.json';
    const routes = ['./server/routes/usersRoute.js', './server/routes/booksRoute.js', './server/routes/issuesRoute.js', './server/routes/reportsRoute.js'];
    swaggerAutogen(outputFile, routes, doc);