// Seeduino XIAO with vias for underside pads

module.exports = {
  params: {
    class: 'MCU',
    side:  'F',
    P0:     {type: 'net', value: 'P0'},
    P1:     {type: 'net', value: 'P1'},
    P2:     {type: 'net', value: 'P2'},
    P3:     {type: 'net', value: 'P3'},
    P4:     {type: 'net', value: 'P4'},
    P5:     {type: 'net', value: 'P5'},
    P6:     {type: 'net', value: 'P6'},
    P7:     {type: 'net', value: 'P7'},
    P8:     {type: 'net', value: 'P8'},
    P9:     {type: 'net', value: 'P9'},
    P10:    {type: 'net', value: 'P10'},
    RAW3V3: {type: 'net', value: 'RAW3V3'},
    GND:    {type: 'net', value: 'GND'},
    RAW5V:  {type: 'net', value: 'RAW5V'},
    BATP:    {type: 'net', value: 'BATP'},
    BATN:    {type: 'net', value: 'BATN'},
    RST:    {type: 'net', value: 'RST'},
    CLK:    {type: 'net', value: 'CLK'},
    DIO:    {type: 'net', value: 'DIO'}
  },
  body:   p => `
    (module "Seeeduino XIAO nRF52840" (layer "${p.side}.Cu") (tedit 613ABEDD)
      ${ p.at /* parametric position */ }

    
      ${''/* component outline */}
      (fp_line (start -8.89 10.48) (end 8.89 10.48) (layer ${p.side}.SilkS) (width 0.15))
      (fp_line (start 8.89 10.48) (end 8.89 9) (layer ${p.side}.SilkS) (width 0.15))
      (fp_line (start -8.89 10.48) (end -8.89 9) (layer ${p.side}.SilkS) (width 0.15))

      (fp_line (start 8.89 -10.48) (end -8.89 -10.48) (layer ${p.side}.SilkS) (width 0.15))
      (fp_line (start -8.89 -10.48) (end -8.89 -9) (layer ${p.side}.SilkS) (width 0.15))
      (fp_line (start 8.89 -10.48) (end 8.89 -9) (layer ${p.side}.SilkS) (width 0.15))

      ${''/* illustration of the (possible) USB port overhang */}
      (fp_line (start -4.501 -4.655) (end -4.501 -12) (layer Dwgs.User) (width 0.15))
      (fp_line (start -4.501 -12) (end 4.501 -12) (layer Dwgs.User) (width 0.15))
      (fp_line (start 4.501 -12) (end 4.501 -4.655) (layer Dwgs.User) (width 0.15))
      (fp_line (start 4.501 -4.655) (end -4.501 -4.655) (layer Dwgs.User) (width 0.15))

      ${ ``/* Pads */ }
      (pad "1" smd oval (at -8.255 -7.62 ${p.rot}) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.P0.str})
      (pad "1" thru_hole circle (at -7.62 -7.62) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${p.P0.str})
      (pad "2" smd oval (at -8.255 -5.08 ${p.rot}) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.P1.str})
      (pad "2" thru_hole circle (at -7.62 -5.08) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${p.P1.str})
      (pad "3" smd oval (at -8.255 -2.54 ${p.rot}) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.P2.str})
      (pad "3" thru_hole circle (at -7.62 -2.54) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${p.P2.str})
      (pad "4" smd oval (at -8.255 0 ${p.rot}) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.P3.str})
      (pad "4" thru_hole circle (at -7.62 0) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${p.P3.str})
      (pad "5" smd oval (at -8.255 2.54 ${p.rot}) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.P4.str})
      (pad "5" thru_hole circle (at -7.62 2.54) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${p.P4.str})
      (pad "6" smd oval (at -8.255 5.08 ${p.rot}) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.P5.str})
      (pad "6" thru_hole circle (at -7.62 5.08) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${p.P5.str})
      (pad "7" smd oval (at -8.255 7.62 ${p.rot}) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.P6.str})
      (pad "7" thru_hole circle (at -7.62 7.62) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${p.P6.str})

      (pad "8" smd oval (at 8.255 7.62 ${p.rot}) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.P7.str})
      (pad "8" thru_hole circle (at 7.62 7.62) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${p.P7.str})
      (pad "9" smd oval (at 8.255 5.08 ${p.rot}) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.P8.str})
      (pad "9" thru_hole circle (at 7.62 5.08) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${p.P8.str})
      (pad "10" smd oval (at 8.255 2.54 ${p.rot}) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.P9.str})
      (pad "10" thru_hole circle (at 7.62 2.54) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${p.P9.str})
      (pad "11" smd oval (at 8.255 0 ${p.rot}) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.P10.str})
      (pad "11" thru_hole circle (at 7.62 0) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${p.P10.str})
      (pad "12" smd oval (at 8.255 -2.54 ${p.rot}) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.RAW3V3.str})
      (pad "12" thru_hole circle (at 7.62 -2.54) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${p.RAW3V3.str})
      (pad "13" smd oval (at 8.255 -5.08 ${p.rot}) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.GND.str})
      (pad "13" thru_hole circle (at 7.62 -5.08) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${p.GND.str})
      (pad "14" smd oval (at 8.255 -7.62 ${p.rot}) (size 2.75 1.7) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.RAW5V.str})
      (pad "14" thru_hole circle (at 7.62 -7.62) (size 1.53 1.53) (drill 1) (layers *.Cu *.Mask) ${p.RAW5V.str})

      (pad "" thru_hole circle (at -1.27 -6.033) (size 1.4 1.4) (drill 1) (layers *.Cu *.Mask) ${p.RST.str})
      (pad "" thru_hole circle (at 1.27 -6.033) (size 1.4 1.4) (drill 1) (layers *.Cu *.Mask) ${p.GND.str})
      ${'' /*
      (pad "" thru_hole circle (at -1.27 -8.573) (size 1.4 1.4) (drill 1) (layers *.Cu *.Mask) ${p.DIO.str})
      (pad "" thru_hole circle (at 1.27 -8.573) (size 1.4 1.4) (drill 1) (layers *.Cu *.Mask) ${p.CLK.str})
      */}
      
      (pad "" smd rect (at -4.445 0.317 ${p.rot}) (size 2.286 1.27) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.BATP.str})
      (pad "" thru_hole circle (at -4.445 0.317) (size 1.4 1.4) (drill 1) (layers *.Cu *.Mask) ${p.BATP.str})
      (pad "" smd rect (at -4.445 2.222 ${p.rot}) (size 2.286 1.27) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.BATN.str})
      (pad "" thru_hole circle (at -4.445 2.222) (size 1.4 1.4) (drill 1) (layers *.Cu *.Mask) ${p.BATN.str})


    )
  `
}