//ExampleViewController Object constructor
var MenuViewController = function(view, model ) {

this.refresh = function (){

	view.printing.click(function(){
	    $("#presentedMenu").hide();
	    $("#finalMenu").show();

	});
}
this.refresh();

 view.back.click(function(){
 	$("#secondHeader").hide();
    $("#presentedMenu").hide();
    $("#SideBar").show();
    $("#AllDishes").show();

});

}