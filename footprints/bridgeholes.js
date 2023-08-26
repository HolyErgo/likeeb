// Holes drills for bridge 1mm x 10mm with 1mm holes

module.exports = {
  params: {
      class: 'HOLE',
  },
  body: p => `
  (module "Bridge holes 6 x 1mm" (version 20210722) (generator pcbnew) (layer "F.Cu")
    (tedit 56DDB9C7)
    ${p.at /* parametric position */} 
  
    (fp_text reference "${p.ref}" (at 0 -3.2) (layer "F.SilkS") ${p.ref_hide} 
      (effects (font (size 1 1) (thickness 0.15)))
    )

    (pad "" np_thru_hole circle (at -3.75 0) (size 1 1) (drill 1) (layers *.Cu *.Mask))
    (pad "" np_thru_hole circle (at -2.25 0) (size 1 1) (drill 1) (layers *.Cu *.Mask))
    (pad "" np_thru_hole circle (at -0.75 0) (size 1 1) (drill 1) (layers *.Cu *.Mask))
    (pad "" np_thru_hole circle (at 0.75 0) (size 1 1) (drill 1) (layers *.Cu *.Mask))
    (pad "" np_thru_hole circle (at 2.25 0) (size 1 1) (drill 1) (layers *.Cu *.Mask))
    (pad "" np_thru_hole circle (at 3.75 0) (size 1 1) (drill 1) (layers *.Cu *.Mask))
  )`
}