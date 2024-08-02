/** 다른 간단한 드래그 & 드롭 예제 */

const dragCont = document.getElementById('imgDragCont');
const imgElems = dragCont.querySelectorAll('.img-element');

let currentDrag = null;

imgElems.forEach(img => {
    img.addEventListener('dragstart', () => {
        img.classList.add('dragging');
        currentDrag = img;
    });

    img.addEventListener('dragend', () => {
        img.classList.remove('dragging')
    });

    img.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('1')
    });

    img.addEventListener('drop', (e) => {
        if (currentDrag !== img) {
            dragCont.insertBefore(currentDrag, img);
        }

        currentDrag = null;
    });
});

dragCont.addEventListener('dragover', (e) => {
    e.preventDefault();
});