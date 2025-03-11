const questions_data = {
  sharedProperties: {
    maxWidth: "960px", //"100%", "90%", "760px", "1024px"
    alignment: "center", //"center", "left"
  },
  question_groups: {
    group1: {
      id: "group1",
      type: "accordian",
      placeholder_id: "ch20group1_placeholder",
      items: [
        {
            title: `ion/o`,
            explanation: `ion; to wander`,
        },
        {
            title: `is/o`,
            explanation: `same; equal`,
        },
        {
            title: `myel/o`,
            explanation: `spinal cord; bone marrow`,
        },
        {
            title: `pharmaceut/o`,
            explanation: `drug`,
        },
        {
            title: `radi/o`,
            explanation: `x-rays; radioactivity; radius (lateral lower arm bone)`,
        },
        {
            title: `son/o`,
            explanation: `sound`,
        },
        {
            title: `therapeut/o`,
            explanation: `treatment`,
        },
        {
            title: `vitr/o`,
            explanation: `vitreous body (of the eye); glass`,
        },
        {
            title: `viv/o`,
            explanation: `life`,
        },
      ],
      titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
      itemSeperator: "false",
    },
    group2: {
      id: "group2",
      type: "accordian",
      placeholder_id: "ch20group2_placeholder",
      items: [
        {
          title: `-gram`,
          explanation: `record`,
        },
        {
          title: `-graphy`,
          explanation: `process of recording`,
        },
        {
          title: `-lucent`,
          explanation: `to shine`,
      },
      {
          title: `-opaque`,
          explanation: `obscure`,
        },
      ],
      titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
      itemSeperator: "false",
    },
    group3: {
      id: "group3",
      type: "accordian", 
      placeholder_id: "ch20group3_placeholder",
      items: [
        {
            title: `echo-`,
            explanation: `reflected sound`,
        },
        {
          title: `ultra-`,
          explanation: `beyond; excess`,
        },
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
    group4: {
      id: "group4",
      type: "accordian",
      placeholder_id: "ch20group4_placeholder",
      items: [
        {
            title: `abduction`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/abduction.mp3`,
            explanation: `ab-DUK-shun`,
        },
        {
            title: `adduction`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/adduction.mp3`,
            explanation: `ah-DUK-shun`,
        },
        {
            title: `angiogram`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/angiogram.mp3`,
            explanation: `AN-je-o-gram`,
        },
        {
            title: `anteroposterior`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/anteroposterior.mp3`,
            explanation: `an-ter-o-pos-TE-re-or`,
        },
        {
            title: `bone scan`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/bone_scan.mp3`,
            explanation: `boneskan`,
        },
        {
            title: `cholangiography`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cholangiography.mp3`,
            explanation: `ko-lan-je-OG-rah-fe`,
        },
        {
            title: `computed tomography`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/computed_tomography.mp3`,
            explanation: `kom-PU-tedto-MOG-rah-fe`,
        },
        {
            title: `contrast studies`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/contrast_studies.mp3`,
            explanation: `KON-trastSTUD-eez`,
        },
        {
            title: `decubitus`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/decubitus_ulcer.mp3`,
            explanation: `deh-KU-bih-tus`,
        },
        {
            title: `echocardiography`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/echocardiography.mp3`,
            explanation: `ek-o-kar-de-OG-rah-fe`,
        },
        {
            title: `eversion`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/eversion.mp3`,
            explanation: `e-VER-zhun`,
        },
        {
            title: `extension`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/extension.mp3`,
            explanation: `ek-STEN-shun`,
        },
        {
            title: `flexion`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/flexion.mp3`,
            explanation: `FLEK-shun`,
        },
        {
            title: `fluoroscopy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/fluoroscopy.mp3`,
            explanation: `flu-ROS-ko-pe`,
        },
        {
            title: `gamma camera`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/gamma_camera.mp3`,
            explanation: `GAM-ahKAM-er-ah`,
        },
        {
            title: `gamma rays`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/gamma_rays.mp3`,
            explanation: `GAM-ahrays`,
        },
        {
            title: `half-life`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/half-life.mp3`,
            explanation: `HAF-life`,
        },
        {
            title: `hysterosalpingogram`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hysterosalpingogram.mp3`,
            explanation: `his-ter-o-sal-PING-go-gram`,
        },
        {
            title: `hysterosonogram`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hysterosonogram.mp3`,
            explanation: `his-ter-o-SON-o-gram`,
        },
        {
            title: `in vitro`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/in_vitro.mp3`,
            explanation: `inVE-tro`,
        },
        {
            title: `in vivo`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/in_vivo.mp3`,
            explanation: `inVE-vo`,
        },
        {
            title: `interventional radiology`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/interventional_radiology.mp3`,
            explanation: `in-ter-VEN-shun-alra-de-OL-o-je`,
        },
        {
            title: `inversion`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/inversion.mp3`,
            explanation: `in-VER-zhun`,
        },
        {
            title: `ionization`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ionization.mp3`,
            explanation: `i-on-ih-ZA-shun`,
        },
        {
            title: `lymphoscintigraphy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/lymphoscintigraphy.mp3`,
            explanation: `limf-o-sin-TIG-rah-fe`,
        },
        {
            title: `magnetic resonance imaging`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/magnetic_resonance_imaging.mp3`,
            explanation: `mag-NET-ikREH-zo-nants IM-aj-ing`,
        },
        {
            title: `myelography`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/myelography.mp3`,
            explanation: `mi-eh-LOG-rah-fe`,
        },
        {
            title: `nuclear medicine`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/nuclear_medicine.mp3`,
            explanation: `NU-kle-arMED-ih-sin`,
        },
        {
            title: `oblique`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/oblique.mp3`,
            explanation: `o-BLEEK`,
        },
        {
            title: `PET-CT scan`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pet_ct_scan.mp3`,
            explanation: `PET-CTskan`,
        },
        {
            title: `positron-emission tomography`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/positron_emission_tomography.mp3`,
            explanation: `POS-ih-trone-MIH-shun to-MOG-rah-fe`,
        },
        {
            title: `posteroanterior`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/posteroanterior.mp3`,
            explanation: `pos-te-ro-an-TE-re-or`,
        },
        {
            title: `prone`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/prone.mp3`,
            explanation: `prone`,
        },
        {
            title: `pyelogram`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pyelogram.mp3`,
            explanation: `PI-eh-lo-gram`,
        },
        {
            title: `radiographer`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/radiographer.mp3`,
            explanation: `ra-de-OG-rah-fer`,
        },
        {
            title: `radioimmunoassay`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/radioimmunoassay.mp3`,
            explanation: `ra-de-o-ih-mew-no-AS-a`,
        },
        {
            title: `radioisotope`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/radioisotope.mp3`,
            explanation: `ra-de-o-I-so-tope`,
        },
        {
            title: `radiolabeled compound`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/radiolabeled_compound.mp3`,
            explanation: `ra-de-o-LA-beldKOM-pownd`,
        },
        {
            title: `radiology`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/radiology.mp3`,
            explanation: `ra-de-OL-o-je`,
        },
        {
            title: `radiolucent`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/radiolucent.mp3`,
            explanation: `ra-de-o-LU-sent`,
        },
        {
            title: `radionuclide`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/radionuclide.mp3`,
            explanation: `ra-de-o-NU-klide`,
        },
        {
            title: `radiopaque`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/radiopaque.mp3`,
            explanation: `rad-de-o-PAYK`,
        },
        {
            title: `radiopharmaceutical`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/radiopharmaceutical.mp3`,
            explanation: `ra-de-o-far-mah-SU-tih-kal`,
        },
        {
            title: `recumbent`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/recumbent.mp3`,
            explanation: `re-KUM-bent`,
        },
        {
            title: `scan`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/scan.mp3`,
            explanation: `skan`,
        },
        {
            title: `scintigraphy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/scintigraphy.mp3`,
            explanation: `SIN-tih-grah-fe`,
        },
        {
            title: `single photon emission computed tomography`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/single_photon_emission_computed_tomography.mp3`,
            explanation: `SING-ilFO-tone-MIH-shuncom-PU-tedto-MOG-rah-fe`,
        },
        {
            title: `sonogram`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sonogram.mp3`,
            explanation: `SON-o-gram`,
        },
        {
            title: `supine`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/supine.mp3`,
            explanation: `su-PINE`,
        },
        {
            title: `tagging`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/tagging.mp3`,
            explanation: `TAG-ing`,
        },
        {
            title: `technetium Tc99m sestamibi scan`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/technetium_tc99m_sestamibi_scan.mp3`,
            explanation: `tek-NE-she-um(Tc99m) ses-tah-MIH-beskan`,
        },
        {
            title: `thallium scan`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thallium_scan.mp3`,
            explanation: `THAL-e-umskan`,
        },
        {
            title: `therapeutic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/therapeutic.mp3`,
            explanation: `ther-ah-PU-tik`,
        },
        {
            title: `thyroid scan`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thyroid_scan.mp3`,
            explanation: `THI-roydskan`,
        },
        {
            title: `tracer studies`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/tracer_studies.mp3`,
            explanation: `TRA-serSTU-deez`,
        },
        {
            title: `ultrasonography`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ultrasonography.mp3`,
            explanation: `ul-trah-so-NOG-rah-fe`,
        },
        {
            title: `ultrasound transducer`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ultrasound_transducer.mp3`,
            explanation: `ul-trah-SOWNDtranz-DU-ser`,
        },
        {
            title: `uptake`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/uptake.mp3`,
            explanation: `UP-take`,
        },
        {
            title: `urography`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/urography.mp3`,
            explanation: `u-ROG-rah-fe`,
        },
        {
            title: `ventilation-perfusion studies`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ventilation-perfusion_studies.mp3`,
            explanation: `ven-tih-LA-shun-per-FU-zhunSTU-deez`,
        },
          ],
      titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
      itemSeperator: "false",
    },
    group5: {
      id: "group5",
      type: "dropdown",
      placeholder_id: "group5_placeholder",
      commonDropdownOptions:[],
      items: [
        { 
          dropdownHtml:`<span>In CT scanning: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["A radioactive tracer is used.","Magnetic images reveal images in all three planes of the body.","A nuclear physician performs the ultrasound procedure.","X-rays and a computer produce images in the axial plane."],correctValue: "X-rays and a computer produce images in the axial plane",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>In PET scanning: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["A radioactive tracer is used.","X-ray images reveal images in all three planes of the body.","A nuclear physician performs the ultrasound procedure.","Doppler ultrasound is used."],correctValue: "A radioactive tracer is used",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>Bill’s case showed that: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["CT scanning and PET scanning are equally effective in diagnosis of metastases.","PET scanning is useful in cancer diagnosis and staging.","Melanoma never progresses to stage IV.","A diet high in glucose helps concentrate the radioactive 18F-FDG before the PET scan."],correctValue: "PET scanning is useful in cancer diagnosis and staging.",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
    group6: {
      id: "group6",
      type: "dropdown",
      placeholder_id: "group6_placeholder",
      commonDropdownOptions:[],
      items: [
        { 
          dropdownHtml:`<span>Which radionuclide is used with sestamibi in an exercise tolerance test (ETT) of heart function? #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["Thallium-201","Iodine-131","Gallium-67","Technetium-99m"],correctValue: "Technetium-99m",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>Which radionuclide would be used to diagnose disease in an endocrine gland? #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["Ga-67","I-123","Xe-123","Sr-87m"],correctValue: "I-123",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        }
        
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
             group7: {
      id: "group7",
      type: "dropdown",
      placeholder_id: "group7_placeholder",
      commonDropdownOptions:[
       "computed tomography",
       "contrast studies",
       "interventional radiology",
       "magnetic resonance imaging",
       "ultrasonography"

      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>Radiopaque substances are given and conventional x-rays taken #dropdown1#.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "contrast studies",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
  
        {
          headerImage:{},
          dropdownHtml:`<span>Use of echoes of high-frequency sound waves to diagnose disease #dropdown1#.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ultrasonography", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>A magnetic field and radio waves are used to form images of the body #dropdown1#.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "magnetic resonance imaging", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>X-ray pictures are taken circularly around an area of the body, and a computer synthesizes the information into composite images #dropdown1#.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "computed tomography", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>Therapeutic procedures are performed by a radiologist under the guidance of CT, MRI, or ultrasonography #dropdown1#.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "interventional radiology", useCommonOptions:"true"},
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
       "spinal cord",
       "uterus and fallopian tubes",
       "blood vessels",
       "esophagus, stomach, and small intestine",
       "lower gastrointestinal tract",
       "urinary tract",
       "bile vessels (ducts)"

      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>myelography #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "spinal cord",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
      
        {
          headerImage:{},
          dropdownHtml:`<span>retrograde pyelography #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "urinary tract", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>angiography #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "blood vessels", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>upper GI series #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "esophagus, stomach, and small intestine", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>cholangiography #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "bile vessels (ducts)", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>barium enema #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "lower gastrointestinal tract", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>hysterosalpingography #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "uterus and fallopian tubes", useCommonOptions:"true"},
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
       "on the side",
       "turned inward",
       "movement away from the midline",
       "lying on the belly",
       "x-ray tube positioned on an angle",
       "bending a part",
       "straightening a limb",
       "lying on the back",
       "lying down on the side",
       "lying down; prone or supine",
       "anteroposterior view (front to back)",
       "turning outward",
       "posteroanterior view (back to front)",
       "movement toward the midline"

      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>PA #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "posteroanterior view (back to front)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>supine #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "lying on the back", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>prone #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "lying on the belly", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>AP #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "anteroposterior view (front to back)", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>lateral #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "on the side", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>oblique #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "x-ray tube positioned on an angle", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>lateral decubitus #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "lying down on the side", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>adduction #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "movement toward the midline", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>inversion #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "turned inward", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>abduction #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "movement away from the midline", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>recumbent #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "lying down; prone or supine", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>eversion #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "turning outward", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
      
        {
          headerImage:{},
          dropdownHtml:`<span>flexion #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "bending a part", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>extension #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "straightening a limb", useCommonOptions:"true"},
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
      "upper gastrointestinal (series)",
      "retrograde pyelogram",
      "single photon emission computed tomography",
      "digital subtraction angiography",
      "picture archival and communications system",
      "radioactive technetium",
      "ultrasound",
      "magnetic resonance imaging",
      "chest x-ray",
      "lateral"
      
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>X-ray examination of the kidney after injection of contrast #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "retrograde pyelogram",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Diagnostic procedure frequently used to assess fetal size and development #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ultrasound", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>X-ray examination of the esophagus, stomach, and intestines #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "upper gastrointestinal (series)", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>X-ray of blood vessels made by taking two images (with and without contrast) and subtracting the digitized data for one from the data for the other #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "digital subtraction angiography", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Radioisotope used in nuclear medicine (tracer studies) #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "radioactive technetium", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>Radioactive substances and a computer used to create 3D images #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "single photon emission computed tomography", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>Diagnostic procedure produces magnetic resonance images of all three planes of the body and visualizes soft tissue throughout the body #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "magnetic resonance imaging", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>Replacement of traditional films with digital equivalents #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "picture archival and communications system", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>X-ray view from the side #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "picture archival and communications system", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        
         {
          headerImage:{},
          dropdownHtml:`<span>Diagnostic procedure (x-rays are used) necessary to investigate thoracic disease #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "chest x-ray", useCommonOptions:"true"},
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
      commonDropdownOptions:[],
      items: [
        { 
          dropdownHtml:`<span>Mr. Jones was scheduled for ultrasound-guided thoracentesis. He was sent to the #dropdown1# department for the procedure.</span>`,
          dropdowns:{
            dropdown1:{values:["interventional radiology","radiation oncology","nuclear medicine"],correctValue: "interventional radiology",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>In order to better visualize Mr. Smith’s small intestine, Dr. Wong ordered a #dropdown1# . She hoped to determine why he was having abdominal pain and diarrhea.</span>`,
          dropdowns:{
            dropdown1:{values:["perfusion study","SBFT","hysterosalpingography"],correctValue: "SBFT",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>After a head-on automobile collision, Sam was taken to the emergency department in an unconscious state. The paramedics suspected head trauma, and the doctors ordered an emergency #dropdown1# of his head.</span>`,
          dropdowns:{
            dropdown1:{values:["PET scan.","U/S","CT scan"],correctValue: "CT scan",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>In light of Sue’s symptoms of fever, cough, and malaise, the doctors thought that the consolidated, hazy #dropdown1#  area on the chest x-ray represented a pneumonia.</span>`,
          dropdowns:{
            dropdown1:{values:["radioisotope","radiolucent","radiopaque"],correctValue: "radiopaque",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>Fred, a lung cancer patient, experienced a seizure recently. His oncologist ordered a brain #dropdown1# , which showed a tumor involving the left frontal lobe of the brain. Fred was treated with Gamma Knife irradiation, and the tumor decreased in size. He has had no further seizures.</span>`,
          dropdowns:{
            dropdown1:{values:["ultrasound","pulmonary angiogram","MRI"],correctValue: "MRI",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>Tom recently developed a cough and fever. A chest x-ray and #dropdown1# of the chest show that a #dropdown2# mass is present. #dropdown3# and biopsy of the mass reveal Hodgkin disease on histopathologic examination. He is treated with chemotherapy, and his symptoms disappear. A repeat x-ray shows that the mass has decreased remarkably, and a #dropdown4# scan shows no uptake of 18F-FDG in the chest, indicating that the mass is ﬁbrosis and not tumor.</span>`,
          dropdowns:{
            dropdown1:{values:["CT","myelogram","IVP"],correctValue: "CT",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["pelvic","spinal","mediastinal"],correctValue: "mediastinal",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown3:{values:["Mediastinoscopy","Cystoscopy","Lumbar puncture"],correctValue: "Mediastinoscopy",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown4:{values:["MRI","PET"],correctValue: "PET",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>Paola, a 50-year-old woman with diabetes, experiences chest pain during a stress test, and her #dropdown1# shows evidence of ischemia. A #dropdown2# called technetium Tc99m sestamibi (Cardiolite) is injected intravenously, and uptake is assessed with a #dropdown3# which shows an area of poor perfusion in the left ventricle.</span>`,
          dropdowns:{
            dropdown1:{values:["U/S","ECG","EEG"],correctValue: "ECG",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["contrast agent","transducer","radiopharmaceutical"],correctValue: "radiopharmaceutical",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown3:{values:["probe","CT scanner","gamma camera"],correctValue: "gamma camera",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>Sally has a routine pelvic examination, and her #dropdown1#  detects an irregular area of enlargement in the anterior wall of the uterus. A pelvic #dropdown2# is performed, which demonstrates the presence of ﬁbroids in the uterine wall. The examination involves placing a gel over her abdominopelvic area and applying a #dropdown3# to send/receive sound vibrations to/from the pelvic region.</span>`,
          dropdowns:{
            dropdown1:{values:["neurologist","gynecologist","urologist"],correctValue: "gynecologist",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["angiogram","U/S study","PET scan"],correctValue: "U/S study",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown3:{values:["ultrasound transducer","radionuclide","MRI scanner"],correctValue: "ultrasound transducer",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>Sally was having palpitations in the early evening. An ECG revealed possible left ventricular hypertrophy. Her physician ordered an #dropdown1# to rule out valvular heart disease.  </span>`,
          dropdowns:{
            dropdown1:{values:["ECHO","EUS","UGI"],correctValue: "ECHO",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>Joe, a 75-year-old man with a long smoking history, noticed blood in his sputum. His primary care physician ordered a/an #dropdown1# for further evaluation.</span>`,
          dropdowns:{
            dropdown1:{values:["abdominal CT","chest CT","ultrasound of his heart"],correctValue: "chest CT",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        
       
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
        group12: {
      id: "group12",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group12_placeholder",
      items: [
        {
          
          headerImage:{},
          clozeHtml:`<span>Obstructing the passage of x-rays: radio #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "radiopaque", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>Permitting the passage of x-rays: radio #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "radiolucent", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>Aids physicians in performing ultrasound procedures: #cloze1# grapher</span>`,
          clozes:{
            cloze1:{correctValue: "sonographer", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>Transformation of stable substances into charged particles: #cloze1# ization</span>`,
          clozes:{
            cloze1:{correctValue: "ionization", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>Radioactive drug administered for diagnostic purposes: radio #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "radiopharmaceutical", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>Radioactive chemical that gives off energy in the form of radiation: radio #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "radioisotope or radionuclide", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>A physician who specializes in diagnostic radiology: radi #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "radiologist", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>Study of the uses of radioactive substances in the diagnosis of disease: #cloze1# medicine</span>`,
          clozes:{
            cloze1:{correctValue: "nuclear", clozelabel:"fill in the blank"},
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
        group13: {
      id: "group13",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group13_placeholder",
      items: [
        {
          
          headerImage:{},
          clozeHtml:`<span>-gram #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "record", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>ultra- #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "beyond", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>vitr/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "glass", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>viv/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "life", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>pharmaceut/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "drug", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>son/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "sound", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>therapeut/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "treatment", clozelabel:"fill in the blank"},
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
        group14: {
      id: "group14",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group14_placeholder",
      items: [
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
          clozeHtml:`<span>SPECT #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "single photon emission computed tomography", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>PACS #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "picture archival and communications system", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>UGI #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "upper gastrointestinal", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>CXR #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "chest x-ray", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>DSA #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "digital subtraction angiography", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>RP #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "retrograde pyelogram", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>LAT #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "lateral", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>U/S #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "ultrasound", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>Tc-99m #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "radioactive technetium", clozelabel:"fill in the blank"},
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
group15: {
      id: "group15",
      type: "reflective_writing", //Short Answers
      placeholder_id: "group15_placeholder",
      items: [
        
        {
          title: `in vitro`,
          feedback: `<span>process, test, or procedure in which something is measured or observed outside a living organism</span>`,
        },
        {
          title: `in vivo`,
          feedback: `<span>process, test, or procedure in which something is measured or observed in a living organism</span>`,
        },
        {
          title: `radiopharmaceutical`,
          feedback: `<span>radioactive drug (radionuclide plus chemical) that is given for diagnostic or therapeutic purposes</span>`,
        },
        {
          title: `tracer studies`,
          feedback: `<span>tests in which radioactive substances (radioisotopes) are administered with chemicals and followed as they travel throughout the body</span>`,
        },
        {
          title: `uptake`,
          feedback: `<span>the rate of absorption of a radionuclide into an organ or tissue</span>`,
        },
        {
          title: `perfusion lung scan`,
          feedback: `<span>imaging technique in which a radiopharmaceutical is injected intravenously and traced within the blood vessels of the lung scanned</span>`,
        },
        {
          title: `ventilation lung scan`,
          feedback: `<span> imaging technique in which a radiopharmaceutical is inhaled and its passage through the respiratory tract is traced on a scan</span>`,
        },
        {
          title: `bone scan`,
          feedback: `<span>imaging technique in which a radiopharmaceutical is given intravenously and taken up by bone tissue, followed by scanning to detect the amount of the radioactive substance in the bone</span>`,
        },
        {
          title: `thyroid scan`,
          feedback: `<span> imaging technique in which a radioactive substance is given orally and a scan (image) is made to assess its uptake in the thyroid gland</span>`,
        },
        {
          title: `technetium Tc99m sestamibi scan`,
          feedback: `<span>test of heart muscle function</span>`,
        },
        
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
group16: {
      id: "group16",
      type: "reflective_writing", //Short Answers
      placeholder_id: "group16_placeholder",
      items: [
        
        {
          title: `gamma camera`,
          feedback: `<span>machine that detects rays emitted by radioactive substances</span>`,
        },
        {
          title: `positron emission tomography (PET)`,
          feedback: `<span>radioactive glucose is injected and traced to body cells</span>`,
        },
        {
          title: `radioisotope`,
          feedback: `<span>a radioactive form (radionuclide) of a substance; gives off radiation</span>`,
        },
        {
          title: `transducer`,
          feedback: `<span>handheld device that sends and receives ultrasound signals</span>`,
        },
        {
          title: `echocardiography`,
          feedback: `<span>ultrasound is used to create an image of the heart</span>`,
        },
        {
          title: `lymphoscintigraphy`,
          feedback: `<span>nuclear medicine imaging of the lymphatic system</span>`,
        },
        {
          title: `radioactive iodine uptake test`,
          feedback: `<span>nuclear medicine test to evaluate the function of the thyroid gland</span>`,
        },
        {
          title: `PET-CT scan`,
          feedback: `<span>combination of a PET scan and a CT scan to show both structure and function of the body</span>`,
        },
        
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },    
  },
};