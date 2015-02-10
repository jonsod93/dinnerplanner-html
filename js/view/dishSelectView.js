//ExampleView Object constructor
var DishSelectView = function (container, model) {
	

	var Dishes = container.find("#Dishes");

	
	var AllDishes ='';
	var AllType = model.getAllDishes('starter');
	
	this.getDishes = function ()
	{
		AllDishes += '<div class="row" style="margin-top:5%;">';
		for (i=0;i<AllType.length;i++)
		{
			var dish = AllType[i];
			AllDishes += "<div class='col-md-2'>";
	  		AllDishes += "<center><img src=images/"+dish.image+' height="100px"><br/><h4>';
	  		AllDishes += dish.name;
	  		AllDishes += "<h4>";
	  		AllDishes += "<p style='font-size:14px;'>"+dish.description+'</p></div></center>';
	  	}
	  	AllDishes += "</div>"
	return AllDishes
	};

	Dishes.html(this.getDishes());
 
}