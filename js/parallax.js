// function parallax() {
//     window.addEventListener("mousemove", function(event) {
//         let mouseX = event.clientX;
//         let mouseY = event.clientY;
//         let newTransformX = 
//         let newTransformY =

//         window.style.transform = `translateX(-${checkIndex / 40}%)`;
//         window.style.transform = `translateY(-${checkIndex / 40}%)`;
//     });
// }



// let parallaxItem = document.querySelector(".slider-pic");

// window.addEventListener("mousemove", function(event) {
//     let mouseX = event.clientX;
//     let mouseY = event.clientY;

//     let rect = parallaxItem.getBoundingClientRect();
//     let rectWidth = rect.width;
//     let rectHeight = rect.height;

//     let newX = (mouseX - rectWidth) / 2;
//     let newY = (mouseY - rectHeight) / 2;
    
//     parallaxItem.style.transform = `translateX(-${newX}px) translateY(-${newY}px)`;
// });



const slideImages = document.querySelectorAll(".slider-pic");

window.addEventListener("mousemove",(e) => {
    let x = e.offsetX;
    let y = e.offsetY;

    for(let i = 0; i < slideImages.length; i++) {
        let newParallax = slideImages[i];
        newParallax.style.transform = `translate(${-x/70}px, ${-y/70}px)`;
    }
})