var select = require('./');

var a = [1,2,3];
select(a, function(selected) {
    console.log('you selected', selected);
    process.exit();
});
