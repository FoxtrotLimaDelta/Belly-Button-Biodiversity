function createPage(subject){

    d3.json("samples.json").then((data) => {
  
      console.log(subject);
      console.log(data);
    
      // Filter data.samples based on subject
  
      filteredData = data.samples.filter(sample => sample.id == subject);
  
      console.log(filteredData)
           
      var filteredSamples = filteredData[0];
      console.log(filteredSamples)
      
      otu_ids = filteredSamples.otu_ids;
      otu_labels = filteredSamples.otu_labels;
      sample_values = filteredSamples.sample_values;
  
      otu_ids_labels = otu_ids.map(i => 'OTU'+ i)
  
      chart_values = sample_values.slice(0,11);
      chart_ids = otu_ids_labels.slice(0,11);
      chart_labels = otu_labels.slice(0,11);  
      console.log(chart_values)
      console.log(chart_ids)

      var barData = [{
       
        x: chart_values,
        y: chart_ids,
        //text:chart_labels,
        type: 'bar',
        orientation: 'h'
      }];
      
      var layout = {title:"Top Ten Samples"}
  
      Plotly.newPlot('bar', barData, layout);
  
  var bubbleData = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode:"markers",
      marker:{size:sample_values, color:otu_ids, colorscale:"Earth"}
  
  }]
  var bubbleLayout = {title:"Sample Values"}
  
  Plotly.newPlot('bubble', bubbleData, bubbleLayout);
  
      var panel = d3.select("#sample-metadata");
  
      panel.html("");
  
      var filteredMeta = data.metadata.filter(sample => sample.id == subject);
  
      console.log(filteredData)
     
      var meta = filteredMeta[0]
  
      Object.entries(meta).forEach(([key, value]) => {
       // One idea is to append header elements (h5 or h6) of the key: value
        panel.append("h5").text(`${key}: ${value}`);
      })
    })
  }
  
  function init() {
  

    d3.json("samples.json").then((data) => {
  
      var selector = d3.select("#selDataset");
  
      //console.log(data);
  
      data.names.forEach((ids) => {
        selector
          .append("option")
          .text(ids)
          .property("value", ids)
      })
  
      firstOne = data.names[0];
  
      createPage(firstOne);
  
    })
  }
  
   function optionChanged(selection) {
  
    createPage(selection);
  }
  
  init()
  