/**/
/**/
/**/
var position = 1;
window.onload = function(){
	var leftChange = document.querySelector("#left");
	var rightChange = document.querySelector("#right");
	var carousel = document.querySelector("#carousel");
	var dotList = document.querySelector("#dot_list");

	var carouselLeft = carousel.style.left;
	leftChange.addEventListener("click",function(){
		if(position==3) {
			return;
			alert("return");
		};
		carousel.style.left = carouselLeft - 600 + "px";
		carouselLeft = carouselLeft - 600;
		position++;
	});

	rightChange.addEventListener("click",function(){
		if(position==1) {
			return;
			alert("return");
		};
		carousel.style.left = carouselLeft + 600 + "px";
		carouselLeft = carouselLeft + 600;
		position--;
	});
	dotList.addEventListener("click",function(e){
		if(e.target && e.target.id == "one"){
			carousel.style.left = 0;
		};
		if(e.target && e.target.id == "two"){
			carousel.style.left = -600 + "px";
		};
		if(e.target && e.target.id == "three"){
			carousel.style.left = -1200 + "px";
		};
	});
};