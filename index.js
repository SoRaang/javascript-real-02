/** Drag & Drop 이벤트 */

const dragContA = document.querySelector('.container');
const dragContB = document.querySelector('.container2');
const btnDrag = document.getElementById('btnDrag');

btnDrag.addEventListener('dragstart', (e) => {
    console.log('드래그 시작');
});

btnDrag.addEventListener('drag', (e) => {
    console.log('드래그 중');
});

dragContA.addEventListener('dragenter', (e) => {
    console.log('드래그 진입 A');
});

dragContA.addEventListener('dragleave', (e) => {
    console.log('드래그 나감 A');
});

dragContA.addEventListener('dragover', (e) => {
    console.log('드래그 위로 지나감 A');
    e.preventDefault();
});

dragContA.addEventListener('drop', (e) => {
    console.log('드랍됨 A');
});

dragContB.addEventListener('dragenter', (e) => {
    console.log('드래그 진입 B');
});

dragContB.addEventListener('dragleave', (e) => {
    console.log('드래그 나감 B');
});

dragContB.addEventListener('dragover', (e) => {
    console.log('드래그 위로 지나감 B');
    e.preventDefault();
});

dragContB.addEventListener('drop', (e) => {
    console.log('드랍됨 B');
});

// ------------------------------------------------------------------------------------------------------

/** parent.appendChild(new child) */

const dragParent = document.getElementById('dragParent');
const btnAppend = document.getElementById('btnAppend');

btnAppend.addEventListener('click', () => {
    const newChild = document.createElement('div');
    let childCount = dragParent.childElementCount;

    newChild.textContent = `Child ${childCount}`;

    dragParent.appendChild(newChild);
});

// ------------------------------------------------------------------------------------------------------

/** parent.insertBefore(new child, target) */

const refDiv = document.getElementById('refDiv');
const btnInsert = document.getElementById('btnInsert');

btnInsert.addEventListener('click', () => {
    const newChild = document.createElement('div');

    newChild.textContent = 'I cut in to the line';

    dragParent.insertBefore(newChild, refDiv);
});

// ------------------------------------------------------------------------------------------------------

/** Drag & Drop으로 아이템 옮기기 */

const dragConts = document.querySelectorAll('.drag-container');
const btnDrags = document.querySelectorAll('.button-draggable');

btnDrags.forEach(btn => {
    btn.addEventListener('dragstart', (e) => {
        btn.classList.add('dragging');
    });

    btn.addEventListener('dragend', (e) => {
        btn.classList.remove('dragging');
    });
});

dragConts.forEach(cont => {
    cont.addEventListener('dragover', (e) => {
        e.preventDefault();
        let afterElement = getDragAfterElement(cont, e.clientX);
        let currentDrag = document.querySelector('.dragging');

        if (afterElement === undefined) {
            cont.appendChild(currentDrag);
        } else {
            cont.insertBefore(currentDrag, afterElement);
        }
    });
});

function getDragAfterElement(container, x) {
    let currentChilds = [ ... container.querySelectorAll('.button-draggable:not(.dragging)') ];

    return currentChilds.reduce((closest, child) => {
        let box = child.getBoundingClientRect();
        let offset = x - box.left - box.width / 2;

        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

/**
 * 위의 getDragAfterElement 함수를 통해 드래그 위치에 따라 append할 위치를 정할 수 있다.
 */