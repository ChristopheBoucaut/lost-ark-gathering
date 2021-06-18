(function () {
    'use strict';

    function Region(id, name, spotIds) {
        this.id = id;
        this.name = name;
        this.spots = {};
        for (var i = 0; i < spotIds.length; i++) {
            this.spots[spotIds[i]] = window.GatheringTools.spots[spotIds[i]];
        }
    }

    // Data
    var regions = [
        new Region('monastere_de_medrinic', "Monastère de Medrinic", ['primevere_du_crepuscule', 'lys', 'minerai_de_cuivre']),
        new Region('lacus', "Lacus", ['obsidienne', 'lacus_fishing']),
        new Region('steppe_de_margeciel', "Steppe de Margeciel", ['obsidienne', 'filon_de_pyrite', 'filon_de_pyrite_robuste', 'lapin_orageux']),
        new Region('colline_aux_mille_feux', "Colline aux Mille feux", ['arbre_tonnelle', 'trace_de_relique']),
    ];

    window.GatheringTools.Region = Region;
    window.GatheringTools.regions = {};
    for (var i = 0; i < regions.length; i++) {
        window.GatheringTools.regions[regions[i].id] = regions[i];
    }
})();
