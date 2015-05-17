
(function (ctd) {
    'use strict';

    // private values
    var currentStudy;
    var viewContentHeight;    
    var ts;

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

                console.log(currentStudy);
                var studyData = ctd.studyDataModel.getStudyById(currentStudy.StudyId);

                // active sites
                var activeData = studyData.ActiveData;
                var adCount = activeData.length;
                var activeHeight = adCount * 30;
                var height = activeHeight > viewContentHeight ? activeHeight : viewContentHeight;

                $("#active-chart").kendoChart({
                    dataSource: new kendo.data.DataSource({
                        data: activeData
                    }),
                    legend: {
                        visible: true,
                        position: "top"
                    },
                    title: {
                        text: "Active Sites"
                    },
                    series: [{
                        name: "Active Sites By Hospital",
                        type: "bar",
                        field: "siteData",
                        categoryField: "siteName"
                    }],
                    valueAxis: {
                        title: {
                            text: "Active Patients"
                        }
                    }
                });

                var activeChart = $("#active-chart").data("kendoChart");
                $("#active-chart").css({ height: height });
                activeChart.redraw();

                // enrolled sites                
                var enrolledData = studyData.EnrolledData;

                $.each(enrolledData, function (index, item) {
                    item.siteSizeStatic = 1;
                });

                $("#enrollment-chart").kendoChart({
                    dataSource: new kendo.data.DataSource({
                        data: enrolledData
                    }),
                    legend: {
                        visible: true,
                        position: "top"
                    },
                    title: {
                        text: "Enrolling Sites"
                    },
                    series: [{
                        name: "Enrolling Sites",
                        type: "bubble",
                        yField: "siteY",
                        xField: "siteX",
                        sizeField: "siteSize",
                        categoryField: "siteName",
                        color: "red"
                    }, {
                        name: "Capacity",
                        type: "bubble",
                        yField: "siteY",
                        xField: "siteX",
                        sizeField: "siteSizeStatic",
                        categoryField: "siteName",
                        color: "blue"
                    }],
                    xAxis: {
                        title: {
                            text: "Site"
                        }
                    },
                    yAxis: {
                        title: {
                            text: "Study Priority"
                        }
                    }
                });

                // patient progress
                var patientData = studyData.PatientData;

                $("#patient-chart").kendoChart({
                    legend: {
                        visible: true,
                        position: "top"
                    },
                    seriesDefaults: {
                        type: "bar",
                        stack: true
                    },
                    dataSource: new kendo.data.DataSource({
                        data: patientData
                    }),
                    title: {
                        text: "Active Patient Progress"
                    },
                    series: [{
                        name: "Current Response",
                        field: "low",
                        categoryField: "itemId"
                    }, {
                        name: "Expected Response",
                        field: "high",
                        categoryField: "itemId"
                    }],
                    categoryAxis: {
                        title: {
                            text: "Patient"
                        }
                    },
                    valueAxis: {
                        title: {
                            text: "Percent Improvement"
                        }
                    }
                });

                var patientHeight = patientData.length * 30;

                var patientChart = $("#patient-chart").data("kendoChart");
                $("#patient-chart").css({ height: patientHeight });
                patientChart.redraw();
                
            }
        })
    };

})(ctd); // utilize global namespace
