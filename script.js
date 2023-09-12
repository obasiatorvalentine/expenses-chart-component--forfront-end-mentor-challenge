"use strict"
  let mainChart = document.querySelectorAll('.main-chart');
  let days = document.querySelectorAll('.days');
  let amount = document.querySelectorAll('.amount');
  let maxAmount = 200;
  let arr = [];
  async function fetchData(){
    let response = await fetch("/data.json");
    let data = await response.json()
    console.log(data);
    mainChart[2].style.backgroundColor = `hsl(186, 34%, 60%)`;
    for (let i = 0; i < mainChart.length; i++) {
      days[i].lastElementChild.innerText = `${data[i].day}`;
      arr.push(data[i].amount);
    };
    let mainArr = arr.map((value, index, array)=>{
      return Math.floor((value / 100) * 400);
    })
    for (let i = 0; i < mainChart.length; i++) {
      amount[i].firstElementChild.innerText = `$ ${mainArr[i]}`
      mainChart[i].style.height = `${mainArr[i]}px`;
      if (i < 2) {
        mainChart[i].style.backgroundColor = `hsl(10, 79%, 65%)`;
      }
      if (i > 2) {
        mainChart[i].style.backgroundColor = `hsl(10, 79%, 65%)`;
      }
    }
    console.log(days[0].lastElementChild);
    console.log(arr)
  }
  fetchData()
  /* 
  --Soft-red: hsl(10, 79%, 65%);
      --Cyan: hsl(186, 34%, 60%);
      */
