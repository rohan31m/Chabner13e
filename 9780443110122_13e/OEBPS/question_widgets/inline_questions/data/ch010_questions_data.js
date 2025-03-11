const questions_data = {
  sharedProperties: {
    maxWidth: "960px", //"100%", "90%", "760px", "1024px"
    alignment: "center", //"center", "left"
  },
  question_groups: {
    group1: {
      id: "group1",
      type: "accordian",
      placeholder_id: "ch10group1_placeholder",
      items: [
        {
            title: `alges/o`,
            explanation: `sensitivity to pain`,
        },
        {
            title: `angi/o`,
            explanation: `vessel (blood)`,
        },
        {
            title: `caus/o`,
            explanation: `burn; burning`,
        },
        {
            title: `cephal/o`,
            explanation: `head`,
        },
        {
            title: `cerebell/o`,
            explanation: `cerebellum (posterior part of the brain)`,
        },
        {
            title: `cerebr/o`,
            explanation: `cerebrum (largest part of the brain)`,
        },
        {
            title: `comat/o`,
            explanation: `deep sleep`,
        },
        {
            title: `crani/o`,
            explanation: `skull`,
        },
        {
            title: `cry/o`,
            explanation: `cold`,
        },
        {
            title: `dur/o`,
            explanation: `dura mater`,
        },
        {
            title: `encephal/o`,
            explanation: `brain`,
        },
        {
            title: `esthesi/o`,
            explanation: `nervous sensation (feeling)`,
        },
        {
            title: `gli/o`,
            explanation: `glial cells; neuroglial cells (supportive tissue of nervous system)`,
        },
        {
            title: `hydr/o`,
            explanation: `water`,
        },
        {
            title: `kines/o, kinesi/o`,
            explanation: `movement`,
        },
        {
            title: `lex/o`,
            explanation: `word; phrase`,
        },
        {
            title: `mening/o, meningi/o`,
            explanation: `meninges`,
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
            title: `narc/o`,
            explanation: `numbness; stupor; sleep`,
        },
        {
            title: `neur/o`,
            explanation: `nerve`,
        },
        {
            title: `olig/o`,
            explanation: `scanty`,
        },
        {
            title: `pont/o`,
            explanation: `pons (a part of the brain)`,
        },
        {
            title: `radicul/o`,
            explanation: `nerve root`,
        },
        {
            title: `spin/o`,
            explanation: `spine (backbone)`,
        },
        {
            title: `syncop/o`,
            explanation: `to cut off, cut short; faint`,
        },
        {
            title: `tax/o`,
            explanation: `order; coordination`,
        },
        {
            title: `thalam/o`,
            explanation: `thalamus`,
        },
        {
            title: `thec/o`,
            explanation: `sheath`,
        },
        {
            title: `troph/o`,
            explanation: `nourishment; development`,
        },
        {
            title: `vag/o`,
            explanation: `vagus nerve`,
        },
      ],
      titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
      itemSeperator: "false",
    },
    group2: {
      id: "group2",
      type: "accordian",
      placeholder_id: "ch10group2_placeholder",
      items: [
        {
          title: `a-, an-`,
          explanation: `no; not; without`,
        },
        {
          title: `dys-`,
          explanation: `bad; painful; difficult; abnormal`,
        },
        {
          title: `epi-`,
          explanation: `above; upon; on`,
      },
      {
          title: `hemi-`,
          explanation: `half`,
        },
        {
          title: `hyper-`,
          explanation: `above; excessive`,
        },
        {
          title: `hypo-`,
          explanation: `deficient; below; under; less than normal`,
      },
      {
          title: `intra-`,
          explanation: `within; into`,
        },
        {
          title: `micro-`,
          explanation: `small`,
        },
        {
          title: `para-`,
          explanation: `near; beside; abnormal; apart from; along the side of`,
      },
      {
          title: `polio-`,
          explanation: `gray matter (of brain or spinal cord)`,
        },
        {
          title: `poly-`,
          explanation: `many; much; increased`,
        },
        {
          title: `quadri-`,
          explanation: `four`,
      },
      {
          title: `sub-`,
          explanation: `under; below`,
        },
      
      ],
      titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
      itemSeperator: "false",
    },
    group3: {
      id: "group3",
      type: "accordian", 
      placeholder_id: "ch10group3_placeholder",
      items: [
        {
            title: `-algesia`,
            explanation: `sensitivity to pain`,
        },
        {
          title: `-algia`,
          explanation: `pain`,
        },
        {
          title: `-blast`,
          explanation: `embryonic; immature cell`,
        },
        {
          title: `-cele`,
          explanation: `hernia`,
        },
        {
          title: `-esthesia`,
          explanation: `nervous sensation (feeling)`,
        },
        {
            title: `-gram`,
            explanation: `record`,
        },
        {
          title: `-graphy`,
          explanation: `process of recording`,
        },
        {
          title: `-ine`,
          explanation: `pertaining to`,
        },
        {
          title: `-itis`,
          explanation: `inflammation`,
        },
        {
          title: `-kinesia, -kinesis`,
          explanation: `movement`,
        },
        {
            title: `-kinetic`,
            explanation: `pertaining to movement`,
        },
        {
          title: `-lepsy`,
          explanation: `seizure`,
        },
        {
          title: `-oma`,
          explanation: `tumor; mass; fluid collection`,
        },
        {
          title: `-ose`,
          explanation: `full of; pertaining to; sugar`,
        },
        {
          title: `-paresis`,
          explanation: `weakness`,
        },
        {
            title: `-pathy`,
            explanation: `disease; emotion`,
          },
          {
            title: `-phagia`,
            explanation: `condition of eating; swallowing`,
          },
          {
            title: `-phasia`,
            explanation: `speech`,
          },
          {
            title: `-plegia`,
            explanation: `paralysis; palsy`,
          },
          {
            title: `-praxia`,
            explanation: `action`,
          },
          {
            title: `-ptosis`,
            explanation: `falling; drooping; prolapse`,
          },
          {
            title: `-sclerosis`,
            explanation: `hardening`,
          },
          {
            title: `-sthenia`,
            explanation: `strength`,
          },
          {
            title: `-tomy`,
            explanation: `process of cutting`,
          },
          {
            title: `-trophy`,
            explanation: `nourishment; development (condition of)`,
          },
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
    group4: {
      id: "group4",
      type: "accordian",
      placeholder_id: "ch10group4_placeholder",
      items: [
                {
            title: `acetylcholine`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/acetylcholine.mp3`,
            explanation: `a-seh-til-KO-leen`,
        },
        {
            title: `afferent nerves`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/afferent_nerves.mp3`,
            explanation: `AH-fer-entnervz`,
        },
        {
            title: `akinetic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/akinetic.mp3`,
            explanation: `a-kih-NET-ik`,
        },
        {
            title: `analgesia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/analgesia.mp3`,
            explanation: `ah-nal-JE-ze-ah`,
        },
        {
            title: `anencephaly`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/anencephaly.mp3`,
            explanation: `an-en-SEH-fah-le`,
        },
        {
            title: `anesthesia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/anesthesia.mp3`,
            explanation: `an-es-THE-ze-ah`,
        },
        {
            title: `aphasia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/aphasia.mp3`,
            explanation: `ah-FA-ze-ah`,
        },
        {
            title: `apraxia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/apraxia.mp3`,
            explanation: `a-PRAK-se-ah`,
        },
        {
            title: `arachnoid membrane`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/arachnoid_membrane.mp3`,
            explanation: `ah-RAK-noydMEM-brayn`,
        },
        {
            title: `astrocyte`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/astrocyte.mp3`,
            explanation: `AS-tro-site`,
        },
        {
            title: `ataxia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ataxia.mp3`,
            explanation: `a-TAK-se-ah`,
        },
        {
            title: `autonomic nervous system`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/autonomic_nervous_system.mp3`,
            explanation: `aw-to-NOM-ikNER-vusSIS-tem`,
        },
        {
            title: `axon`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/axon.mp3`,
            explanation: `AKS-on`,
        },
        {
            title: `blood-brain barrier`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/blood-brain_barrier.mp3`,
            explanation: `blud-BRAYNBAH-re-er`,
        },
        {
            title: `bradykinesia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/bradykinesia.mp3`,
            explanation: `bra-de-kih-NE-se-ah`,
        },
        {
            title: `brainstem`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/brainstem.mp3`,
            explanation: `BRAYN-stem`,
        },
        {
            title: `cauda equina`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cauda_equina.mp3`,
            explanation: `KAW-daheh-KWI-nah`,
        },
        {
            title: `causalgia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/causalgia.mp3`,
            explanation: `kaw-ZAL-jah`,
        },
        {
            title: `cell body`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cell_body.mp3`,
            explanation: `sel BOD-e`,
        },
        {
            title: `central nervous system`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/central_nervous_system.mp3`,
            explanation: `SEN-tralNER-vusSIS-tem`,
        },
        {
            title: `cephalgia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cephalgia.mp3`,
            explanation: `seh-FAL-jah`,
        },
        {
            title: `cerebellar`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cerebellar.mp3`,
            explanation: `seh-reh-BEL-ar`,
        },
        {
            title: `cerebellopontine`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cerebellopontine.mp3`,
            explanation: `seh-reh-bel-o-PON-teen`,
        },
        {
            title: `cerebellum`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cerebellum.mp3`,
            explanation: `seh-reh-BEL-um`,
        },
        {
            title: `cerebral cortex`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cerebral_cortex.mp3`,
            explanation: `seh-RE-bralKOR-teks`,
        },
        {
            title: `cerebrospinal fluid`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cerebrospinal_fluid.mp3`,
            explanation: `seh-re-bro-SPI-nalFLU-id`,
        },
        {
            title: `cerebrum`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cerebrum.mp3`,
            explanation: `seh-RE-brum`,
        },
        {
            title: `coma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/coma.mp3`,
            explanation: `KO-mah`,
        },
        {
            title: `comatose`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/comatose.mp3`,
            explanation: `KO-mah-tohs`,
        },
        {
            title: `cranial nerves`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cranial_nerves.mp3`,
            explanation: `KRA-ne-alnervz`,
        },
        {
            title: `dendrite`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/dendrite.mp3`,
            explanation: `DEN-drite`,
        },
        {
            title: `dura mater`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/dura_mater.mp3`,
            explanation: `DUR-ahMAH-ter`,
        },
        {
            title: `dyskinesia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/dyskinesia.mp3`,
            explanation: `dis-kih-NE-ze-ah`,
        },
        {
            title: `dyslexia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/dyslexia.mp3`,
            explanation: `dis-LEK-se-ah`,
        },
        {
            title: `efferent nerves`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/efferent_nerves.mp3`,
            explanation: `EH-fer-entnervz`,
        },
        {
            title: `encephalitis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/encephalitis.mp3`,
            explanation: `en-seh-fah-LI-tis`,
        },
        {
            title: `encephalopathy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/encephalopathy.mp3`,
            explanation: `en-seh-fah-LOP-ah-the`,
        },
        {
            title: `ependymal cell`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ependymal_cell.mp3`,
            explanation: `eh-PEN-dih-malsel`,
        },
        {
            title: `epidural hematoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/epidural_hematoma.mp3`,
            explanation: `ep-eh-DU-ralhe-mah-TO-mah`,
        },
        {
            title: `ganglion; pl. ganglia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ganglion;_pl._ganglia.mp3`,
            explanation: `GANG-le-on;GANG-le-ah`,
        },
        {
            title: `glial cell`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/glial_cell.mp3`,
            explanation: `GLE-alsel`,
        },
        {
            title: `glioblastoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/glioblastoma.mp3`,
            explanation: `gli-o-blah-STO-mah`,
        },
        {
            title: `gyrus; pl. gyri`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/gyrus;_pl._gyri.mp3`,
            explanation: `JI-rus; JI-re`,
        },
        {
            title: `hemiparesis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hemiparesis.mp3`,
            explanation: `hem-e-pah-RE-sis`,
        },
        {
            title: `hemiplegia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hemiplegia.mp3`,
            explanation: `hem-e-PLE-jah`,
        },
        {
            title: `hypalgesia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypalgesia.mp3`,
            explanation: `hi-pal-GE-ze-ah`,
        },
        {
            title: `hyperesthesia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hyperesthesia.mp3`,
            explanation: `hi-per-es-THE-ze-ah`,
        },
        {
            title: `hyperkinesis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hyperkinesis.mp3`,
            explanation: `hi-per-kih-NE-sis`,
        },
        {
            title: `hypothalamus`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypothalamus.mp3`,
            explanation: `hi-po-THAL-ah-mus`,
        },
        {
            title: `intrathecal injection`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/intrathecal_injection.mp3`,
            explanation: `in-trah-THE-kalin-JEK-shun`,
        },
        {
            title: `leptomeningitis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/leptomeningitis.mp3`,
            explanation: `lep-to-men-in-JI-tis`,
        },
        {
            title: `medulla oblongata`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/medulla_oblongata.mp3`,
            explanation: `meh-DUL-ahob-lon-GAH-tah`,
        },
        {
            title: `meningeal`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/meningeal.mp3`,
            explanation: `meh-NIN-je-al`,
        },
        {
            title: `meninges`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/meninges.mp3`,
            explanation: `meh-NIN-jeez`,
        },
        {
            title: `meningioma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/meningioma.mp3`,
            explanation: `meh-nin-je-O-mah`,
        },
        {
            title: `microglial cell`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/microglial_cell.mp3`,
            explanation: `mi-kro-GLE-alsel`,
        },
        {
            title: `midbrain`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/midbrain.mp3`,
            explanation: `MID-brayn`,
        },
        {
            title: `motor nerve`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/motor_nerve.mp3`,
            explanation: `MO-ternerv`,
        },
        {
            title: `myelin sheath`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/myelin_sheath.mp3`,
            explanation: `MI-eh-linsheeth`,
        },
        {
            title: `myelomeningocele`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/myelomeningocele.mp3`,
            explanation: `mi-eh-lo-meh-NIN-jo-seel`,
        },
        {
            title: `myelopathy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/myelopathy.mp3`,
            explanation: `mi-el-OP-ah-the`,
        },
        {
            title: `myoneural`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/myoneural.mp3`,
            explanation: `mi-o-NUR-al`,
        },
        {
            title: `narcolepsy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/narcolepsy.mp3`,
            explanation: `NAR-ko-lep-se`,
        },
        {
            title: `nerve`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/nerve.mp3`,
            explanation: `nerv`,
        },
        {
            title: `neuralgia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/neuralgia.mp3`,
            explanation: `nu-RAL-jah`,
        },
        {
            title: `neurasthenia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/neurasthenia.mp3`,
            explanation: `nu-ras-THE-ne-ah`,
        },
        {
            title: `neuroglial cells`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/neuroglial_cells.mp3`,
            explanation: `nu-ro-GLE-alselz`,
        },
        {
            title: `neuron`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/neuron.mp3`,
            explanation: `NU-ron`,
        },
        {
            title: `neuropathy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/neuropathy.mp3`,
            explanation: `nu-ROP-ah-the`,
        },
        {
            title: `neurotransmitter`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/neurotransmitter.mp3`,
            explanation: `nu-ro-TRANZ-mit-er`,
        },
        {
            title: `oligodendroglial cell`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/oligodendroglial_cell.mp3`,
            explanation: `ol-ih-go-den-dro-GLE-alsel`,
        },
        {
            title: `paraplegia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/paraplegia.mp3`,
            explanation: `par-ah-PLE-jah`,
        },
        {
            title: `parasympathetic nerves`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/parasympathetic_nerves.mp3`,
            explanation: `par-ah-sim-pah-THET-iknervz`,
        },
        {
            title: `parenchyma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/parenchyma.mp3`,
            explanation: `pah-REN-kih-mah`,
        },
        {
            title: `paresis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/paresis.mp3`,
            explanation: `pah-RE-sis`,
        },
        {
            title: `paresthesia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/paresthesia.mp3`,
            explanation: `pah-res-THE-ze-ah`,
        },
        {
            title: `peripheral nervous system`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/peripheral_nervous_system.mp3`,
            explanation: `peh-RIF-er-alNER-vus SIS-tem`,
        },
        {
            title: `pia mater`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pia_mater.mp3`,
            explanation: `PE-ahMAH-ter`,
        },
        {
            title: `plexus`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/plexus.mp3`,
            explanation: `PLEK-sus`,
        },
        {
            title: `poliomyelitis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/poliomyelitis.mp3`,
            explanation: `po-le-o-mi-eh-LI-tis`,
        },
        {
            title: `polyneuritis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/polyneuritis.mp3`,
            explanation: `pol-e-nu-RI-tis`,
        },
        {
            title: `pons`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pons.mp3`,
            explanation: `ponz`,
        },
        {
            title: `quadriplegia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/quadriplegia.mp3`,
            explanation: `kwod-rih-PLE-jah`,
        },
        {
            title: `radiculitis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/radiculitis.mp3`,
            explanation: `rah-dik-u-LI-tis`,
        },
        {
            title: `radiculopathy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/radiculopathy.mp3`,
            explanation: `rah-dik-u-LOP-ah-the`,
        },
        {
            title: `receptor`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/receptor.mp3`,
            explanation: `re-SEPT-or`,
        },
        {
            title: `sciatic nerve`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sciatic_nerve.mp3`,
            explanation: `si-AH-tiknerv`,
        },
        {
            title: `sciatica`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sciatica.mp3`,
            explanation: `si-AH-tih-kah`,
        },
        {
            title: `sensory nerve`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sensory_nerve.mp3`,
            explanation: `SEN-sor-enerv`,
        },
        {
            title: `spinal nerves`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/spinal_nerves.mp3`,
            explanation: `SPI-nalnervz`,
        },
        {
            title: `stimulus`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/stimulus.mp3`,
            explanation: `STIM-u-lus`,
        },
        {
            title: `stroma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/stroma.mp3`,
            explanation: `STRO-mah`,
        },
        {
            title: `subdural hematoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/subdural_hematoma.mp3`,
            explanation: `sub-DU-ralhe-mah-TO-mah`,
        },
        {
            title: `sulcus; pl. sulci`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sulcus;_pl._sulci.mp3`,
            explanation: `SUL-kus; SUL-si`,
        },
        {
            title: `sympathetic nerves`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sympathetic_nerves.mp3`,
            explanation: `sim-pah-THET-iknervz`,
        },
        {
            title: `synapse`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/synapse.mp3`,
            explanation: `SIN-aps`,
        },
        {
            title: `syncopal`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/syncopal.mp3`,
            explanation: `SIN-ko-pal`,
        },
        {
            title: `syncope`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/syncope.mp3`,
            explanation: `SIN-ko-pe`,
        },
        {
            title: `thalamic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thalamic.mp3`,
            explanation: `THAL-ah-mik`,
        },
        {
            title: `thalamus`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thalamus.mp3`,
            explanation: `THAL-ah-mus`,
        },
        {
            title: `trigeminal neuralgia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/trigeminal_neuralgia.mp3`,
            explanation: `tri-JEM-in-alnu-RAL-jah`,
        },
        {
            title: `vagal`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/vagal.mp3`,
            explanation: `VA-gal`,
        },
        {
            title: `vagus nerve`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/vagus_nerve.mp3`,
            explanation: `VA-gusnerv`,
        },
        {
            title: `ventricles of the brain`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ventricles_of_the_brain.mp3`,
            explanation: `VEN-trih-kulzofthe brayn`,
        },
      ],
      titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
      itemSeperator: "false",
    },
    group5: {
      id: "group5",
      type: "accordian",
      placeholder_id: "ch10group5_placeholder",
      items: [
        {
            title: `absence seizure`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/absence_seizure.mp3`,
            explanation: `AB-sensSE-zhur`,
        },
        {
            title: `Alzheimer disease`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/Alzheimer_disease.mp3`,
            explanation: `ALZ-hi-merdih-ZEEZ`,
        },
        {
            title: `amyotrophic lateral sclerosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/amyotrophic_lateral_sclerosis.mp3`,
            explanation: `a-mi-o-TRO-fikLAH-ter-al skleh-RO-sis`,
        },
        {
            title: `aneurysm`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/aneurysm.mp3`,
            explanation: `AN-ur-ih-zim`,
        },
        {
            title: `astrocytoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/astrocytoma.mp3`,
            explanation: `as-tro-si-TO-mah`,
        },
        {
            title: `aura`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/aura.mp3`,
            explanation: `AW-rah`,
        },
        {
            title: `Bell palsy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/Bell_palsy.mp3`,
            explanation: `belPAWL-ze`,
        },
        {
            title: `brain tumor`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/brain_tumor.mp3`,
            explanation: `BRAYNTU-mor`,
        },
        {
            title: `cerebral angiography`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cerebral_angiography.mp3`,
            explanation: `seh-RE-bralan-je-OG-rah-fe`,
        },
        {
            title: `cerebral concussion`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cerebral_concussion.mp3`,
            explanation: `seh-RE-bralkon-KUH-shun`,
        },
        {
            title: `cerebral contusion`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cerebral_contusion.mp3`,
            explanation: `seh-RE-bralkon-TU-shun`,
        },
        {
            title: `cerebral hemorrhage`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cerebral_hemorrhage.mp3`,
            explanation: `seh-RE-bralHEM-or-ij`,
        },
        {
            title: `cerebral palsy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cerebral_palsy.mp3`,
            explanation: `seh-RE-bralPAWL-ze`,
        },
        {
            title: `cerebrospinal fluid analysis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cerebrospinal_fluid_analysis.mp3`,
            explanation: `seh-re-bro-SPI-nalFLU-id ah-NAH-lih-sis`,
        },
        {
            title: `cerebrovascular accident`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cerebrovascular_accident.mp3`,
            explanation: `seh-re-bro-VAS-cu-larAK-sih-dent`,
        },
        {
            title: `computed tomography`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/computed_tomography.mp3`,
            explanation: `kom-PU-tedto-MOG-rah-fe`,
        },
        {
            title: `dementia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/dementia.mp3`,
            explanation: `de-MEN-she-ah`,
        },
        {
            title: `demyelination`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/demyelination.mp3`,
            explanation: `de-mi-eh-lih-NA-shun`,
        },
        {
            title: `dopamine`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/dopamine.mp3`,
            explanation: `DO-pah-meen`,
        },
        {
            title: `Doppler ultrasound studies`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/Doppler_ultrasound_studies.mp3`,
            explanation: `DOP-lerUL-trah-sound STUD-eez`,
        },
        {
            title: `electroencephalography`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/electroencephalography.mp3`,
            explanation: `eh-lek-tro-en-sef-al-OG-rah-fe`,
        },
        {
            title: `embolus`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/embolus.mp3`,
            explanation: `EM-bo-lus`,
        },
        {
            title: `epilepsy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/epilepsy.mp3`,
            explanation: `EP-ih-lep-se`,
        },
        {
            title: `gait`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/gait.mp3`,
            explanation: `gate`,
        },
        {
            title: `glioblastoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/glioblastoma.mp3`,
            explanation: `gle-o-blah-STO-mah`,
        },
        {
            title: `herpes zoster`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/herpes_zoster.mp3`,
            explanation: `HER-peezZOS-ter`,
        },
        {
            title: `HIV encephalopathy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/HIV_encephalopathy.mp3`,
            explanation: `HIV en-seh-fal-OP-ah-the`,
        },
        {
            title: `Huntington disease`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/Huntington_disease.mp3`,
            explanation: `HUN-ting-tondih-ZEEZ`,
        },
        {
            title: `hydrocephalus`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hydrocephalus.mp3`,
            explanation: `hi-dro-SEH-fah-lus`,
        },
        {
            title: `ictal event`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ictal_event.mp3`,
            explanation: `IK-tale-VENT`,
        },
        {
            title: `lumbar puncture`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/lumbar_puncture.mp3`,
            explanation: `LUM-barPUNK-shur`,
        },
        {
            title: `magnetic resonance imaging`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/magnetic_resonance_imaging.mp3`,
            explanation: `mag-NET-ikREH-zo-nants IM-aj-ing`,
        },
        {
            title: `meningitis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/meningitis.mp3`,
            explanation: `meh-nin-JI-tis`,
        },
        {
            title: `meningocele`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/meningocele.mp3`,
            explanation: `meh-NIN-jo-seel`,
        },
        {
            title: `migraine`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/migraine.mp3`,
            explanation: `MI-grane`,
        },
        {
            title: `multiple sclerosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/multiple_sclerosis.mp3`,
            explanation: `MUL-tih-pelskleh-RO-sis`,
        },
        {
            title: `myasthenia gravis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/myasthenia_gravis.mp3`,
            explanation: `mi-as-THE-ne-ahGRAV-is`,
        },
        {
            title: `occlusion`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/occlusion.mp3`,
            explanation: `o-KLU-zhun`,
        },
        {
            title: `palliative`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/palliative.mp3`,
            explanation: `PAH-le-ah-tiv`,
        },
        {
            title: `palsy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/palsy.mp3`,
            explanation: `PAWL-ze`,
        },
        {
            title: `Parkinson disease`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/Parkinson_disease.mp3`,
            explanation: `PAR-kin-sundih-ZEEZ`,
        },
        {
            title: `positron emission tomography`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/positron_emission_tomography.mp3`,
            explanation: `POS-ih-trone-MIH-shun to-MOG-rah-fe`,
        },
        {
            title: `shingles`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/shingles.mp3`,
            explanation: `SHING-ulz`,
        },
        {
            title: `spina bifida`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/spina_bifida.mp3`,
            explanation: `SPI-naBIF-ih-dah`,
        },
        {
            title: `stereotactic radiosurgery`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/stereotactic_radiosurgery.mp3`,
            explanation: `steh-re-o-TAK-tikra-de-o-SUR-jer-e`,
        },
        {
            title: `thrombus`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thrombus.mp3`,
            explanation: `THROM-bus`,
        },
        {
            title: `tic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/tic.mp3`,
            explanation: `TIK`,
        },
        {
            title: `tonic-clonic seizure`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/tonic-clonic_seizure.mp3`,
            explanation: `TON-ik-KLON-ikSE-zhur`,
        },
        {
            title: `Tourette syndrome`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/Tourette_syndrome.mp3`,
            explanation: `tur-ETSIN-drohm`,
        },
        {
            title: `transient ischemic attack`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/transient_ischemic_attack.mp3`,
            explanation: `TRAN-ze-entih-SKE-mik ah-TAK`,
        },

    ],
      titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
      itemSeperator: "false",
    },

    group6: {
      id: "group6",
      type: "dropdown",
      placeholder_id: "group6_placeholder",
      commonDropdownOptions:[
        "synapse",
        "terminal end fibers",
        "cell nucleus",
        "cell body",
        "myelin sheath",
        "dendrites",
        "Open heart surgery, or removal of lung tissue",
        "axon"
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "dendrites",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "cell body",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "cell nucleus",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "axon",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "myelin sheath",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "terminal end fibers",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "synapse",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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


    group7: {
      id: "group7",
      type: "dropdown",
      placeholder_id: "group7_placeholder",
      commonDropdownOptions:[
        "arachnoid membrane",
        "dura mater",
        "pia mater",
        "subarachnoid space",
        "subdural space"
        
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "dura mater",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "subdural space",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "arachnoid membrane",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "subarachnoid space",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pia mater",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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

group8: {
      id: "group8",
      type: "dropdown",
      placeholder_id: "group8_placeholder",
      commonDropdownOptions:[],
      items: [
        { 
         
          dropdownHtml:`<span>The patient was admitted with a history of: #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:["Right-sided paralysis caused by a previous stroke","Paralysis on the left side of his body","Increasing paresis on the right side of his body"],correctValue: "Increasing paresis on the right side of his body",dropdownlabel:"Select the type of view", useCommonOptions:"false"}
           
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
           { 
         
          dropdownHtml:`<span>The patient had experienced periods of: #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:["Aphasia and dyslexia","Dysplastic gait","Apraxia and aphasia"],correctValue: "Aphasia and dyslexia",dropdownlabel:"Select the type of view", useCommonOptions:"false"}
           
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
           { 
         
          dropdownHtml:`<span>After his admission to the hospital, where did the MRI show an abnormality? #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:["Right posterior region of the brain","Left and right sides of the brain","Left side of the brain"],correctValue: "Left side of the brain",dropdownlabel:"Select the type of view", useCommonOptions:"false"}
           
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
           { 
         
          dropdownHtml:`<span>What test or tests determined the final diagnosis? #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:["EEG for both sides of the brain","CSF analysis and cerebral angiography","MRI and MRA"],correctValue: "MRI and MRA",dropdownlabel:"Select the type of view", useCommonOptions:"false"}
           
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
           { 
         
          dropdownHtml:`<span>What was the final diagnosis? #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:["Stroke; ischemic injury to tissue in the left cerebrum caused by blockage of an artery","Cross-filling of blood vessels from the left to the right side of the brain","Cerebral palsy on the left side of the brain with cross-filling of two cerebral arteries"],correctValue: "Stroke; ischemic injury to tissue in the left cerebrum caused by blockage of an artery",dropdownlabel:"Select the type of view", useCommonOptions:"false"}
           
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        }
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },


    group9: {
      id: "group9",
      type: "dropdown",
      placeholder_id: "group9_placeholder",
      commonDropdownOptions:[],
      items: [
        { 
         
          dropdownHtml:`<span>The cervical MRI study showed: #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:["Damage to the vertebrae in the neck","Nerve entrapment in the upper spine","Damage to multiple peripheral nerves ","Normal vertebrae in the neck"],correctValue: "Normal vertebrae in the neck",dropdownlabel:"Select the type of view", useCommonOptions:"false"}
           
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
            { 
         
          dropdownHtml:`<span>Lancinating pain is: #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:["Pain to light touch","Characterized by paresthesia","Stabbing, piercing, shooting ","Characterized by numbness and tingling"],correctValue: "Stabbing, piercing, shooting",dropdownlabel:"Select the type of view", useCommonOptions:"false"}
           
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
         
          dropdownHtml:`<span>The patient’s diagnosis is best described as: #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:["Inflammation of cervical nerve roots affecting his shoulder and arm","Inflammation of a network of nerves in his shoulder that control muscles in his arm","First stages of a heart attack, marked by radiating arm pain ","Autoimmune disorder affecting voluntary muscles in his shoulder and arm"],correctValue: "Inflammation of a network of nerves in his shoulder that control muscles in his arm",dropdownlabel:"Select the type of view", useCommonOptions:"false"}
           
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        }
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },

    group10: {
      id: "group10",
      type: "dropdown",
      placeholder_id: "group10_placeholder",
      commonDropdownOptions:[
        "dendrite",
        "neuron",
        "cerebral cortex",
        "plexus",
        "cauda equina",
        "astrocyte",
        "oligodendroglial cell",
        "meninges",
        "axon",
        "myelin sheath"
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>microscopic fiber leading from the cell body that carries the nervous impulse along a nerve cell #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "axon",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>large, interlacing network of nerves #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "plexus",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>three protective membranes surrounding the brain and spinal cord #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "meninges",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>microscopic branching fiber of a nerve cell that is the first part to receive the nervous impulse #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "dendrite",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>outer region of the largest part of the brain; composed of gray matter #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "cerebral cortex",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>glial cell that transports water and salts between capillaries and nerve cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "astrocyte",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>glial cell that produces myelin #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "oligodendroglial cell",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>a nerve cell that transmits a nerve impulse #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "neuron",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>collection of spinal nerves below the end of the spinal cord at the level of the second lumbar vertebra #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "cauda equina",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>fatty tissue that surrounds the axon of a nerve cell #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "myelin sheath",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
        "motor nerves",
        "subarachnoid space",
        "glial cells",
        "parenchymal cell",
        "sensory nerves",
        "gyri",
        "neurotransmitter",
        "pia mater",
        "sulci"
        
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>innermost meningeal membrane #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pia mater",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>carry messages away from (efferent) the brain and spinal cord to muscles and glands #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "motor nerves",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>carry messages toward (afferent) the brain and spinal cord from receptors #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "sensory nerves",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>grooves in the cerebral cortex #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "sulci",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>contains cerebrospinal fluid #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "subarachnoid space",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>elevations in the cerebral cortex #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "gyri",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> chemical that is released at the end of a nerve cell and stimulates or inhibits another cell (example: acetylcholine) #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "neurotransmitter",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>essential cell of the nervous system; a neuron #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "parenchymal cell",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
       
        {
          headerImage:{},
          dropdownHtml:`<span>connective and supportive (stromal) tissue #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "glial cells",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
      commonDropdownOptions:[],
      items: [
        { 
          
          dropdownHtml:`<span>disease of the brain #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["encephalopathy","myelopathy"],correctValue: "encephalopathy",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>part of the brain that controls muscular coordination and balance #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["cerebrum","cerebellum"],correctValue: "cerebellum",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>collection of blood above the dura mater #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["subdural hematoma","epidural hematoma"],correctValue: "epidural hematoma",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>inflammation of the pia and arachnoid membranes #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["leptomeningitis","causalgia"],correctValue: "leptomeningitis",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>condition of absence of a brain #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["hypalgesia","anencephaly"],correctValue: "anencephaly",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>inflammation of the gray matter of the spinal cord #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["poliomyelitis","polyneuritis"],correctValue: "poliomyelitis",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>pertaining to the membranes around the brain and spinal cord #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["cerebellopontine","meningeal"],correctValue: "meningeal",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>disease of nerve roots (of spinal nerves) #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["neuropathy","radiculopathy"],correctValue: "radiculopathy",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>hernia of the spinal cord and meninges #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["myelomeningocele","meningioma"],correctValue: "myelomeningocele",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>pertaining to the tenth cranial nerve #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["thalamic","vagal"],correctValue: "vagal",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        }
        
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },

    group13: {
      id: "group13",
      type: "dropdown",
      placeholder_id: "group13_placeholder",
      commonDropdownOptions:[
        "narcolepsy",
        "bradykinesia",
        "causalgia",
        "hemiparesis",
        "motor apraxia",
        "paraplegia",
        "hyperesthesia",
        "neurasthenia",
        "ataxia",
        "aphasia",
        "syncope",
        "dyslexia"
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>reading disorder #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "dyslexia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>condition of decreased coordination #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ataxia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>condition of slow movement #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "bradykinesia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>condition of increased sensation #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "hyperesthesia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>seizure of sleep; uncontrollable compulsion to sleep #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "narcolepsy",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>difficulty with speech #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "aphasia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>inability to perform a task #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "motor apraxia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>weakness in the right or left half of the body #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "hemiparesis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>severe burning pain due to nerve injury #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "causalgia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>paralysis in the lower part of the body #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "paraplegia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>fainting #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "syncope",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>nervous exhaustion (lack of strength) and fatigue #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "neurasthenia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
        "myelomeningocele",
        "amyotrophic lateral sclerosis",
        "Alzheimer disease",
        "Huntington disease",
        "epilepsy",
        "Parkinson disease",
        "Bell palsy",
        "myasthenia gravis",
        "multiple sclerosis",
        "hydrocephalus"
        
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>Destruction of myelin sheath (demyelination) and its replacement by hard plaques: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "multiple sclerosis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Sudden, transient disturbances of brain function cause seizures : #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "epilepsy",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>The spinal column is imperfectly joined (a split in a vertebra occurs), and part of the meninges and spinal cord can herniate out of the spinal cavity: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "myelomeningocele",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Atrophy of muscles and paralysis caused by damage to motor neurons in the spinal cord and brainstem: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "amyotrophic lateral sclerosis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Patient displays bizarre, abrupt, involuntary, dance -like movements, as well as decline in mental functions: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Huntington disease",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Cerebrospinal fluid accumulates in the head (in the ventricles of the brain): #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "hydrocephalus",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Loss of muscle strength due to the inability of a neurotransmitter (acetylcholine) to transmit impulses from nerve cells to muscle cells: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "myasthenia gravis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Degeneration of nerves in the basal ganglia occurring in later life, leading to tremors, shuffling gait, and muscle stiffness; dopamine (neurotransmitter) is deficient in the brain: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Parkinson disease",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Deterioration of mental capacity (dementia) ; autopsy shows cerebral cortex atrophy, widening of cerebral sulci, and microscopic neurofibrillary tangles: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Alzheimer disease",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Unilateral facial paralysis: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Bell palsy",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
        "minor epileptic seizure",
        "peculiar sensation experienced by patient before onset of seizure",
        "uncoordinated gait",
        "blockage",
        "virus that causes chickenpox and shingles",
        "neurotransmitter",
        "malignant brain tumor of immature glial cells",
        "major epileptic seizure; ictal event",
        "blood flow to the brain stops for a brief period of time",
        "relieving, but not curing"
        
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>ataxia #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "uncoordinated gait",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>aura #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "peculiar sensation experienced by patient before onset of seizure",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>transient ischemic attack #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "blood flow to the brain stops for a brief period of time",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>tonic-clonic seizure #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "major epileptic seizure; ictal event",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>herpes zoster #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "virus that causes chickenpox and shingles",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>palliative #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "relieving, but not curing",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>dopamine #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "neurotransmitter",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>occlusion #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "blockage",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>absence seizure #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "minor epileptic seizure",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>glioblastoma multiforme #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "malignant brain tumor of immature glial cells",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
        "paresthesia",
        "ataxia",
        "aphasia",
        "paresis",
        "dyslexia",
        "anesthesia",
        "dyskinesia",
        "apraxia",
        "analgesia",
        "hyperkinesia",
        "neurasthenia"
        
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>lack of nerve strength #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "neurasthenia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>inability to speak #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "aphasia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>inability to perform purposeful actions #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "apraxia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>condition of insensitivity to pain #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "analgesia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>condition of loss of sensation #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "anesthesia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>sensations of tingling, numbness, or “pins and needles” #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "paresthesia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>lack of coordination #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ataxia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>excessive movement #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "hyperkinesia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>abnormal, involuntary, spasmodic movements #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "dyskinesia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>developmental reading disorder #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "dyslexia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>partial paralysis #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "paresis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
      commonDropdownOptions:[
        "cerebrospinal fluid",
        "Alzheimer disease",
        "lumbar puncture",
        "alpha-fetoprotein",
        "cerebrovascular accident",
        "electroencephalography",
        "transient ischemic attack",
        "multiple sclerosis",
        "magnetic resonance imaging",
        "positron emission tomography"
        
        
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>Procedure to diagnose abnormal electrical activity in the brain. #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "electroencephalography",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Radioactive materials, such as glucose, are taken up by the brain, and images recorded. #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "positron emission tomography",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> High levels in amniotic fluid and maternal blood are associated with spina bifida. #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "alpha-fetoprotein",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Destruction of the myelin sheath in the CNS occurs with plaques of hard scar tissue. #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "multiple sclerosis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Diagnostic procedure that allows excellent visualization of soft tissue in the brain. #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "magnetic resonance imaging",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Intrathecal medications can be administered through this procedure. #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "lumbar puncture",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Stroke; embolus, hemorrhage, and thrombosis are etiologic factors. #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "cerebrovascular accident",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Gradually progressive dementia. #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Alzheimer disease",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Neurologic symptoms and/or signs due to temporary interference of blood supply to the brain. #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "transient ischemic attack",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>This fluid is analyzed for abnormal blood cells, chemicals, and protein. #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "cerebrospinal fluid",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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

    group18: {
      id: "group18",
      type: "dropdown",
      placeholder_id: "group18_placeholder",
      commonDropdownOptions:[],
      items: [
        { 
          
          dropdownHtml:`<span>Maria had such severe headaches that she could find relief only with strong analgesics. Her condition of #dropdown1# was debilitating.</span>`,
          dropdowns:{
            dropdown1:{values:["spina bifida","migraine","epileps"],correctValue: "migraine",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },

        { 
          
          dropdownHtml:`<span>Paul was in a coma after his high-speed car accident. His physicians were concerned that he had suffered a #dropdown1# as a result of the accident.</span>`,
          dropdowns:{
            dropdown1:{values:["contusion and subdural hematoma","palsy, myelomeningocele"],correctValue: "contusion and subdural hematoma",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Dick went to the emergency department complaining of dizziness, nausea, and headache. The physician, suspecting increased ICP, prescribed corticosteroids, and Dick ’ s symptoms disappeared. They returned, however, when the steroids were discontinued. A/an #dropdown1# revealed a large brain lesion. It was removed surgically and determined to be a/an #dropdown2#</span>`,
          dropdowns:{
            dropdown1:{values:["MRI study of the brain","electroencephalogram","CSF analysis"],correctValue: "MRI study of the brain",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["migraine","glioblastoma multiforme", "embolus"],correctValue: "glioblastoma multiforme",dropdownlabel:"Select the position of the heart", useCommonOptions:"false"}
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Dorothy felt weakness in her hand and numbness in her arm, and noticed blurred vision, all signs of #dropdown1# . Her physician requested #dropdown2# to assess any damage to cerebral blood vessels and possible stroke.</span>`,
          dropdowns:{
            dropdown1:{values:["herpes zoster","meningitis","TIA"],correctValue: "TIA",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["lumbar puncture","MRA", "myelography"],correctValue: "MRA",dropdownlabel:"Select the position of the heart", useCommonOptions:"false"}
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>When Bill noticed ptosis and muscle weakness in his face, he reported these symptoms to his doctor. The doctor diagnosed his condition as #dropdown1# and prescribed #dropdown2# , which relieved his symptoms.</span>`,
          dropdowns:{
            dropdown1:{values:["myasthenia gravis","Huntington disease","Tourette syndrome"],correctValue: "myasthenia gravis",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["dopamine","anticonvulsants", "anticholinesterase drugs"],correctValue: "anticholinesterase drugs",dropdownlabel:"Select the position of the heart", useCommonOptions:"false"}
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>To rule out bacterial #dropdown1# , Dr. Phillips, a pediatrician, requested that a/an #dropdown2# be performed on the febrile (feverish) child.</span>`,
          dropdowns:{
            dropdown1:{values:["epilepsy","encephalomalacia","meningitis"],correctValue: "meningitis",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["LP","PET scan", "EEG"],correctValue: "LP",dropdownlabel:"Select the position of the heart", useCommonOptions:"false"}
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Eight-year-old Barry reversed his letters and had difficulty learning to read and write words. His family physician diagnosed his problem as #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["aphasia","dyslexia","ataxia"],correctValue: "dyslexia",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>After his head hit the steering wheel during a recent automobile accident, Clark noticed #dropdown1# on the left side of his body. A head CT scan revealed #dropdown2#</span>`,
          dropdowns:{
            dropdown1:{values:["hyperesthesia","hemiparesis","paraplegia"],correctValue: "hemiparesis",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["narcolepsy","neurasthenia", "subdural hematoma"],correctValue: "subdural hematoma",dropdownlabel:"Select the position of the heart", useCommonOptions:"false"}
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>For her 35th birthday, Elizabeth’s husband threw her a surprise party. She was so startled by the crowd that she experienced a weakness of muscles and loss of consciousness. Friends placed her on her back in a horizontal position with her head low to improve blood flow to her brain. She soon recovered from her #dropdown1# episode.</span>`,
          dropdowns:{
            dropdown1:{values:["hyperkinetic","syncopal","myoneural"],correctValue: "syncopal",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
           
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Near his 65th birthday, Edward began having difficulty remembering recent events. Over the next 5 years, he developed #dropdown1# and was diagnosed with #dropdown2# </span>`,
          dropdowns:{
            dropdown1:{values:["dyslexia","dementia","seizures"],correctValue: "dementia",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["myasthenia gravis","multiple sclerosis", "Alzheimer disease"],correctValue: "Alzheimer disease",dropdownlabel:"Select the position of the heart", useCommonOptions:"false"}
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Elderly Mrs. Smith had been taking an antipsychotic drug for 5 years when she began exhibiting lip smacking and darting movements of her tongue. Her doctor described her condition as #dropdown1# and discontinued her drug. The condition, acquired after use of the drug, would be considered #dropdown2#</span>`,
          dropdowns:{
            dropdown1:{values:["hemiparesis","radiculitis","tardive dyskinesia"],correctValue: "tardive dyskinesia",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["iatrogenic","ictal", "congenital"],correctValue: "iatrogenic",dropdownlabel:"Select the position of the heart", useCommonOptions:"false"}
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        }
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },

    group19: {
      id: "group19",
      type: "dropdown",
      placeholder_id: "group19_placeholder",
      commonDropdownOptions:[
        "MS",
        "glioblastoma multiforme",
        "CVA",
        "epilepsy",
        "herpes zoster",
        "ALS",
        "Parkinson's",
        "Alzheimer's"
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>destruction of myelin sheath on neurons in CNS #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "MS",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>stroke; disruption in normal blood supply to the brain #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "CVA",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>shingles; viral infection affecting peripheral nerves #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "herpes zoster",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>progressive dementia; memory failure; senile plaques and neurofibrillary tangles #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Alzheimer's",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>brain tumor; malignant astrocytoma #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "glioblastoma multiformeanswer herpes zoster marked incorrect, correct answer glioblastoma multiforme",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>degeneration of neurons in basal ganglia; tremors, bradykinesia, and shuffling gait #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Parkinson's",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>recurrent seizure disorder; tonic-clonic and absence types #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "epilepsy",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>degeneration of motor neurons in spinal cord and brain stem; weakness and muscle atrophy #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ALS",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group20_placeholder",
      items: [
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>EEG #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "electroencephalography", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>PET #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "positron emission tomography", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>AFP #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "alpha-fetoprotein", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>MS #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "multiple sclerosis", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>MRI #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "magnetic resonance imaging", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>LP #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "lumbar puncture", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>CVA #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "cerebrovascular accident", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>AD #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "Alzheimer disease", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>TIA #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "transient ischemic attack", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>CSF #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "cerebrospinal fluid", clozelabel:"fill in the blank"},
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
          
          clozeHtml:`<span>part of the brain that controls sleep, appetite, temperature, and secretions of the pituitary gland: hypo #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "thalamus", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>pertaining to fainting: syn #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "copal", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>abnormal tingling sensations: par #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "esthesias", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>slight paralysis: par #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "esis", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>inflammation of a spinal nerve root: #cloze1# itis</span>`,
          clozes:{
            cloze1:{correctValue: "radicul", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>inability to speak correctly: a #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "phasia", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>movements and behavior that are not purposeful: a #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "praxia", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>lack of muscular coordination: a #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "taxia", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>developmental reading disorder: dys #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "lexia", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>excessive movement: hyper #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "kinesis", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>paralysis in one half (right or left) of the body: #cloze1# plegia</span>`,
          clozes:{
            cloze1:{correctValue: "hemi", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>paralysis in the lower half of the body: #cloze1# plegia</span>`,
          clozes:{
            cloze1:{correctValue: "para", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>paralysis in all four limbs:  #cloze1# plegia</span>`,
          clozes:{
            cloze1:{correctValue: "quadri", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>nervous exhaustion and fatigue: neur #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "asthenia", clozelabel:"fill in the blank"},
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

    group21: {
      id: "group21",
      type: "reflective_writing", //Short Answers
      placeholder_id: "group21_placeholder",
      items: [
        
        {
          title: `dura mater`,
          feedback: `<span>outermost meningeal layer surrounding the brain and spinal cord</span>`,
        },
       {
          title: `Central Nervous System`,
          feedback: `<span>brain and the spinal cord</span>`,
        },
        {
          title: `peripheral nervous system`,
          feedback: `<span>nerves outside the brain and spinal cord; cranial, spinal, and autonomic nerves</span>`,
        },
        {
          title: `arachnoid membrane`,
          feedback: `<span>middle meningeal membrane surrounding the brain and spinal cord</span>`,
        },
        {
          title: `hypothalamus`,
          feedback: `<span>part of the brain below the thalamus; controls sleep, appetite, body temperature, and secretions from the pituitary gland</span>`,
        },
        {
          title: `synapse`,
          feedback: `<span>space through which a nervous impulse is transmitted from a nerve cell to another nerve cell or to a muscle or gland cell</span>`,
        },
        {
          title: `sympathetic nerves`,
          feedback: `<span>autonomic nerves that influence body functions involuntarily in times of stress</span>`,
        },
        {
          title: `medulla oblongata`,
          feedback: `<span>part of the brain just above the spinal cord that controls breathing, heartbeat, and the size of blood vessels</span>`,
        },
        {
          title: `pons`,
          feedback: `<span>part of the brain anterior to the cerebellum and between the medulla and the upper parts of the brain; connects these parts of the brain</span>`,
        },
        {
          title: `cerebellum`,
          feedback: `<span>posterior part of the brain that coordinates voluntary muscle movements</span>`,
        },
        {
          title: `thalamus`,
          feedback: `<span>part of the brain below the cerebrum; relay center that conducts impulses between the spinal cord and the cerebrum</span>`,
        },
        {
          title: `ventricles of the brain`,
          feedback: `<span>canals in the interior of the brain that are filled with CSF</span>`,
        },
        {
          title: `brainstem`,
          feedback: `<span>lower portion of the brain that connects the cerebrum with the spinal cord (includes the pons and the medulla)</span>`,
        },
        {
          title: `cerebrum`,
          feedback: `<span>largest part of the brain; controls voluntary muscle movement, vision, speech, hearing, thought, memory</span>`,
        },
        {
          title: `ganglion`,
          feedback: `<span>collection of nerve cell bodies outside the brain and spinal cord</span>`,
        },
        
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },

    group22: {
      id: "group22",
      type: "reflective_writing", //Short Answers
      placeholder_id: "group22_placeholder",
      items: [
        
        {
          title: `cerebral cortex`,
          feedback: `<span>outer region of the cerebrum (contains gray matter)</span>`,
        },
       {
          title: `intrathecal`,
          feedback: `<span>pertaining to within a sheath through the meninges and into the subarachnoid space</span>`,
        },
        {
          title: `polyneuritis`,
          feedback: `<span>inflammation of many nerves</span>`,
        },
        {
          title: `thalamic`,
          feedback: `<span>pertaining to the thalamus</span>`,
        },
        {
          title: `myelopathy`,
          feedback: `<span>disease of the spinal cord</span>`,
        },
        {
          title: `meningioma`,
          feedback: `<span>tumor of the meninges</span>`,
        },
        {
          title: `glioma`,
          feedback: `<span>tumor of neuroglial cells (a brain tumor)</span>`,
        },
        {
          title: `subdural hematoma`,
          feedback: `<span>mass of blood below the dura mater (outermost meningeal membrane)</span>`,
        },
        
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },

    group23: {
      id: "group23",
      type: "reflective_writing", //Short Answers
      placeholder_id: "group23_placeholder",
      items: [
        
        {
          title: `analgesia`,
          feedback: `<span>lack of sensitivity to pain</span>`,
        },
       {
          title: `motor aphasia`,
          feedback: `<span>difficulty in speaking (patients cannot articulate words but can understand speech and knows what she or he wants to say)</span>`,
        },
        {
          title: `paresis`,
          feedback: `<span>weakness and partial loss of movement</span>`,
        },
        {
          title: `quadriplegia`,
          feedback: `<span>paralysis in all four extremities (damage is to the cervical part of the spinal cord)</span>`,
        },
        {
          title: `asthenia`,
          feedback: `<span>no strength (weakness)</span>`,
        },
        {
          title: `comatose`,
          feedback: `<span>pertaining to coma (loss of consciousness from which the patient cannot be aroused)</span>`,
        },
        {
          title: `paresthesia`,
          feedback: `<span>condition of abnormal sensations (prickling, tingling, burning)</span>`,
        },
        {
          title: `hyperkinesis`,
          feedback: `<span>excessive movement</span>`,
        },
        {
          title: `anesthesia`,
          feedback: `<span>condition of no sensation or nervous feeling</span>`,
        },
        {
          title: `causalgia`,
          feedback: `<span>severe burning pain from injury to peripheral nerves</span>`,
        },
        {
          title: `akinetic`,
          feedback: `<span>pertaining to without movement</span>`,
        },
        {
          title: `hypalgesia`,
          feedback: `<span>diminished sensation to pain</span>`,
        },
        {
          title: `dyskinesia`,
          feedback: `<span>impairment of the ability to perform voluntary movements</span>`,
        },
        {
          title: `migraine`,
          feedback: `<span>recurrent vascular headache with severe pain of unilateral onset and photophobia (sensitivity to light)</span>`,
        },
        
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },

    group24: {
      id: "group24",
      type: "reflective_writing", //Short Answers
      placeholder_id: "group24_placeholder",
      items: [
        
        {
          title: `astrocytoma`,
          feedback: `<span>tumor of neuroglial brain cells (astrocytes)</span>`,
        },
       {
          title: `pyogenic meningitis`,
          feedback: `<span>inflammation of the meninges (bacterial infection with pus formation)</span>`,
        },
        {
          title: `Tourette syndrome`,
          feedback: `<span>involuntary spasmodic, twitching movements (tics), uncontrollable vocal sounds, and inappropriate words</span>`,
        },
        {
          title: `cerebral contusion`,
          feedback: `<span>bruising of brain tissue as a result of direct trauma to the head</span>`,
        },
        {
          title: `cerebrovascular accident`,
          feedback: `<span>disruption of the normal blood supply to the brain; stroke or cerebral infarction</span>`,
        },
        {
          title: `cerebral concussion`,
          feedback: `<span>traumatic brain injury caused by a blow to the head</span>`,
        },
        {
          title: `herpes zoster`,
          feedback: `<span>neurologic condition caused by infection with herpes zoster virus; blisters form along the course of peripheral nerves</span>`,
        },
        {
          title: `cerebral embolus`,
          feedback: `<span>blockage of a blood vessel in the cerebrum caused by material from another part of the body that suddenly occludes the vessel</span>`,
        },
        {
          title: `cerebral thrombosis`,
          feedback: `<span>blockage of a blood vessel in the cerebrum caused by the formation of a clot within the vessel</span>`,
        },
        {
          title: `cerebral hemorrhage`,
          feedback: `<span>collection of blood in the brain (can cause a stroke)</span>`,
        },
        {
          title: `cerebral aneurysm`,
          feedback: `<span>widening of a blood vessel (artery) in the cerebrum; the aneurysm can burst and lead to a CVA</span>`,
        },
        {
          title: `HIV encephalopathy`,
          feedback: `<span>brain disease (dementia and encephalitis) caused by infection with AIDS virus</span>`,
        },
        
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },

    group25: {
      id: "group25",
      type: "reflective_writing", //Short Answers
      placeholder_id: "group25_placeholder",
      items: [
        
        {
          title: `MRI of the brain:`,
          feedback: `<span>use of magnetic waves to create an image (in frontal, transverse, or sagittal plane) of the brain</span>`,
        },

        {
          title: `stereotactic radiosurgery with Gamma Knife:`,
          feedback: `<span>an instrument (stereotactic) is fixed onto the skull and locates a target by three-dimensional measurement; gamma radiation or proton beams are used to treat deep brain lesions</span>`,
        },
       
        
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
  },
};