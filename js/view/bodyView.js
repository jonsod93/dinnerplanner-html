//ExampleView Object constructor
var ExampleView = function (container, model) {
	

	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.dishPrice = container.find("#dishPrice");
	this.totalPrice = container.find("#totalPrice");
	this.dishName = container.find("#dishName");
	this.Dishes = container.find("#Dishes");

			<div class="row">
  			<div class="col-md-2" style="border-style:solid; background:#A6CAFC;"><h4>My Dinner</h4>
  				<div>Guests: <button class="btn btn-default disabled" type="submit"><span id="numberOfGuests"></span></button>
					<div class="btn-group-vertical">
					<button id="plusGuest" class="btn btn-xs"><span class="glyphicon glyphicon-chevron-up"></span></button>
         		 	<button id="minusGuest" class="btn btn-xs"><span class="glyphicon glyphicon-chevron-down"></span></button>
					</div>
				</div>
				<center>
				<div class="row" style="margin-top:5%; margin-bottom:5%;">
				<div class="col-md-12" style="background:lightgray; border-style:solid;">Dish Name______Cost</div>
				</div>
				<div class="row">
				<div class="col-md-10 col-md-offset-1" style="border-style:solid; background:#B9EAFB;">
				<span id="dishName" ></span><span id="dishPrice" style="float:right;"></span>
				</div>
				</div>
				SEK <span id="totalPrice" style="float:right; margin-right:23px;"></span>
				<div class="row" style="margin-top:10%; margin-bottom:185%;">
				<div class="col-md-10 col-md-offset-1" style="background:#428bca; border-style:solid;">Confirm dinner</div>
				</div>
				</center>
			</div>
  			<div class="col-md-10">
  				<div class="row">
  					<div class="col-md-12" style="background:#428bca; border-style:solid;"><h4>SELECT DISH</h4>
  					<div class="row" style="margin-top:2%; margin-bottom:2%;">
  						<div class="col-md-4">
	    						<div class="input-group">
	      							<input type="text" class="form-control" placeholder="Enter key words">
	      							<span class="input-group-btn">
	        							<button class="btn btn-default" type="button">Search</button>
	      							</span>
	   		 					</div>
							</div>
  						<div class="col-md-3">
							<select class="form-control">
							  <option>Starter</option>
							  <option>Main</option>
							  <option>Dessert</option>
							</select>
						</div>
					</div>
  					</div>
  					<div class="col-md-12" id="dishSelectView">
  					<span id="Dishes"></span>
  					</div>
  					</div>
				</div>
			</div>



	model.addDishToMenu(1);
	this.dishPrice.html(model.getPrice(1));
	this.dishName.html(model.getDishName(1));
	this.numberOfGuests.html(model.getNumberOfGuests);
	this.totalPrice.html(model.getTotalMenuPrice());
 
}