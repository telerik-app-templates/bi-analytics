console.log("studyModel init");

(function (ctd) {
    'use strict';

    var dataModel = {
        id: "RecordId",
        fields: {
            StudyId: { type: "string", field: "StudyId/text()" },
            Title: { type: "string", field: "Title/text()" },
            Code: { type: "string", field: "Code/text()" },
            Manager: { type: "string", field: "Manager/text()" },
            Status: { type: "string", field: "Status/text()" },
            StudyPatientCap: { type: "number", field: "StudyPatientCap/text()" },
            StudySiteCap: { type: "number", field: "StudySiteCap/text()" },
            StudyDuration: { type: "number", field: "StudyDuration/text()" },
            ActiveSites: { type: "number", field: "ActiveSites/text()" },
            EnrollingSites: { type: "number", field: "EnrollingSites/text()" },
            Patients: { type: "number", field: "Patients/text()" },
            ProjectStartDate: { type: "date", field: "ProjectStartDate/text()", format: "{0:dd-MMM-yyyy}" },
            ProjectEndDate: { type: "date", field: "ProjectEndDate/text()", format: "{0:dd-MMM-yyyy}" },
            Director: { type: "string", field: "Director/text()" },
            Division: { type: "string", field: "Division/text()" },
            ActivePhase: { type: "string", field: "ActivePhase/text()" },
            StatusColor: { type: "string", field: "StatusColor/text()" },
            Description: { type: "string", field: "Description/text()" },
            Priority: { type: "string", field: "Priority/text()" }
        }
    };

    ctd.studyModel = {        
         getTrialData: function() {                        
            var el = new Everlive('4yR5BRhoZ4gAAJXR');
            
            var fileId = "cd2cbdd0-f032-11e4-b971-bd4ec90a821b"; // the file identifier is retrived from the REST services
            
            el.Files.getDownloadUrlById(fileId)
            .then(function(downloadUrl){
                console.log(downloadUrl);
                return downloadUrl;
            },
            function(error){
                alert(JSON.stringify(error));
                return null;
            });
        },
        studiesData: new kendo.data.DataSource({
            transport: {
                read: "https://bs1.cdn.telerik.com/v1/4yR5BRhoZ4gAAJXR/cd2cbdd0-f032-11e4-b971-bd4ec90a821b"
            },            
            schema: {
                type: "xml",
                data: "/root/study",
                model: dataModel
            }
        }),
        getStudy: function (uid) {
            var selectedStudy = ctd.studyModel.studiesData.getByUid(uid);
            
            return selectedStudy;
        }
    }
})(ctd);


//data: ctd.studyData.data,