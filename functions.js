
function keepAlive(){
    // clicks the connect button twice and thus keeps colab alive
    console.log("keepAlive() called");
    document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click();
    document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click();
}

function runAll() {
    // run all command shortcut (F9)
    const F9Event = {key: "F9", code: "F9", metaKey: true, keyCode: 120};
    document.dispatchEvent(new KeyboardEvent("keydown", F9Event));
    console.log("SUCCESS : Run all");
}


function runIfStopped(){
    // runs all if colab is disconnected
    // basically it just monitors if a certain cell is in running state. 
    // if not then it will trigger the runAll command
    console.log("runIfStopped() called");
    
    // here #cell-____ is the id of div element of the cell that u want to monitor
    var element = document.querySelector("#cell-ksxQ5iuky1ad > div.main-content > div.codecell-input-output > div.inputarea.horizontal.layout.code > div.cell-gutter > div > colab-run-button");
    var title = element.getAttribute("title").slice(0,3);
    if (title == "Run")
    {
        console.log("Session is stopped");
        runAll();
    }
}


// main
console.log("Run Colab Run : Initialized");
setTimeout(runIfStopped, 5000);
setInterval(keepAlive, 60000);
setInterval(runIfStopped, 60000);
