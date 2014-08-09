chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if(tab.url.indexOf("https://steamcommunity.com/linkfilter/") == 0 && changeInfo.status == "loading") {
		url = tab.url.replace("https://steamcommunity.com/linkfilter/?url=", "");
        chrome.tabs.update(tabId, {url: url});
    }
});