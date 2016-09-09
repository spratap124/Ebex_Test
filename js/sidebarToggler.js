$(document).ready(function (){
	var toggler =  $(".sideBarToggler");
	var sideBar =  $(".sidebarMenu");
	var enabled = false;

	toggler.on("click", function(){
		if(enabled){
			enabled=false;
			sideBar.animate({right:"-100%",opacity:0},500);
		}
		else{
			enabled=true;
			sideBar.animate({right:"0px",opacity:1},500);
		}
	});
});