
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

                //console.log(dss);
            },
            init: function (e) {
                ds = ctd.studyModel.studiesData;
                dss = ctd.studyDataModel.studiesData;
                dss.read();

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
                    },  {
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

                                ctd.app.navigate("ui/studiesData/studies.html?uid=" + data.uid);
                            }
                        }],
                        width: 95
                    }],
                    dataSource: ds,
                    //mobile: "phone",
                    //height: kendo.support.mobileOS.wp ? "24em" : viewContentHeight
                });
            }
        })
    };

})(ctd); // utilize global namespace
