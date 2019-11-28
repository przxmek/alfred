setUp();

function setUp() {
  setUpOnInstalled();
  setUpRefresh();
}

function setUpOnInstalled() {
  chrome.runtime.onInstalled.addListener(() => {
    console.log('onInstalled...');
    // create alarm after extension is installed / upgraded
    chrome.alarms.create('refresh', { periodInMinutes: 3 });
  });
}

function setUpRefresh() {
  function refresh() {
    console.log("Hello, world!");
  }

  chrome.alarms.onAlarm.addListener((alarm) => {
    console.log(alarm.name); // refresh
    refresh();
  });
}