chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({runnin: 'yes'}, function() {
      console.log('trains are cool. Old github layout is cool too. Normal-Github activated.');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'github.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });