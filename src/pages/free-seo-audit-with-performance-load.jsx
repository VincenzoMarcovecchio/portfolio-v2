import React from 'react';
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { device } from '../styles/Global';

const StyledAbout = styled.section`
  min-height: 100vh;
  max-width: 90vw;
  text-align: center;
  max-width: 600px;
  margin: auto;
  padding: 3rem 0;

  span {
    line-height: 1.3rem;
  }
  .my__form {
    width: 90%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 3rem auto;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
  }

  label {
    margin-top: 1rem;
  }

  input {
    box-sizing: border-box;
    width: 100%;
    height: 2.3rem;
    padding-left: 0.6rem;
    font-family: inherit;
    background-color: rgb(255, 255, 255);
    background-clip: padding-box;
    border: 1px solid rgb(34, 37, 42);
    border-radius: 0.25rem;
    -webkit-transition: border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  input:focus {
    outline: none;
    background-color: rgb(255, 255, 255);
    border-color: rgb(181, 186, 245);
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
  }
  textarea {
    box-sizing: border-box;
    width: 100%;
    height: 7rem;
    padding-left: 0.6rem;
    font-family: inherit;
    padding-top: 0.6rem;
    background-color: rgb(255, 255, 255);
    background-clip: padding-box;
    border: 1px solid rgb(34, 37, 42);
    border-radius: 0.25rem;
    -webkit-transition: border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  textarea:focus {
    outline: none;
    background-color: rgb(255, 255, 255);
    border-color: rgb(181, 186, 245);
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
  }
  button {
    height: 2.3rem;
    width: 8rem;
    cursor: pointer;
    margin-top: 2rem;
    border: 1px solid rgb(217, 220, 225);
    border-radius: 0.25rem;
    color: white;
    font-size: 18px;
    background-color: #4f7dfd;
  }

  h1 {
    margin-top: unset;
    font-size: 2.3rem;
    line-height: 1.2;
    width: 95%;
    margin: auto;
    @media ${device.mobileL} {
      font-size: 1.9rem;
    }
  }
  h3 {
    width: 95%;
    margin: 2rem auto;
  }

  img {
    margin-bottom: 4rem;
    width: 100%;
  }
  span {
    color: inherit;
    margin-bottom: 4rem;
  }
  .cv-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: auto;
  }

  #Layer_1 {
    animation: fill 2s linear infinite;
  }

  path {
    stroke-dasharray: 0 1000;
    animation: draw 2s linear infinite;
    stroke: black;
  }

  @keyframes draw {
    from {
      stroke-dasharray: 0 1000;
    }
    to {
      stroke-dasharray: 1000 0;
    }
  }

  @keyframes fill {
    from {
      fill: none;
    }
    to {
      fill: black;
    }
  }
`;
function seo() {

const [url, setUrl] = React.useState("")
const [result, setResult] = React.useState({})

  const urls = setUpQuery();

  function setUpQuery() {
    const api = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=';
    let queryUrl = url
    const parameters = {
      url: encodeURIComponent(queryUrl)
    };
    let query = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${queryUrl}?`;
    return query
  }


  var pubs = result

  
  var diameter = 800;
  
  var margin = {top: 20, right: 120, bottom: 20, left: 120},
      width = diameter,
      height = diameter;
      
  var i = 0,
      duration = 350,
      root;
  
  var tree = d3.layout.tree()
      .size([360, diameter / 2 - 80])
      .separation(function(a, b) { return (a.parent == b.parent ? 1 : 10) / a.depth; });
  
  var diagonal = d3.svg.diagonal.radial()
      .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });
  
  var svg = d3.select("body").append("svg")
      .attr("width", width )
      .attr("height", height )
    .append("g")
      .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");
  
  root = pubs;
  root.x0 = height / 2;
  root.y0 = 0;
  
  //root.children.forEach(collapse); // start with all children collapsed
  update(root);
  
  d3.select(self.frameElement).style("height", "800px");
  
  function update(source) {
  
    // Compute the new tree layout.
    var nodes = tree.nodes(root),
        links = tree.links(nodes);
  
    // Normalize for fixed-depth.
    nodes.forEach(function(d) { d.y = d.depth * 80; });
  
    // Update the nodes…
    var node = svg.selectAll("g.node")
        .data(nodes, function(d) { return d.id || (d.id = ++i); });
  
    // Enter any new nodes at the parent's previous position.
    var nodeEnter = node.enter().append("g")
        .attr("class", "node")
        //.attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })
        .on("click", click);
  
    nodeEnter.append("circle")
        .attr("r", 1e-6)
        .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });
  
    nodeEnter.append("text")
        .attr("x", 10)
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        //.attr("transform", function(d) { return d.x < 180 ? "translate(0)" : "rotate(180)translate(-" + (d.name.length * 8.5)  + ")"; })
        .text(function(d) { return d.name; })
        .style("fill-opacity", 1e-6);
  
    // Transition nodes to their new position.
    var nodeUpdate = node.transition()
        .duration(duration)
        .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })
  
    nodeUpdate.select("circle")
        .attr("r", 4.5)
        .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });
  
    nodeUpdate.select("text")
        .style("fill-opacity", 1)
        .attr("transform", function(d) { return d.x < 180 ? "translate(0)" : "rotate(180)translate(-" + (d.name.length + 50)  + ")"; });
  
    // TODO: appropriate transform
    var nodeExit = node.exit().transition()
        .duration(duration)
        //.attr("transform", function(d) { return "diagonal(" + source.y + "," + source.x + ")"; })
        .remove();
  
    nodeExit.select("circle")
        .attr("r", 1e-6);
  
    nodeExit.select("text")
        .style("fill-opacity", 1e-6);
  
    // Update the links…
    var link = svg.selectAll("path.link")
        .data(links, function(d) { return d.target.id; });
  
    // Enter any new links at the parent's previous position.
    link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", function(d) {
          var o = {x: source.x0, y: source.y0};
          return diagonal({source: o, target: o});
        });
  
    // Transition links to their new position.
    link.transition()
        .duration(duration)
        .attr("d", diagonal);
  
    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
        .duration(duration)
        .attr("d", function(d) {
          var o = {x: source.x, y: source.y};
          return diagonal({source: o, target: o});
        })
        .remove();
  
    // Stash the old positions for transition.
    nodes.forEach(function(d) {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  }
  
  // Toggle children on click.
  function click(d) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    
    update(d);
  }
  
  // Collapse nodes
  function collapse(d) {
    if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      }
  }
  


  return (
    <>

      <Helmet>
        <title>Free SEO Audit with Performance Load — Google LightHouse</title>
        <meta name="title" content="Free SEO Audit with Performance Load — Google LightHouse" />
        <meta name="description" content="A simple tool to generate google lighthouse reports with more in depth details!"/>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vincenzo.codes/free-seo-audits-with-performance-load" />
        <meta property="og:title" content="Free SEO Audit with Performance Load — Google LightHouse" />
        <meta property="og:description" content="A simple tool to generate google lighthouse reports with more in depth details!"/>
        <meta property="og:image" content="https://vincenzo.codes/free-seo-audits-with-performance-loadassets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://vincenzo.codes/free-seo-audits-with-performance-load" />
        <meta property="twitter:title" content="Free SEO Audit with Performance Load — Google LightHouse" />
        <meta property="twitter:description" content="A simple tool to generate google lighthouse reports with more in depth details!"/>
        <meta property="twitter:image"
          content="https://vincenzo.codes/free-seo-audits-with-performance-loadassets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/d3/3.3.10/d3.min.js"></script>
      </Helmet>
      <StyledAbout>
        <div id="body">
          <form id="formId" onSubmit={(evt) => {
            evt.preventDefault();
            evt.stopPropagation();
            fetch(urls)
              .then(response => response.json())
              .then(json => {
                setResult(json)
                console.log(result);
              });
            
          }}>
            <label for="inputId">Url</label>
            <input id="inputId" onChange={(e) => setUrl(e.target.value)} placeholder="es https://google.com" type="text" />
            <button type="submit">Run Audit</button>
          </form>
        
<div>Results for: {result.id}</div>
<small>{result.lighthouseResult.lighthouseVersion}</small>
<small>{result.lighthouseResult.userAgent}</small>
       <h3>Audits:</h3>
       <div className="cols">
<div className="card">
  <h4>{result.lighthouseResult.audits.bootup-time.title}</h4>
  <span>{result.lighthouseResult.audits.bootup-time.numericValue} {result.lighthouseResult.audits.bootup-time.numericUnit}</span>
  <span>{result.lighthouseResult.audits.bootup-time.description} </span>
</div>

       </div>
        </div>
      </StyledAbout>
    </>

  );

};

export default seo;
