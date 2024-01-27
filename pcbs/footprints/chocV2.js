// Kailh Choc V2 PG1353
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2
// Params
//    hotswap: default is false
//      if true, will include holes and pads for Kailh choc hotswap sockets
//    reverse: default is false
//      if true, will flip the footprint such that the pcb can be reversible
//    keycaps: default is false
//      if true, will add choc sized keycap box around the footprint
// 
// note: hotswap and reverse can be used simultaneously

module.exports = {
  params: {
    designator: 'S',
    hotswap: false,
    keycaps: false,
    from: undefined,
    to: undefined
  },
  body: p => {
    const standard = `
      (module PG1353 (layer F.Cu) (tedit 5DD50112)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      ${''/* corner marks */}
      (fp_line (start -7 -6) (end -7 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7 7) (end -6 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -6 -7) (end -7 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7 7) (end -7 6) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 6) (end 7 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 -7) (end 6 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 6 7) (end 7 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 -7) (end 7 -6) (layer Dwgs.User) (width 0.15))      
      
      ${''/* middle shaft */}
      (pad "" np_thru_hole circle (at 0 0) (size 5 5) (drill 5) (layers *.Cu *.Mask))
      `
    const keycap = `
      ${'' /* keycap marks */}
      (fp_line (start -9 -9) (end 9 -9) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 -9) (end 9 9) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 9) (end -9 9) (layer Dwgs.User) (width 0.15))
      (fp_line (start -9 9) (end -9 -9) (layer Dwgs.User) (width 0.15))
      `
    function pins() {
      if(p.hotswap) {
        return `
          ${'' /* holes */}
          (pad "" np_thru_hole circle (at 5 -3.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          (pad "" np_thru_hole circle (at 0 -5.95) (size 3 3) (drill 3) (layers *.Cu *.Mask))
      
          ${'' /* net pads */}
          (pad 1 smd rect (at -3.275 -5.95 ${p.rot}) (size 2.6 2.6) (layers B.Cu B.Paste B.Mask)  ${p.from.str})
          (pad 2 smd rect (at 8 -3.75 ${p.rot}) (size 1.8 2.6) (layers B.Cu B.Paste B.Mask)  ${p.to.str})

          ${'' /* form */}
          (fp_line (start -2.3 -8.3) (end 2.5 -8.3) (layer B.CrtYd) (width 0.05))
          (fp_line (start 2.5 -8.3) (end 2.5 -6.1) (layer B.CrtYd) (width 0.05))
          (fp_line (start 2.5 -6.1) (end 7.3 -6.1) (layer B.CrtYd) (width 0.05))
          (fp_line (start 7.3 -6.1) (end 7.3 -1.45) (layer B.CrtYd) (width 0.05))
          (fp_line (start 7.3 -1.45) (end 2.55 -1.45) (layer B.CrtYd) (width 0.05))
          (fp_line (start 2.55 -1.45) (end 2.55 -3.65) (layer B.CrtYd) (width 0.05))
          (fp_line (start 2.55 -3.65) (end -2.3 -3.65) (layer B.CrtYd) (width 0.05))
          (fp_line (start -2.3 -3.65) (end -2.3 -8.3) (layer B.CrtYd) (width 0.05))
        `
      } else {
          return `
            ${''/* pins */}
            (pad 1 thru_hole circle (at 5 -3.8) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.from.str})
            (pad 2 thru_hole circle (at 0 -5.9) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.to.str})
          `
      }
    }

    return `
      ${standard}
      ${p.keycaps ? keycap : ''}
      ${pins()}
      )
      `
  }
}