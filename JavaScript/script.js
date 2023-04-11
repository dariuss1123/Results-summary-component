import { stats, randomNum1, randomNum2, randomNum3, randomNum4 } from "../JavaScript/data.js";

function getResult () {
  return (randomNum1 + randomNum2 + randomNum3 + randomNum4) / stats.length
}

function getStatsHtml () {
  let htmlString = "";
  stats.forEach((stat, index) => {
      htmlString += `<div class="stat" style="background: rgba(${stat.color[0]}, ${stat.color[1]}, ${stat.color[2]}, 0.1);">
                        <img src="${stat.icon}" id="icon-${index}" class="icon">
                        <p class="category" style="color: rgb(${stat.color[0]}, ${stat.color[1]}, ${stat.color[2]})">${stat.category}</p>
                        <span class="score">${stat.score}/100</span>
                    </div>`;
  });
  return htmlString;
}

function render () {
        document.getElementById('stats-div').innerHTML += getStatsHtml()
        document.getElementById('big-num').innerHTML = getResult().toFixed(0)
}

render()



