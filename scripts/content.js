(
  () => {
    const buildShadeDiv = (element) => {
      element.setAttribute(
        "style",
        `
          z-index: 2147483647; 
          margin: 0;
          border-radius: 0;
          padding: 0;
          background: #e38b10!important;
          pointer-events: none;
          position: fixed;
          top: -10%;
          right: -10%;
          width: 120%;
          height: 120%;
          opacity: 90%;            
          mix-blend-mode: multiply;
          display: block;
        `
      );
    };

    const getShadeElement = () => {
      const id = "simple-screen-shader";

      var element = document.getElementById(id);
      if (element) return element;

      element = document.createElement("div");
      element.id = id;
      document.documentElement.appendChild(element);
      return element;
    };

    const showShade = () => {
      const element = getShadeElement();
      buildShadeDiv(element);
    };

    const hideShade = () => {
      const element = getShadeElement();
      element.remove();
    };

    chrome.storage.onChanged.addListener((changes) => {
      changes["enabled"].newValue ? showShade() : hideShade();
    });

    chrome.storage.sync.get("enabled", ({ enabled }) => {
      enabled ? showShade() : hideShade();
    });
  }
)();
