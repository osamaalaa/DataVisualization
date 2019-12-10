

// d3.json('planets.json').then(data => {
//
//   // join the data to circs
//   const circs = svg.selectAll('circle')
//     .data(data);
//
//   // add attrs to circs already in the DOM
//   circs.attr('cy', 200)
//     .attr('cx', d => d.distance)
//     .attr('r', d => d.radius)
//     .attr('fill', d => d.fill);
//
//   // append the enter selection to the DOM
//   circs.enter()
//     .append('circle')
//       .attr('cy', 200)
//       .attr('cx', d => d.distance)
//       .attr('r', d => d.radius)
//       .attr('fill', d => d.fill);
//
// })

const svg = d3.select('.canvas')
  .append('svg')
    .attr('width' , 600)
    .attr('height' , 600);

d3.json('planets.json').then(data => {
  
  const min = d3.min(data, d => d.orders);  // bygep el min value

  const max = d3.max(data , d => d.orders);  // bygep el max value

  const extent = d3.extent(data , d => d.orders);  // bygep el mix and el max fe array

  const y = d3.scaleLinear()
  .domain([0,max])
  .range([0,500]);

  const x = d3.scaleBand()
  .domain(data.map(item => item.name))
  .range([0,500])
  .paddingInner(0.5)
  .paddingOuter(0.5);

  // joining data to rect
  const rects = svg.selectAll('rect')
    .data(data)
  rects.attr('width', x.bandwidth)
  .attr('height', d => y(d.orders))
  .attr('fill' ,'orange')
  .attr('x' , d =>x(d.name));


  rects.enter()
  .append('rect')
  .attr('width', x.bandwidth)
  .attr('height', d =>y(d.orders))
  .attr('fill' ,'orange')
  .attr('x' , d =>x(d.name));




})
