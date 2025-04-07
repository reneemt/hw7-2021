var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	
	// Initialize the video element and turn off autoplay and looping
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	
	// Play Button
	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
		// Update the volume information
		document.querySelector("#volume").innerHTML = Math.round(video.volume * 100) + "%";
	});
	
	// Pause Button
	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
	});
	
	// Slow Down Button
	document.querySelector("#slower").addEventListener("click", function() {
		// Slow the current video speed by 10%
		video.playbackRate *= 0.9;
		// Log the new speed to the console
		console.log("New speed: " + video.playbackRate);
	});
	
	// Speed Up Button
	document.querySelector("#faster").addEventListener("click", function() {
		// Increase the current video speed proportionally
		// To reverse the 10% slow down, we divide by 0.9 which is equivalent to multiplying by (1/0.9)
		video.playbackRate /= 0.9;
		// Log the new speed to the console
		console.log("New speed: " + video.playbackRate);
	});
	
	// Skip Ahead Button
	document.querySelector("#skip").addEventListener("click", function() {
		// Advance the current video by 10 seconds
		console.log("Original location: " + video.currentTime);
		
		// Check if skipping would exceed video length
		if (video.currentTime + 10 >= video.duration) {
			video.currentTime = 0;
		} else {
			video.currentTime += 10;
		}
		
		// Log the current location of the video
		console.log("New location: " + video.currentTime);
	});
	
	// Mute Button
	document.querySelector("#mute").addEventListener("click", function() {
		// Toggle mute state
		if (video.muted) {
			video.muted = false;
			this.innerHTML = "Mute";
		} else {
			video.muted = true;
			this.innerHTML = "Unmute";
		}
	});
	
	// Volume Slider
	document.querySelector("#slider").addEventListener("input", function() {
		// Change the volume based on the slider
		video.volume = this.value / 100;
		// Update the volume information
		document.querySelector("#volume").innerHTML = Math.round(video.volume * 100) + "%";
	});
	
	// Old School Button (Add oldSchool class)
	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
	});
	
	// Original Button (Remove oldSchool class)
	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
	});
});