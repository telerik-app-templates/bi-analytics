(function (ctd) {
    'use strict';

    // private values
    var ds;

    // vM
    ctd.home = {
        viewModel: kendo.observable({
            toggleFilter: function (e) {
                analytics.Monitor().TrackFeatureStart("Filter.Toggled");
                var switchInstance = $("#study-filter-switch").data("kendoMobileSwitch");

                if (switchInstance.check()) {
                    ds.filter({
                        field: "Priority",
                        operator: "eq",
                        value: "1"
                    });
                } else {
                    ds.filter({});
                };
                analytics.Monitor().TrackFeatureStop("Filter.Toggled");
            },
            init: function (e) {
                
            },
            show: function (e) {
                ds = ctd.studyModel.studyData;	
                
                this.model.toggleFilter();

                var viewContentHeight = e.view.content[0].clientHeight - 10;

                $("#studies-grid").kendoGrid({
                    columns: [{
                            field: "Division",
                            title: "Division",
                            width: 95
                    }, {
                            field: "StudyId",
                            title: "Study ID",
                            width: 95
                    }, {
                            field: "Title",
                            title: "Title",
                    },
                        {
                            field: "ActivePhase",
                            title: "Study Phase"
                    }, {
                            field: "ActiveSites",
                            title: "Active Sites"
                    }, {
                            command: [{
                                name: "Details",
                                click: function (e) {
                                    e.preventDefault();

                                    // this allows us to capture the respective row and dataItem based on selection                                    
                                    var tr = $(e.target).closest("tr");
                                	var data = this.dataItem(tr);
                                    ctd.appSettings.selectedStudy = data;
                                    ctd.app.navigate("ui/studiesData/studies.html");
                                }
                        }],
                            width: 95
                    }],
                    dataSource: ds,
                    sortable: true
                });
            }
        })
    };

})(ctd); // utilize global namespace
