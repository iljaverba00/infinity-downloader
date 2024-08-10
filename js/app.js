window.addEventListener("DOMContentLoaded", () => {

  const status = document.getElementById('status');
  let loadings = 1;
  const links = ['https://download1580.mediafire.com/pj2s98pmnq1gpX5x5Tu1alrpMA-Q82OUjs6GheTs_yJRlNfDWqGQQEP8dnh1STDHDsFysQnb5tdpJstztoNJk3IUJ7F6e6LKwYTecdH31bnTwOxgwsUFypS2vvOELDMXGhC5X8W-FYkX92SXlV0XO-gmZS7CRGvNX4-_-MRKgVTnaAGt/jm9yxexr593vwqg/Need_for_Speed_Underground_2_Eng_v2.dmg']


  function download(url) {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onloadend = xhr.onerror = (e) => {
      loadings++;
      download(url);
    }
    xhr.onprogress = (e) => {
      //console.log('progress:' + e.total);
      const progress = Math.round(e.loaded / e.total * 10000) / 100;

      status.innerHTML = `Status: <b>working</b></br>iteration: <b>${loadings}</b><br/>progress: <b>${progress}%</b>`
    }

    xhr.send()
  }

  download(links[0])


})
