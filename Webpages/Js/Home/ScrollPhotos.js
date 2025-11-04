const projectImage = document.getElementById("projectImage");
const previousImage = document.getElementById("previousImage");
const nextImage = document.getElementById("nextImage");
let index = 0;
let imagesToShow = {
    DesignForUnderstanding: ["/Webpages/Assets/Images/PortfolioWorks/DesignForUnderstanding/FinalClearDesign.png",
    "/Webpages/Assets/Images/PortfolioWorks/DesignForUnderstanding/FinalPersuasiveDesign.png"],
    DesignForDimensions: ["/Assets/Images/PortfolioWorks/CS-257/DesignForDimensions/FigmaDesign.png",
    "/Webpages/Assets/Images/PortfolioWorks/CS-257/DesignForDimensions/Blog_Site_Sketches/Sketch1.png",
        "/Webpages/Assets/Images/PortfolioWorks/CS-257/DesignForDimensions/Main_Page_Design_Sketches/Sketch1.png",
        "/Webpages/Assets/Images/PortfolioWorks/CS-257/DesignForDimensions/Viewer_Design_Sketches/Sketch1.png",],
};

previousImage.addEventListener("click", function() {
    let photoArray = getCorrectPhotoArray();
    if (index > photoArray.length) {
    projectImage.setAttribute("src",photoArray[index]);
    index--;
    } else {
        projectImage.setAttribute("src", photoArray[index]);
        index = photoArray.length - 1;
    }
})

nextImage.addEventListener("click", function() {
    let photoArray = getCorrectPhotoArray();
    if (index < photoArray.length) {
        projectImage.setAttribute("src",photoArray[index]);
        index++;
    } else {
        projectImage.setAttribute("src", photoArray[index]);
        index = 0;
    }
})

function getCorrectPhotoArray() {
    if(projectImage.dataset.project === "DesignForUnderstanding") {
        return imagesToShow.DesignForUnderstanding;
    }
    if(projectImage.dataset.project === "DesignForDimensions") {
        return imagesToShow.DesignForDimensions;
    }
}