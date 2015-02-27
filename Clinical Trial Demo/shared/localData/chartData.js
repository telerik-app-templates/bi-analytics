
(function (ctd) {
    'use strict';
    
    // private
    var cities = [
        "New York","Los Angeles","Chicago","Houston","Philadelphia","Phoenix","San Antonio","San Diego","Dallas","San Jose","Austin","Indianapolis","Jacksonville","San Francisco","Columbus","Charlotte","Fort Worth","Detroit","El Paso","Memphis","Seattle","Denver","Washington","Boston","Nashville","Baltimore","Oklahoma City","Louisville","Portland","Las Vegas","Milwaukee","Albuquerque","Tucson","Fresno","Sacramento","Long Beach","Kansas City","Mesa","Virginia Beach","Atlanta","Colorado Springs","Omaha","Raleigh","Miami","Oakland","Minneapolis","Tulsa","Cleveland","Wichita","Arlington","New Orleans","Bakersfield","Tampa","Honolulu","Aurora","Anaheim","Santa Ana","St. Louis","Riverside","Corpus Christi","Lexington","Pittsburgh","Anchorage","Stockton","Cincinnati","Saint Paul","Toledo","Greensboro","Newark","Plano","Henderson","Lincoln","Buffalo","Jersey City","Chula Vista","Fort Wayne","Orlando","St. Petersburg","Chandler","Laredo","Norfolk","Durham","Madison","Lubbock","Irvine","Winston–Salem","Glendale","Garland","Hialeah","Reno","Chesapeake","Gilbert","Baton Rouge","Irving","Scottsdale","North Las Vegas","Fremont","Boise","Richmond","San Bernardino","Birmingham","Spokane","Rochester","Des Moines","Modesto","Fayetteville","Tacoma","Oxnard","Fontana","Montgomery","Moreno Valley","Shreveport","Yonkers","Akron","Huntington Beach","Little Rock","Augusta","Amarillo","Mobile","Grand Rapids","Salt Lake City","Tallahassee","Huntsville","Grand Prairie","Knoxville","Worcester","Newport News","Brownsville","Overland Park","Santa Clarita","Providence","Garden Grove","Chattanooga","Oceanside","Jackson","Fort Lauderdale","Santa Rosa","Rancho Cucamonga","Port St. Lucie","Tempe","Sioux Falls","Springfield","Peoria","Pembroke Pines","Elk Grove","Salem","Lancaster","Corona","Eugene","Palmdale","Salinas","Pasadena","Fort Collins","Hayward","Pomona","Cary","Rockford","Alexandria","Escondido","McKinney","Joliet","Sunnyvale","Torrance"
    ];

    var citLen = cities.length;

    ctd.chartData = {
        getActiveData: function (activeCount) {
            var data = [];            

            for (var i = 0; i < activeCount; i++) {
                data.push({
                    siteName: cities[Math.floor(Math.random() * citLen)] + " University Hospital",
                    siteData: Math.floor(Math.random() * 100)
                });
            }

            return data;
        },
        getEnrolledData: function (enrolledCount) {
            var data = [];

            for (var i = 0; i < enrolledCount; i++) {
                data.push({
                    siteX: i,
                    siteY: Math.floor(Math.random() * 10),
                    siteSize: Math.floor(Math.random() * 5) + 2,
                    siteName: cities[Math.floor(Math.random() * citLen)] + " University Hospital",
                });
            }

            return data;
        },
        getPatientData: function (patientCount) {
            var data = [];

            for (var i = 0; i < patientCount; i++) {
                data.push({
                    patientNumber: i,
                    patientLowVal: Math.floor(Math.random() * 10) + 10,
                    patientHighVal: Math.floor(Math.random() * 10) + 2
                });
            }

            return data;
        }
    }

})(ctd);