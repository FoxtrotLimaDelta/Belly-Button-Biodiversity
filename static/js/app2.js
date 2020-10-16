// Plan

// init function 
// 1) Fill out dropdown with all of the ids
// 2) Calls a buildPage function that draws the chart and the panel for the first one

// buildPage function 
// 1) That takes one parameter, which is the subject ID
// 2) Draws our plotly charts and fills the panel

// Need an event listener for the dropdown
// optionChanged function
// - That takes as a parameter the user selection


function buildPage(subject){

  d3.json("samples.json").then((data) => {

    console.log(subject);

    // Filter data.samples based on subject
    // The array that you get back you are interested in [0]

    // Use dot notation to get at .otu_ids, .otu_labels, .otu_sample_values
    // Use slice for the horizontal bar chart

    // Plotly charts
    // Horizonatal bar chart- orientation: "h"


    // Panel
    // Filter data.metadata based on subject
    // The array that you get back you are interested in [0]

    var panel = d3.select("#sample-metadata");

    panel.html("");

    Object.entries(meta).forEach(([key, value]) => {
      // One idea is to append header elements (h5 or h6) of the key: value
    })


  })
}


function init() {

  // Fill dropdown with IDs
  // Get firstOne id and call buildPage with that id

  d3.json("samples.json").then((data) => {

    var selector = d3.select("#selDataset");

    console.log(data);

    data.names.forEach((ids) => {
      selector
        .append("option")
        .text(ids)
        .property("value", ids)
    })

    firstOne = data.names[0];

    buildPage(firstOne);

  })
}

function optionChanged(selection) {

  buildPage(selection);
}


init()


