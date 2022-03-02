export default function onHeaderClick(id) {
    let object = document.getElementById(id).getBoundingClientRect();
    let tillTitle = object.top - object.height;
    return window.scrollBy(0,tillTitle);
} 