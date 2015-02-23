//ExampleView Object constructor
var DishSelectView = function (container, model) {
	

	var Dishes = container.find("#Dishes");

	this.updateView = function(){
		var AllDishes ='';
		var AllType = model.getAllDishes(model.getCurrentType(),model.searched);
		
		this.getDishes = function ()
		{
			AllDishes += '<div class="row" style="margin-top:5%;">';
			for (i=0;i<AllType.length;i++)
			{
				var dish = AllType[i];
				AllDishes += "<div class='col-md-2'>";
		  		AllDishes += "<center><img class='buttons' id='"+dish.id+"'src=images/"+dish.image+' height="100px" width="100px"><br/><h4>';
		  		AllDishes += dish.name;
		  		AllDishes += "<h4>";
		  		AllDishes += "<p style='font-size:14px;'>"+dish.description.substr(0,89)+'...</p></div></center>';
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