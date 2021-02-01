//Получаем элементы
const formSearch = document.querySelector('.form-search');
const inputCitiesFrom = document.querySelector('.input__cities-from');
const dropdownCitiesFrom = document.querySelector('.dropdown__cities-from');
const inputCitiesTo = document.querySelector('.input__cities-to');
const dropdownCitiesTo = document.querySelector('.dropdown__cities-to');
const inputDateDepart = document.querySelector('.input__date-depart');

//данные
const citiesApi = 'http://api.travelpayouts.com/data/ru/cities.json',
    proxy = 'https://cors-anywhere.herokuapp.com',
    API_KEY = '36be4e110a8029189a34746f784af73c',
    calendar = 'http://min-prices.aviasales.ru/calendar_preload';


let city = [];

// функции

const getData = (url, callback) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) return;
        if (request.status === 200) {
            callback(request.response);
        } else {
            console.error(request.status);
        }
    });
    request.send();
};

const showCity = (input, list) => {
    list.textContent = '';

    if (input.value === '') return;

    const filterCity = city.filter((item) => {
        if (item.name) {
            //приводим к нижнему регистру
            const fixItem = item.name.toLowerCase();
            return fixItem.includes(input.value.toLowerCase());
        }

    });
    filterCity.forEach((item) => {
        const li = document.createElement('li');
        li.classList.add('dropdown__city');
        //выводим на страницу
        li.textContent = item.name;
        list.append(li)
    });
};



function handleCityClick(target, inputCities, dropdownCities) {
    if (target.tagName.toLowerCase() === 'li') {
        inputCities.value = target.textContent;
        dropdownCities.textContent = '';
    }
}

// Обработчики событий
inputCitiesFrom.addEventListener('input', () => {
    showCity(inputCitiesFrom, dropdownCitiesFrom)
});

dropdownCitiesFrom.addEventListener('click', (event) => {
    handleCityClick(event.target, inputCitiesFrom, dropdownCitiesFrom);
});

inputCitiesTo.addEventListener('input', () => {
    showCity(inputCitiesTo, dropdownCitiesTo)
});

dropdownCitiesTo.addEventListener('click', (event) => {
    handleCityClick(event.target, inputCitiesTo, dropdownCitiesTo);
});
formSearch.addEventListener('submit', (event) => {
    event.preventDefault()
});

//вызовы  ффункций
getData(proxy + citiesApi, (data) => {
    city = JSON.parse(data);
});

/*
(item) => {
    return item.name
}
*/


