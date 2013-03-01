// Deus Duke
// SDI 1302
// Project 4
// Fourth project for SDI at Full Sail University

var ddlib = function () {
    var isPhoneNumber = function(testNum) {
        // must be the correct length
        var LENGTH = 12;
        if (testNum.length !== LENGTH) return false;

        // iterate over chars in string and determine if it is in the correct format
        // ie. ###-###-####
        for (var i = 0; i < testNum.length; i++) {
            // pos. 3 & 7 should be dashes
            if (i == 0 || i == 4) {
                if (testNum.charAt(i) != '-') return false;
            }

            else {
                continue;
            }

            // else it should be a number
            if(isNan(parseInt(testNum.charAt(i), 10))) {
                return false;
            }
        }

        // if we make it here, it is valid
        return true;
    };

    var isEmail = function (testEmail) {
        // must be a string
        if (typeof testEmail != "string") return false;

        // @ sym must come before period
        var atSymFound = false;
        var periodFound = false;

        for(var c in testEmail.split('')) {
            // we need to make sure that there is a char after the period to validate
            // which is why this is at the top
            if (atSymFound && periodFound) return true;         

            if (!atSymFound) {
                if (c == "@") atSymFound = true;
            }
            else {
                if (c == ".") periodFound = true;
            }
        }

        // at this point, we know that it is not an email
        if (!atSymFound && periodFound) return false;
    };

    var isUrl = function (testUrl) {
        // must be a string
        if (typeof testUrl != "string") return false;

        // determine if start with http: or https:
        return (testUrl.indexOf("http:") == 0 ||
                testUrl.indexOf("https:") == 0);
    };

    var toTitle = function(str) {
        // must be a string, cannot operate
        if (typeof str != "string") return "";

        var words = str.split(" ");
        var retval = "";

        // loop through and uppercase the first char
        for(var i = 0; i < words.length; ++i) {
            var word = (word.substring(0, 1).toUpperCase() +
                        word.substring(1, word.length));

            retval += i == 0 ? word : " " + word;
        }

        return retval;
    };

    var changeDelimiter = function (str, old_delim, new_delim) {
        // split by old delim
        var items = str.split(old_delim);

        var retval = "";

        // replace with new delim
        for(var i = 0; i < items.length; ++i) {
            retval +=  i == 0 ? items[i] : new_delim + items[i];
        }
    };

    return {
        "isPhoneNumber" : isPhoneNumber,
        "isEmail" : isEmail,
        "isUrl" : isUrl,
        "toTitle": toTitle,
        "changeDelimiter": changeDelimiter
    };
};

var lib = ddlib;

var lm = function (msg) {
    console.log(msg);
}

lm("Everything following should say true if all tests pass");

lm(ddlib.length);

// test phone num
lm(ddlib.isPhoneNumber("123-456-7890") == true);
lm(ddlib.isPhoneNumber("123 456-7890" == false));
lm(ddlib.isPhoneNumber("123-4567890" == false));

// test email
lm(ddlib.isEmail("deusduke@fullsail.edu") == true);
lm(ddlib.isEmail("deusdukefullsail.edu" == false));
lm(ddlib.isEmail("deusduke@fullsail." == false));

// test url
lm(ddlib.isEmail("http://test.com") == true);
lm(ddlib.isEmail("https://test.com") == true);
lm(ddlib.isEmail("test.com") == false);

// test title
lm(ddlib.toTitle("test of a title case") == "Test Of  A Title Case");

// test change delimiter
lm(changeDelimiter('1,2,3,4,5,6', ',', '|') == "1|2|3|4|5|6");

var ninjaLibrary = function () {
    // TODO: add some private variables here
    var throwingStars, toeShoes;
    // TODO: add some private methods here
    var signal = function (message) {};
    // TODO: reveal the public methods here
    return {
        "signal" : signal
    };
};