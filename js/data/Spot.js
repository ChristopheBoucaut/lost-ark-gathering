(function () {
    'use strict';

    function Spot(id, name, type, requiredLevel, ressourceIds) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.requiredLevel = requiredLevel;
        this.zone = '[ZONE] - todo';
        this.ressources = {};
        for (var i = 0; i < ressourceIds.length; i++) {
            this.ressources[ressourceIds[i]] = window.GatheringTools.ressources[ressourceIds[i]];
        }
    }
    Spot.TYPE_HERBALISM = 'herbalism';
    Spot.TYPE_LUMBERING = 'lumbering';
    Spot.TYPE_MINING = 'mining';
    Spot.TYPE_HUNTING = 'hunting';
    Spot.TYPE_FISHING = 'fishing';
    Spot.TYPE_ARCHAEOLOGY = 'archaeology';
    Spot.TYPES = [
        Spot.TYPE_HERBALISM,
        Spot.TYPE_LUMBERING,
        Spot.TYPE_MINING,
        Spot.TYPE_HUNTING,
        Spot.TYPE_FISHING,
        Spot.TYPE_ARCHAEOLOGY
    ];

    // DataRessource
    var spots = [
        new Spot(
            'primevere_du_crepuscule',
            "Primevère du crépuscule",
            Spot.TYPE_HERBALISM,
            1,
            ['petit_primevere_du_crepuscule', 'primevere_du_crepuscule']
        ),
        new Spot(
            'lys',
            "Lys",
            Spot.TYPE_HERBALISM,
            1,
            ['petit_lys', 'lys', 'lys_florissant']
        ),
        new Spot(
            'minerai_de_cuivre',
            "Minerai de cuivre",
            Spot.TYPE_MINING,
            1,
            ['fer_oxyde', 'materiau_de_fusion_mineur_du_bern']
        ),
        new Spot(
            'obsidienne',
            "Obsidienne",
            Spot.TYPE_MINING,
            1,
            ['fer_oxyde', 'obsidienne', 'malachite_bernoise', 'materiau_de_fusion_mineur_du_bern']
        ),
        new Spot(
            'filon_de_pyrite',
            "Filon de pyrite",
            Spot.TYPE_MINING,
            1,
            ['fer_oxyde', 'bronze', 'malachite_bernoise']
        ),
        new Spot(
            'filon_de_pyrite_robuste',
            "Filon de pyrite robuste",
            Spot.TYPE_MINING,
            10,
            ['fer_oxyde']
        ),
        new Spot(
            'lacus_fishing',
            "Lacus fishing",
            Spot.TYPE_FISHING,
            1,
            ['adrianichthyidae', 'cichlide', 'materiau_de_fusion_mineur_du_bern']
        ),
        new Spot(
            'lapin_orageux',
            "Lapin orageux",
            Spot.TYPE_HUNTING,
            1,
            [
                'viande_crue',
                'cuir_splendide',
                'viande_de_lapin_orageux',
                'viande_crue_speciale_du_bern',
                'materiau_de_fusion_mineur_du_bern',
            ]
        ),
        new Spot(
            'arbre_tonnelle',
            "Arbre tonnelle",
            Spot.TYPE_LUMBERING,
            1,
            ['buche', 'bois_d_arbre_tonnelle']
        ),
        new Spot(
            'trace_de_relique',
            "Trace de relique",
            Spot.TYPE_ARCHAEOLOGY,
            1,
            ['residu_ancien', 'parchemin_terni', 'materiau_de_fusion_mineur_du_bern', 'ancienne_stele_bernoise']
        ),
    ];

    window.GatheringTools.Spot = Spot;
    window.GatheringTools.spots = {};
    for (var i = 0; i < spots.length; i++) {
        window.GatheringTools.spots[spots[i].id] = spots[i];
    }
})();
