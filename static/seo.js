const url = setUpQuery();

var form = document.getElementsByTagName("form");
form.addEventListener("submit", function(evt) {
      evt.preventDefault();
      fetch(url)
      .then(response => response.json())
      .then(json => {
        // See https://developers.google.com/speed/docs/insights/v5/reference/pagespeedapi/runpagespeed#response
        // to learn more about each of the properties in the response object.
        showInitialContent(json.id);
        const cruxMetrics = {
          "First Contentful Paint": json.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.category,
          "First Input Delay": json.loadingExperience.metrics.FIRST_INPUT_DELAY_MS.category
        };
        showCruxContent(cruxMetrics);
        const lighthouse = json.lighthouseResult;
        console.log(json);
        console.log(lighthouse);
        const lighthouseMetrics = {
          'First Contentful Paint': lighthouse.audits['first-contentful-paint'].displayValue,
          'Speed Index': lighthouse.audits['speed-index'].displayValue,
          'Time To Interactive': lighthouse.audits['interactive'].displayValue,
          'First Meaningful Paint': lighthouse.audits['first-meaningful-paint'].displayValue,
        };
        showLighthouseContent(lighthouseMetrics);
      });
        
    }
  
});


function setUpQuery() {
const api = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
const queryUrl = document.getElementById("inputId").value;
const parameters = {
  url: encodeURIComponent(queryUrl)
};
let query = `${api}?`;
        for (key in parameters) {
          query += `${key}=${parameters[key]}`;
}
        return query;
}

        function showInitialContent(id) {
          
        const body =document.getElementById("body")
        const title = document.createElement('h1');
        title.textContent = 'PageSpeed Insights API Demo';
        body.appendChild(title);
        const page = document.createElement('p');
        page.textContent = `Page tested: ${id}`;
        body.appendChild(page);
}

        function showCruxContent(cruxMetrics) {
                const body =document.getElementById("body")
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
                const body =document.getElementById("body")
                const lighthouseHeader = document.createElement('h2');
        lighthouseHeader.textContent = "Lighthouse Results";
        body.appendChild(lighthouseHeader);
        for (key in lighthouseMetrics) {
  const p = document.createElement('p');
        p.textContent = `${key}: ${lighthouseMetrics[key]}`;
        body.appendChild(p);
}
}


