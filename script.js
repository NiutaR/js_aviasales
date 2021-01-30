const formSearch = document.querySelector('.form-search');
const inputCitiesFrom = document.querySelector('.input__cities-from');
const dropdownCitiesFrom = document.querySelector('.dropdown__cities-from');
const inputCitiesTo = document.querySelector('.input__cities-to');
const dropdownCitiesTo = document.querySelector('.dropdown__cities-to');
const inputDateDepart = document.querySelector('.input__date-depart');

const city = ['Москва', 'Санкт-Петербург', 'Минск', 'Караганда', 'Челябинск', 'Керчь', 'Волгоград', 'Самара',
    'Днепропетровск', 'Екатеринбург', 'Одесса', 'Нижний Новгород', 'Калининград', 'Кишинев'
];

const showCity = (input, list) => {
    list.textContent = '';

    if (input.value === '') return;

    const filterCity = city.filter((item) => {
        const fixItem = item.toLowerCase();
        return fixItem.includes(input.value.toLowerCase());
    });
    filterCity.forEach((item) => {
        const li = document.createElement('li');
        li.classList.add('dropdown__city');
        li.textContent = item;
        list.append(li);
    });
};

inputCitiesFrom.addEventListener('input', () => {
    showCity(inputCitiesFrom, dropdownCitiesFrom)
});

function handleCityClick(target, inputCities, dropdownCities) {
    if (target.tagName.toLowerCase() === 'li') {
        inputCities.value = target.textContent;
        dropdownCities.textContent = '';
    }
}

dropdownCitiesFrom.addEventListener('click', (event) => {
    handleCityClick(event.target, inputCitiesFrom, dropdownCitiesFrom);
});

inputCitiesTo.addEventListener('input', () => {
    showCity(inputCitiesTo, dropdownCitiesTo)
});

dropdownCitiesTo.addEventListener('click', (event) => {
    handleCityClick(event.target, inputCitiesTo, dropdownCitiesTo);
});