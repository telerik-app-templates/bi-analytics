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
                //read: "../shared/localData/studyData.json"
                //read: "https://bs2.cdn.telerik.com/v1/4yR5BRhoZ4gAAJXR/cd2c96c0-f032-11e4-b971-bd4ec90a821b"
                read: "https://bs2.cdn.telerik.com/v1/4yR5BRhoZ4gAAJXR/cd2c96c0-f032-11e4-b971-bd4ec90a821b?20155414954"
            },
            schema: {
                type: "json",
                data: function (e) {
                    console.log("data");
                    var b = JSON.parse(e);
                    return b.results;
                }
            },
            change: function (e) {
                console.log("change");
                console.log(e);
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