var list = require('select-shell')(),
    _ = require('underscore');

module.exports = function(List, _cb) {
    _.each(List, function(i) {
        list.option(i);
    });
    list.list();

    list.on('select', function(options) {
        _cb(options);
    });

    list.on('cancel', function(options) {
        console.log('Cancel list, ' + options.length + ' options selected');
        process.exit(0);
    });
};
