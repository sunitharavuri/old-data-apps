var UsersListView = require('./users-list-view');

module.exports = UsersListView.extend({
    itemHtml: function (item) {
        return '<li><p>=> ' + item.get('name') + ' - ' + item.get('points') + ' points</p></li>';
    }
});
