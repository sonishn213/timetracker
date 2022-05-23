function elementsObj(className, title, currentHrs, lastHrs, imgurl) {
  this.className = className;
  this.title = title;
  this.currentHrs = currentHrs;
  this.lastHrs = lastHrs;
  this.imgurl = imgurl;
}
const eleObj = [];
eleObj.push(new elementsObj("work", "Work", 32, 36, "images/icon-work.svg"));
eleObj.push(new elementsObj("play", "Play", 10, 8, "images/icon-play.svg"));
eleObj.push(new elementsObj("study", "Study", 4, 7, "images/icon-study.svg"));
eleObj.push(
  new elementsObj("exercise", "Exercise", 4, 5, "images/icon-exercise.svg")
);
eleObj.push(
  new elementsObj("social", "Social", 5, 10, "images/icon-social.svg")
);
eleObj.push(
  new elementsObj("selfcare", "Self Care", 2, 2, "images/icon-self-care.svg")
);

window.addEventListener("load", () => {
  const grid = document.querySelector(".grid");

  let gridItem = eleObj
    .map((item) => {
      return `<div class="${item.className} card">
  <div class="card-top">
      <div class="card-top-icon">
      <img src=${item.imgurl} alt="" />
      </div>
  </div>
  <div class="card-body">
      <div class="card-body-header">
      <span>${item.title}</span
      ><span><img src="images/icon-ellipsis.svg" alt="" /></span>
      </div>
      <div class="hour-info">
      <div class="hour">${item.currentHrs}hrs</div>
      <div class="card-body-footer">Last Week - ${item.lastHrs}hrs</div>
      </div>
  </div>
  </div>`;
    })
    .join("");
  grid.innerHTML += gridItem;
});
