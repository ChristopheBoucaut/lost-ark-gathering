(function () {
    'use strict';

    var resultsEl = document.getElementById('results');
    var continentsContainerEl = document.querySelector('#filter-continents > section > div:last-child');
    var filtersContainerEl = document.getElementById('active-filters');
    var searchParams = window.GatheringTools.searchParams;

    // Add ressource for search
    for (var ressourceId in window.GatheringTools.ressources) {
        var ressource = window.GatheringTools.ressources[ressourceId];
        resultsEl.append(createResultEl(ressource));
    }

    // Add continents filter
    for (var continentId in window.GatheringTools.continents) {
        var continent = window.GatheringTools.continents[continentId];
        continentsContainerEl.append(createContinentFilter(continent));
        searchParams.continentsEnabled.push(continentId);
    }

    document.getElementById('filter-hider-insufficient-level').onclick = function () {
        searchParams.hideInsufficientLevel = !searchParams.hideInsufficientLevel;
        window.GatheringTools.refreshListingWithFilters();
    };

    function createContinentFilter(continent) {
        var inputEl = document.createElement('input');
        inputEl.id = 'continent-filter-' + continent.id;
        inputEl.type = 'checkbox';
        inputEl.checked = true;
        inputEl.value = continent.id;
        inputEl.onchange = refreshContinentsFilter;

        var labelEl = document.createElement('label');
        labelEl.setAttribute('for', inputEl.id);
        labelEl.innerText = continent.name;
        labelEl.prepend(document.createElement('span'));

        var continentEl = document.createElement('div');
        continentEl.append(inputEl);
        continentEl.append(labelEl);

        return continentEl;
    }

    function refreshContinentsFilter() {
        var continentEls = document.querySelectorAll('#filter-continents input:checked');
        searchParams.continentsEnabled = [];
        for (var i = 0; i < continentEls.length; i++) {
            searchParams.continentsEnabled.push(continentEls[i].value);
        }
        window.GatheringTools.refreshListingWithFilters();
    }

    function createResultEl(ressource) {
        var resultEl = document.createElement('li');
        resultEl.classList.add('ressource-type-' + ressource.type);
        resultEl.innerText = ressource.name;
        resultEl.onclick = function () {
            addRessourceFilter(ressource);
            resultsEl.classList.add('hide');
            setTimeout(function () {
                resultsEl.classList.remove('hide');
            }, 200);
        };

        return resultEl;
    }

    function addRessourceFilter(ressource) {
        if (searchParams.filters.indexOf(ressource.id) !== -1) {
            return;
        }

        var el = document.createElement('li');
        el.dataset.ressourceId = ressource.id;
        el.innerText = ressource.name;

        var deleteEl = document.createElement('span');
        deleteEl.onclick = function () {
            removeRessourceFilter(el);
        };
        el.append(deleteEl);
        filtersContainerEl.append(el);

        searchParams.filters.push(ressource.id);
        window.GatheringTools.refreshListingWithFilters();
    }

    function removeRessourceFilter(el) {
        var index = searchParams.filters.indexOf(el.dataset.ressourceId);
        if (index === -1) {
          return;
        }
        searchParams.filters.splice(index, 1);
        el.remove();
        window.GatheringTools.refreshListingWithFilters();
    }
})();
