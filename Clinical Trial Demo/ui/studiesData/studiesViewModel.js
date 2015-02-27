
(function (ctd) {
    'use strict';

    // private values
    var currentStudy;
    var viewContentHeight;

    // vM
    ctd.studies = {
        viewModel: kendo.observable({
            init: function () {               
                
            },
            show: function (e) {
                viewContentHeight = e.view.content[0].clientHeight - 10;

                if (e.view.params.uid != null) {
                    currentStudy = ctd.studyModel.getStudy(e.view.params.uid);
                }

                // active sites
                var activeData = ctd.chartData.getActiveData(currentStudy.ActiveSites);
                var adCount = activeData.length;
                var activeHeight = adCount * 30;
                var height = activeHeight > viewContentHeight ? activeHeight : viewContentHeight;

                $("#active-chart").kendoChart({
                    dataSource: new kendo.data.DataSource({
                        data: activeData
                    }),
                    legend: {
                        visible: false
                    },
                    title: {
                        text: "Active Sites"
                    },
                    series: [{
                        type: "bar",
                        field: "siteData",
                        categoryField: "siteName"
                    }]
                });

                var activeChart = $("#active-chart").data("kendoChart");
                $("#active-chart").css({ height: height });
                activeChart.redraw();

                // enrolled sites
                var enrolledData = ctd.chartData.getEnrolledData(currentStudy.EnrollingSites);

                $("#enrollment-chart").kendoChart({
                    dataSource: new kendo.data.DataSource({
                        data: enrolledData
                    }),
                    legend: {
                        visible: false
                    },
                    title: {
                        text: "Enrolling Sites"
                    },
                    series: [{
                        type: "bubble",
                        yField: "siteY",
                        xField: "siteX",
                        sizeField: "siteSize",
                        categoryField: "siteName"
                    }]
                });

                // patient progress
                var patientData = ctd.chartData.getPatientData(currentStudy.Patients);

                $("#patient-chart").kendoChart({
                    legend: {
                        visible: false
                    },
                    seriesDefaults: {
                        type: "bar",
                        stack: true
                    },
                    dataSource: new kendo.data.DataSource({
                        data: patientData
                    }),
                    series: [{
                        field: "patientLowVal",
                        categoryField: "patientNumber"
                    }, {
                        field: "patientHighVal",
                        categoryField: "patientNumber"
                    }]
                });

                var patientHeight = patientData.length * 30;

                var patientChart = $("#patient-chart").data("kendoChart");
                $("#patient-chart").css({ height: patientHeight });
                patientChart.redraw();
                
            }
        })
    };

})(ctd); // utilize global namespace
