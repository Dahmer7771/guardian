const header_flex_container = document.getElementsByClassName('header_flex_container')[0];

window.onscroll = function() {
    if(window.pageYOffset != 0) {
        header_flex_container.classList.remove('header_flex_container_1');
        header_flex_container.classList.add('header_flex_container_2');
    } else {
        header_flex_container.classList.remove('header_flex_container_2');
        header_flex_container.classList.add('header_flex_container_1');
    }
}