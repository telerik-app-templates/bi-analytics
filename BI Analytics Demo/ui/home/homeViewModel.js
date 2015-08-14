(function (ctd) {
    'use strict';

    // private values
    var ds;

    var gridElement = $("#studies-grid");

    function resizeGrid() {
        $("#studies-grid").data("kendoGrid").resize();
    }

    $(window).resize(function(){
        //resizeGrid();
        
        var gridElement = $("#studies-grid"),
            newHeight = gridElement.innerHeight(),
            otherElements = gridElement.children().not(".k-grid-content"),
            otherElementsHeight = 0;

        otherElements.each(function(){
            otherElementsHeight += $(this).outerHeight();
        });

        gridElement.children(".k-grid-content").height(newHeight - otherElementsHeight);
    });
    
    // vM
    ctd.home = {
        viewModel: kendo.observable({
            toggleFilter: function (e) {
                //analytics.Monitor().TrackFeatureStart("Filter.Toggled");
                var switchInstance = $("#study-filter-switch").data("kendoMobileSwitch");

                if (switchInstance.check()) {
                    ds.filter({
                        field: "Priority",
                        operator: "eq",
                        value: "1"
                    });
                } else {
                    ds.filter({});
                }
                
                //analytics.Monitor().TrackFeatureStop("Filter.Toggled");
            },
            init: function (e) {
                
            },
            show: function (e) {
                var studyGrid = $("#studies-grid").data("kendoGrid");

                if (studyGrid === undefined) {
    				ds = ctd.studyModel.studyData;	

                    this.model.toggleFilter();

                    var viewContentHeight = e.view.content[0].clientHeight - 10;
                    console.log(viewContentHeight);
                    $("#studies-grid").kendoGrid({
                        columns: [{
                            field: "Division",
                            title: "Division"
                        }, {
                            field: "StudyId",
                            title: "Study ID"
                        }, {
                            field: "Title",
                            title: "Title",
                            width: 200,
                            minScreenWidth: 500
                        }, {
                            field: "ActivePhase",
                            title: "Study Phase",
                            minScreenWidth: 750
                        }, {
                            field: "ActiveSites",
                            title: "Active Sites",
                            minScreenWidth: 750
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
                        sortable: true,
                        scrollable: true,
                        mobile: true
                    });
                } else {
                    ds.read();
                }
            }
        })
    };

})(ctd); // utilize global namespace
