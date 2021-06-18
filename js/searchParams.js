(function () {
    'use strict';

    function SearchParams() {
        this.filters = [];
        this.continentsEnabled = [];
        this.hideInsufficientLevel = false;
    }

    window.GatheringTools.searchParams = new SearchParams();
})();
