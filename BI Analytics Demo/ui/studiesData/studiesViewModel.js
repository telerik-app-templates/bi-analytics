(function (ctd) {
    'use strict';

    // private values
    var currentStudy;
    var viewContentHeight;
    var ts;

    var makeCharts = function (studyData) {
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
        $("#active-chart").css({
            height: height
        });
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
        $("#patient-chart").css({
            height: patientHeight
        });
        patientChart.redraw();
        
    };
    
    // vM
    ctd.studies = {
        viewModel: kendo.observable({
            init: function () {

            },
            show: function (e) {
                analytics.Monitor().TrackFeatureStart("StudyDetails.View");
                viewContentHeight = e.view.content[0].clientHeight - 10;
                
                currentStudy = ctd.appSettings.selectedStudy;
                
                var query = new Everlive.Query();
                query.where({ "StudyId" : currentStudy.StudyId });        

                var sd = ctd.el.data('StudyDetails');

                sd.get(query, 
                function (items) { 
                    var studyDetails = items.result[0];
                    var studyData = {
                        StudyId: studyDetails.StudyId,
                        ActiveData: JSON.parse(studyDetails.ActiveData),
                        EnrolledData: JSON.parse(studyDetails.EnrolledData),
                        PatientData: JSON.parse(studyDetails.PatientData)                        
                    };
                    
                    makeCharts(studyData);
                }, 
                function (fail) { 
                    ctd.notify(fail, "Error", null);
                    console.log(fail);
                });

            },
            hide: function (e) {
                analytics.Monitor().TrackFeatureStop("StudyDetails.View");
            }
        })
    };

})(ctd); // utilize global namespace