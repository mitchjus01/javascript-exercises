const repeatString = function(string, num) {
    let text = ""

    if (string === "") {
        return "";
    }
    
    for (let i = 0; i < num; i++) {
        if (num === 0) {
            text = "";
        } else {
            text += string;
        }
    }

    if (num < 0) {
        return "ERROR";
    } else {
        return text;
    }
};

// Do not edit below this line
module.exports = repeatString;
