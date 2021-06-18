(function () {
    'use strict';

    function Continent(id, name, regionIds) {
        this.id = id;
        this.name = name;
        this.regions = {};
        for (var i = 0; i < regionIds.length; i++) {
            this.regions[regionIds[i]] = window.GatheringTools.regions[regionIds[i]];
        }
    }

    // Data
    var continents = [
        new Continent(
            'luteran_occidental',
            "Lutéran occidental",
            ['monastere_de_medrinic', 'lacus']
        ),
        new Continent(
            'luteran_oriental',
            "Lutéran oriental",
            ['colline_aux_mille_feux']
        ),
        new Continent(
            'tortoyk',
            "Tortoyk",
            ['steppe_de_margeciel']
        ),
    ];

    window.GatheringTools.Continent = Continent;
    window.GatheringTools.continents = {};
    for (var i = 0; i < continents.length; i++) {
        window.GatheringTools.continents[continents[i].id] = continents[i];
    }
})();
