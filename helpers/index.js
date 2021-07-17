const hbs = require('hbs');

hbs.registerHelper('loud', function ( aString ){
    return aString.toUpperCase();
})