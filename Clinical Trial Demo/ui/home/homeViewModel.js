
(function (ctd) {
    'use strict';

    // private values
    var ds;

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
            },
            init: function () {

                ds = ctd.studyModel.studiesData;

                console.log(ds);

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

                                var tr = $(e.target).closest("tr");
                                var data = this.dataItem(tr);

                                console.log(data);

                                // app navigate here
                                // console.log(ctd.studyModel.getStudy(data.uid));
                                ctd.app.navigate("ui/studiesData/studies.html?uid=" + data.uid);
                            }
                        }],
                        width: 115
                    }],
                    dataSource: ctd.studyModel.studiesData
                });
            }
        })
    };

})(ctd); // utilize global namespace





/*


    var names = [
        "Sophia",
        "Emma",
        "Olivia",
        "Isabella",
        "Ava",
        "Lily",
        "Zoe",
        "Chloe",
        "Mia",
        "Madison",
        "Emily",
        "Ella",
        "Madelyn",
        "Abigail",
        "Aubrey",
        "Addison",
        "Avery",
        "Layla",
        "Hailey",
        "Amelia",
        "Hannah",
        "Charlotte",
        "Kaitlyn",
        "Harper",
        "Kaylee",
        "Sophie",
        "Mackenzie",
        "Peyton",
        "Riley",
        "Grace",
        "Brooklyn",
        "Sarah",
        "Aaliyah",
        "Anna",
        "Arianna",
        "Ellie",
        "Natalie",
        "Isabelle",
        "Lillian",
        "Evelyn",
        "Elizabeth",
        "Lyla",
        "Lucy",
        "Claire",
        "Makayla",
        "Kylie",
        "Audrey",
        "Maya",
        "Leah",
        "Gabriella",
        "Annabelle",
        "Savannah",
        "Nora",
        "Reagan",
        "Scarlett",
        "Samantha",
        "Alyssa",
        "Allison",
        "Elena",
        "Stella",
        "Alexis",
        "Victoria",
        "Aria",
        "Molly",
        "Maria",
        "Bailey",
        "Sydney",
        "Bella",
        "Mila",
        "Taylor",
        "Kayla",
        "Eva",
        "Jasmine",
        "Gianna",
        "Alexandra",
        "Julia",
        "Eliana",
        "Kennedy",
        "Brianna",
        "Ruby",
        "Lauren",
        "Alice",
        "Violet",
        "Kendall",
        "Morgan",
        "Caroline",
        "Piper",
        "Brooke",
        "Elise",
        "Alexa",
        "Sienna",
        "Reese",
        "Clara",
        "Paige",
        "Kate",
        "Nevaeh",
        "Sadie",
        "Quinn",
        "Isla",
        "Eleanor",
        "Aiden",
        "Jackson",
        "Ethan",
        "Liam",
        "Mason",
        "Noah",
        "Lucas",
        "Jacob",
        "Jayden",
        "Jack",
        "Logan",
        "Ryan",
        "Caleb",
        "Benjamin",
        "William",
        "Michael",
        "Alexander",
        "Elijah",
        "Matthew",
        "Dylan",
        "James",
        "Owen",
        "Connor",
        "Brayden",
        "Carter",
        "Landon",
        "Joshua",
        "Luke",
        "Daniel",
        "Gabriel",
        "Nicholas",
        "Nathan",
        "Oliver",
        "Henry",
        "Andrew",
        "Gavin",
        "Cameron",
        "Eli",
        "Max",
        "Isaac",
        "Evan",
        "Samuel",
        "Grayson",
        "Tyler",
        "Zachary",
        "Wyatt",
        "Joseph",
        "Charlie",
        "Hunter",
        "David",
        "Anthony",
        "Christian",
        "Colton",
        "Thomas",
        "Dominic",
        "Austin",
        "John",
        "Sebastian",
        "Cooper",
        "Levi",
        "Parker",
        "Isaiah",
        "Chase",
        "Blake",
        "Aaron",
        "Alex",
        "Adam",
        "Tristan",
        "Julian",
        "Jonathan",
        "Christopher",
        "Jace",
        "Nolan",
        "Miles",
        "Jordan",
        "Carson",
        "Colin",
        "Ian",
        "Riley",
        "Xavier",
        "Hudson",
        "Adrian",
        "Cole",
        "Brody",
        "Leo",
        "Jake",
        "Bentley",
        "Sean",
        "Jeremiah",
        "Asher",
        "Nathaniel",
        "Micah",
        "Jason",
        "Ryder",
        "Declan",
        "Hayden",
        "Brandon",
        "Easton",
        "Lincoln",
        "Harrison"
    ];

    function rFirstName() {
        return names[(Math.floor((Math.random() * names.length) + 1))];
    };

    var lastNames = [
        "Smith",
        "Johnson",
        "Williams",
        "Brown",
        "Jones",
        "Miller",
        "Davis",
        "Garcia",
        "Rodriguez",
        "Wilson",
        "Martinez",
        "Anderson",
        "Taylor",
        "Thomas",
        "Hernandez",
        "Moore",
        "Martin",
        "Jackson",
        "Thompson",
        "White",
        "Lopez",
        "Lee",
        "Gonzalez",
        "Harris",
        "Clark",
        "Lewis",
        "Robinson",
        "Walker",
        "Perez",
        "Hall",
        "Young",
        "Allen",
        "Sanchez",
        "Wright",
        "King",
        "Scott",
        "Green",
        "Baker",
        "Adams",
        "Nelson",
        "Hill",
        "Ramirez",
        "Campbell",
        "Mitchell",
        "Roberts",
        "Carter",
        "Phillips",
        "Evans",
        "Turner",
        "Torres",
        "Parker",
        "Collins",
        "Edwards",
        "Stewart",
        "Flores",
        "Morris",
        "Nguyen",
        "Murphy",
        "Rivera",
        "Cook",
        "Rogers",
        "Morgan",
        "Peterson",
        "Cooper",
        "Reed",
        "Bailey",
        "Bell",
        "Gomez",
        "Kelly",
        "Howard",
        "Ward",
        "Cox",
        "Diaz",
        "Richardson",
        "Wood",
        "Watson",
        "Brooks",
        "Bennett",
        "Gray",
        "James",
        "Reyes",
        "Cruz",
        "Hughes",
        "Price",
        "Myers",
        "Long",
        "Foster",
        "Sanders",
        "Ross",
        "Morales",
        "Powell",
        "Sullivan",
        "Russell",
        "Ortiz",
        "Jenkins",
        "Gutierrez",
        "Perry",
        "Butler",
        "Barnes",
        "Fisher"
    ];

    var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor tellus et odio dignissim eleifend. Curabitur hendrerit lacus urna, sit amet porttitor magna egestas maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus quis rhoncus magna. Nam aliquam sed odio et viverra. Vestibulum placerat quis magna sit amet pharetra. Fusce interdum imperdiet aliquam. Vestibulum eget risus sit amet ex aliquam pretium. Donec in velit hendrerit, accumsan nulla consectetur, condimentum quam. Phasellus sed tempor risus. Proin sed orci sit amet nisl rhoncus mollis in ac justo. Sed quis aliquam nisi. Praesent porta enim vitae ex commodo rutrum. Sed condimentum augue id ultrices maximus. Praesent porta volutpat facilisis. Vivamus scelerisque hendrerit ex, elementum sollicitudin ante mollis sagittis. Suspendisse sagittis pretium malesuada. Mauris eu mattis dui. Nullam non laoreet velit. Integer pharetra, eros vitae dignissim congue, nisi nibh feugiat massa, ut malesuada risus nisl a orci. Cras sit amet lectus viverra sem dictum vestibulum. Etiam lectus ligula, pharetra id iaculis sed, pellentesque in lorem. Duis consequat lobortis felis, id ultricies mauris venenatis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada aliquam pharetra. Quisque ac tincidunt nisi. Etiam eros ante, gravida sed vulputate quis, vehicula in risus. Duis vitae nisi eu eros pellentesque aliquet nec volutpat magna. Nunc cursus urna et ultricies faucibus. Quisque ornare orci in velit volutpat auctor. Aliquam pellentesque faucibus tempor. Fusce tortor justo, auctor non condimentum quis, egestas in dolor. In imperdiet sit amet neque ut pulvinar. Donec sit amet tortor vitae erat convallis hendrerit. Phasellus rutrum dolor elit. Nam consequat felis in justo gravida, vitae vulputate felis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi id purus sit amet mi tempus efficitur eget et sapien. Phasellus rutrum, augue id lacinia ullamcorper, tellus eros aliquam nisl, id iaculis purus turpis ultricies risus. Integer ac dolor mattis, semper nisi et, eleifend turpis. Nullam elementum ipsum lacus, quis facilisis risus vulputate ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque sit amet mollis neque. Donec laoreet eget diam eget ultricies. Nullam tempor, sem ut molestie ultrices, dui justo blandit nulla, eu bibendum ipsum sapien in urna. Nam sed orci eget ex aliquam suscipit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean velit nulla, eleifend sed mi vitae, egestas finibus arcu. Ut id finibus risus, quis pharetra risus. Nulla dictum et mauris eu blandit. Nunc efficitur luctus leo ut sagittis. Duis quis rhoncus est. Mauris pulvinar dapibus est ut sodales. Phasellus in laoreet arcu, nec congue purus. Donec lacinia iaculis pellentesque. Aenean varius in mauris vitae consectetur. Praesent eu velit bibendum ligula porttitor congue vitae vel neque. Nulla quis facilisis enim. Etiam in est sed lectus finibus facilisis vel in nulla. Vivamus efficitur massa ac ante euismod varius. Mauris eu nulla erat. In sit amet tellus mattis eros molestie posuere placerat vitae diam."

    function randomLorem(len) {
        return lorem.substring(0, len);
    }

    function rLastName() {
        return lastNames[(Math.floor((Math.random() * lastNames.length) + 1))];
    };

    function rName() {
        return rFirstName() + " " + rLastName();
    };

    var nums = "1234567890";

    function rN() {
        return nums.charAt(Math.floor((Math.random() * 10) + 1));
    };

    function rNum(seed) {
        return Math.floor((Math.random() * seed) + 1);
    };

    function rNumZeroBased(seed) {
        return Math.floor(Math.random() * seed);
    };

    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function rL() {
        return letters.charAt(Math.floor((Math.random() * 26) + 1));
    };

    var studyPrefixes = [
        "Investigational",
        "Exploratory",
        "Post-Market",
        "Pre-Market",
        "Approval"
    ];

    var studyTypes = [
        "Device",
        "Medical",
        "Drug",
        "Facility",
        "Training",
        "Implant"
    ];

    var studySuffix = "Study";

    function randomStudy() {
        var pfxLen = studyPrefixes.length;
        var typLen = studyTypes.length;

        return studyPrefixes[rNumZeroBased(pfxLen)] + " " + studyTypes[rNumZeroBased(typLen)] + " " + studySuffix;
    };

    function rndModifier() {
        var rS = rNum(10) % 2;

        if (rS == 1) {
            return rNum(3);
        } else {
            return -(rNum(3));
        }
    }













var jArray = $.map(ctd.studyData.data, function (old) {

    
    // dates
    var studyMonths = rNum(36) + 36;
    var studYears = Math.floor(studyMonths / 12);
    var studMon = Math.floor(studyMonths % 12);
    
    var startDay = 1;
    var startYear = 2015 + rndModifier();
    var startMonth = rNum(12);

    var endYear = startYear + studYears;
    var endMonth = startMonth + studMon;
    if (endMonth > 11) {
        endMonth -= 11;
        endYear += 1;
    }

    // study numbers
    var siteCap = rNum(7) * 5;
    var activeSites = Math.floor(siteCap * .75);
    var enrollSites = Math.floor(activeSites * .64);
    var patientCap = rNum(25) * 10 + 100;
    var patients = Math.floor(patientCap * .45);

    return {
        RecordId: rN() + rN() + rN() + rN() + rN(), 
        StudyId: rL() + rL() + rL() + "_" + rN() + rN(),
        Title: randomStudy(), 
        Code: "200" + rN() + rN() + rN() + rN(), 
        Manager: rName(), 
        Status: old.STUDY_STATUS, //
        StudyPatientCap: patientCap, 
        StudySiteCap: siteCap, 
        StudyDuration: studyMonths,
        ActiveSites: activeSites,
        EnrollingSites: enrollSites,
        Patients: patients,
        ProjectStartDate: new Date(startYear, startMonth, startDay),
        ProjectEndDate: new Date(endYear, endMonth, startDay),
        Director: rName(), 
        Division: old.DIVISION, //
        ActivePhase: old.ACTUAL_CURR_PHASE, //
        StatusColor: old.MILESTONE_COLOR,
        Description: randomLorem(rNum(500)),
        Priority: old.STUD_INTEREST //
    }
});

*/
//console.log(ctd.studyData.data);    
//console.log(jArray);
//console.log(JSON.stringify(jArray));