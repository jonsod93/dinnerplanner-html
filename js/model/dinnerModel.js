//DinnerModel Object constructor
var DinnerModel = function() {
 
	//TODO Lab 2 implement the data structure that will hold number of guest
	// and selected dinner options for dinner menu

	var guests =1; 
	var menu = []; //Our menu object where we store what type it has
	var observers = []; //The array of observers (views)
	var currentDish = 1; //The current dish showed
	var currentType = 'starter'; //The current type of dishes showed
	this.searched = ""; //The searched word
	var searchedDishes = [];
	var singleRecipe = [];

	this.notify = function(){
		notifyObservers();
	}

	this.getOneRecipe = function(){
		return singleRecipe;
	}

	this.getSearched = function(){
		return searchedDishes;
	}

	this.setSearched = function(string){
		this.searched = string;
		//notifyObservers();
	}

	this.setCurrentType = function(type){
		currentType = type;
		notifyObservers();
	}

	this.getCurrentType = function(){
		return currentType;
	}

	this.setCurrentDish = function (id){
		currentDish = Number(id);
		notifyObservers();
	}

	this.getCurrentDish = function (){
		return Number(currentDish);
	}

	this.addObserver = function(observer){
		observers.push(observer);
	}

	var notifyObservers = function(){ //Goes through all views and run the update function
		for (n=0;n<observers.length;n++){
			observers[n].updateView();
		}
	}

	this.setNumberOfGuests = function(num) {
		guests = num;
		notifyObservers();
	}

	this.getNumberOfGuests = function() {
		return guests;
	}

	//Returns the dish that is on the menu for selected type 
	this.getOneDish = function(id) { //Returns the total price for 1 dish for 1 person
		var total = 0;
		for (i=0;i<dishes.length;i++)
		{
			var dish = dishes[i];
			if (dish.id === id)
			{	
				
				for (j=0;j<dish.ingredients.length;j++){
					
					var ingredient = dish.ingredients[j];
					total = total+ingredient.price;
					
				}
			return total;
			}
		}
	}

	this.getPrice = function(id) {
			var dishPrice = this.getOneDish(id);
			return dishPrice*guests;
	}

	this.getFullMenu = function() {
		return menu;
	}

	this.getPriceDish = function(id){
		var id = Number(id);

		var dishPrice = 0
		if(menu.length>0){
		for (var i = 0; i<menu.length; i++){
			if (menu[i].RecipeID === id){
				var dish = menu[i]
				var ingredients = dish.Ingredients
				for(i=0;i<ingredients.length;i++){
					var ingredient=ingredients[i];
					dishPrice+= ingredient.Quantity;
				}

			}
		}
		}
	return dishPrice*guests;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function(id) {
		var dish = this.getDish(id);
		var string = '';
		for (k=0;k<dish.ingredients.length;k++){
					
			var ingredient = dish.ingredients[k];
			
			string += ingredient.quantity*guests+" "+ingredient.unit+" "+ingredient.name+"</br>";		
					
				}
		return string;
		//TODO Lab 2
	}


	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var total = 0;
		if ('starter' in menu) {
			var starterID = menu.starter;
			total += this.getPrice(starterID);
		}
		if ('main' in menu) {
			var mainID = menu.main;
			total += this.getPrice(mainID);
		}
		if ('dessert' in menu) {
			var dessertID = menu.dessert;
			total += this.getPrice(dessertID);
		}
		return total;
		//TODO Lab 2
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		//TODO Lab 2 
		this.getRecipe(id);
		var dish = this.getOneRecipe();
		//var dish = this.getDish(id);
		var Type = dish.Category;
		for (s=0;s<menu.length;s++){
			if (menu[s].Category === Type){
				menu.splice(s,1);

			}
		}
		menu.push(dish);
		notifyObservers();
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
	var id = Number(id);
	this.getRecipe(id);
	var dish = this.getOneRecipe();
	for (u=0;u<menu.length;u++){
		if (menu[u].RecipeID === id){
			menu.splice(u,1);
		}
	}
	//var type = dish.Category; 
	//if(menu[type] === id) {
	//	delete menu[type];
	//	}
		notifyObservers();
	}
	

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (filter) {
		$(".Loading").show();
	 	var apiKey = "dvxj6xg695oRBNy8vly5FtK40FEBcnZo";
	 	//dvxwPg94m65254X2OZb7owuNQsvKiG2f
        var titleKeyword = filter;
        //var titleKeyword = this.searched;
        var url = "http://api.bigoven.com/recipes?pg=1&rpp=12"
        		if (titleKeyword != ""){
        			url += "&title_kw="+ titleKeyword
        		}
        url += "&api_key="+apiKey;
        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
            success: function (data) {
                
                searchedDishes = data.Results;
                
                notifyObservers();
                $(".Loading").hide();
            },
            error: function () {
            	$(".Loading").hide();
                $(".Error").show();
            }

        });
        
	}
	this.getDish = function (id) {
		recipeId = id;
		for (z=0;z<searchedDishes.length;z++){
			if (recipeId === z.RecipeID){
				return z;
			}
		}
	}
	//function that returns a dish of specific ID
	this.getRecipe = function (id) {
		$(".Loading").show();
		var apiKey = "dvxj6xg695oRBNy8vly5FtK40FEBcnZo";
	 	//dvxwPg94m65254X2OZb7owuNQsvKiG2f
		var recipeID = id;
		var url = "http://api.bigoven.com/recipe/" + recipeID + "?api_key="+apiKey;
		$.ajax({
	         type: "GET",
	         dataType: 'json',
	         cache: false,
	         url: url,
	         success: function (data) {
	           // alert('success');
	           // console.log(data);
	            singleRecipe = data;
	            notifyObservers();
	            $(".Loading").hide();
	            },
            error: function () {
            	$(".Loading").hide();
                $(".Error").show();
            }
	        });
	  //for(i=0;i<dishes.length;i++){
	  	//	var dish = dishes[i];
		//	if(dish.id === id) {
		//		return dish;
		//	}
		//}
	}
	this.getSelectedDish = function(type) {
		var id = menu[type];
		var dish = this.getDish(id);
		return dish;
	}
	




	this.getDishName = function (id) {
	  for(i=0;i<dishes.length;i++){
	  		var dish = dishes[i];
			if(dish.id === id) {
				return dish.name;
			}
		}
	}


	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':103,
		'name':'MD 4',
		'type':'main',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

}