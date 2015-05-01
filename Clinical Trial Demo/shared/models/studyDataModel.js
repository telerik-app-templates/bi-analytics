console.log("studyDataModel init");

(function (ctd) {
    'use strict';

    var dataModel = {
        id: "StudyId",
        fields: {
            StudyId: { type: "string", field: "StudyId/text()" }
        }
    };

    ctd.studyDataModel = {
        studiesData: new kendo.data.DataSource({
            transport: {
                read: "../shared/localData/studyData.json"
            },
            schema: {
                type: "json"                
            }
        }),
        getStudy: function (uid) {
            var selectedStudy = ctd.studyModel.studiesData.getByUid(uid);

            return selectedStudy;
        },
        getStudyById: function (id) {
            var selectedStudy = null;

            var data = ctd.studyDataModel.studiesData.data();

            for (var i = 0; i < data.length; i++) {
                if (data[i].StudyId == id) {
                    selectedStudy = data[i];
                }
            }

            return selectedStudy;
        }
    }
})(ctd);