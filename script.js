//your JS code here. If required.
function getBrowserInfo() {
        var browserName = navigator.appName;
        var version = navigator.appVersion;

        // Check if the user agent string contains 'Chrome' to differentiate Chrome from other browsers
        if (navigator.userAgent.indexOf("Chrome") != -1) {
            browserName = "Chrome";
            version = navigator.userAgent.substring(navigator.userAgent.indexOf("Chrome") + 7);
        }

        // Display the browser information in the browser-info div
        var browserInfoDiv = document.getElementById("browser-info");
        browserInfoDiv.textContent = "You are using " + browserName + " version " + version;
    }

    // Call the function when the page is loaded
    window.onload = getBrowserInfo;

