const slidesContainer = document.getElementById('imgCont');
const slideItems = slidesContainer.querySelectorAll('.img-element');

const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

// ------------------------------------------------------------------------------------------------------

let currentItem = 0;

function imageSlider(n) {
    for(let i = 0; i < slideItems.length; i ++) {
        slideItems[i].classList.remove('active');
    }

    slideItems[n].classList.add('active');
}

function prevSlide() {
    if (currentItem > 0) {
        currentItem -= 1;
    } else {
        currentItem = slideItems.length - 1;
    }

    imageSlider(currentItem);
}

function nextSlide() {
    if (currentItem < slideItems.length) {
        currentItem += 1;
    } else {
        currentItem = 0;
    }

    imageSlider(currentItem);
}

btnPrev.addEventListener('click', prevSlide());
btnNext.addEventListener('click', nextSlide());