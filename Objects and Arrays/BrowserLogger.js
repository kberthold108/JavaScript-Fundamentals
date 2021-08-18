//get the browser the open tabs and recently closed and logs
//then check the browser actions 
    //if they are valid do them and add them to the browser logs
    //if it says close tab remove the tab from opend tab and add it to the recently closed one
        //same for open a tab
        //else do nothing
    //if it says clear ur history and cache remove everything from the object
//YOU CAN OPEN AS MANY TABS AS  U LIKE AS OFTEN AS U LIKE

function main(browserData, actions) {
    for (let i = 0; i < actions.length; i++) {
        const [action, website] = actions[i].split(" ");

        if (action === "Open") {
            browserData["Open Tabs"].push(website);
            browserData["Browser Logs"].push("Open " + website);
        }
        if (action === "Close") {
            browserData["Open Tabs"].splice((browserData["Open Tabs"].indexOf(website)), 1);
            browserData["Recently Closed"].push(website);
            browserData["Browser Logs"].push("Close " + website);
        }
        if (actions[i] === "Clear History and Cache") {
            browserData["Open Tabs"] = [];
            browserData["Recently Closed"] = [];
            browserData["Browser Logs"] = [];

        }
    }
    console.log(browserData["Browser Name"]);
    console.log("Open Tabs: " + browserData["Open Tabs"].join(", "));
    console.log("Recently Closed: " + browserData["Recently Closed"].join(", "));
    console.log("Browser Logs: " + browserData["Browser Logs"].join(", "));
   
}

main({"Browser Name": "Mozilla Firefox","Open Tabs": ["YouTube"],"Recently Closed": ["Gmail", "Dropbox"],"Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter", ]);