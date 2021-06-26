const tab1 = document.querySelector("#tab1")
const tab2 = document.querySelector("#tab2")
const tab3 = document.querySelector("#tab3")
const tabContainer = document.querySelector(".tab-content")
const width = window.innerWidth;
const array = [{title: "Cancel Anytime", width:0}, {title: "Watch Anywhere", width:1}, {title: "Pick Your Price", width:2}]
let currentTab = tab1
tab1.addEventListener("click", (event) => {
  tabContainer.style =`transform: translateX(${  - array[0].width * width }px)` 
  currentTab.classList.remove("tab-border");
  tab1.classList.add("tab-border");
  currentTab = tab1
});

tab2.addEventListener("click", (event) => {
  tabContainer.style =`transform: translateX(${  - array[1].width * width + 10}px)`
  currentTab.classList.remove("tab-border");
  tab2.classList.add("tab-border");
  currentTab = tab2
});

tab3.addEventListener("click", (event) => {
  tabContainer.style = `transform: translateX(${ - array[2].width * width + 30}px)`
  currentTab.classList.remove("tab-border");
  tab3.classList.add("tab-border");
  currentTab = tab3
});
