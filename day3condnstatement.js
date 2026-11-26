function launchBrowser(browserName) {
    if (browserName == "chrome") {
        console.log("Chrome launched");
    } else {
        console.log("Other browser launched");
    }
}

function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Smoke testing");
            break;

        case "sanity":
            console.log("Sanity testing");
            break;

        case "regression":
            console.log("Regression testing");
            break;

        default:
            console.log("Smoke testing");
    }
}

// Calling functions
launchBrowser("chrome");
runTests("smoke");