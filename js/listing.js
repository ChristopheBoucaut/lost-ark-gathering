(function () {
    'use strict';

    // Generate listing.
    var containerEl = document.querySelector('main');
    var character = window.GatheringTools.character;
    var searchParams = window.GatheringTools.searchParams;

    var continents = window.GatheringTools.continents;
    for (var continentId in continents) {
        var continent = continents[continentId];
        var continentEl = generateContinentEl(continent);
        containerEl.append(continentEl);
    }
    refreshInsufficientLevel();

    window.GatheringTools.refreshListingWithFilters = refreshListingWithFilters;
    window.GatheringTools.refreshInsufficientLevel = refreshInsufficientLevel;

    function refreshListingWithFilters() {
        var ressourceEls = document.querySelectorAll('[data-ressource-id]');
        for (var i = 0; i < ressourceEls.length; i++) {
            if (
                searchParams.hideInsufficientLevel &&
                ressourceEls[i].parentElement.parentElement.parentElement.classList.contains('insufficient-level')
            ) {
                // Hide when we don't have the required level
                ressourceEls[i].classList.add('hide');
            } else if (
                searchParams.filters.length > 0 && // Has fiter
                searchParams.filters.indexOf(ressourceEls[i].dataset.ressourceId) === -1 // Ressource filtered
            ) {
                ressourceEls[i].classList.add('hide');
            } else {
                ressourceEls[i].classList.remove('hide');
            }

        }
        refreshHierarchy(containerEl, 'continent');
    }

    function refreshInsufficientLevel() {
        var spotIdEls = document.querySelectorAll('[data-spot-id]');
        for (var i = 0; i < spotIdEls.length; i++) {
            if (character.stats[spotIdEls[i].dataset.ressourceTypeId] < spotIdEls[i].dataset.requiredLevel) {
                spotIdEls[i].classList.add('insufficient-level');
            } else {
                spotIdEls[i].classList.remove('insufficient-level');
            }
        }
    }

    function refreshHierarchy(parent, hierarchy) {
        var nextHierarchy;
        var els = parent.querySelectorAll('[data-' + hierarchy + '-id]');
        switch (hierarchy) {
          case 'continent':
              nextHierarchy = 'region';
              break;
          case 'region':
              nextHierarchy = 'spot';
              break;
        }
        for (var i = 0; i < els.length; i++) {
            if (
                (els[i].dataset.continentId && searchParams.continentsEnabled.indexOf(els[i].dataset.continentId) === -1) ||
                els[i].querySelectorAll('[data-ressource-id]:not(.hide)').length == 0
            ) {
                els[i].classList.add('hide');
            } else {
                els[i].classList.remove('hide');
                if (nextHierarchy) {
                    refreshHierarchy(els[i], nextHierarchy);
                }
            }
        }
    }

    function generateContinentEl(continent) {
        var continentTitleEl = document.createElement('h2');
        continentTitleEl.innerText = continent.name;

        var continentEl = document.createElement('article');
        continentEl.dataset.continentId = continent.id;
        continentEl.append(continentTitleEl);

        for (var regionId in continent.regions) {
            var region = continent.regions[regionId];
            continentEl.append(generateRegionEl(region));
        }

        return continentEl;
    }

    function generateRegionEl(region) {
        var regionTitleEl = document.createElement('h3');
        regionTitleEl.innerText = region.name;

        var spotsEl = document.createElement('div');
        for (var spotId in region.spots) {
            var spot = region.spots[spotId];
            spotsEl.append(generateSpotEl(spot));
        }

        var regionEl = document.createElement('article');
        regionEl.dataset.regionId = region.id;
        regionEl.append(regionTitleEl);
        regionEl.append(spotsEl);

        return regionEl;
    }

    function generateSpotEl(spot) {
        var spotContentEl = document.createElement('div');
        spotContentEl.classList.add('ressource-type-' + spot.type);
        spotContentEl.innerText = spot.name;

        var ressourcesEl = document.createElement('ul');
        for (var ressourceId in spot.ressources) {
            var ressource = spot.ressources[ressourceId];
            ressourcesEl.append(generateRessourceEl(ressource));
        }
        spotContentEl.append(ressourcesEl);

        var spotRequiredLevelEl = document.createElement('div');
        spotRequiredLevelEl.innerText = 'niveau ' + spot.requiredLevel;

        var spotZoneEl = document.createElement('div');
        spotZoneEl.innerText = spot.zone;

        var spotEl = document.createElement('div');
        spotEl.dataset.spotId = spot.id;
        spotEl.dataset.ressourceTypeId = spot.type;
        spotEl.dataset.requiredLevel = spot.requiredLevel;
        spotEl.append(spotContentEl);
        spotEl.append(spotRequiredLevelEl);
        spotEl.append(spotZoneEl);

        return spotEl;
    }

    function generateRessourceEl(ressource) {
        var ressourceEl = document.createElement('li');
        ressourceEl.classList.add('ressource-quality-' + ressource.quality);
        ressourceEl.innerText = ressource.name;
        ressourceEl.dataset.ressourceId = ressource.id;

        return ressourceEl;
    }
})();
