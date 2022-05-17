$window = $(window);

function newFunc() {
	console.log("Hello!");
}



function siteResizeFunction() {

	prevWindowWidth = windowWidth;
	windowWidth = $window.width();

	newFunc();

	if (prevWindowWidth <= 1080 && windowWidth > 1080) {
		newFunc();
	}

	if (prevWindowWidth > 1080 && windowWidth <= 1080) {
		newFunc();
	}
}

$(function () {
	// siteResizeFunction();
	$window.on("resize", siteResizeFunction);
})
