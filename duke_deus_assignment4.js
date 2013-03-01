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
            if (i == 3 || i == 7) {
                if (testNum.charAt(i) != '-') return false;
                continue;
            }

            // else it should be a number
            else if(isNaN(parseInt(testNum.charAt(i), 10))) {
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

        var chars = testEmail.split('');

        for(var i = 0; i < chars.length; ++i) {
            var c = chars[i];

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
        return false;
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
            var word = (words[i].substring(0, 1).toUpperCase() +
                        words[i].substring(1, words[i].length));

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

        return retval;
    };

    var toSetDecimal = function(num, numTrailing) {
        return num.toFixed(numTrailing);
    };

    var stringToNum = function(str) {
        return Number(str);
    }

    return {
        "isPhoneNumber" : isPhoneNumber,
        "isEmail" : isEmail,
        "isUrl" : isUrl,
        "toTitle": toTitle,
        "changeDelimiter": changeDelimiter,
        "toSetDecimal" : toSetDecimal,
        "stringToNum" : toSetDecimal,
    };
};

var lib = ddlib();

var lm = function (msg, val) {
    console.log(msg, val);
}

lm("Everything following should match (true to true, false to false, string to string) if all tests pass");

lm("", "");
lm("-- test phone num", '');
lm(lib.isPhoneNumber("123-456-7890"), true);
lm(lib.isPhoneNumber("123 456-7890"), false);
lm(lib.isPhoneNumber("123-4567890"), false);

lm("", "");
lm("-- test email", '');
lm(lib.isEmail("deusduke@fullsail.edu"), true);
lm(lib.isEmail("deusdukefullsail.edu"), false);
lm(lib.isEmail("deusduke@fullsail."), false);

lm("", "");
lm("-- test url", '');
lm(lib.isUrl("http://test.com"), true);
lm(lib.isUrl("https://test.com"), true);
lm(lib.isUrl("test.com"), false);

lm("", "");
lm("-- test title", '');
lm(lib.toTitle("test of a title case"), "Test Of  A Title Case");

lm("", "");
lm("-- test change delimiter", '');
lm(lib.changeDelimiter('1,2,3,4,5,6', ',', '|'), "1|2|3|4|5|6");

lm("", "");
lm("-- test set decimal", '');
lm(lib.toSetDecimal(2.34, 1), "2.3");
lm(lib.toSetDecimal(2.34, 2), "2.34");
lm(lib.toSetDecimal(2.34, 3), "2.340");
lm(lib.toSetDecimal(2.34, 4), "2.3400");

lm("", "");
lm("-- test string to number", '');
lm(lib.stringToNum("999") === 999, true);