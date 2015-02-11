//ExampleView Object constructor
var SelectedDishView = function (container, model) {
	

	var Dish = container.find("#Dish");
	var guests = model.getNumberOfGuests();
	var dish = model.getDish(1);
	var total = model.getPrice(1);
	var page ='';

    
	this.getIngredients = function ()
	{
	page += '<div class="row">';
	page += "<div class='col-md-6'>";
	page += "<h2>"+dish.name+'</h2></br>';
	page += "<img src=images/"+dish.image+' height="300px"><br/>';
	page += "<p style='margin-top:5%;''>"+dish.description+'</p>';

	page += "<button class='btn btn-default' type='submit' style='background:#428bca;''>Back to Select Dish</button>"
	page += "<h2>Preperations</h2></div>";
	page += "<div class='col-md-6' style='border-style:solid; background:#428bca;'>";
	page += "<h3>Ingredients for "+guests+" people<h3></br>";

		for (j=0;j<dish.ingredients.length;j++){
					
					var ingredient = dish.ingredients[j];
					page += "<h4>"+ingredient.quantity*guests+" "+ingredient.unit+" ";
					page += ingredient.name;
					page += " SEK "+ingredient.price*guests+"</h4>";
					
				}
			page += "<button class='btn btn-default' type='submit' style='background:#428bca; margin-bottom:5px; margin-right:30px;'>"
			page +="Back to Select Dish</button>Total "+total+"</div></div>";
			return page;
	}

	Dish.html(this.getIngredients);
 
}