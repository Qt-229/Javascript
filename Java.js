function upDate(previewPic) {
    // Confirm the event is firing
    console.log("Hover event triggered!");
    console.log("Image source:", previewPic.src);
    console.log("Image alt:", previewPic.alt);

    // Change the background image and text of #image
    var imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

function undo() {
    // Confirm the undo is firing
    console.log("Undo event triggered!");

    var imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')"; // Remove background image
    imageDiv.innerHTML = "Hover over an image below to display here."; // Reset text
}