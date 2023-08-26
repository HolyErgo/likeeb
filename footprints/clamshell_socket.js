// HKW Clamshell Socket x8 0.5mm pitch

module.exports = {
  params: {
    side:  'F',
    P1: {type: 'net', value: 'P1'},
    P2: {type: 'net', value: 'P2'},
    P3: {type: 'net', value: 'P3'},
    P4: {type: 'net', value: 'P4'},
    P5: {type: 'net', value: 'P5'},
    P6: {type: 'net', value: 'P6'},
    P7: {type: 'net', value: 'P7'},
    P8: {type: 'net', value: 'P8'},
  },
  body:   p => `
    (module "HKWClamshellSocket" (layer "${p.side}.Cu") (tedit 613ABEDD)
      ${ p.at /* parametric position */ }

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer ${p.side}.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      ${ ``/* Pads */ }
      (pad "1" smd rect (at -1.75 3 ${p.rot}) (size 0.3 1.3) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P1.str})
      (pad "2" smd rect (at -1.25 3 ${p.rot}) (size 0.3 1.3) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P2.str})
      (pad "3" smd rect (at -0.75 3 ${p.rot}) (size 0.3 1.3) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P3.str})
      (pad "4" smd rect (at -0.25 3 ${p.rot}) (size 0.3 1.3) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P4.str})
      (pad "5" smd rect (at 0.25 3 ${p.rot}) (size 0.3 1.3) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P5.str})
      (pad "6" smd rect (at 0.75 3 ${p.rot}) (size 0.3 1.3) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P6.str})
      (pad "7" smd rect (at 1.25 3 ${p.rot}) (size 0.3 1.3) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P7.str})
      (pad "8" smd rect (at 1.75 3 ${p.rot}) (size 0.3 1.3) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P8.str})

      ${ ``/* Side Mounts */ }
      (pad "" smd rect (at -3.4 0 ${p.rot}) (size 1.8 2.2) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask))
      (pad "" smd rect (at 3.4 0 ${p.rot}) (size 1.8 2.2) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask))

      ${ ``/* Silkscreen */ }
      (fp_line (start -4.3 2.45) (end -3.3 2.45) (layer "${p.side}.SilkS") (width 0.1))
      (fp_line (start -4.3 2.45) (end -4.3 1.45) (layer "${p.side}.SilkS") (width 0.1))
      (fp_line (start -4.3 -3.35) (end -3.3 -3.35) (layer "${p.side}.SilkS") (width 0.1))
      (fp_line (start -4.3 -3.35) (end -4.3 -2.35) (layer "${p.side}.SilkS") (width 0.1))
      (fp_line (start 4.3 2.45) (end 3.3 2.45) (layer "${p.side}.SilkS") (width 0.1))
      (fp_line (start 4.3 2.45) (end 4.3 1.45) (layer "${p.side}.SilkS") (width 0.1))
      (fp_line (start 4.3 -3.35) (end 3.3 -3.35) (layer "${p.side}.SilkS") (width 0.1))
      (fp_line (start 4.3 -3.35) (end 4.3 -2.35) (layer "${p.side}.SilkS") (width 0.1))
    )
  `
}