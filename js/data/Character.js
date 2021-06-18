(function () {
    'use strict';

    function Character() {
        var stats = localStorage.getItem('character_stats');
        if (stats === null) {
            this.stats = {};
            for (var i = 0; i < window.GatheringTools.Spot.TYPES.length; i++) {
                this.stats[window.GatheringTools.Spot.TYPES[i]] = Character.LEVEL_MIN;
            }
        } else {
            this.stats = JSON.parse(stats);
        }
    }
    Character.LEVEL_MIN = 1;
    Character.LEVEL_MAX = 30;
    Character.prototype.save = function () {
        localStorage.setItem('character_stats', JSON.stringify(this.stats));
    };

    window.GatheringTools.Character = Character;
    window.GatheringTools.character = new Character();
})();
