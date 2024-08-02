const sortContainer = document.getElementById('container');
const sortColumns = document.querySelectorAll('.div-column');

sortColumns.forEach(column => {
    const aColumn = Sortable.create(column, {
        group: 'shared',
        animation: 150,
        ghostClass: 'item-float'
    });
});