console.log("studyModel init");

(function (ctd) {
    'use strict';

    var dataModel = {
        id: "RecordId",
        fields: {
            StudyId: { type: "string" },
            Title: { type: "string" },
            Code: { type: "string" },
            Manager: { type: "string" },
            Status: { type: "string" },
            StudyPatientCap: { type: "number" },
            StudySiteCap: { type: "number" },
            StudyDuration: { type: "number" },
            ActiveSites: { type: "number" },
            EnrollingSites: { type: "number" },
            Patients: { type: "number" },
            ProjectStartDate: { type: "date", format: "{0:dd-MMM-yyyy}" },
            ProjectEndDate: { type: "date", format: "{0:dd-MMM-yyyy}" },
            Director: { type: "string" },
            Division: { type: "string" },
            ActivePhase: { type: "string" },
            StatusColor: { type: "string" },
            Description: { type: "string" },
            Priority: { type: "string" }
        }
    };

    ctd.studyModel = {        
        studiesData: new kendo.data.DataSource({
            data: ctd.studyData.data,
            model: dataModel
        }),
        getStudy: function (uid) {
            var selectedStudy = ctd.studyModel.studiesData.getByUid(uid);
            
            return selectedStudy;
        }
    }
})(ctd);
