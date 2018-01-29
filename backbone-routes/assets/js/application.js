$(function(){

	var ApplicationRouter = Backbone.Router.extend({

		//map url routes to contained methods
		routes: {
			"": "home",
			"home": "home",
			"about": "about",
			"contact": "contact"
		},

		deselectTabs: function(){
			//deselect all navigation tabs
			$('ul.tabs li').removeClass('active');
		},

		selectTab: function(tab){
			//deselect all navigation tabs
			this.deselectTabs();
			//select passed navigation tab by selector
			$(tab).addClass('active');
		},

		hidePages: function(){
			//hide all pages with 'pages' class
			$('div.pages').hide();
		},

		showPage: function(page){
			//hide all pages
			this.hidePages();
			//show passed page by selector
			$(page).show();
		},

		home: function() {
			this.showPage('div#home-page');
			this.selectTab('li.home-tab');
		},

		about: function() {
			this.showPage('div#about-page');
			this.selectTab('li.about-tab');
		},

		contact: function() {
			this.showPage('div#contact-page');
			this.selectTab('li.contact-tab');
		}

	});

	var ApplicationView = Backbone.View.extend({

		//bind view to body element (all views should be bound to DOM elements)
		el: $('body'),

		//observe navigation click events and map to contained methods
		events: {
			'click ul.tabs li.home-tab a': 'displayHome',
			'click ul.tabs li.about-tab a': 'displayAbout',
			'click ul.tabs li.contact-tab a': 'displayContact'
		},

		//called on instantiation
		initialize: function(){
			//set dependency on ApplicationRouter
			this.router = new ApplicationRouter();

			//call to begin monitoring uri and route changes
			Backbone.history.start();
		},

		displayHome: function(){
			//update url and pass true to execute route method
			this.router.navigate("home", true);
		},

		displayAbout: function(){
			//update url and pass true to execute route method
			this.router.navigate("about", true);
		},

		displayContact: function(){
			//update url and pass true to execute route method
			this.router.navigate("contact", true);
		}

	});

	//load application
	new ApplicationView();

});

