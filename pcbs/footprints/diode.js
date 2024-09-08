// smd diode SOD123
// Generates set of 3 diodes in parallel
// Nets
//    from: 
//    to: 


module.exports = {
  params: {
    designator: 'D',
    from: undefined,
    to: undefined
  },
  body: p => {
    return `
      ${'' /*  */}
      (module SmdDiode (layer B.Cu)
        ${p.at /* parametric position */}

        ${''/* diode symbols */}
        (fp_line (start +1.65 0.9) (end -2.45 0.9) (layer B.SilkS) (width 0.1))
        (fp_line (start -2.45 0.9) (end -2.45 -0.9) (layer B.SilkS) (width 0.1))
        (fp_line (start -2.45 -0.9) (end +1.65 -0.9) (layer B.SilkS) (width 0.1))
    
        ${''/* SMD pads on back side */}
        (pad 1 smd rect (at 1.65 0 ${p.rot}) (size 1.2 1.2) (layers B.Cu B.Paste B.Mask) ${p.from.str})
        (pad 2 smd rect (at -1.65 0 ${p.rot}) (size 1.2 1.2) (layers B.Cu B.Paste B.Mask) ${p.to.str})
      
        (fp_line (start 2.45 -0.9) (end 2.45 0.9) (layer B.CrtYd) (width 0.05))
        (fp_line (start 2.45 0.9) (end -2.45 0.9) (layer B.CrtYd) (width 0.05))
        (fp_line (start -2.45 0.9) (end -2.45 -0.9) (layer B.CrtYd) (width 0.05))
        (fp_line (start -2.45 -0.9) (end 2.45 -0.9) (layer B.CrtYd) (width 0.05))
      )
    `
  }
}