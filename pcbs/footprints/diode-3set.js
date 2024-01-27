// Set of 3 smd diodes SOD123
// Generates set of 3 diodes in parallel
// Nets
//    from1: 
//    from2: 
//    from3: 
//    to: if set will be used for whole group
//    to1: 
//    to2: 
//    to3: 
// Params
//    pitch: default is 2.5


module.exports = {
  params: {
    designator: 'D',
    from1: {type: 'net', value: undefined},
    from2: {type: 'net', value: undefined},
    from3: {type: 'net', value: undefined},
    to: {type: 'net', value: ''},
    to1: {type: 'net', value: ''},
    to2: {type: 'net', value: ''},
    to3: {type: 'net', value: ''},
    pitch: 2.5,
    via: false
  },
  body: p => {
    const count = 3;
    const from = [p.from1, p.from2, p.from3];
    const to = [p.to.name !== '' ? p.to : p.to1, p.to.name !== '' ? p.to : p.to2, p.to.name !== '' ? p.to : p.to3];

    let diodes = '';

    for (var i = 0; i < count; i++) {
      diodes = diodes + diode(
        from[i],
        to[i],
        i * p.pitch - (count - 1) * p.pitch / 2
      );
    }

    function diode(from, to, x) {

      const diode_to_via = `(via (at ${p.xy(x, 1.65)}) (size 0.6) (drill 0.3) (layers "F.Cu" "B.Cu") (net ${to.index}))`

      return `
        ${'' /*  */}
        (module SmdDiode (layer B.Cu)
          ${p.at /* parametric position */}

          ${''/* diode symbol */}
          (fp_line (start ${x+0.9} -1.65) (end ${x+0.9} +2.45) (layer B.SilkS) (width 0.1))
          (fp_line (start ${x+0.9} +2.45) (end ${x-0.9} +2.45) (layer B.SilkS) (width 0.1))
          (fp_line (start ${x-0.9} +2.45) (end ${x-0.9} -1.65) (layer B.SilkS) (width 0.1))
      
          ${''/* SMD pads on back side */}
          (pad 1 smd rect (at ${x} -1.65 ${p.rot}) (size 1.2 1.2) (layers B.Cu B.Paste B.Mask) ${from.str})
          (pad 2 smd rect (at ${x} +1.65 ${p.rot}) (size 1.2 1.2) (layers B.Cu B.Paste B.Mask) ${to.str})
        
          (fp_line (start ${x-0.85} -2.45) (end ${x+0.85} -2.45) (layer B.CrtYd) (width 0.05))
          (fp_line (start ${x+0.85} -2.45) (end ${x+0.85} +2.45) (layer B.CrtYd) (width 0.05))
          (fp_line (start ${x+0.85} +2.45) (end ${x-0.85} +2.45) (layer B.CrtYd) (width 0.05))
          (fp_line (start ${x-0.85} +2.45) (end ${x-0.85} -2.45) (layer B.CrtYd) (width 0.05))
        )


        ${p.via ? diode_to_via : ''}
      `
    }

    return diodes;
  }
}