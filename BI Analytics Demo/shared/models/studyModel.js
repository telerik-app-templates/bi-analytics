console.log("studyModel init");

(function (ctd) {
    'use strict';

    var dataModel = {
        id: Everlive.idField,
        fields: {
            StudyId: { type: "string", field: "StudyId" },
            Title: { type: "string", field: "Title" },
            Code: { type: "string", field: "Code" },
            Manager: { type: "string", field: "Manager" },
            Status: { type: "string", field: "Status" },
            StudyPatientCap: { type: "number", field: "StudyPatientCap" },
            StudySiteCap: { type: "number", field: "StudySiteCap" },
            StudyDuration: { type: "number", field: "StudyDuration" },
            ActiveSites: { type: "number", field: "ActiveSites" },
            EnrollingSites: { type: "number", field: "EnrollingSites" },
            Patients: { type: "number", field: "Patients" },
            ProjectStartDate: { type: "date", field: "ProjectStartDate", format: "{0:dd-MMM-yyyy}" },
            ProjectEndDate: { type: "date", field: "ProjectEndDate", format: "{0:dd-MMM-yyyy}" },
            Director: { type: "string", field: "Director" },
            Division: { type: "string", field: "Division" },
            ActivePhase: { type: "string", field: "ActivePhase" },
            StatusColor: { type: "string", field: "StatusColor" },
            Description: { type: "string", field: "Description" },
            Priority: { type: "string", field: "Priority" }
        }
    };

    ctd.studyModel = {        
        studyData: new kendo.data.DataSource({
            type: 'everlive',
            schema: {
                model: dataModel
            },
            transport: {
                typeName: 'Study'
            }
        }),
        getStudy: function (uid) {
            var selectedStudy = ctd.studyModel.studiesData.getByUid(uid);
            
            return selectedStudy;
        }
    }
})(ctd);
