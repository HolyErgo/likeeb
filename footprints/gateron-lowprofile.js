// Gateron low profile switch with pads for smd diode SOD123
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2
// Params
//    hotswap: default is false
//      if true, will include holes and pads for Gateron low profile hotswap sockets (not compatible with MX and Kailh)
//    keycaps: default is false
//      if true, will add choc sized keycap box around the footprint
//    diode: default is true
//      if true, will include smd diode pads and route from pin 2 to diode's pin 'from', diode's net 'to' will be set to switch's net 'to'
//    diode_shift: default [0, -7]
//      diode placement relative to switch center (diode footprint size is 2x4.9mm)
//

module.exports = {
  params: {
    designator: 'S',
    hotswap: true,
    keycaps: false,
    from: undefined,
    to: undefined,
    diode: true,
    diode_shift: [7.5, 0],
    diode_via: true
  },
  body: p => {
    const standard = `
      (module GateronLowProfileSwitch (layer F.Cu) (tedit 5DD4F656)
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
        (pad "" np_thru_hole circle (at 0 0) (size 5.1 5.1) (drill 5.1) (layers *.Cu *.Mask))
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
          (pad "" np_thru_hole circle (at -2.6 -5.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          (pad "" np_thru_hole circle (at 4.4 -4.7) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          
          ${'' /* net pads */}
          (pad 1 smd rect (at -6.3 -5.75 ${p.rot}) (size 2.5 2.55) (layers B.Cu B.Paste B.Mask) ${p.from.str})
          (pad 2 smd rect (at 7.85 -4.7 ${p.rot}) (size 2.1 2.55) (layers B.Cu B.Paste B.Mask) ${p.diode ? p.local_net('s2d').str : p.to.str})
        `
      } else {
          return `
            ${''/* pins */}
            (pad 1 thru_hole circle (at 2.6 -5.75) (size 2.286 2.286) (drill 1.4986) (layers *.Cu *.Mask) ${p.from.str})
            (pad 2 thru_hole circle (at -4.4 -4.7) (size 2.286 2.286) (drill 1.4986) (layers *.Cu *.Mask) ${p.diode ? p.local_net('s2d').str : p.to.str})
          `
      }
    }

    function diode() {
      if(!p.diode) {
        return ''
      }

      const diode_to_via = `(via (at ${p.xy(p.diode_shift[0], p.diode_shift[1]+1.65)}) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net ${p.to.index}))`

      return `
        ${'' /*  */}
        (module SmdDiode (layer B.Cu) (tedit 5B24D78E)
          ${p.at /* parametric position */}

          ${''/* diode symbols */}
          (fp_line (start ${p.diode_shift[0]+1} ${p.diode_shift[1]-1.65}) (end ${p.diode_shift[0]+1} ${p.diode_shift[1]+2.45}) (layer B.SilkS) (width 0.1))
          (fp_line (start ${p.diode_shift[0]+1} ${p.diode_shift[1]+2.45}) (end ${p.diode_shift[0]-1} ${p.diode_shift[1]+2.45}) (layer B.SilkS) (width 0.1))
          (fp_line (start ${p.diode_shift[0]-1} ${p.diode_shift[1]+2.45}) (end ${p.diode_shift[0]-1} ${p.diode_shift[1]-1.65}) (layer B.SilkS) (width 0.1))
      
          ${''/* SMD pads on back side */}
          (pad 1 smd rect (at ${p.diode_shift[0]} ${p.diode_shift[1]-1.65} ${p.rot}) (size 1.2 1.2) (layers B.Cu B.Paste B.Mask) ${p.local_net('s2d').str})
          (pad 2 smd rect (at ${p.diode_shift[0]} ${p.diode_shift[1]+1.65} ${p.rot}) (size 1.2 1.2) (layers B.Cu B.Paste B.Mask) ${p.to.str})
        
          (fp_line (start ${p.diode_shift[0]-1} ${p.diode_shift[1]-2.45}) (end ${p.diode_shift[0]+1} ${p.diode_shift[1]-2.45}) (layer B.CrtYd) (width 0.05))
          (fp_line (start ${p.diode_shift[0]+1} ${p.diode_shift[1]-2.45}) (end ${p.diode_shift[0]+1} ${p.diode_shift[1]+2.45}) (layer B.CrtYd) (width 0.05))
          (fp_line (start ${p.diode_shift[0]+1} ${p.diode_shift[1]+2.45}) (end ${p.diode_shift[0]-1} ${p.diode_shift[1]+2.45}) (layer B.CrtYd) (width 0.05))
          (fp_line (start ${p.diode_shift[0]-1} ${p.diode_shift[1]+2.45}) (end ${p.diode_shift[0]-1} ${p.diode_shift[1]-2.45}) (layer B.CrtYd) (width 0.05))
        )

        ${p.diode_via ? diode_to_via : ''}
        

        ${''/* SMD pads on back side */}
        (segment (start ${p.xy(7.85, -4.7)}) (end ${p.xy(p.diode_shift[0], p.diode_shift[1]-1.65)}) (width 0.25) (layer B.Cu) (net ${p.local_net('s2d').index}))

      `
    }

    return `
      ${standard}
      ${p.keycaps ? keycap : ''}
      ${pins()}
      )
      ${diode()}
      `
  }
}