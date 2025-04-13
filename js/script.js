"use strict"

let documentActions = (e) => {
    const targetElement = e.target;
    if (targetElement.closest('.icon-menu')) {
        document.documentElement.classList.toggle('open-menu');
    }
}

document.addEventListener('click', documentActions);


const options = {
    root: null,
    rootMargin: "0px 0px 0px 0px",

    // Percentage of the object's visibility
    // At which the event is triggered
    // 0 means any appearance
    // 1 means the object is fully visible in the viewport

    threshold: 0.05,
}

const callback = (entries, observer) => {
    entries.forEach(entry => {
        const currentElement = entry.target
        if (entry.isIntersecting) {
            currentElement.classList.add('--animate')
            // console.log("I see you");
        } else {
             currentElement.classList.remove('--animate');
            //console.log("I do not see you");
        }
    })
}

const observer = new IntersectionObserver(callback, options);

const animElements = document.querySelectorAll('[class*="--anim"]');
animElements.forEach(animElement =>{
    observer.observe(animElement);
})