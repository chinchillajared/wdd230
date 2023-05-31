//Get the image elements
const images = document.querySelectorAll('img');

//Create the obsever 
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){

            //Remove the placeholder and load the image instead 
            const image = entry.target;
            const src = image.getAttribute('data-src');
            image.setAttribute('src', src);
            
            //Stop observing 
            observer.unobserve(entry.target);
       
        }
    });
});

images.forEach(image => {
    observer.observe(image);
});








