function refreshTabs(data) {
  chrome.tabs.query({}, function(tabs) {
      refresh(tabs);
  });
}

function refresh(tabs) {
  tabs.forEach(function(tab){
    chrome.tabs.reload(tab.id);
  });
}

chrome.browserAction.onClicked.addListener(function(tab) {
    refreshTabs();
});
