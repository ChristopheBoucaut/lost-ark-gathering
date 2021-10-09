(function () {
    'use strict';

    // To close with escape key
    document.onkeyup = function (e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    };

    var tabsContainerEl = document.querySelector('#list-ressources > section > div:last-child > ul:first-child');
    var contentContainerEl = document.querySelector('#list-ressources > section > div:last-child > ul:last-child');
    var characterContainerEl = document.querySelector('#character > section > div:last-child');
    var character = window.GatheringTools.character;
    // Global
    var openModalEls = document.querySelectorAll('header .open-modal');
    for (var i = 0; i < openModalEls.length; i++) {
        openModalEls[i].onclick = function (ev) {
            document.getElementById(ev.target.dataset.modalId).classList.add('opened');
        }
    }

    var closeModalEls = document.querySelectorAll('.modal .close');
    for (var i = 0; i < closeModalEls.length; i++) {
        closeModalEls[i].onclick = closeModal;
    }

    // Modal list-ressources
    var contentEls = {};
    for (var i = 0; i < window.GatheringTools.Ressource.TYPES.length; i++) {
        var ressourceTypeName = window.GatheringTools.Ressource.TYPES[i];

        var tabEl = createRessourceTypeTabEl(ressourceTypeName)
        tabsContainerEl.append(tabEl);

        var contentEl = document.createElement('li');
        contentEl.id = tabEl.dataset.tabId;
        contentEls[ressourceTypeName] = contentEl;
        contentContainerEl.append(contentEl);

        if (i === 0) {
            tabEl.classList.add('selected');
            contentEl.classList.add('selected');
        }
    }
    for (var ressourceId in window.GatheringTools.ressources) {
        var ressource = window.GatheringTools.ressources[ressourceId];
        var ressourceEl = document.createElement('div');
        ressourceEl.innerText = ressource.name;
        contentEls[ressource.type].append(ressourceEl);
    }

    // Modal character
    for (var ressourceTypeName in character.stats) {
        var characterStatEls = createCharacterStatEls(
            ressourceTypeName,
            character.stats[ressourceTypeName]
        );
        characterContainerEl.append(characterStatEls[0]);
        characterContainerEl.append(characterStatEls[1]);
    }

    function createRessourceTypeTabEl(ressourceTypeName) {
        var tabEl = document.createElement('li');
        tabEl.classList.add('only-icon', 'ressource-type-' + ressourceTypeName);
        tabEl.dataset.tabId = 'tab-content-' + ressourceTypeName;
        tabEl.onclick = function (ev) {
            var tabSelectedEls = document.querySelectorAll('#list-ressources .selected')
            for (var i = 0; i < tabSelectedEls.length; i++) {
                tabSelectedEls[i].classList.remove('selected');
            }

            ev.target.classList.add('selected');
            document.getElementById(ev.target.dataset.tabId).classList.add('selected');
        };

        return tabEl;
    }

    function createCharacterStatEls(ressourceTypeName, ressourceTypeLevel) {
        var inputEl = document.createElement('input');
        inputEl.id = 'character-stat-herbalism';
        inputEl.type = 'number';
        inputEl.value = ressourceTypeLevel;
        inputEl.min = window.GatheringTools.Character.LEVEL_MIN;
        inputEl.max = window.GatheringTools.Character.LEVEL_MAX;
        inputEl.onchange = function () {
            if (inputEl.checkValidity()) {
                character.stats[ressourceTypeName] = parseInt(inputEl.value);
                character.save();
                window.GatheringTools.refreshInsufficientLevel();
                window.GatheringTools.refreshListingWithFilters();
            } else {
                inputEl.value = character.stats[ressourceTypeName];
            }
        };

        var labelEl = document.createElement('label');
        labelEl.innerText = ressourceTypeName;
        labelEl.classList.add('ressource-type-' + ressourceTypeName);
        labelEl.setAttribute('for', inputEl.id);

        return [labelEl, inputEl];
    }

    function closeModal() {
        document.getElementsByClassName('modal opened')[0].classList.remove('opened');
    }
})();
