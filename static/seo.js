const url = setUpQuery();

  function setUpQuery() {
    const api = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=';
    let queryUrl = document.querySelectorAll("#inputId").value
    const parameters = {
      url: encodeURIComponent(queryUrl)
    };
    let query = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${queryUrl}?`;
    return query
  }


  function showInitialContent(id) {

    const body = document.getElementById("body")
    const title = document.createElement('h1');
    title.textContent = 'PageSpeed Insights API Demo';
    body.appendChild(title);
    const page = document.createElement('p');
    page.textContent = `Page tested: ${id}`;
    body.appendChild(page);
  }

  function showCruxContent(cruxMetrics) {
    const body = document.getElementById("body")
    const cruxHeader = document.createElement('h2');
    cruxHeader.textContent = "Chrome User Experience Report Results";
    body.appendChild(cruxHeader);
    for (key in cruxMetrics) {
      const p = document.createElement('p');
      p.textContent = `${key}: ${cruxMetrics[key]}`;
      body.appendChild(p);
    }
  }

  function showLighthouseContent(lighthouseMetrics) {
    const body = document.getElementById("body")
    const lighthouseHeader = document.createElement('h2');
    lighthouseHeader.textContent = "Lighthouse Results";
    body.appendChild(lighthouseHeader);
    for (key in lighthouseMetrics) {
      const p = document.createElement('p');
      p.textContent = `${key}: ${lighthouseMetrics[key]}`;
      body.appendChild(p);
    }
  }