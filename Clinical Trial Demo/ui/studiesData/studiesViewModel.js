
(function (ctd) {
    'use strict';

    // private values
    var currentStudy;

    // vM
    ctd.studies = {
        viewModel: kendo.observable({
            toggleFilter: function (e) {

            },
            init: function () {               
                
            },
            show: function (e) {                
                currentStudy = ctd.studyModel.getStudy(e.view.params.uid);

                // make charts


            }
        })
    };

})(ctd); // utilize global namespace

