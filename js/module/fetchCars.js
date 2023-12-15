
export const initFetchCars = () => {
    console.log('Working...')
    // Запрашиваем данные с помощью fetch
    fetch('js/data.js')
    .then(response => {
        // Проверяем, успешно ли выполнен запрос
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(users => {
        let brand = '';
        let model = '';

        // Проходимся по каждому элементу (автомобильному бренду) в данных
        users.forEach(user => {
        brand += "<option>" + user.name + "</option>";

        // Проходимся по каждой модели автомобиля данного бренда
        user.models.forEach(mod => {
            model += "<option data-id=\"" + user.name + "\">" + mod.name + "</option>";
        });
        });

        // Заполняем выпадающие списки на странице данными
        document.getElementById('model').innerHTML = model;
        document.getElementById('brand').innerHTML = brand;
        document.getElementById('brand-modal').innerHTML = brand;
        document.getElementById('model-modal').innerHTML = model;
        document.getElementById('reviews_brand').innerHTML = brand;
        document.getElementById('reviews_model').innerHTML = model;


        showModelsForBrand("AC");

    })
    .catch(error => {
        console.log('There was a problem with the fetch operation:', error.message);
    });

    function showModelsForBrand(brandName) {
        let options = document.querySelectorAll('option[data-id]');
        options.forEach(option => {
            option.hidden = true;
        });
        let relevantModels = document.querySelectorAll('option[data-id="' + brandName + '"]');
        relevantModels.forEach(model => {
            model.hidden = false;
        });
    }

    document.getElementById("brand").addEventListener('change', function () {
        let value = this.value;
        let relevantModels = document.querySelectorAll('option[data-id="' + value + '"]');
        let modelSelect = document.getElementById('model');
        modelSelect.innerHTML = "";
        Array.from(relevantModels).forEach(model => {
            modelSelect.appendChild(model.cloneNode(true));
            model.removeAttribute('hidden');
        });
        // modelSelect.querySelector('option:not([hidden]):first').selected = true;
    });
    

    // document.getElementById("reviews_brand").addEventListener('change', function () {
    //     let value = this.value;
    //     let relevantModels = document.querySelectorAll('option[data-id="' + value + '"]');
    //     let modelSelect = document.getElementById('reviews_model');
    //     modelSelect.innerHTML = "";
    //     Array.from(relevantModels).forEach(model => {
    //         modelSelect.appendChild(model.cloneNode(true));
    //         model.removeAttribute('hidden');
    //     });
    //     modelSelect.querySelector('option:not([hidden]):first').selected = true;
    // });

    // document.getElementById("brand-modal").addEventListener('change', function () {
    //     let value = this.value;
    //     let relevantModels = document.querySelectorAll('option[data-id="' + value + '"]');
    //     let modelSelect = document.getElementById('model-modal');
    //     modelSelect.innerHTML = "";
    //     Array.from(relevantModels).forEach(model => {
    //         modelSelect.appendChild(model.cloneNode(true));
    //         model.removeAttribute('hidden');
    //     });
    //     modelSelect.querySelector('option:not([hidden]):first').selected = true;
    // });
}
