// let stars = document.getElementById('stars');
// let moon = document.getElementById('moon');
// let mountains_behind = document.getElementById('mountains_behind');
let hills = document.getElementById('hills');
let man = document.getElementById('man');
//let moon = document.getElementById('moon');
//let TreeBack = document.getElementById('TreeBack');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
//let TreeFront = document.getElementById('TreeFront');
let header = document.querySelector('header');
window.addEventListener('scroll',function(){
    let value = window.scrollY;
    // stars.style.left = value*0.25+'px';
    // moon.style.top = value*1.05+'px';
    // mountains_behind.style.top = value*0.5+'px';
    // mountains_front.style.top = value*0+'px';
    hills.style.top = value*0.5+'px';
    man.style.top = value*0.25+'px';
    // TreeBack.style.right = value*0.75+'px';
    // TreeFront.style.left = value*0.75+'px';
    text.style.marginRight = value*7+'px';
    text.style.marginTop = value*1.5+'px';
    btn.style.marginTop = value*1.5+'px';
    header.style.top = value*0.5+'px';
})

//Creating carousel effect
const carousel = document.querySelector(".carousel");
let sliders = [];
let slideIndex = 0;
const createSlide = () => {
    if(slideIndex >= movies.length){
        slideIndex = 0;
    }
    //creating the DOM elements
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //attaching all the elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    //setting elements classnames
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);

    //adding sliding effects
    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 *
        (sliders.length - 2)}px)`;
    }
}

for(let i=0; i < 3; i++){
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);