(
  () => {
    const setStorage = () => {
      chrome.storage.sync.set({ enabled: "true" });
    };

    chrome.runtime.onInstalled.addListener(() => {
      setStorage();
    });
  }
)();
