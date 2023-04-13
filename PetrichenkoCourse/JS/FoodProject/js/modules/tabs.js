function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
  // Tabs
  const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsParent = document.querySelector(tabsParentSelector);

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.remove("show", "fade");
      item.classList.add("hide");
    });

    tabs.forEach((tab) => {
      tab.classList.remove(activeClass);
    });
  }

  function showTabContent(index = 0) {
    tabsContent[index].classList.remove("hide");
    tabsContent[index].classList.add("show", "fade");
    tabs[index].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target.matches(tabsSelector)) {
      tabs.forEach((tab, index) => {
        if (target === tab) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });
}

// module.exports = tabs; // CommonJS
export default tabs; // ES6 import/export
