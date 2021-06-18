(function () {
    'use strict';

    function Ressource(id, name, quality, type) {
        this.id = id;
        this.name = name;
        this.quality = quality;
        this.type = type;
    }
    Ressource.QUALITY_NORMAL = 'normal';
    Ressource.QUALITY_UNUSUAL = 'unusual';
    Ressource.QUALITY_RARE = 'rare';
    Ressource.QUALITY_EXCEPTIONAL = 'exceptional';

    Ressource.TYPE_HERBALISM = 'herbalism';
    Ressource.TYPE_LUMBERING = 'lumbering';
    Ressource.TYPE_MINING = 'mining';
    Ressource.TYPE_HUNTING = 'hunting';
    Ressource.TYPE_FISHING = 'fishing';
    Ressource.TYPE_ARCHAEOLOGY = 'archaeology';
    Ressource.TYPE_OTHER = 'other';
    Ressource.TYPES = [
        Ressource.TYPE_HERBALISM,
        Ressource.TYPE_LUMBERING,
        Ressource.TYPE_MINING,
        Ressource.TYPE_HUNTING,
        Ressource.TYPE_FISHING,
        Ressource.TYPE_ARCHAEOLOGY,
        Ressource.TYPE_OTHER
    ];

    // Data
    var ressources = [
        new Ressource(
            'petit_primevere_du_crepuscule',
            "Petit primevère du crépuscule",
            Ressource.QUALITY_NORMAL,
            Ressource.TYPE_HERBALISM
        ),
        new Ressource(
            'primevere_du_crepuscule',
            "Primevère du crépuscule",
            Ressource.QUALITY_UNUSUAL,
            Ressource.TYPE_HERBALISM
        ),
        new Ressource(
            'petit_lys',
            "Petit lys",
            Ressource.QUALITY_NORMAL,
            Ressource.TYPE_HERBALISM
        ),
        new Ressource(
            'lys',
            "Lys",
            Ressource.QUALITY_UNUSUAL,
            Ressource.TYPE_HERBALISM
        ),
        new Ressource(
            'lys_florissant',
            "Lys florissant",
            Ressource.QUALITY_RARE,
            Ressource.TYPE_HERBALISM
        ),
        new Ressource(
            'fer_oxyde',
            "Fer oxydé",
            Ressource.QUALITY_NORMAL,
            Ressource.TYPE_MINING
        ),
        new Ressource(
            'obsidienne',
            "Obsidienne",
            Ressource.QUALITY_UNUSUAL,
            Ressource.TYPE_MINING
        ),
        new Ressource(
            'bronze',
            "Bronze",
            Ressource.QUALITY_UNUSUAL,
            Ressource.TYPE_MINING
        ),
        new Ressource(
            'malachite_bernoise',
            "Malachite bernoise",
            Ressource.QUALITY_RARE,
            Ressource.TYPE_MINING
        ),
        new Ressource(
            'materiau_de_fusion_mineur_du_bern',
            "Matériau de fusion mineur du Bern",
            Ressource.QUALITY_UNUSUAL,
            Ressource.TYPE_OTHER
        ),
        new Ressource(
            'adrianichthyidae',
            "Adrianichthyidae",
            Ressource.QUALITY_NORMAL,
            Ressource.TYPE_FISHING
        ),
        new Ressource(
            'cichlide',
            "Cichlidé",
            Ressource.QUALITY_UNUSUAL,
            Ressource.TYPE_FISHING
        ),
        new Ressource(
            'viande_crue',
            "Viande crue",
            Ressource.QUALITY_NORMAL,
            Ressource.TYPE_HUNTING
        ),
        new Ressource(
            'cuir_splendide',
            "Cuir splendide",
            Ressource.QUALITY_UNUSUAL,
            Ressource.TYPE_HUNTING
        ),
        new Ressource(
            'viande_de_lapin_orageux',
            "Viande de lapin orageux",
            Ressource.QUALITY_UNUSUAL,
            Ressource.TYPE_HUNTING
        ),
        new Ressource(
            'viande_crue_speciale_du_bern',
            "Viande crue spéciale du Bern",
            Ressource.QUALITY_RARE,
            Ressource.TYPE_HUNTING
        ),
        new Ressource(
            'buche',
            "Bûche",
            Ressource.QUALITY_NORMAL,
            Ressource.TYPE_LUMBERING
        ),
        new Ressource(
            'bois_d_arbre_tonnelle',
            "Bois d'arbre tonnelle",
            Ressource.QUALITY_UNUSUAL,
            Ressource.TYPE_LUMBERING
        ),
        new Ressource(
            'residu_ancien',
            "Résidu ancien",
            Ressource.QUALITY_NORMAL,
            Ressource.TYPE_ARCHAEOLOGY
        ),
        new Ressource(
            'parchemin_terni',
            "Parchemin terni",
            Ressource.QUALITY_UNUSUAL,
            Ressource.TYPE_ARCHAEOLOGY
        ),
        new Ressource(
            'ancienne_stele_bernoise',
            "Ancienne stèle bernoise",
            Ressource.QUALITY_RARE,
            Ressource.TYPE_ARCHAEOLOGY
        ),
    ];

    window.GatheringTools.Ressource = Ressource;
    window.GatheringTools.ressources = {};
    for (var i = 0; i < ressources.length; i++) {
        window.GatheringTools.ressources[ressources[i].id] = ressources[i];
    }
})();
