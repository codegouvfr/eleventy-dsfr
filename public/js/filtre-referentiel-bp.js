document.querySelector('#form-priority').addEventListener('change', changeFilterValue);
document.querySelector('#form-who').addEventListener('change', changeFilterValue);

const sheets = document.querySelectorAll('[data-type="sheet"]');
let filters = {};

function changeFilterValue(event) {
    const filterName = event.target.name;
    const filterValue = event.target.value;

    filters[filterName] = filterValue;
    updateSheetsList();
}

function updateSheetsList()
{
    sheets.forEach(function (sheet) {
        sheet.hidden = false;
    });
    
    sheets.forEach(function (sheet) {
        for (const filterName in filters) {
            if (filters[filterName] && filters[filterName] !== sheet.getAttribute('data-' + filterName)) {
                sheet.hidden = true;
            }
        }
    });
}