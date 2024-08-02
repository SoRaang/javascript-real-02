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

btnDrags.forEach(btn => { // 드래그하는 중에 dragging 클래스를 부여한다.
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
        let afterElement = getDragAfterElement(cont, e.clientX); // 아래의 함수를 이용해 드래그 중인 요소가 다른 요소의 앞에 있는지 판별한다.
        let currentDrag = document.querySelector('.dragging');

        if (afterElement === undefined) { // 드래그 중인 요소가 맨 마지막이면 마지막 자식 요소로 append 한다.
            cont.appendChild(currentDrag);
        } else { // 드래그 중인 요소가 다른 요소의 앞에 있으면, 그 앞에 insert 한다.
            cont.insertBefore(currentDrag, afterElement);
        }
    });
});

function getDragAfterElement(container, x) {
    let currentChilds = [ ... container.querySelectorAll('.button-draggable:not(.dragging)') ]; // 자신의 내부에서 드래그 중이 아닌 요소 선택

    return currentChilds.reduce((closest, child) => {
        let box = child.getBoundingClientRect(); // 드래그 중이 아닌 요소들의 충돌 박스 크기
        let offset = x - box.left - box.width / 2; // 상위 이벤트에서 x로 전달받은 인자는 e.clientX 이다. 즉, 마우스의 위치가 박스의 앞쪽 절반에 있는지를 판단한다.

        if (offset < 0 && offset > closest.offset) { // reduce를 이용해 이전 요소의 offset보다 가까우면 현재 요소를, 아니면 이전 요소를 반환한다.
            return { offset: offset, element: child }
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

/**
 * 위의 getDragAfterElement 함수를 통해 드래그 위치에 따라 append할 위치를 정할 수 있다.
 * 여기서는 가로로만 정렬되는 형태이기 때문에 offset은 x 좌표를 기준으로 계산한다.
 */