const questions_data = {
  sharedProperties: {
    maxWidth: "960px", //"100%", "90%", "760px", "1024px"
    alignment: "center", //"center", "left"
  },
  question_groups: {
    group1: {
      id: "group1",
      type: "accordian",
      placeholder_id: "ch15group1_placeholder",
      items: [
        {
            title: `acetabul/o`,
            explanation: `acetabulum (hip socket)`,
        },
        {
            title: `ankyl/o`,
            explanation: `stiff`,
        },
        {
            title: `arthr/o`,
            explanation: `joint`,
        },
        {
            title: `articul/o`,
            explanation: `joint`,
        },
        {
            title: `burs/o`,
            explanation: `bursa (sac of fluid near joints)`,
        },
        {
            title: `calc/o`,
            explanation: `calcium`,
        },
        {
            title: `calcane/o`,
            explanation: `calcaneus (heel bone)`,
        },
        {
            title: `calci/o`,
            explanation: `calcium`,
        },
        {
            title: `carp/o`,
            explanation: `wrist bones (carpals)`,
        },
        {
            title: `cervic/o`,
            explanation: `neck; cervix (neck of uterus)`,
        },
        {
            title: `chondr/o`,
            explanation: `cartilage`,
        },
        {
            title: `clavicul/o`,
            explanation: `clavicle (collar bone)`,
        },
        {
            title: `coccyg/o`,
            explanation: `coccyx (tailbone)`,
        },
        {
            title: `cost/o`,
            explanation: `rib`,
        },
        {
            title: `crani/o`,
            explanation: `skull`,
        },
        {
            title: `fasci/o`,
            explanation: `fascia (membrane supporting muscles)`,
        },
        {
            title: `femor/o`,
            explanation: `femur (thigh bone)`,
        },
        {
            title: `fibr/o`,
            explanation: `fiber`,
        },
        {
            title: `fibul/o`,
            explanation: `fibula`,
        },
        {
            title: `humer/o`,
            explanation: `humerus (upper arm bone)`,
        },
        {
            title: `ili/o`,
            explanation: `ilium`,
        },
        {
            title: `ischi/o`,
            explanation: `ischium (part of hip bone)`,
        },
        {
            title: `kyph/o`,
            explanation: `humpback`,
        },
        {
            title: `lamin/o`,
            explanation: `lamina (part of vertebral arch)`,
        },
        {
            title: `leiomy/o`,
            explanation: `smooth (visceral) muscle`,
        },
        {
            title: `ligament/o`,
            explanation: `ligament`,
        },
        {
            title: `lord/o`,
            explanation: `curve; swayback`,
        },
        {
            title: `lumb/o`,
            explanation: `lower back; loin`,
        },
        {
            title: `malleol/o`,
            explanation: `malleolus`,
        },
        {
            title: `mandibul/o`,
            explanation: `mandible (lower jaw bone)`,
        },
        {
            title: `maxill/o`,
            explanation: `maxilla (upper jaw bone)`,
        },
        {
            title: `metacarp/o`,
            explanation: `metacarpals (hand bones)`,
        },
        {
            title: `metatars/o`,
            explanation: `metatarsals (foot bones)`,
        },
        {
            title: `my/o`,
            explanation: `muscle`,
        },
        {
            title: `myel/o`,
            explanation: `spinal cord; bone marrow`,
        },
        {
            title: `myocardi/o`,
            explanation: `myocardium (heart muscle)`,
        },
        {
            title: `myos/o`,
            explanation: `muscle`,
        },
        {
            title: `olecran/o`,
            explanation: `olecranon (elbow)`,
        },
        {
            title: `orth/o`,
            explanation: `straight`,
        },
        {
            title: `oste/o`,
            explanation: `bone`,
        },
        {
            title: `patell/o`,
            explanation: `patella`,
        },
        {
            title: `ped/o`,
            explanation: `child; foot`,
        },
        {
            title: `pelv/i`,
            explanation: `pelvis; hip region`,
        },
        {
            title: `phalang/o`,
            explanation: `phalanges (of fingers and toes)`,
        },
        {
            title: `plant/o`,
            explanation: `sole of the foot`,
        },
        {
            title: `pub/o`,
            explanation: `pubis (anterior part of hip bone)`,
        },
        {
            title: `radi/o`,
            explanation: `x-rays; radioactivity; radius (lateral lower arm bone)`,
        },
        {
            title: `rhabdomy/o`,
            explanation: `striated (skeletal) muscle`,
        },
        {
            title: `rheumat/o`,
            explanation: `watery flow`,
        },
        {
            title: `sacr/o`,
            explanation: `sacrum`,
        },
        {
            title: `sarc/o`,
            explanation: `flesh (connective tissue)`,
        },
        {
            title: `scapul/o`,
            explanation: `scapula; shoulder blade`,
        },
        {
            title: `scoli/o`,
            explanation: `crooked; bent`,
        },
        {
            title: `spondyl/o`,
            explanation: `vertebra (backbone)`,
        },
        {
            title: `stern/o`,
            explanation: `sternum (breastbone)`,
        },
        {
            title: `synov/o`,
            explanation: `synovia; synovial membrane; sheath around a tendon`,
        },
        {
            title: `tars/o`,
            explanation: `tarsus; hindfoot or ankle (7 bones between the foot and the leg)`,
        },
        {
            title: `ten/o`,
            explanation: `tendon`,
        },
        {
            title: `tendin/o`,
            explanation: `tendon`,
        },
        {
            title: `thorac/o`,
            explanation: `chest`,
        },
        {
            title: `tibi/o`,
            explanation: `tibia (shin bone)`,
        },
        {
            title: `uln/o`,
            explanation: `ulna (medial lower arm bone)`,
        },
        
        {
            title: `vertebr/o`,
            explanation: `vertebra (backbone)`,
        },
      ],
      titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
      itemSeperator: "false",
    },
    group2: {
      id: "group2",
      type: "accordian",
      placeholder_id: "ch15group2_placeholder",
      items: [
        {
          title: `-algia`,
          explanation: `pain`,
        },
        {
          title: `-asthenia`,
          explanation: `lack of strength`,
        },
        {
          title: `-blast`,
          explanation: `embryonic; immature cell`,
      },
      {
          title: `-clast`,
          explanation: `to break`,
        },
        {
          title: `-desis`,
          explanation: `bind, tie together`,
        },
        {
          title: `-emia`,
          explanation: `blood condition`,
      },
      {
          title: `-listhesis`,
          explanation: `slipping`,
        },
        {
          title: `-malacia`,
          explanation: `softening`,
        },
        {
          title: `-penia`,
          explanation: `deficiency`,
      },
      {
          title: `-physis`,
          explanation: `to grow`,
        },
        {
          title: `-plasty`,
          explanation: `surgical repair`,
        },
        {
          title: `-porosis`,
          explanation: `condition of pores (spaces)`,
      },
      {
          title: `-stenosis`,
          explanation: `tightening; stricture`,
        },
        
      {
        title: `-tome`,
        explanation: `instrument to cut`,
      },
      
      {
        title: `-trophy`,
        explanation: `nourishment; development (condition of)`,
      },
      
      ],
      titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
      itemSeperator: "false",
    },
    group3: {
      id: "group3",
      type: "accordian", 
      placeholder_id: "ch15group3_placeholder",
      items: [
        {
            title: `a-, an-`,
            explanation: `no; not; without`,
        },
        {
          title: `ab-`,
          explanation: `away from`,
        },
        {
          title: `ad-`,
          explanation: `toward`,
        },
        {
          title: `dia-`,
          explanation: `complete; through`,
        },
        {
          title: `dorsi-`,
          explanation: `back`,
        },
        {
            title: `epi-`,
            explanation: `above; upon; on`,
        },
        {
          title: `exo-`,
          explanation: `out; away from`,
        },
        {
          title: `hyper-`,
          explanation: `above; excessive`,
        },
        {
          title: `infra-`,
          explanation: ``,
        },
        {
          title: `meta-`,
          explanation: `change; beyond`,
        },
        {
            title: `peri-`,
            explanation: `surrounding`,
        },
        {
          title: `poly-`,
          explanation: `many; much; increased`,
        },
        {
          title: `sub-`,
          explanation: `under; below`,
        },
        {
          title: `supra-`,
          explanation: `above, upper`,
        },
        {
          title: `sym-`,
          explanation: `together; with`,
        },
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
    group4: {
      id: "group4",
      type: "accordian",
      placeholder_id: "ch15group4_placeholder",
      items: [
                {
            title: `acetabular`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/acetabular.mp3`,
            explanation: `ah-seh-TAB-u-lar`,
        },
        {
            title: `acetabulum`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/acetabulum.mp3`,
            explanation: `ah-seh-TAB-u-lum`,
        },
        {
            title: `acromion`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/acromion.mp3`,
            explanation: `ak-RO-me-on`,
        },
        {
            title: `articular cartilage`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/articular_cartilage.mp3`,
            explanation: `ar-TIK-u-larKAR-tih-laj`,
        },
        {
            title: `bone`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/bone.mp3`,
            explanation: `bone`,
        },
        {
            title: `bone depression`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/bone_depression.mp3`,
            explanation: `bonede-PREH-shun`,
        },
        {
            title: `bone process`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/bone_process.mp3`,
            explanation: `bonePROS-es`,
        },
        {
            title: `calcaneal`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/calcaneal.mp3`,
            explanation: `kal-KA-ne-al`,
        },
        {
            title: `calcaneus`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/calcaneus.mp3`,
            explanation: `kal-KA-ne-us`,
        },
        {
            title: `calcium`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/calcium.mp3`,
            explanation: `KAL-se-um`,
        },
        {
            title: `cancellous bone`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cancellous_bone.mp3`,
            explanation: `KAN-sel-usbone`,
        },
        {
            title: `carpals`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/carpals.mp3`,
            explanation: `KAR-palz`,
        },
        {
            title: `cartilage`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cartilage.mp3`,
            explanation: `KAR-tih-lij`,
        },
        {
            title: `cervical vertebrae`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cervical_vertebrae.mp3`,
            explanation: `SER-vih-kulVER-teh-bray`,
        },
        {
            title: `chondrocostal`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/chondrocostal.mp3`,
            explanation: `kon-dro-KOS-tal`,
        },
        {
            title: `clavicle`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/clavicle.mp3`,
            explanation: `KLAV-ih-kul`,
        },
        {
            title: `coccyx`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/coccyx.mp3`,
            explanation: `KOK-siks`,
        },
        {
            title: `collagen`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/collagen.mp3`,
            explanation: `KOL-ah-jen`,
        },
        {
            title: `compact bone`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/compact_bone.mp3`,
            explanation: `KOM-paktbone`,
        },
        {
            title: `cranial bones`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cranial_bones.mp3`,
            explanation: `KRA-ne-albones`,
        },
        {
            title: `craniotome`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/craniotome.mp3`,
            explanation: `KRA-ne-o-tohm`,
        },
        {
            title: `craniotomy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/craniotomy.mp3`,
            explanation: `kra-ne-OT-o-me`,
        },
        {
            title: `crepitus`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/crepitus.mp3`,
            explanation: `KREP-ih-tus`,
        },
        {
            title: `decalcification`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/decalcification.mp3`,
            explanation: `de-kal-sif-ih-KA-shun`,
        },
        {
            title: `diaphysis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/diaphysis.mp3`,
            explanation: `di-AF-ih-sis`,
        },
        {
            title: `disc`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/disk(disc).mp3`,
            explanation: `disc`,
        },
        {
            title: `epiphyseal plate`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/epiphyseal_plate.mp3`,
            explanation: `ep-ih-FIZ-e-alplate`,
        },
        {
            title: `epiphysis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/epiphysis.mp3`,
            explanation: `eh-PIF-ih-sis`,
        },
        {
            title: `ethmoid bone`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ethmoid_bone.mp3`,
            explanation: `ETH-moydbone`,
        },
        {
            title: `Ewing sarcoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ewing_sarcoma.mp3`,
            explanation: `U-wingsar-KO-mah`,
        },
        {
            title: `exostosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/exostosis.mp3`,
            explanation: `ek-sos-TO-sis`,
        },
        {
            title: `facial bones`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/facial_bones.mp3`,
            explanation: `FA-shalbones`,
        },
        {
            title: `femoral`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/femoral.mp3`,
            explanation: `FEM-or-al`,
        },
        {
            title: `femur`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/femur.mp3`,
            explanation: `FE-mur`,
        },
        {
            title: `fibula`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/fibula.mp3`,
            explanation: `FIB-u-lah`,
        },
        {
            title: `fibular`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/fibular.mp3`,
            explanation: `FIB-u-lar`,
        },
        {
            title: `fontanelle`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/fontanelle.mp3`,
            explanation: `fon-tan-EL`,
        },
        {
            title: `foramen magnum`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/foramen_magnum.mp3`,
            explanation: `for-A-menMAG-num`,
        },
        {
            title: `fracture`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/fracture.mp3`,
            explanation: `FRAK-shur`,
        },
        {
            title: `frontal bone`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/frontal_bone.mp3`,
            explanation: `FRON-talbone`,
        },
        {
            title: `haversian canals`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/haversian_canals.mp3`,
            explanation: `hah-VER-zhankah-NALZ`,
        },
        {
            title: `humeral`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/humeral.mp3`,
            explanation: `HU-mer-al`,
        },
        {
            title: `humerus`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/humerus.mp3`,
            explanation: `HU-mer-us`,
        },
        {
            title: `hypercalcemia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypercalcemia.mp3`,
            explanation: `hi-per-kal-SE-me-ah`,
        },
        {
            title: `iliac`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/iliac.mp3`,
            explanation: `IL-e-ak`,
        },
        {
            title: `ilium`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ilium.mp3`,
            explanation: `IL-e-um`,
        },
        {
            title: `infrapatellar`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/infrapatellar.mp3`,
            explanation: `in-frah-pah-TEL-er`,
        },
        {
            title: `ischial`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ischial.mp3`,
            explanation: `ISH-e-al`,
        },
        {
            title: `ischium`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ischium.mp3`,
            explanation: `ISH-e-um`,
        },
        {
            title: `kyphosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/kyphosis.mp3`,
            explanation: `ki-FO-sis`,
        },
        {
            title: `lacrimal bones`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/lacrimal_bones.mp3`,
            explanation: `LA-krim-albones`,
        },
        {
            title: `lamina`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/lamina.mp3`,
            explanation: `LAM-in-ah`,
        },
        {
            title: `laminectomy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/laminectomy.mp3`,
            explanation: `lam-in-EK-to-me`,
        },
        {
            title: `lordosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/lordosis.mp3`,
            explanation: `lor-DO-sis`,
        },
        {
            title: `lumbar vertebrae`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/lumbar_vertebrae.mp3`,
            explanation: `LUM-barVER-teh-bray`,
        },
        {
            title: `lumbosacral`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/lumbosacral.mp3`,
            explanation: `lum-bo-SA-kral`,
        },
        {
            title: `malleolar`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/malleolar.mp3`,
            explanation: `mah-LE-o-lar`,
        },
        {
            title: `malleolus`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/malleolus.mp3`,
            explanation: `mah-LE-o-lus`,
        },
        {
            title: `mandible`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/mandible.mp3`,
            explanation: `MAN-dib-ul`,
        },
        {
            title: `mandibular`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/mandibular.mp3`,
            explanation: `man-DIB-u-lar`,
        },
        {
            title: `manubrium`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/manubrium.mp3`,
            explanation: `mah-NU-bre-um`,
        },
        {
            title: `mastoid process`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/mastoid_process.mp3`,
            explanation: `MAS-toydPROS-es`,
        },
        {
            title: `maxilla`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/maxilla.mp3`,
            explanation: `max-SIL-ah`,
        },
        {
            title: `maxillary`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/maxillary.mp3`,
            explanation: `max-ih-LAIR-e`,
        },
        {
            title: `medullary cavity`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/medullary_cavity.mp3`,
            explanation: `MED-u-lair-eKAV-ih-te`,
        },
        {
            title: `metacarpals`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/metacarpals.mp3`,
            explanation: `met-ah-KAR-palz`,
        },
        {
            title: `metacarpectomy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/metacarpectomy.mp3`,
            explanation: `met-ah-kar-PEK-to-me`,
        },
        {
            title: `metaphysis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/metaphysis.mp3`,
            explanation: `meh-TAH-fih-sis`,
        },
        {
            title: `metatarsalgia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/metatarsalgia.mp3`,
            explanation: `met-ah-tar-SAL-jah`,
        },
        {
            title: `metatarsals`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/metatarsals.mp3`,
            explanation: `met-ah-TAR-salz`,
        },
        {
            title: `myelopoiesis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/myelopoiesis.mp3`,
            explanation: `mi-eh-lo-poy-E-sis`,
        },
        {
            title: `nasal bones`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/nasal_bones.mp3`,
            explanation: `NA-zalbones`,
        },
        {
            title: `occipital bone`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/occipital_bone.mp3`,
            explanation: `ok-SIP-ih-talbone`,
        },
        {
            title: `olecranal`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/olecranal.mp3`,
            explanation: `o-LEK-ran-al`,
        },
        {
            title: `olecranon`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/olecranon.mp3`,
            explanation: `o-LEK-ran-on`,
        },
        {
            title: `orthopedics`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/orthopedics.mp3`,
            explanation: `or-tho-PE-diks`,
        },
        {
            title: `osseous tissue`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/osseous_tissue.mp3`,
            explanation: `OS-e-usTIH-shu`,
        },
        {
            title: `ossification`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ossification.mp3`,
            explanation: `os-if-ih-KA-shun`,
        },
        {
            title: `osteitis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/osteitis.mp3`,
            explanation: `os-te-I-tis`,
        },
        {
            title: `osteoblast`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/osteoblast.mp3`,
            explanation: `OS-te-o-blast`,
        },
        {
            title: `osteoclast`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/osteoclast.mp3`,
            explanation: `OS-te-o-klast`,
        },
        {
            title: `osteodystrophy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/osteodystrophy.mp3`,
            explanation: `os-te-o-DIS-tro-fe`,
        },
        {
            title: `osteogenesis imperfecta`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/osteogenesis_imperfecta.mp3`,
            explanation: `os-te-o-JEN-eh-sisim-per-FEK-tah`,
        },
        {
            title: `osteogenic sarcoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/osteogenic_sarcoma.mp3`,
            explanation: `os-te-o-JEN-iksar-KO-mah`,
        },
        {
            title: `osteomalacia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/osteomalacia.mp3`,
            explanation: `os-te-o-mah-LA-shah`,
        },
        {
            title: `osteomyelitis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/osteomyelitis.mp3`,
            explanation: `os-te-o-mi-eh-LI-tis`,
        },
        {
            title: `osteopenia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/osteopenia.mp3`,
            explanation: `os-te-o-PE-ne-ah`,
        },
        {
            title: `osteoporosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/osteoporosis.mp3`,
            explanation: `os-te-o-por-O-sis`,
        },
        {
            title: `osteotome`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/osteotome.mp3`,
            explanation: `OS-te-o-tome`,
        },
        {
            title: `parietal bone`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/parietal_bone.mp3`,
            explanation: `pah-RI-eh-talbone`,
        },
        {
            title: `patella`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/patella.mp3`,
            explanation: `pah-TEL-ah`,
        },
        {
            title: `pelvic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pelvic.mp3`,
            explanation: `PEL-vik`,
        },
        {
            title: `periosteum`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/periosteum.mp3`,
            explanation: `peh-re-OS-te-um`,
        },
        {
            title: `phalangeal`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/phalangeal.mp3`,
            explanation: `fah-lan-JE-al`,
        },
        {
            title: `phalanges`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/phalanges.mp3`,
            explanation: `fah-LAN-jeez`,
        },
        {
            title: `phosphorus`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/phosphorus.mp3`,
            explanation: `FOS-fo-rus`,
        },
        {
            title: `physiatrist`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/physiatrist.mp3`,
            explanation: `fih-ZI-ah-trist`,
        },
        {
            title: `pubic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pubic.mp3`,
            explanation: `PU-bik`,
        },
        {
            title: `pubic symphysis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pubic_symphysis.mp3`,
            explanation: `PU-bikSIM-fih-sis`,
        },
        {
            title: `pubis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pubis.mp3`,
            explanation: `PU-bis`,
        },
        {
            title: `radial`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/radial.mp3`,
            explanation: `RA-de-al`,
        },
        {
            title: `radius`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/radius.mp3`,
            explanation: `RA-de-us`,
        },
        {
            title: `red bone marrow`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/red_bone_marrow.mp3`,
            explanation: `redboneMAH-row`,
        },
        {
            title: `reduction`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/reduction.mp3`,
            explanation: `reh-DUK-shun`,
        },
        {
            title: `ribs`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ribs.mp3`,
            explanation: `ribz`,
        },
        {
            title: `sacral vertebrae`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sacral_vertebrae.mp3`,
            explanation: `SA-kralVER-teh-bray`,
        },
        {
            title: `scapula`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/scapula.mp3`,
            explanation: `SKAP-u-lah`,
        },
        {
            title: `scapular`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/scapular.mp3`,
            explanation: `SKAP-u-lar`,
        },
        {
            title: `scoliosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/scoliosis.mp3`,
            explanation: `sko-le-O-sis`,
        },
        {
            title: `sella turcica`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sella_turcica.mp3`,
            explanation: `SEL-ahTUR-sik-ah`,
        },
        {
            title: `sinus`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sinus.mp3`,
            explanation: `SI-nus`,
        },
        {
            title: `sphenoid bone`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sphenoid_bone.mp3`,
            explanation: `SFEH-noydbone`,
        },
        {
            title: `spondylolisthesis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/spondylolisthesis.mp3`,
            explanation: `spon-dih-lo-lis-THE-sis`,
        },
        {
            title: `spondylosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/spondylosis.mp3`,
            explanation: `spon-dih-LO-sis`,
        },
        {
            title: `sternum`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sternum.mp3`,
            explanation: `STER-num`,
        },
        {
            title: `styloid process`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/styloid_process.mp3`,
            explanation: `STI-loydPROS-es`,
        },
        {
            title: `subcostal`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/subcostal.mp3`,
            explanation: `sub-KOS-tal`,
        },
        {
            title: `supraclavicular`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/supraclavicular.mp3`,
            explanation: `su-prah-klah-VIK-u-lar`,
        },
        {
            title: `suture`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/suture.mp3`,
            explanation: `SU-chur`,
        },
        {
            title: `talipes`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/talipes.mp3`,
            explanation: `TAL-ih-peez`,
        },
        {
            title: `tarsals`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/tarsals.mp3`,
            explanation: `TAR-salz`,
        },
        {
            title: `tarsectomy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/tarsectomy.mp3`,
            explanation: `tar-SEK-to-me`,
        },
        {
            title: `temporal bone`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/temporal_bone.mp3`,
            explanation: `TEM-por-albone`,
        },
        {
            title: `temporomandibular joint`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/temporomandibular_joint.mp3`,
            explanation: `tem-por-o-man-DIB-u-larjoynt`,
        },
        {
            title: `thoracic vertebrae`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thoracic_vertebrae.mp3`,
            explanation: `thor-AH-sikVER-teh-bray`,
        },
        {
            title: `tibia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/tibia.mp3`,
            explanation: `TIB-e-ah`,
        },
        {
            title: `tibial`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/tibial.mp3`,
            explanation: `TIB-e-al`,
        },
        {
            title: `trabeculae`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/trabeculae.mp3`,
            explanation: `trah-BEK-u-le`,
        },
        {
            title: `ulna`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ulna.mp3`,
            explanation: `UL-nah`,
        },
        {
            title: `ulnar`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ulnar.mp3`,
            explanation: `UL-nar`,
        },
        {
            title: `vertebra; pl. vertebrae`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/vertebra.mp3`,
            explanation: `VER-teh-brah;VER-teh-bray`,
        },
        {
            title: `vertebroplasty`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/vertebroplasty.mp3`,
            explanation: `ver-TE-bro-plas-te`,
        },
        {
            title: `vomer`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/vomer.mp3`,
            explanation: `VO-mer`,
        },
        {
            title: `xiphoid process`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/xiphoid_process.mp3`,
            explanation: `ZIF-oydPROS-es`,
        },
        {
            title: `yellow bone marrow`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/yellow_bone_marrow.mp3`,
            explanation: `YEL-oboneMAH-ro`,
        },
        {
            title: `zygomatic bones`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/zygomatic_bones.mp3`,
            explanation: `zi-go-MAT-ikbones`,
        },
      ],
      titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
      itemSeperator: "false",
    },
    group5: {
      id: "group5",
      type: "accordian",
      placeholder_id: "ch15group5_placeholder",
      items: [
        {
            title: `abduction`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/abduction.mp3`,
            explanation: `ab-DUK-shun`,
        },
        {
            title: `achondroplasia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/achondroplasia.mp3`,
            explanation: `a-kon-dro-PLA-ze-ah`,
        },
        {
            title: `adduction`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/adduction.mp3`,
            explanation: `ah-DUK-shun`,
        },
        {
            title: `amyotrophic lateral sclerosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/amyotrophic_lateral_sclerosis.mp3`,
            explanation: `a-mi-o-TROP-ikLAT-er-alskleh-RO-sis`,
        },
        {
            title: `ankylosing spondylitis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ankylosing_spondylitis.mp3`,
            explanation: `ang-kih-LO-singspon-dih-LI-tis`,
        },
        {
            title: `ankylosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ankylosis.mp3`,
            explanation: `ang-kih-LO-sis`,
        },
        {
            title: `arthrodesis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/arthrodesis.mp3`,
            explanation: `ar-thro-DE-sis`,
        },
        {
            title: `arthrotomy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/arthrotomy.mp3`,
            explanation: `ar-THROT-o-me`,
        },
        {
            title: `articular cartilage`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/articular_cartilage.mp3`,
            explanation: `ar-TIK-u-larKAR-tih-laj`,
        },
        {
            title: `articulation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/articulation.mp3`,
            explanation: `ar-tik-u-LA-shun`,
        },
        {
            title: `atrophy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/atrophy.mp3`,
            explanation: `AT-ro-fe`,
        },
        {
            title: `bunion`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/bunion.mp3`,
            explanation: `BUN-yun`,
        },
        {
            title: `bursa; pl. bursae`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/bursa_bursae.mp3`,
            explanation: `BUR-sah;BUR-se`,
        },
        {
            title: `bursitis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/bursitis.mp3`,
            explanation: `bur-SI-tis`,
        },
        {
            title: `carpal tunnel syndrome`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/carpal_tunnel_syndrome.mp3`,
            explanation: `KAR-palTUN-nelSIN-drohm`,
        },
        {
            title: `chondromalacia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/chondromalacia.mp3`,
            explanation: `kon-dro-mah-LA-shah`,
        },
        {
            title: `chondrosarcoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/chondrosarcoma.mp3`,
            explanation: `kon-dro-sar-KO-mah`,
        },
        {
            title: `dislocation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/dislocation.mp3`,
            explanation: `dis-lo-KA-shun`,
        },
        {
            title: `dorsiflexion`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/dorsiflexion.mp3`,
            explanation: `dor-se-FLEK-shun`,
        },
        {
            title: `extension`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/extension.mp3`,
            explanation: `ek-STEN-shun`,
        },
        {
            title: `fascia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/fascia.mp3`,
            explanation: `FASH-e-ah`,
        },
        {
            title: `fasciotomy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/fasciotomy.mp3`,
            explanation: `fash-e-OT-to-me`,
        },
        {
            title: `fibromyalgia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/fibromyalgia.mp3`,
            explanation: `fi-bro-mi-AL-jah`,
        },
        {
            title: `flexion`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/flexion.mp3`,
            explanation: `FLEK-shun`,
        },
        {
            title: `ganglion cyst`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ganglion_cyst.mp3`,
            explanation: `GANG-le-onsist`,
        },
        {
            title: `gouty arthritis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/gouty_arthritis.mp3`,
            explanation: `GOW-tear-THRI-tis`,
        },
        {
            title: `hemarthrosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hemarthrosis.mp3`,
            explanation: `hem-ar-THRO-sis`,
        },
        {
            title: `herniation of an intervertebral disc`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/herniation_of_an_intervertebral_disk.mp3`,
            explanation: `her-ne-A-shunofanin-ter-ver-TE-braldisc`,
        },
        {
            title: `hydrarthrosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hydrarthrosis.mp3`,
            explanation: `hi-drar-THRO-sis`,
        },
        {
            title: `hypertrophy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypertrophy.mp3`,
            explanation: `hi-PER-tro-fe`,
        },
        {
            title: `hyperuricemia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hyperuricemia.mp3`,
            explanation: `hi-per-u-reh-SE-me-ah`,
        },
        {
            title: `leiomyoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/leiomyoma.mp3`,
            explanation: `li-o-mi-O-mah`,
        },
        {
            title: `leiomyosarcoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/leiomyosarcoma.mp3`,
            explanation: `li-o-mi-o-sar-KO-mah`,
        },
        {
            title: `ligament`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ligament.mp3`,
            explanation: `LIG-ah-ment`,
        },
        {
            title: `ligamentous`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ligamentous.mp3`,
            explanation: `lig-ah-MEN-tus`,
        },
        {
            title: `Lyme disease`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/lyme_disease.mp3`,
            explanation: `limedih-ZEEZ`,
        },
        {
            title: `meniscus`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/meniscus.mp3`,
            explanation: `meh-NIS-kus`,
        },
        {
            title: `muscular dystrophy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/muscular_dystrophy.mp3`,
            explanation: `MUS-ku-larDIS-tro-fe`,
        },
        {
            title: `myalgia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/myalgia.mp3`,
            explanation: `mi-AL-jah`,
        },
        {
            title: `myasthenia gravis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/myasthenia_gravis.mp3`,
            explanation: `mi-as-THE-ne-ahGRAV-is`,
        },
        {
            title: `myopathy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/myopathy.mp3`,
            explanation: `mi-OP-ah-the`,
        },
        {
            title: `myositis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/myositis.mp3`,
            explanation: `mi-o-SI-tis`,
        },
        {
            title: `osteoarthritis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/osteoarthritis.mp3`,
            explanation: `os-te-o-ar-THRI-tis`,
        },
        {
            title: `plantar flexion`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/plantar_flexion.mp3`,
            explanation: `PLAN-tarFLEK-shun`,
        },
        {
            title: `podagra`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/podagra.mp3`,
            explanation: `po-DAG-rah`,
        },
        {
            title: `polyarthritis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/polyarthritis.mp3`,
            explanation: `pol-e-arth-RI-tis`,
        },
        {
            title: `polymyalgia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/polymyalgia.mp3`,
            explanation: `pol-e-mi-AL-jah`,
        },
        {
            title: `polymyositis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/polymyositis.mp3`,
            explanation: `pol-e-mi-o-SI-tis`,
        },
        {
            title: `pronation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pronation.mp3`,
            explanation: `pro-NA-shun`,
        },
        {
            title: `pyrexia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pyrexia.mp3`,
            explanation: `pi-REK-se-ah`,
        },
        {
            title: `rhabdomyolysis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/rhabdomyolysis.mp3`,
            explanation: `rab-do-mi-OL-ah-sis`,
        },
        {
            title: `rhabdomyoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/rhabdomyoma.mp3`,
            explanation: `rab-do-mi-O-mah`,
        },
        {
            title: `rhabdomyosarcoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/rhabdomyosarcoma.mp3`,
            explanation: `rab-do-mi-o-sar-KO-mah`,
        },
        {
            title: `rheumatoid arthritis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/rheumatoid_arthritis.mp3`,
            explanation: `RU-mat-oydar-THRI-tis`,
        },
        {
            title: `rheumatologist`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/rheumatologist.mp3`,
            explanation: `ru-mat-OL-o-jist`,
        },
        {
            title: `rotation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/rotation.mp3`,
            explanation: `ro-TA-shun`,
        },
        {
            title: `sarcopenia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sarcopenia.mp3`,
            explanation: `sar-ko-PE-ne-ah`,
        },
        {
            title: `spinal stenosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/spinal_stenosis.mp3`,
            explanation: `SPI-nalsteh-NO-sis`,
        },
        {
            title: `sprain`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sprain.mp3`,
            explanation: `sprayn`,
        },
        {
            title: `strain`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/strain.mp3`,
            explanation: `strayn`,
        },
        {
            title: `striated muscle`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/striated_muscle.mp3`,
            explanation: `STRI-a-tedMUS-el`,
        },
        {
            title: `subluxation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/subluxation.mp3`,
            explanation: `sub-luk-SA-shun`,
        },
        {
            title: `supination`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/supination.mp3`,
            explanation: `su-pih-NA-shun`,
        },
        {
            title: `suture joint`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/suture_joint.mp3`,
            explanation: `SU-churjoint`,
        },
        {
            title: `synovial cavity`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/synovial_cavity.mp3`,
            explanation: `sih-NO-ve-alKAV-ih-te`,
        },
        {
            title: `synovial fluid`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/synovial_fluid.mp3`,
            explanation: `sih-NO-ve-alFLOO-id`,
        },
        {
            title: `synovial joint`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/synovial_joint.mp3`,
            explanation: `sih-NO-ve-aljoynt`,
        },
        {
            title: `synovial membrane`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/synovial_membrane.mp3`,
            explanation: `sih-NO-ve-alMEM-brayn`,
        },
        {
            title: `synovitis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/synovitis.mp3`,
            explanation: `sin-o-VI-tis`,
        },
        {
            title: `systemic lupus erythematosus`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/systemic_lupus_erythematosus.mp3`,
            explanation: `sis-TEM-ikLU-puseh-rith-eh-mah-TO-sus`,
        },
        {
            title: `tendinosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/tendinosis.mp3`,
            explanation: `ten-dih-NO-sis`,
        },
        {
            title: `tendon`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/tendon.mp3`,
            explanation: `TEN-dun`,
        },
        {
            title: `tenorrhaphy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/tenorrhaphy.mp3`,
            explanation: `ten-OR-ah-fe`,
        },
        {
            title: `tenosynovitis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/tenosynovitis.mp3`,
            explanation: `ten-o-sih-no-VI-tis`,
        },
        {
            title: `visceral muscle`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/visceral_muscle.mp3`,
            explanation: `VIS-er-alMUS-el`,
        },
      ],
      titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
      itemSeperator: "false",
    },
    group6: {
      id: "group6",
      type: "accordian",
      placeholder_id: "ch15group6_placeholder",
      items: [
        {
            title: `antinuclear antibody test`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antinuclear_antibody_test.mp3`,
            explanation: `an-te-NU-kle-arAN-tih-bod-etest`,
        },
        {
            title: `arthrocentesis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/arthrocentesis.mp3`,
            explanation: `ar-thro-sen-TE-sis`,
        },
        {
            title: `arthrography`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/arthrography.mp3`,
            explanation: `ar-THROG-rah-fe`,
        },
        {
            title: `arthroplasty`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/arthroplasty.mp3`,
            explanation: `ar-thro-PLAS-te`,
        },
        {
            title: `arthroscopy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/arthroscopy.mp3`,
            explanation: `ar-THROS-ko-pe`,
        },
        {
            title: `bone density test`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/bone_density_test.mp3`,
            explanation: `boneDEN-sih-tetest`,
        },
        {
            title: `bone scan`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/bone_scan.mp3`,
            explanation: `boneskan`,
        },
        {
            title: `discography`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/diskography.mp3`,
            explanation: `disc-OG-rah-fe`,
        },
        {
            title: `electromyography`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/electromyography.mp3`,
            explanation: `eh-lek-tro-mi-OG-rah-fe`,
        },
        {
            title: `erythrocyte sedimentation rate`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/erythrocyte_sedimentation_rate.mp3`,
            explanation: `eh-RITH-ro-sitesed-ih-men-TA-shunrate`,
        },
        {
            title: `muscle biopsy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/muscle_biopsy.mp3`,
            explanation: `MUS-elBI-op-se`,
        },
        {
            title: `rheumatoid factor test`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/rheumatoid_factor_test.mp3`,
            explanation: `RU-mat-oydFAK-tortest`,
        },
        {
            title: `serum calcium`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/serum_calcium.mp3`,
            explanation: `SER-umKAL-se-umtest`,
        },
        {
            title: `serum creatine kinase`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/serum_creatine_kinase.mp3`,
            explanation: `SER-umKRE-ah-tineKI-nays`,
        },
        {
            title: `uric acid test`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/uric_acid_test.mp3`,
            explanation: `U-rikAS-idtest`,
        },
      ],
      titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
      itemSeperator: "false",
    },
   group7: {
      id: "group7",
      type: "dropdown",
      placeholder_id: "group7_placeholder",
      commonDropdownOptions:[
        "diaphysis",
        "epiphysis",
        "epiphyseal line or plate",
        "metaphysis",
        "periosteum",
        "articular cartilage",
        "Compact (cortical) bone",
        "haversian canals",
        "medullary cavity",
        "Cancellous bone"
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "diaphysis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "epiphysis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "epiphyseal line or plate",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "metaphysis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "periosteum",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "articular cartilage",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "compact (cortical) bone",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "haversian canals",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "medullary cavity",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "cancellous bone",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        }
      ],
      itemsInstruction:`<p>* Lymph nodes are collections of tissue containing white blood cells called lymphocytes.</p>
                        <p>† A squamous cell is a type of epithelial cell.</p>`,
      correctFeedback: `All of your answers are correct.`,
      incorrectFeedback: `You have one or more incorrect answers.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    }, 
    group8: {
      id: "group8",
      type: "dropdown",
      placeholder_id: "group8_placeholder",
      commonDropdownOptions:[
        "frontal bone",
        "parietal bone",
        "temporal bone",
        "occipital bone",
        "sphenoid bone",
        "ethmoid bone"
  
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "frontal bone",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "parietal bone",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "temporal bone",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "occipital bone",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "sphenoid bone",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ethmoid bone",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        }   
      ],
      itemsInstruction:`<p>* Lymph nodes are collections of tissue containing white blood cells called lymphocytes.</p>
                        <p>† A squamous cell is a type of epithelial cell.</p>`,
      correctFeedback: `All of your answers are correct.`,
      incorrectFeedback: `You have one or more incorrect answers.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
    group9: {
      id: "group9",
      type: "dropdown",
      placeholder_id: "group9_placeholder",
      commonDropdownOptions:[
        "nasal bones",
        "lacrimal bones",
        "maxillary bones",
        "mandibular bone",
        "zygomatic bones",
        "vomer"
  
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "nasal bones",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "lacrimal bones",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "maxillary bones",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "mandibular bone",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "zygomatic bones",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "vomer",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        }   
      ],
      itemsInstruction:`<p>* Lymph nodes are collections of tissue containing white blood cells called lymphocytes.</p>
                        <p>† A squamous cell is a type of epithelial cell.</p>`,
      correctFeedback: `All of your answers are correct.`,
      incorrectFeedback: `You have one or more incorrect answers.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
        group10: {
      id: "group10",
      type: "dropdown",
      placeholder_id: "group10_placeholder",
      commonDropdownOptions:[
        "vertebral body",
        "spinous process",
        "transverse process",
        "lamina",
        "neural or spinal canal"
  
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "vertebral body",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "spinous process",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "transverse process",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "lamina",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "neural or spinal canal",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        }  
      ],
      itemsInstruction:`<p>* Lymph nodes are collections of tissue containing white blood cells called lymphocytes.</p>
                        <p>† A squamous cell is a type of epithelial cell.</p>`,
      correctFeedback: `All of your answers are correct.`,
      incorrectFeedback: `You have one or more incorrect answers.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
        group11: {
      id: "group11",
      type: "dropdown",
      placeholder_id: "group11_placeholder",
      commonDropdownOptions:[
        "clavicle",
        "scapula",
        "sternum",
        "ribs",
        "humerus",
        "ulna",
        "radius",
        "carpals",
        "metacarpals",
        "phalanges",
        "pelvic girdle",
        "femur",
        "patella",
        "tibia",
        "fibula",
        "tarsals",
        "metatarsals",
        "phalanges of the toes"
  
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "clavicle",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "scapula",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "sternum",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ribs",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "humerus",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ulna",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "radius",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "carpals",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "metacarpals",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "phalanges",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pelvic girdle",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "femur",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "patella",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "tibia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "fibula",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "tarsals",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "metatarsals",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "phalanges of the toes",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        }   
      ],
      itemsInstruction:`<p>* Lymph nodes are collections of tissue containing white blood cells called lymphocytes.</p>
                        <p>† A squamous cell is a type of epithelial cell.</p>`,
      correctFeedback: `All of your answers are correct.`,
      incorrectFeedback: `You have one or more incorrect answers.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
     group12: {
      id: "group12",
      type: "dropdown",
      placeholder_id: "group12_placeholder",
      commonDropdownOptions:[
        "joint capsule",
        "articular cartilage",
        "synovial membrane",
        "synovial cavity"
  
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "joint capsule",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "articular cartilage",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "synovial membrane",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "synovial cavity",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        } 
      ],
      itemsInstruction:`<p>* Lymph nodes are collections of tissue containing white blood cells called lymphocytes.</p>
                        <p>† A squamous cell is a type of epithelial cell.</p>`,
      correctFeedback: `All of your answers are correct.`,
      incorrectFeedback: `You have one or more incorrect answers.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
    group13: {
      id: "group13",
      type: "dropdown",
      placeholder_id: "group13_placeholder",
      commonDropdownOptions:[
        "cardiac muscle",
        "smooth muscle",
        "striated muscle"
    
  
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "striated muscle",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "smooth muscle",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "cardiac muscle",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        }
      ],
      itemsInstruction:`<p>* Lymph nodes are collections of tissue containing white blood cells called lymphocytes.</p>
                        <p>† A squamous cell is a type of epithelial cell.</p>`,
      correctFeedback: `All of your answers are correct.`,
      incorrectFeedback: `You have one or more incorrect answers.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
       group14: {
      id: "group14",
      type: "dropdown",
      placeholder_id: "group14_placeholder",
      commonDropdownOptions:[
        "Fracture of the ankle",
        "ACL rupture",
        "Neoplastic lesion in brain",
        "Exostosis on heel bone",
        "Pelvic fracture",
        "Pain and malocclusion of jaw joint",
        "Lower back pain radiating down one leg",
        "Pain in shoulder joint with bone spur (exostosis) evident on x-ray"
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>Excision, osteochondroma, R calcaneus #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Exostosis on heel bone",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>TMJ arthroscopy with probable arthrotomy #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Pain and malocclusion of jaw joint",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>L4–5 laminectomy and discectomy #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Lower back pain radiating down one leg",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Arthroscopy, left knee #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ACL rupture",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Open reduction, malleolar fracture #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Fracture of the ankle",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>R occipital craniotomy with tumor resection #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Neoplastic lesion in brain",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Excision, distal end right clavicle, with probable acromioplasty #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Pain in shoulder joint with bone spur (exostosis) evident on x-ray",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Open reduction and internal fixation of the acetabulum #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Pelvic fracture",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        }
      ],
      itemsInstruction:`<p>* Lymph nodes are collections of tissue containing white blood cells called lymphocytes.</p>
                        <p>† A squamous cell is a type of epithelial cell.</p>`,
      correctFeedback: `All of your answers are correct.`,
      incorrectFeedback: `You have one or more incorrect answers.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },

           group15: {
      id: "group15",
      type: "dropdown",
      placeholder_id: "group15_placeholder",
      commonDropdownOptions:[
       "ethmoid bone",
        "maxilla",
        "sphenoid bone",
        "frontal bone",
        "nasal bone",
        "temporal bone",
        "lacrimal bones",
        "occipital bone",
        "vomer",
        "mandible",
        "parietal bone",
        "zygomatic bone"
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>forms the roof and upper side parts of the skull #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "parietal bone",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>delicate bone, composed of spongy, cancellous tissue; supports the nasal cavity and orbits of the eye #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ethmoid bone",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>forms the back and base of the skull #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "occipital bone",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>forms the forehead #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "frontal bone",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>bat-shaped bone extending behind the eyes to form the base of the skull #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "sphenoid bone",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>bone near the ear and connecting to the lower jaw #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "temporal bone",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },

        {
          headerImage:{},
          dropdownHtml:`<span>cheekbone #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "zygomatic bone",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>bone that supports the bridge of the nose #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "nasal bone",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>thin, flat bone forming the lower portion of the nasal septum #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "vomer",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>lower jawbone #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "mandible",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>upper jawbone #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "maxilla",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>two paired bones, one located at the corner of each eye #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "lacrimal bones",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        }
      ],
      itemsInstruction:`<p>* Lymph nodes are collections of tissue containing white blood cells called lymphocytes.</p>
                        <p>† A squamous cell is a type of epithelial cell.</p>`,
      correctFeedback: `All of your answers are correct.`,
      incorrectFeedback: `You have one or more incorrect answers.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },

           group16: {
      id: "group16",
      type: "dropdown",
      placeholder_id: "group16_placeholder",
      commonDropdownOptions:[
       "achondroplasia",
        "ankylosing spondylitis",
        "bunion",
        "carpal tunnel syndrome",
        "dislocation",
        "ganglion cyst",
        "gouty arthritis",
        "Lyme disease",
        "osteoarthritis",
        "rheumatoid arthritis",
        "systemic lupus erythematosus",
        "tenosynovitis"
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>an inherited condition in which the bones of the arms and the legs fail to grow normally because of a defect in cartilage and bone formation; type of dwarfism #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "achondroplasia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>degenerative joint disease; chronic inflammation of bones and joints #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "osteoarthritis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Inflammation in and around joints caused by the deposition of uric acid crystals #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "gouty arthritis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>chronic joint disease; inflamed and painful joints owing to autoimmune reaction against normal joint tissue, and synovial membranes become swollen and thickened #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "rheumatoid arthritis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>tick-borne bacterium causes this condition marked by arthritis, myalgia, malaise, and neurologic and cardiac symptoms #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Lyme disease",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>angulation and swelling of the first metatarsophalangeal joint (big toe) #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "bunion or hallux valgus",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },

        {
          headerImage:{},
          dropdownHtml:`<span>cystic mass arising from a joint or tendon in the wrist #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ganglion cyst",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>chronic, progressive arthritis with stiffening of joints, especially of the spine (vertebrae) #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ankylosing spondylitis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>chronic inflammatory disease affecting not only the joints but also the skin (butterfly rash on the face), kidneys, heart, and lungs #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "systemic lupus erythematosus",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>inflammation of a tendon sheath #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "tenosynovitis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>compression of the median nerve in the wrist as it passes through an area between a ligament, tendons, bones, and connective tissue #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "carpal tunnel syndrome",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>displacement of a bone from its joint #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "dislocation",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        }
      ],
      itemsInstruction:`<p>* Lymph nodes are collections of tissue containing white blood cells called lymphocytes.</p>
                        <p>† A squamous cell is a type of epithelial cell.</p>`,
      correctFeedback: `All of your answers are correct.`,
      incorrectFeedback: `You have one or more incorrect answers.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
        group17: {
      id: "group17",
      type: "dropdown",
      placeholder_id: "group17_placeholder",
      commonDropdownOptions:[],
      items: [
        { 
          dropdownHtml:`<span>fibrous membrane separating and enveloping muscles: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["fascia","flexion"],correctValue: "fascia",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        {
          dropdownHtml:`<span>movement away from the midline of the body: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["abduction","adduction"],correctValue: "abduction",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        {
          dropdownHtml:`<span>connection of the muscle to a stationary bone: #dropdown1# of the muscle</span>`,
          dropdowns:{
            dropdown1:{values:["insertion","origin"],correctValue: "origin",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        {
          dropdownHtml:`<span>connection of the muscle to a bone that moves: #dropdown1# of the muscle</span>`,
          dropdowns:{
            dropdown1:{values:["insertion","origin"],correctValue: "insertion",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        {
          dropdownHtml:`<span>muscle that is connected to internal organs; involuntary muscle: #dropdown1# muscle</span>`,
          dropdowns:{
            dropdown1:{values:["skeletal","visceral"],correctValue: "visceral",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        {
          dropdownHtml:`<span>muscle that is connected to bones; voluntary muscle: #dropdown1# muscle</span>`,
          dropdowns:{
            dropdown1:{values:["skeletal","visceral"],correctValue: "skeletal",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        {
          dropdownHtml:`<span>pain of many muscles: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["myositis","polymyalgia"],correctValue: "polymyalgia",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        {
          dropdownHtml:`<span>pertaining to heart muscle: #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:["myocardial","myasthenia"],correctValue: "myocardial",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        {
          dropdownHtml:`<span>process of recording electricity within muscles: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["muscle biopsy","electromyography"],correctValue: "electromyography",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        {
          dropdownHtml:`<span>increase in development (size) of an organ or tissue: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["hypertrophy","atrophy"],correctValue: "hypertrophy",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        {
          dropdownHtml:`<span>destruction of skeletal muscle tissue: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["leiomyoma","rhabdomyolysis"],correctValue: "rhabdomyolysis",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
           group18: {
      id: "group18",
      type: "dropdown",
      placeholder_id: "group18_placeholder",
      commonDropdownOptions:[
       "movement away from the midline",
        "turning the palm downward",
        "turning the palm upward",
        "straightening of a flexed limb",
        "downward movement of the foot",
        "circular movement around an axis",
        "bending a limb",
        "movement toward the midline",
        "upward movement of the foot"
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>extension #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "straightening of a flexed limb",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>rotation #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "circular movement around an axis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>flexion #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "bending a limb",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },

        {
          headerImage:{},
          dropdownHtml:`<span>adduction #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "movement toward the midline",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>supination #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "turning the palm upward",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>abduction #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "movement away from the midline",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>pronation #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "turning the palm downward",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>dorsiflexion #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "upward movement of the foot",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>plantar flexion #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "downward movement of the foot",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        }
      ],
      itemsInstruction:`<p>* Lymph nodes are collections of tissue containing white blood cells called lymphocytes.</p>
                        <p>† A squamous cell is a type of epithelial cell.</p>`,
      correctFeedback: `All of your answers are correct.`,
      incorrectFeedback: `You have one or more incorrect answers.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
    group19: {
      id: "group19",
      type: "dropdown",
      placeholder_id: "group19_placeholder",
      commonDropdownOptions:[
       "Radioactive substance is injected and traced in dense, hard connective tissue.",
        "Chemical found in myoneural space.",
        "Test for presence of an antibody found in the serum of patients with rheumatoid arthritis.",
        "Substance necessary for proper bone development.",
        "Visual examination of a joint.",
        "Test tells if patient has gouty arthritis.",
        "Test tells if patient has systemic lupus erythematosus.",
        "Removal of soft connective tissue for microscopic examination.",
        "Process of taking x-ray pictures of a joint.",
        "Elevated blood levels of this enzyme are found in muscular disorders."
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>antinuclear antibody test #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Test tells if patient has systemic lupus erythematosus.",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>serum creatine kinase #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Elevated blood levels of this enzyme are found in muscular disorders.",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>uric acid test #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Test tells if patient has gouty arthritis.",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },

        {
          headerImage:{},
          dropdownHtml:`<span>rheumatoid factor test #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Test for presence of an antibody found in the serum of patients with rheumatoid arthritis.",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>bone scan #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Radioactive substance is injected and traced in dense, hard connective tissue.",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>muscle biopsy #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Removal of soft connective tissue for microscopic examination.",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>muscle biopsy #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Visual examination of a joint.",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>acetylcholine #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Chemical found in myoneural space.",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>calcium #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Substance necessary for proper bone development.",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>arthrography #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Process of taking x-ray pictures of a joint.",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        }
      ],
      itemsInstruction:`<p>* Lymph nodes are collections of tissue containing white blood cells called lymphocytes.</p>
                        <p>† A squamous cell is a type of epithelial cell.</p>`,
      correctFeedback: `All of your answers are correct.`,
      incorrectFeedback: `You have one or more incorrect answers.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },

    group20: {
      id: "group20",
      type: "dropdown",
      placeholder_id: "group20_placeholder",
      commonDropdownOptions:[],
      items: [
        {
          dropdownHtml:`<span>Selma, a 40-year-old secretary, had been complaining of wrist pain with tingling sensations in her fingers for months. Dr. Ayres diagnosed her condition as #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["osteomyelitis","rheumatoid arthritis","carpal tunnel syndrome"],correctValue: "carpal tunnel syndrome",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
        
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          dropdownHtml:`<span>Bill was a marathon runner who developed compartment syndrome in his left lower leg (calf). He had severe pain, and his orthopedist recommended #dropdown1#  to cut through the fibrous connective tissue and relieve pressure. A skin graft was needed later to close the wound.</span>`,
          dropdowns:{
            dropdown1:{values:["tenorrhaphy","arthroplasty","fasciotomy"],correctValue: "fasciotomy",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
        
          dropdownHtml:`<span>Sally was experiencing chronic muscle pain and stiffness in her shoulder, back, knees, and hips. Most of all, she was very tired all the time. Her doctor diagnosed her condition as #dropdown1# nd prescribed medication for fatigue and pain plus physical therapy.</span>`,
          dropdowns:{
            dropdown1:{values:["myasthenia gravis","fibromyalgia","sarcopenia"],correctValue: "fibromyalgia",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          dropdownHtml:`<span>Paul had a skiing accident and tore ligaments in his knee. Dr. Miller recommended #dropdown1# to repair the ligaments.</span>`,
          dropdowns:{
            dropdown1:{values:["electromyography","hypertrophy","arthroscopic surgery"],correctValue: "arthroscopic surgery",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
        
          dropdownHtml:`<span>For several months after her first pregnancy Elsie noticed a red rash on her face and cheeks. Her joints were giving her pain and she had a slight fever. Her ANA was elevated, and her doctor suspected that she had #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["SLE","polymyositis","muscular dystrophy"],correctValue: "SLE",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
        
          dropdownHtml:`<span>David injured his left knee while playing basketball. He was scheduled for arthroscopic repair of his #dropdown1# . However, because of his height (6’7”) and the length of the ligament, his #dropdown2# decided to do “open” surgery.</span>`,
          dropdowns:{
            dropdown1:{values:["ACL","SLE","TMJ"],correctValue: "ACL",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["rheumatologist","orthopedist","chiropractor"],correctValue: "orthopedist",dropdownlabel:"Select the type of image", useCommonOptions:"false"}
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>James has significant lower back pain radiating down his left leg. This condition is called #dropdown1# MRI shows an intervertebral #dropdown2# impinging on spinal nerves at the #dropdown3# level. Bed rest produced no improvement. His orthopedist decided to perform a #dropdown4# to relieve pressure on his nerves.</span>`,
          dropdowns:{
            dropdown1:{values:["fibromyalgia","sciatica","talipes"],correctValue: "sciatica",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["disc","bunion","exostosis"],correctValue: "disc",dropdownlabel:"Select the type of image", useCommonOptions:"false"},
            dropdown3:{values:["L5–S1","C2–C3"," T3–T5"],correctValue: "L5–S1",dropdownlabel:"Select the type of image", useCommonOptions:"false"},
            dropdown4:{values:["tenorrhaphy","microdiscectomy","bunionectomy"],correctValue: "microdiscectomy",dropdownlabel:"Select the type of image", useCommonOptions:"false"}
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
        
          dropdownHtml:`<span>Bruce spent 2 weeks hiking and vacationing on Nantucket Island. A week later he developed a “bull's eye” rash on his chest (from a tick bite), fever, muscle pain, and a swollen, tender right ankle. His physician ordered a blood test that revealed #dropdown1# to a spirochete bacterium. The physician told Bruce he had contracted #dropdown2#</span>`,
          dropdowns:{
            dropdown1:{values:["antigens","antibodies"],correctValue: "antibodies",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["ankylosing spondylitis","polymyositis","Lyme disease"],correctValue: "Lyme disease",dropdownlabel:"Select the type of image", useCommonOptions:"false"}
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
        
          dropdownHtml:`<span>Scott likes to eat rich food. Lately he has noticed pain and tenderness in his right toe, called #dropdown1# and also hard, lumpy deposits over his elbows. His doctor orders a serum uric acid test; the result is abnormally high, revealing #dropdown2# , consistent with a diagnosis of #dropdown3#</span>`,
          dropdowns:{
            dropdown1:{values:["talipes","podagra","rickets"],correctValue: "podagra",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["hemarthrosis","hyperuricemia","hypercalcemia"],correctValue: "hyperuricemia",dropdownlabel:"Select the type of image", useCommonOptions:"false"},
            dropdown3:{values:["rheumatoid arthritis","gouty arthritis","osteoarthritis"],correctValue: "gouty arthritis",dropdownlabel:"Select the type of image", useCommonOptions:"false"}
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        {
      
          dropdownHtml:`<span>Sara, a 70-year-old widow, has persistent midback pain, and her #dropdown1# shows compression fractures of her #dropdown2# and thinning of her bones. A bone density scan confirms the diagnosis of #dropdown3# , and her doctor prescribes calcium, vitamin D, and Fosamax.</span>`,
          dropdowns:{
            dropdown1:{values:["CXR","ESR","EMG"],correctValue: "CXR",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["scapula","femur","vertebrae"],correctValue: "vertebrae",dropdownlabel:"Select the type of image", useCommonOptions:"false"},
            dropdown3:{values:["osteomyelitis","osteomalacia","osteoporosis"],correctValue: "osteoporosis",dropdownlabel:"Select the type of image", useCommonOptions:"false"}
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        }
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
          group21: {
      id: "group21",
      type: "dropdown",
      placeholder_id: "group21_placeholder",
      commonDropdownOptions:[
       "systemic lupus erythematosus",
        "first thoracic vertebra to twelfth thoracic vertebra",
        "open reduction, internal fixation",
        "nonsteroidal anti-inflammatory drug",
        "range of motion",
        "total hip replacement",
        "electromyography",
        "temporomandibular joint",
        "first cervical vertebra to fifth cervical vertebra",
        "anterior cruciate ligament"
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>Measurement in degrees of a circle assesses the extent a joint can be flexed or extended #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "range of motion",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Drug used to treat joint diseases #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "nonsteroidal anti-inflammatory drug",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Joint between the lower jawbone and a bone of the skull #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "temporomandibular joint",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },

        {
          headerImage:{},
          dropdownHtml:`<span>Test of strength of electrical transmission within muscle #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "electromyography",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Band of fibrous tissue connecting the femur and tibia in the knee #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "anterior cruciate ligament",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Autoimmune disease that affects joints, skin, and other body tissues #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "systemic lupus erythematosus",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>Bones of the spinal column in the neck region #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "first cervical vertebra to fifth cervical vertebra",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>Bones of the spinal column in the chest region #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "first thoracic vertebra to twelfth thoracic vertebra", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Arthroplasty #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "total hip replacement",dropdownlabel:"Select the Procedures",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Procedure to repair compound fracture #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "open reduction, internal fixation",dropdownlabel:"Select the Procedures",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        }
      ],
      itemsInstruction:`<p>* Lymph nodes are collections of tissue containing white blood cells called lymphocytes.</p>
                        <p>† A squamous cell is a type of epithelial cell.</p>`,
      correctFeedback: `All of your answers are correct.`,
      incorrectFeedback: `You have one or more incorrect answers.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
          group22: {
      id: "group22",
      type: "dropdown",
      placeholder_id: "group22_placeholder",
      commonDropdownOptions:[
       "clubfoot—talipes",
        "ganglion cyst",
        "rheumatoid arthritis",
        "hemarthrosis",
        "winged scapulae in muscular dystrophy",
        "bunion (hallux valgus)"
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "rheumatoid arthritis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "bunion (hallux valgus)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ganglion cyst",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },

        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "winged scapulae in muscular dystrophy",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "clubfoot—talipes",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "hemarthrosis", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
      ],
      itemsInstruction:`<p>* Lymph nodes are collections of tissue containing white blood cells called lymphocytes.</p>
                        <p>† A squamous cell is a type of epithelial cell.</p>`,
      correctFeedback: `All of your answers are correct.`,
      incorrectFeedback: `You have one or more incorrect answers.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
          group23: {
      id: "group23",
      type: "dropdown",
      placeholder_id: "group23_placeholder",
      commonDropdownOptions:[
       "winged scapulae in muscular dystrophy",
        "ganglion cyst",
        "rheumatoid arthritis",
        "bunion (hallux valgus)",
        "clubfoot—talipes",
        "hemarthrosis"
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>Children who are born with a condition of muscle deterioration and wasting have winged scapulae: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "winged scapulae in muscular dystrophy",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Children are born with this deformity of the talus: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "clubfoot—talipes",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>This deformity is often the result of a chronic, inflammatory, autoimmune disorder that affects joints, leading to bony ankylosis and inflamed, thickened synovial membranes: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "rheumatoid arthritis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },

        {
          headerImage:{},
          dropdownHtml:`<span>Bleeding disorders can lead to this accumulation of blood in and around a joint: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "hemarthrosis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>A bony bump that forms on a joint at the base of the big toe: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "bunion (hallux valgus)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Fluid-filled cyst arising from joint capsules or tendons: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ganglion cyst", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
      ],
      itemsInstruction:`<p>* Lymph nodes are collections of tissue containing white blood cells called lymphocytes.</p>
                        <p>† A squamous cell is a type of epithelial cell.</p>`,
      correctFeedback: `All of your answers are correct.`,
      incorrectFeedback: `You have one or more incorrect answers.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
    group24: {
      id: "group24",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group24_placeholder",
      items: [
        {
          clozeHtml:`<span>Complete the following sentences.</span>`,
          headerImage:{
            
          },
          clozeHtml:`<span>Bones are composed of a type of connective tissue called #cloze1# tissue.</span>`,
          clozes:{
            cloze1:{correctValue: "osseous", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>Bone cells are called #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "osteocytes", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>The bones of a fetus are composed mainly of #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "cartilage", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>Immature bone cells called #cloze1# produce bony tissue.</span>`,
          clozes:{
            cloze1:{correctValue: "osteoblasts", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>Large bone cells called #cloze1# digest bone tissue to shape the bone and smooth it out.</span>`,
          clozes:{
            cloze1:{correctValue: "osteoclasts", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>Mineral substances needed for bone development are #cloze1# and #cloze2#</span>`,
          clozes:{
            cloze1:{correctValue: "calcium", clozelabel:"fill in the blank"},
            cloze2:{correctValue: "phosphorus", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>The patella, covering the knee joint, is an example of a/an #cloze1# bone.</span>`,
          clozes:{
            cloze1:{correctValue: "sesamoid", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>Shaft of a long bone is the #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "diaphysis", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>Ends of a long bone are the #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "epiphyses", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>Cartilaginous area at the end of a long bone where growth takes place is the #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "epiphyseal plate", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>Red bone marrow is found in spongy or #cloze1# bone.</span>`,
          clozes:{
            cloze1:{correctValue: "cancellous or trabecular", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>Yellow bone marrow is composed of #cloze1# tissue.</span>`,
          clozes:{
            cloze1:{correctValue: "fat", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>The strong membrane surrounding the surface of a bone is the #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "periosteum", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>Hard, dense bone tissue lying under the periosteum is #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "compact (cortical) bone", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>A series of canals containing blood vessels lie within the outer dense tissue of bone and are called  the #cloze1# canals.</span>`,
          clozes:{
            cloze1:{correctValue: "haversian", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>A thin layer of cartilage covering the ends of bones at the joints is #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "articular cartilage", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>The #cloze1# is a central, hollowed-out area in the shaft of long bones.</span>`,
          clozes:{
            cloze1:{correctValue: "medullary cavity", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>Two physicians who treat bones and bone diseases are a/an #cloze1# and a/an #cloze2#.</span>`,
          clozes:{
            cloze1:{correctValue: "orthopedist", clozelabel:"fill in the blank"},
            cloze2:{correctValue: "osteopath", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>A practitioner who manipulates the patient's spinal column to relieve pressure on nerves is a/an #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "chiropractor", clozelabel:"fill in the blank"},
          
          },
          clozePlacement:"inline",//newline
        },
         {
          clozeHtml:`<span>Medical doctor who specializes in restoring patients to functional activity after injuries to bones, nerves, and muscles is a/an #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "physiatrist", clozelabel:"fill in the blank"},
            
          },
          clozePlacement:"inline",//newline
        },
      ],
      correctFeedback: `All of your answers are correct.`,
      partialFeedback: `You have one or more incorrect answers.`,
      incorrectFeedback: `Your answers are incorrect.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
    group25: {
      id: "group25",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group25_placeholder",
      items: [
        {
          
          headerImage:{},
          clozeHtml:`<span>space through which the spinal cord passes: #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "neural canal", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>piece of cartilage between two vertebrae: #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "intervertebral disc", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>posterior part of a vertebra: #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "vertebral arch", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>anterior part of a vertebra: #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "vertebral body", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        
      
      ],
      correctFeedback: `All of your answers are correct.`,
      partialFeedback: `You have one or more incorrect answers.`,
      incorrectFeedback: `Your answers are incorrect.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
        group26: {
      id: "group26",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group26_placeholder",
      items: [
        {
          
          headerImage:{},
          clozeHtml:`<span>#cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "cervical", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        
         {
          headerImage:{},
          clozeHtml:`<span>#cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "thoracic", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>#cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "lumbar", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>#cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "sacral", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>#cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "coccygeal", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        
      
      ],
      correctFeedback: `All of your answers are correct.`,
      partialFeedback: `You have one or more incorrect answers.`,
      incorrectFeedback: `Your answers are incorrect.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
      group27: {
      id: "group27",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group27_placeholder",
      items: [
        {
          
          headerImage:{},
          clozeHtml:`<span>shoulder blade #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "scapula", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>upper arm bone #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "humerus", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>breastbone #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "sternum", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>thigh bone #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "femur", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>finger bones #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "phalanges", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>hand bones #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "metacarpals", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>forearm bone (little finger side) #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "ulna", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>forearm bone (thumb side) #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "radius", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>collar bone #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "clavicle", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>wrist bones #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "carpals", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>backbone #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "vertebral column", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
      
      {
          headerImage:{},
          clozeHtml:`<span>kneecap #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "patella", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
      
      {
          headerImage:{},
          clozeHtml:`<span>shin bone (larger of two lower leg bones) #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "tibia", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
      {
          headerImage:{},
          clozeHtml:`<span>smaller of two lower leg bones #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "fibula", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
      
      {
          headerImage:{},
          clozeHtml:`<span>three parts of the pelvis #cloze1#, #cloze2# and #cloze3#</span>`,
          clozes:{
            cloze1:{correctValue: "ilium", clozelabel:"fill in the blank"},
           cloze2:{correctValue: "ischium", clozelabel:"fill in the blank"},
           cloze3:{correctValue: "pubis", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
      
      {
          headerImage:{},
          clozeHtml:`<span>bones between the tarsals and phalanges #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "metatarsals", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
      
      
      ],
      correctFeedback: `All of your answers are correct.`,
      partialFeedback: `You have one or more incorrect answers.`,
      incorrectFeedback: `Your answers are incorrect.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
        group28: {
      id: "group28",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group28_placeholder",
      items: [
        {
          
          headerImage:{},
          clozeHtml:`<span>pertaining to the shoulder blade #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "scapular", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>instrument to cut the skull #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "craniotome", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>pertaining to the upper arm bone #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "humeral", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>pertaining to below the kneecap #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "infrapatellar or subpatellar", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>softening of cartilage #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "chondromalacia", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>pertaining to a toe bone #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "phalangeal", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>removal of hand bones #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "metacarpectomy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>pertaining to the shin bone #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "tibial", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>pertaining to the heel bone #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "calcaneal", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>poor bone development #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "osteodystrophy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>removal of the lamina of the vertebral arch #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "laminectomy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>pertaining to the sacrum and ilium #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "sacroiliac", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
      
      ],
      correctFeedback: `All of your answers are correct.`,
      partialFeedback: `You have one or more incorrect answers.`,
      incorrectFeedback: `Your answers are incorrect.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
    group29: {
      id: "group29",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group29_placeholder",
      items: [
        {
          
          headerImage:{},
          clozeHtml:`<span>formation of bone marrow #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "myelopoiesis", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>clubfoot #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "talipes (equinovarus)", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>humpback #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "kyphosis", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>high levels of calcium in the blood #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "hypercalcemia", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>benign tumors arising from the bone surface #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "exostoses", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>brittle bone disease #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "osteogenesis imperfecta", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>lateral curvature of the spine #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "scoliosis", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>anterior curvature of the spine #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "lordosis", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>forward slipping (subluxation) of a vertebra over a lower vertebra #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "spondylolisthesis", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>instrument to cut bone #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "osteotome", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
      
      ],
      correctFeedback: `All of your answers are correct.`,
      partialFeedback: `You have one or more incorrect answers.`,
      incorrectFeedback: `Your answers are incorrect.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
       group30: {
      id: "group30",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group30_placeholder",
      items: [
        {
          
          headerImage:{},
          clozeHtml:`<span>Immovable joint, as in the skull bones, is called a #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "suture joint; a synovial joint is a freely movable joint", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>Connective tissue that binds muscles to bones is a/an #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "tendon", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>Another term for a joint is a/an #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "articulation", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>Connective tissue that binds bones to other bones is a/an #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "ligament", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>Fluid found in a joint is called #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "synovial fluid", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>The membrane that lines the joint cavity is the #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "synovial membrane", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>Sac of fluid near a joint is a/an #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "bursa", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>Smooth cartilage that covers the surface of bones at joints is #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "articular cartilage", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>Surgical repair of a joint is called #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "arthroplasty", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>Inflammation surrounding a joint is known as #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "periarthritis", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
      
      ],
      correctFeedback: `All of your answers are correct.`,
      partialFeedback: `You have one or more incorrect answers.`,
      incorrectFeedback: `Your answers are incorrect.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
        group31: {
      id: "group31",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group31_placeholder",
      items: [
        {
          
          headerImage:{},
          clozeHtml:`<span>Abnormal condition of a tendon: #cloze1# osis</span>`,
          clozes:{
            cloze1:{correctValue: "tendin", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>tumor (benign) of cartilage: #cloze1# oma</span>`,
          clozes:{
            cloze1:{correctValue: "chondr", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>tumor (malignant) of cartilage: #cloze1# oma</span>`,
          clozes:{
            cloze1:{correctValue: "chondrosarc", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>incision of a joint: arthr #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "arthrotomy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>softening of cartilage: chondro #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "chondromalacia", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>abnormal condition of blood in the joint: #cloze1# osis</span>`,
          clozes:{
            cloze1:{correctValue: "hemarthr", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>inflammation of a sac of fluid near the joint: #cloze1# itis</span>`,
          clozes:{
            cloze1:{correctValue: "burs", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>doctor who specializes in treatment of joint disorders: #cloze1# logist</span>`,
          clozes:{
            cloze1:{correctValue: "rheumatolog", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>abnormal condition of a stiffened, immobile joint: #cloze1# osis</span>`,
          clozes:{
            cloze1:{correctValue: "ankyl", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>suture of a tendon: ten #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "tenorrhaphy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
      
      ],
      correctFeedback: `All of your answers are correct.`,
      partialFeedback: `You have one or more incorrect answers.`,
      incorrectFeedback: `Your answers are incorrect.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
        group32: {
      id: "group32",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group32_placeholder",
      items: [
        {
          
          headerImage:{},
          clozeHtml:`<span>ROM #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "range of motion", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>NSAID #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "nonsteroidal anti-inflammatory drug", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>TMJ #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "temporomandibular joint", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>EMG #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "electromyography", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>ACL #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "anterior cruciate ligament", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>SLE #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "systemic lupus erythematosus", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>C1 to C5 #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "first cervical vertebra to fifth cervical vertebra", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>T1 to T12 #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "first thoracic vertebra to twelfth thoracic vertebra", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>THR #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "total hip replacement", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>ORIF #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "open reduction, internal fixation", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
      
      ],
      correctFeedback: `All of your answers are correct.`,
      partialFeedback: `You have one or more incorrect answers.`,
      incorrectFeedback: `Your answers are incorrect.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
    group33: {
      id: "group33",
      type: "reflective_writing", //Fill-in-the-Blank
      placeholder_id: "group33_placeholder",
      items: [
       {
          title: `foramen magnum`,
          feedback: `<span>opening of the occipital bone through which the spinal cord passes</span>`,
        },
        {
          title: `calcaneus`,
          feedback: `<span>heel bone; largest of the tarsal bones in the hind foot</span>`,
        },
        {
          title: `acromion`,
          feedback: `<span>lateral extension of the scapula</span>`,
        },
        {
          title: `xiphoid process`,
          feedback: `<span>lowest portion of the sternum</span>`,
        },
        {
          title: `lamina`,
          feedback: `<span>portion of the vertebral arch</span>`,
        },
        {
          title: `malleolus`,
          feedback: `<span>the bulge on either side of the ankle joint; the lower end of the fibula is the lateral malleolus, and the lower end of the tibia is the medial malleolus</span>`,
        },
        {
          title: `acetabulum`,
          feedback: `<span>depression in the pelvis into which the femur fits</span>`,
        },
        {
          title: `pubic symphysis`,
          feedback: `<span>area of convergence of the two pubis bones, at the midline</span>`,
        },
        {
          title: `olecranon`,
          feedback: `<span>bony process at the proximal end of the ulna; the point of the elbow joint</span>`,
        },
        {
          title: `fontanelle`,
          feedback: `<span>soft spot between the bones of the skull in an infant</span>`,
        },
        {
          title: `mastoid process`,
          feedback: `<span>round process on the temporal bone behind the ear</span>`,
        },
        {
          title: `styloid process`,
          feedback: `<span>pole-like process projecting downward from the temporal bone</span>`,
        },
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
    group34: {
      id: "group34",
      type: "reflective_writing", //Fill-in-the-Blank
      placeholder_id: "group34_placeholder",
      items: [
        
        {
          title: `osteogenesis`,
          feedback: `<span>formation of bone; osteogenesis imperfecta is known as brittle bone disease</span>`,
        },
        {
          title: `hypercalcemia`,
          feedback: `<span>excessive calcium in the blood</span>`,
        },
        {
          title: `spondylosis`,
          feedback: `<span>abnormal condition of the vertebrae; degenerative changes in the spine</span>`,
        },
        {
          title: `epiphyseal`,
          feedback: `<span>pertaining to the epiphysis</span>`,
        },
          {
          title: `decalcification`,
          feedback: `<span>removal of calcium from bones</span>`,
        },
          {
          title: `ossification`,
          feedback: `<span>formation of bone</span>`,
        },
          {
          title: `osteitis`,
          feedback: `<span>inflammation of bone; osteitis deformans (Paget disease) causes deformed bones such as an enlarged skull</span>`,
        },
          {
          title: `costoclavicular`,
          feedback: `<span>pertaining to the ribs and clavicle</span>`,
        },
        
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
        group35: {
      id: "group35",
      type: "reflective_writing", //Fill-in-the-Blank
      placeholder_id: "group35_placeholder",
      items: [
      
        {
          title: `Increased bone porosity and decreased bone density`,
          feedback: `<span>osteoporosis</span>`,
        },
        {
          title: `Inflammation (infection) of bone and bone marrow`,
          feedback: `<span>osteomyelitis</span>`,
        },
        {
          title: `Rare malignant tumor of bone in children`,
          feedback: `<span>Ewing sarcoma</span>`,
        },
        {
          title: `Crackling sensation as worn out bones move against each other`,
          feedback: `<span>crepitus</span>`,
        },
        {
          title: `Softening of bones`,
          feedback: `<span>osteomalacia</span>`,
        },
         {
          title: `Collection of pus`,
          feedback: `<span>abscess</span>`,
        },
         {
          title: `Deficiency of bone`,
          feedback: `<span>osteopenia</span>`,
        },
         {
          title: `Malignant tumor that spreads to bone from the breast, lung, thyroid, kidney, or prostate gland`,
          feedback: `<span>metastatic bone lesion</span>`,
        },
         {
          title: `Break in bone with wound in skin`,
          feedback: `<span>compound/open fracture</span>`,
        },
         {
          title: `Break in bone without wound in skin`,
          feedback: `<span>simple/closed fracture</span>`,
        },
         {
          title: `Bone is put in proper place after surgical incision of the skin`,
          feedback: `<span>open reduction</span>`,
        },
         
       
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
        group36: {
      id: "group36",
      type: "reflective_writing", //Fill-in-the-Blank
      placeholder_id: "group36_placeholder",
      items: [
      
        {
          title: `subluxation`,
          feedback: `<span>partial or incomplete displacement of a bone from the joint</span>`,
        },
        {
          title: `arthrodesis`,
          feedback: `<span>surgical fixation of a joint (binding it together by fusing the joint surfaces)</span>`,
        },
        {
          title: `pyrexia`,
          feedback: `<span>fever; increase in body temperature</span>`,
        },
        {
          title: `podagra`,
          feedback: `<span>pain in a big toe from gouty arthritis</span>`,
        },
        {
          title: `sciatica`,
          feedback: `<span>pain radiating from the back to the leg (along the sciatic nerve); most commonly caused by a protruding intervertebral disc</span>`,
        },
         {
          title: `herniation of an intervertebral disc`,
          feedback: `<span>protrusion of a disc into the neural canal or the spinal nerves</span>`,
        },
         {
          title: `laminectomy`,
          feedback: `<span>removal of a portion of the vertebral arch (lamina) to relieve pressure from a protruding intervertebral disc</span>`,
        },
         {
          title: `sprain`,
          feedback: `<span>trauma to a joint with pain, swelling, and injury to ligaments</span>`,
        },
         {
          title: `strain`,
          feedback: `<span>overstretching of a muscle</span>`,
        },
         {
          title: `hyperuricemia`,
          feedback: `<span>high levels of uric acid in the bloodstream; present in gouty arthritis</span>`,
        },
         {
          title: `fasciotomy `,
          feedback: `<span>incision of fascia</span>`,
        },
        
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
        group37: {
      id: "group37",
      type: "reflective_writing", //Fill-in-the-Blank
      placeholder_id: "group37_placeholder",
      items: [
      
        {
          title: `leiomyosarcoma`,
          feedback: `<span>malignant tumor of smooth (involuntary, visceral) muscle</span>`,
        },
        {
          title: `rhabdomyoma`,
          feedback: `<span>benign tumor of striated (voluntary, skeletal) muscle</span>`,
        },
        {
          title: `polymyositis`,
          feedback: `<span>inflammation of many muscles; polymyositis rheumatica is a chronic inflammatory condition causing muscle weakness and pain</span>`,
        },
        {
          title: `fibromyalgia`,
          feedback: `<span>pain of muscle and fibrous tissue (especially of the back); also called fibrositis</span>`,
        },
        {
          title: `muscular dystrophy`,
          feedback: `<span>group of inherited muscular diseases marked by progressive weakness and degeneration of muscles without nerve involvement</span>`,
        },
         {
          title: `myasthenia gravis`,
          feedback: `<span>loss of strength of muscles (often with paralysis) because of a defect at the connection between the nerve and the muscle cell</span>`,
        },
         {
          title: `amyotrophic lateral sclerosis`,
          feedback: `<span>muscles degenerate (paralysis occurs) owing to degeneration of nerves in the spinal cord and lower region of the brain; Lou Gehrig disease</span>`,
        },
         {
          title: `sarcopenia`,
          feedback: `<span>deficiency of flesh (muscle mass)</span>`,
        },
         
       
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
  },
};