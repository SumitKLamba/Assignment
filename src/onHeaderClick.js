export default function onHeaderClick(id) {
    let object = document.getElementById(id).getBoundingClientRect();
    return window.scrollTo(0,object.top);
} 