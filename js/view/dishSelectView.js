//ExampleView Object constructor
var DishSelectView = function (container, model) { //The view
	

	var Dishes = container.find("#Dishes");
	
	this.updateView = function(){

		var AllDishes ='';
		var AllType = model.getSearched();
		
		this.getDishes = function ()
		{
			AllDishes += '<div class="row" style="margin-top:5%;">';
			for (i=0;i<AllType.length;i++)
			{
				var dish = AllType[i];
				AllDishes += "<div class='col-md-2'>";
		  		AllDishes += "<center><img class='buttons' id='"+dish.RecipeID+"'src="+dish.ImageURL+' height="100px" width="100px"><br/><h4>';
		  		AllDishes += dish.Title.substr(0,10)+'...';
		  		AllDishes += "<h4>";
		  		AllDishes += '</div></center>';
		  	}
		  	AllDishes += "</div>"
		return AllDishes
		};

		Dishes.html(this.getDishes());
		//this.choice = container.find(".form-control");
		this.buttons = container.find(".buttons");
		this.dropdown = container.find(".dropdown");
		this.search = container.find("#searchbutton");

		this.tryShit = function(){ //since the controller doesn't exists yet the first time the view is runned
			try{
				dishSelectViewController.refresh();
			}
			catch(err){

			}
		}
		this.tryShit();
		
	}

	this.updateView();
 	model.addObserver(this);
 
}