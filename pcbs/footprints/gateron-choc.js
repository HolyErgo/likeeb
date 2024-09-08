// Gateron KS-33/KS-27 + Kailh Choc V2 PG1353
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2
// Params
//    hotswap: default is false
//      if true, will include holes and pads for Kailh choc hotswap sockets
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
    to: undefined,
    width: 20,
    diode: true,
    diode_position: {type: 'array', value: [6, -1.2, 0]}
  },
  body: p => {
    const standard = `
      (module KS33PG1353 (layer F.Cu) (tedit 5DD50112)
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
    const gat_inner_pad = pad_x_dimension(-5.02, 2.5, -1);
    const gat_outer_pad = pad_x_dimension(6.82, 2.5, 1);
    const choc_inner_pad = pad_x_dimension(2.3, 2.5, 1);
    const choc_outer_pad = pad_x_dimension(-7.3, 2.5, -1);

    function pins() {
      if(p.hotswap) {
        return `
          ${'' /* gateron holes */}
          (pad "" np_thru_hole circle (at -2.6 -5.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          (pad "" np_thru_hole circle (at 4.4 -4.7) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          
          ${'' /* gateron net pads */}
          (pad 1 smd rect (at ${gat_inner_pad.x} -5.75 ${p.rot}) (size ${gat_inner_pad.width} 2.55) (layers B.Cu B.Paste B.Mask) ${p.from.str})
          (pad 2 smd rect (at ${gat_outer_pad.x} -4.7 ${p.rot}) (size ${gat_outer_pad.width} 2.55) (layers B.Cu B.Paste B.Mask) ${p.diode ? p.local_net('s2d').str : p.to.str})

          ${'' /* choc holes */}
          (pad "" np_thru_hole circle (at -5 3.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          (pad "" np_thru_hole circle (at 0 5.95) (size 3 3) (drill 3) (layers *.Cu *.Mask))
      
          ${'' /* choc net pads */}
          (pad 1 smd rect (at ${choc_inner_pad.x} 5.95 ${p.rot}) (size ${choc_inner_pad.width} 2.55) (layers B.Cu B.Paste B.Mask)  ${p.diode ? p.local_net('s2d').str : p.to.str})
          (pad 2 smd rect (at ${choc_outer_pad.x} 3.75 ${p.rot}) (size ${choc_outer_pad.width} 2.55) (layers B.Cu B.Paste B.Mask)  ${p.from.str})

          ${'' /* gateron form */}
          (fp_line (start -5.02 -3.58) (end -5.02 -7.92) (layer B.CrtYd) (width 0.05))
          (fp_line (start -5.02 -7.92) (end 1.2 -7.92) (layer B.CrtYd) (width 0.05))
          (fp_line (start 1.2 -7.92) (end 3 -6.78) (layer B.CrtYd) (width 0.05))
          (fp_line (start 3 -6.78) (end 6.82 -6.78) (layer B.CrtYd) (width 0.05))
          (fp_line (start 6.82 -6.78) (end 6.82 -2.53) (layer B.CrtYd) (width 0.05))
          (fp_line (start 6.82 -2.53) (end 2.8 -2.53) (layer B.CrtYd) (width 0.05))
          (fp_line (start 2.8 -2.53) (end 1 -3.58) (layer B.CrtYd) (width 0.05))
          (fp_line (start 1 -3.58) (end -5.02 -3.58) (layer B.CrtYd) (width 0.05))

          ${'' /* choc form */}
          (fp_line (start 2.3 8.3) (end -2.5 8.3) (layer B.CrtYd) (width 0.05))
          (fp_line (start -2.5 8.3) (end -2.5 6.1) (layer B.CrtYd) (width 0.05))
          (fp_line (start -2.5 6.1) (end -7.3 6.1) (layer B.CrtYd) (width 0.05))
          (fp_line (start -7.3 6.1) (end -7.3 1.45) (layer B.CrtYd) (width 0.05))
          (fp_line (start -7.3 1.45) (end -2.55 1.45) (layer B.CrtYd) (width 0.05))
          (fp_line (start -2.55 1.45) (end -2.55 3.65) (layer B.CrtYd) (width 0.05))
          (fp_line (start -2.55 3.65) (end 2.3 3.65) (layer B.CrtYd) (width 0.05))
          (fp_line (start 2.3 3.65) (end 2.3 8.3) (layer B.CrtYd) (width 0.05))
          
        `
      } else {
          return `
            ${''/* gateron pins */}
            (pad 1 thru_hole circle (at -2.6 -5.75) (size 2.286 2.286) (drill 1.4986) (layers *.Cu *.Mask) ${p.from.str})
            (pad 2 thru_hole circle (at 4.4 -4.7) (size 2.286 2.286) (drill 1.4986) (layers *.Cu *.Mask) ${p.diode ? p.local_net('s2d').str : p.to.str})

            ${''/* choc pins */}
            (pad 2 thru_hole circle (at 0 5.9) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.diode ? p.local_net('s2d').str : p.to.str})
            (pad 1 thru_hole circle (at -5 3.8) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.from.str})
          `
      }
    }

    function pad_x_dimension(socket_border, pad_width, direction) {
      pad_outer_border = socket_border + direction * pad_width;

      if (Math.abs(pad_outer_border) > p.width / 2) {
        pad_outer_border = direction * (p.width / 2 - 0.08);
      }

      return {
        x: (socket_border + pad_outer_border) / 2,
        width: Math.abs(pad_outer_border) - Math.abs(socket_border)
      }
    }

    const pin_diode = `
      (segment (start ${p.xy(-2.6, -5.75)}) (end ${p.xy(-5, 3.8)}) (width 0.25) (layer B.Cu) (net ${p.from.index}))
      (segment (start ${p.xy(4.4, -4.7)}) (end ${p.xy(p.diode_position[0], p.diode_position[1]-1.65)}) (width 0.25) (layer B.Cu) (net ${p.local_net('s2d').index}))
      (segment (start ${p.xy(p.diode_position[0], p.diode_position[1]-1.65)}) (end ${p.xy(0, 5.9)}) (width 0.25) (layer B.Cu) (net ${p.local_net('s2d').index}))
      ${vertical_diode(p.diode_position[0], p.diode_position[1])}
    `

    const hotswap_diode = `
      (segment (start ${p.xy(gat_inner_pad.x, -5.75)}) (end ${p.xy(choc_outer_pad.x, 3.75)}) (width 0.25) (layer B.Cu) (net ${p.from.index}))
      (segment (start ${p.xy(gat_outer_pad.x, -4.7)}) (end ${p.xy(p.diode_position[0]+1.65, p.diode_position[1])}) (width 0.25) (layer B.Cu) (net ${p.local_net('s2d').index}))
      (segment (start ${p.xy(p.diode_position[0]+1.65, p.diode_position[1])}) (end ${p.xy(choc_inner_pad.x, 5.95)}) (width 0.25) (layer B.Cu) (net ${p.local_net('s2d').index}))
      ${horizontal_diode(p.diode_position[0], p.diode_position[1])}
    `

    function vertical_diode(x, y) {
      return `
        ${'' /*  */}
        (module SmdDiode (layer B.Cu) (tedit 5B24D78E)
          ${p.at /* parametric position */}

          ${''/* diode symbols */}
          (fp_line (start ${x+0.9} ${y-1.65}) (end ${x+0.9} ${y+2.45}) (layer B.SilkS) (width 0.1))
          (fp_line (start ${x+0.9} ${y+2.45}) (end ${x-0.9} ${y+2.45}) (layer B.SilkS) (width 0.1))
          (fp_line (start ${x-0.9} ${y+2.45}) (end ${x-0.9} ${y-1.65}) (layer B.SilkS) (width 0.1))
      
          ${''/* SMD pads on back side */}
          (pad 1 smd rect (at ${x} ${y-1.65} ${p.rot}) (size 1.2 1.2) (layers B.Cu B.Paste B.Mask) ${p.local_net('s2d').str})
          (pad 2 smd rect (at ${x} ${y+1.65} ${p.rot}) (size 1.2 1.2) (layers B.Cu B.Paste B.Mask) ${p.to.str})
        
          (fp_line (start ${x-0.9} ${y-2.45}) (end ${x+0.9} ${y-2.45}) (layer B.CrtYd) (width 0.05))
          (fp_line (start ${x+0.9} ${y-2.45}) (end ${x+0.9} ${y+2.45}) (layer B.CrtYd) (width 0.05))
          (fp_line (start ${x+0.9} ${y+2.45}) (end ${x-0.9} ${y+2.45}) (layer B.CrtYd) (width 0.05))
          (fp_line (start ${x-0.9} ${y+2.45}) (end ${x-0.9} ${y-2.45}) (layer B.CrtYd) (width 0.05))
        )
      `
    }

    function horizontal_diode(x, y) {
      return `
        ${'' /*  */}
        (module SmdDiode (layer B.Cu) (tedit 5B24D78E)
          ${p.at /* parametric position */}

          ${''/* diode symbols */}
          (fp_line (start ${x+1.65} ${y+0.9}) (end ${x-2.45} ${y+0.9}) (layer B.SilkS) (width 0.1))
          (fp_line (start ${x-2.45} ${y+0.9}) (end ${x-2.45} ${y-0.9}) (layer B.SilkS) (width 0.1))
          (fp_line (start ${x-2.45} ${y-0.9}) (end ${x+1.65} ${y-0.9}) (layer B.SilkS) (width 0.1))
      
          ${''/* SMD pads on back side */}
          (pad 1 smd rect (at ${x+1.65} ${y} ${p.rot}) (size 1.2 1.2) (layers B.Cu B.Paste B.Mask) ${p.local_net('s2d').str})
          (pad 2 smd rect (at ${x-1.65} ${y} ${p.rot}) (size 1.2 1.2) (layers B.Cu B.Paste B.Mask) ${p.to.str})
        
          (fp_line (start ${x+2.45} ${y-0.9}) (end ${x+2.45} ${y+0.9}) (layer B.CrtYd) (width 0.05))
          (fp_line (start ${x+2.45} ${y+0.9}) (end ${x-2.45} ${y+0.9}) (layer B.CrtYd) (width 0.05))
          (fp_line (start ${x-2.45} ${y+0.9}) (end ${x-2.45} ${y-0.9}) (layer B.CrtYd) (width 0.05))
          (fp_line (start ${x-2.45} ${y-0.9}) (end ${x+2.45} ${y-0.9}) (layer B.CrtYd) (width 0.05))
        )
      `
    }

    return `
      ${standard}
      ${p.keycaps ? keycap : ''}
      ${pins()}
      )
      ${p.diode ? (p.hotswap ? hotswap_diode : pin_diode) : ''}
      `
  }
}