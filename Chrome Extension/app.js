let fetch_title = document.getElementById('fetch-title');

fetch_title.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      const title = currentTab.title;
  
      // Show the tab title in the popup
      document.getElementById('title').innerText = title;
    });
});
  