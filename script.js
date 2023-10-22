
// create an img element and return it
function createImgElement(photoURL){
    const imgElem = document.createElement('img');
    imgElem.src = photoURL;
    imgElem.alt = 'Photo from URL not working'
    imgElem.classList.add('zoomable');
    return imgElem;
}

// Add the img elem to gallery (div element)
function addPhotoToGallery(imgElem){
    const photoGalleryDiv = document.getElementById("photo-gallery");
    photoGalleryDiv.appendChild(imgElem);
    addZoom(imgElem);
}

// Delete the givin img element
function addDeleteButton(imgElem){
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'DELETE';
    deleteButton.addEventListener('click', function(){
        imgElem.remove();
        deleteButton.remove();
    });
    const photoGalleryDiv = document.getElementById("photo-gallery");
    photoGalleryDiv.appendChild(deleteButton);

}

// Handles zooming in
function zoomIn(imgElem) {
    const currentWidth = imgElem.width;
    const currentHeight = imgElem.height;
    imgElem.style.width = (currentWidth * 1.2) + 'px'; 
    imgElem.style.height = (currentHeight * 1.2) + 'px'; 
}

// Handles zooming out
function zoomOut(imgElem) {
    const currentWidth = imgElem.width;
    const currentHeight = imgElem.height;
    imgElem.style.width = (currentWidth * 0.8) + 'px'; 
    imgElem.style.height = (currentHeight * 0.8) + 'px'; 
}


// Add zoom  to the image
function addZoom(imgElem) {
    imgElem.addEventListener('wheel', function(event) {
        event.preventDefault();
        if (event.deltaY < 0) {
            zoomIn(imgElem); 
        } else {
            zoomOut(imgElem); 
        }
    });
}


function addPhoto(){
    const photoURL = prompt("Enter the URL of the photo: ")
    const imgElem = createImgElement(photoURL);
    addPhotoToGallery(imgElem);
    const deleteButton = addDeleteButton(imgElem);

}


const addPhotoBtn = document.getElementById('addPhotoBtn');
addPhotoBtn.addEventListener('click', addPhoto);


// https://www.freecodecamp.org/news/content/images/2023/04/JavaScript-Blog-Cover.png