import React, { Component } from "react";
import { Helmet } from "react-helmet";

class OsintPage extends Component {
  render() {
    const isBrowser = () => typeof window !== "undefined";
    const w = isBrowser() && window;
    const d = document;

    const l = () => {
      const s = d.createElement("script");
      s.type = "text/javascript";
      s.src = "https://cdnjs.cloudflare.com/ajax/libs/d3/7.1.1/d3.min.js";
      s.integrity =
        "sha512-COTaPOlz12cG4fSfcBsxZsjauBAyldqp+8FQUM/dZHm+ts/jR4AFoJhCqxy8K10Jrf3pojfsbq7fAPTb1XaVkg==";
      s.crossorigin = "anonymous";
      referrerpolicy = "no-referrer";
      s.async = true;
      const x = d.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);

      s.addEventListener("load", () => {
        var margin = [20, 120, 20, 140],
          width = 1280 - margin[1] - margin[3],
          height = 800 - margin[0] - margin[2],
          i = 0,
          duration = 1250,
          root;

        var tree = d3.layout.tree().size([height, width]);

        var diagonal = d3.svg.diagonal().projection(function (d) {
          return [d.y, d.x];
        });

        var vis = d3
          .select("#body")
          .append("svg:svg")
          .attr("width", width + margin[1] + margin[3])
          .attr("height", height + margin[0] + margin[2])
          .append("svg:g")
          .attr("transform", "translate(" + margin[3] + "," + margin[0] + ")");

        d3.json("arf.json", function (json) {
          root = json;
          root.x0 = height / 2;
          root.y0 = 0;

          function collapse(d) {
            if (d.children) {
              d._children = d.children;
              d._children.forEach(collapse);
              d.children = null;
            }
          }

          /*  function toggleAll(d) {
      if (d.children) {
        d.children.forEach(toggleAll);
        toggle(d);
      }
    } */
          root.children.forEach(collapse);
          update(root);
        });

        function update(source) {
          // var duration = d3.event && d3.event.altKey ? 5000 : 500;

          // Compute the new tree layout.
          var nodes = tree.nodes(root).reverse();

          // Normalize for fixed-depth.
          nodes.forEach(function (d) {
            d.y = d.depth * 180;
          });

          // Update the nodes…
          var node = vis.selectAll("g.node").data(nodes, function (d) {
            return d.id || (d.id = ++i);
          });

          // Enter any new nodes at the parent's previous position.
          var nodeEnter = node
            .enter()
            .append("svg:g")
            .attr("class", "node")
            .attr("transform", function (d) {
              return "translate(" + source.y0 + "," + source.x0 + ")";
            })
            .on("click", function (d) {
              toggle(d);
              update(d);
            });

          nodeEnter
            .append("svg:circle")
            .attr("r", 1e-6)
            .style("fill", function (d) {
              return d._children ? "lightsteelblue" : "#fff";
            });

          nodeEnter
            .append("a")
            .attr("target", "_blank")
            .attr("xlink:href", function (d) {
              return d.url;
            })
            .append("svg:text")
            .attr("x", function (d) {
              return d.children || d._children ? -10 : 10;
            })
            .attr("dy", ".35em")
            .attr("text-anchor", function (d) {
              return d.children || d._children ? "end" : "start";
            })
            .text(function (d) {
              return d.name;
            })
            .style("fill: rgb(0, 0, 0)", function (d) {
              return d.free ? "black" : "#999";
            })
            .style("fill-opacity", 1e-6);

          nodeEnter.append("svg:title").text(function (d) {
            return d.description;
          });

          // Transition nodes to their new position.
          var nodeUpdate = node
            .transition()
            .duration(duration)
            .attr("transform", function (d) {
              return "translate(" + d.y + "," + d.x + ")";
            });

          nodeUpdate
            .select("circle")
            .attr("r", 6)
            .style("fill", function (d) {
              return d._children ? "lightsteelblue" : "#fff";
            });

          nodeUpdate.select("text").style("fill-opacity", 1);

          // Transition exiting nodes to the parent's new position.
          var nodeExit = node
            .exit()
            .transition()
            .duration(duration)
            .attr("transform", function (d) {
              return "translate(" + source.y + "," + source.x + ")";
            })
            .remove();

          nodeExit.select("circle").attr("r", 1e-6);

          nodeExit.select("text").style("fill-opacity", 1e-6);

          // Update the links…
          var link = vis
            .selectAll("path.link")
            .data(tree.links(nodes), function (d) {
              return d.target.id;
            });

          // Enter any new links at the parent's previous position.
          link
            .enter()
            .insert("svg:path", "g")
            .attr("class", "link")
            .attr("d", function (d) {
              var o = { x: source.x0, y: source.y0 };
              return diagonal({ source: o, target: o });
            })
            .transition()
            .duration(duration)
            .attr("d", diagonal);

          // Transition links to their new position.
          link.transition().duration(duration).attr("d", diagonal);

          // Transition exiting nodes to the parent's new position.
          link
            .exit()
            .transition()
            .duration(duration)
            .attr("d", function (d) {
              var o = { x: source.x, y: source.y };
              return diagonal({ source: o, target: o });
            })
            .remove();

          // Stash the old positions for transition.
          nodes.forEach(function (d) {
            d.x0 = d.x;
            d.y0 = d.y;
          });
        }

        // Toggle children.
        function toggle(d) {
          if (d.children) {
            d._children = d.children;
            d.children = null;
          } else {
            d.children = d._children;
            d._children = null;
          }
        }
      });
    };
    if (w.attachEvent) {
      w.attachEvent("onload", l);
    } else {
      w.addEventListener("load", l, false);
    }
    return (
      <>
        <style>
          {`
      body {
  background-color: #ffffff;
  font-size: 14px;
  font-family: "Helvetica Neue", Helvetica;
}

#body {
  margin: 0 auto;
  position: relative;
}

#header {
  font-size: 40px;
  font-weight: bold;
  top: 20px;
  text-align: center;
}

.legend {
  position: absolute;
  top: 0px;
  right: 0;
  width: 330px;
  font-size: 11px;
  color: #000;
}

.node {
  cursor: pointer;
}

.node circle {
  cursor: pointer;
  fill: #fff;
  stroke: steelblue;
  stroke-width: 1.5px;
}

.node text {
  font-size: 12px;
  fill: rgb(0, 0, 0);
}

path.link {
  fill: none;
  stroke: #ccc;
  stroke-width: 1px;
}`}
        </style>
        <Helmet
          title={`Osint Tools | Find out who the scammer is`}
          description="OSINT tools"
        ></Helmet>
        <body>
          <div id="body">
            <div id="header">OSINT Framework</div>
          </div>
        </body>
      </>
    );
  }
}

export default OsintPage;
