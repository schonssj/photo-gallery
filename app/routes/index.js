var api = require('../api'),
    path = require('path');

module.exports = function(app) {
    app.route('/v1/photos')
        .post(api.add)
        .get(api.list);

    app.route('/v1/photos/:photoId')
        .delete(api.remove)
        .get(api.search)
        .put(api.update);

    app.get('/v1/groups', api.listGroups)
    app.get('/v1/photos/group/:groupId', api.listByGroup);

    // Enabling HTML5MODE
    app.all('/*', function(req, res) {
        res.sendFile(path.resolve('public/index.html'));
    });
};