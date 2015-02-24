//ExampleView Object constructor
var SelectedDishView = function (container, model) {
	
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.dishPrice = container.find("#dishPrice");
	this.totalPrice = container.find("#totalPrice");
	this.dishName = container.find("#dishName");


	
	

    this.updateView = function(){

    	var currID = model.getCurrentDish();
		var Dish = container.find("#Dish");
		var guests = model.getNumberOfGuests();
		var total = model.getPrice(currID);
		var dish = model.getDish(currID);
		
		this.getIngredients = function ()
		{
		var page ='';
		page += '<div class="row">';
		page += "<div class='col-md-6'>";
		page += "<h2>"+dish.name+'</h2></br>';
		page += "<img src=images/"+dish.image+' height="250px"><br/>';
		page += "<p style='margin-top:5%;''>"+dish.description+'</p>';

		page += "<button class='backsies' type='submit' style='background:#428bca;'>Back to select dish</button>"
		page += "</div>";
		page += "<div class='col-md-6' style='border-style:solid; background:#428bca;'>";
		page += "<h3>Ingredients for "+guests+" people<h3></br>";

			for (j=0;j<dish.ingredients.length;j++){
						
						var ingredient = dish.ingredients[j];
						page += "<h4>"+ingredient.quantity*guests+" "+ingredient.unit+" ";
						page += ingredient.name;
						page += " SEK "+ingredient.price*guests+"</h4>";
						
					}
				page += "<button class='confirmed' type='submit' style='background:#428bca; margin-bottom:5px; margin-right:30px;'>"
				page +="Confirm Dish</button>Total "+total+"</div></div>";
				return page;
		}

		Dish.html(this.getIngredients);
		this.backsies = container.find(".backsies");
		this.confirmed = container.find(".confirmed");

		this.tryShit = function(){ //since the controller doesn't exists yet the first time the view is runned
			try{
				selectedViewController.refresh();
			}
			catch(err){

			}
		}
		this.tryShit();
		
 	}
	this.updateView();
 	model.addObserver(this);
}