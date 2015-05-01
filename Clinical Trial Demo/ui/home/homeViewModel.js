
(function (ctd) {
    'use strict';

    // private values
    var ds;
    var dss;

    // vM
    ctd.home = {
        viewModel: kendo.observable({
            toggleFilter: function (e) {
                var switchInstance = $("#study-filter-switch").data("kendoMobileSwitch");

                if (switchInstance.check()) {
                    ds.filter({ field: "Priority", operator: "eq", value: "1" });
                } else {
                    ds.filter({});
                };

                console.log(dss);
            },
            init: function () {
                ds = ctd.studyModel.studiesData;
                dss = ctd.studyDataModel.studiesData;
                dss.read();

                this.model.toggleFilter();               

                $("#studies-grid").kendoGrid({
                    columns: [{
                        field: "Division",
                        title: "Division",
                        width: 115
                    }, {
                        field: "StudyId",
                        title: "Study ID",
                        width: 115
                    }, {
                        field: "Title",
                        title: "Title",
                    },
                    {
                        field: "ActivePhase",
                        title: "Study Phase"
                    },  {
                        field: "ActiveSites",
                        title: "Active Sites",
                        width: 115
                    }, {
                        command: [{
                            name: "Details",
                            click: function (e) {
                                e.preventDefault();

                                // this allows us to capture the respective row and dataItem based on selection
                                var tr = $(e.target).closest("tr");
                                var data = this.dataItem(tr);

                                ctd.app.navigate("ui/studiesData/studies.html?uid=" + data.uid);
                            }
                        }],
                        width: 115
                    }],
                    dataSource: ds //ctd.studyModel.studiesData
                });
            }
        })
    };

})(ctd); // utilize global namespace
