(
  () => {
    let toggle = document.getElementById("enabled");

    chrome.storage.sync.get("enabled", ({ enabled }) => {
      if(enabled) toggle.checked = true
    });

    toggle.onclick = function(e) {
      let enabled = e.target.checked;
      chrome.storage.sync.set({ enabled });
    };
  }
)();
