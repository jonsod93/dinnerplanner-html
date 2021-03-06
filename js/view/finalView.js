//ExampleView Object constructor
var FinalView = function (container, model) {
	
	this.numberOfGuests = container.find("#numberOfGuests");
	//model.addDishToMenu(1);
//	model.addDishToMenu(100);
//	model.addDishToMenu(200);

	var ChosenMenu = container.find("#ChosenMenu");

	this.updateView = function(){
		this.getMenu = function(){

			
			var stuff = '';
			var menuList = model.getFullMenu();

			stuff += "<div class='col-md-3'></div>"

			for (l=0;l<menuList.length;l++){
					var dish = menuList[l];
					var price = model.getPrice(dish.RecipeID);
					stuff += "<div class='col-md-12'><div class='row' style='margin-bottom:5%; margin-left:2%;'><div class='col-md-2'>";
					stuff += "<h3>"+dish.Title+"</h3><img src="+dish.ImageURL+' width=150px"></div>';
					stuff += "<div class='col-md-4' style='margin-top:-20px;'><h3>Instructions</h3>";
			  		stuff += "<h5>"+dish.Instructions+"</h5></div>";
			  		stuff += "<div class='col-md-4' style='margin-top:-5px;'><h4>Description</h4><h5>"+dish.Description+"</h5></div>";
			  		stuff += '</div></div>';
		  	}

		  	return stuff;
		}
		this.numberOfGuests.html(model.getNumberOfGuests);
		ChosenMenu.html(this.getMenu);
	}

	this.updateView();
 	model.addObserver(this);
 
}