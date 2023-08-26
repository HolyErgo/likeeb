// Draws route for 1 column with 3 rows. 
// By default use coordinates of left pad of Gateron low profile hotswap socket.

module.exports = {
  params: {
    side: 'B',
    net: undefined,
    stagger: 19,
    pad: [-6.3, -5.75],
    route_offset: 1.5
  },
  body: p => `
    ${'' /* route to top row */}
    (segment (start ${p.xy(p.pad[0], p.pad[1])}) (end ${p.xy(p.pad[0]+p.route_offset, p.pad[1]+p.route_offset)}) (width 0.25) (layer ${p.side}.Cu) (net ${p.net.index}))
    (segment (start ${p.xy(p.pad[0]+p.route_offset, p.pad[1]+p.route_offset)}) (end ${p.xy(p.pad[0]+p.route_offset, p.pad[1]+p.stagger-p.route_offset)}) (width 0.25) (layer ${p.side}.Cu) (net ${p.net.index}))
    (segment (start ${p.xy(p.pad[0]+p.route_offset, p.pad[1]+p.stagger-p.route_offset)}) (end ${p.xy(p.pad[0], p.pad[1]+p.stagger)}) (width 0.25) (layer ${p.side}.Cu) (net ${p.net.index}))

    ${'' /* route to bottom row */}
    (segment (start ${p.xy(p.pad[0], p.pad[1])}) (end ${p.xy(p.pad[0]+p.route_offset, p.pad[1]-p.route_offset)}) (width 0.25) (layer ${p.side}.Cu) (net ${p.net.index}))
    (segment (start ${p.xy(p.pad[0]+p.route_offset, p.pad[1]-p.route_offset)}) (end ${p.xy(p.pad[0]+p.route_offset, p.pad[1]-p.stagger+p.route_offset)}) (width 0.25) (layer ${p.side}.Cu) (net ${p.net.index}))
    (segment (start ${p.xy(p.pad[0]+p.route_offset, p.pad[1]-p.stagger+p.route_offset)}) (end ${p.xy(p.pad[0], p.pad[1]-p.stagger)}) (width 0.25) (layer ${p.side}.Cu) (net ${p.net.index}))
  `
}