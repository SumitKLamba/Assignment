export default function onHeaderClick(id) {
    /* 
        id contains the id of the element that we want to appear on screen,
        object gives us an object which has different properties, out of which we use top to get height from top of page,
        and height to get the element's height, and we subtract these two so that the heading element can also appear on
        screen when we click on the button,
        then window.scrollBy scrolls us to that position
    */
    let object = document.getElementById(id).getBoundingClientRect();
    let tillTitle = object.top - object.height;
    return window.scrollBy({
        top: tillTitle,
        behavior: "smooth"
    });
} 