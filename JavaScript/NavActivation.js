const nav_slide = () => {
    const resize = document.querySelector('.resize');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    resize.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index)=> {

            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFades 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        resize.classList.toggle('toggle');
    });

}

nav_slide();
