(function() {
    'use strict';

    var User = require('./models/user'),
        UsersListView = require('./views/users-list-view'),
        SuperUsersListView = require('./views/super-users-list-view'),

        userCollection = new Backbone.Collection([
            {
                id: 1,
                name : 'Terrence S. Hatfield',
                tel: '651-603-1723',
                email: 'TerrenceSHatfield@rhyta.com'
              },
              {
                id: 2,
                name : 'Chris M. Manning',
                tel: '513-307-5859',
                email: 'ChrisMManning@dayrep.com'
              },
              {
                id: 3,
                name : 'Ricky M. Digiacomo',
                tel: '918-774-0199',
                email: 'RickyMDigiacomo@teleworm.us'
              },
              {
                id: 4,
                name : 'Michael K. Bayne',
                tel: '702-989-5145',
                email: 'MichaelKBayne@rhyta.com'
              },
              {
                id: 5,
                name : 'John I. Wilson',
                tel: '318-292-6700',
                email: 'JohnIWilson@dayrep.com'
              },
              {
                id: 6,
                name : 'Rodolfo P. Robinett',
                tel: '803-557-9815',
                email: 'RodolfoPRobinett@jourrapide.com'
              }
            
        ], {
            model: User
        }),

        usersListView = new UsersListView({
            collection: userCollection
        }),

        superUsersListView = new SuperUsersListView({
            collection: userCollection
        });

    $('#appWrapper').append(usersListView.render().el);
    $('#appWrapper').append(superUsersListView.render().el);
}());
