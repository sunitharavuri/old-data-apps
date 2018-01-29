module.exports = Backbone.View.extend({
    tagName: 'ul',
    className: 'user-view',

    initialize: function () {
        this.listenTo(this.collection, 'sync', this.render);
    },

    render: function () {
        var html = '';

        if (this.collection.length === 0) {
            html = '<li>List empty</li>';
        } else {
            html = this.collection.map(this.itemHtml, this).join('');
        }

        this.$el.html(html);

        return this;
    },

    itemHtml: function (item) {
        return '<li><p>' + item.get('name') + ' - ' + item.get('points') + ' points</p></li>';
    }
});
