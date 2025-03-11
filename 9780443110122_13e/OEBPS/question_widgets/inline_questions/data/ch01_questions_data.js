const questions_data = {
  sharedProperties: {
    maxWidth: "960px", //"100%", "90%", "760px", "1024px"
    alignment: "center", //"center", "left"
  },
  question_groups: {
    group1: {
      id: "group1",
      type: "accordian",
      placeholder_id: "group1_placeholder",
      items: [
        {
            title: `aden/o`,
            explanation: `gland`,
        },
        {
            title: `arthr/o`,
            explanation: `joint`,
        },
        {
            title: `bi/o`,
            explanation: `life`,
        },
        {
            title: `carcin/o`,
            explanation: `cancerous; cancer`,
        },
        {
            title: `cardi/o`,
            explanation: `heart`,
        },
        {
            title: `cephal/o`,
            explanation: `head`,
        },
        {
            title: `cerebr/o`,
            explanation: `cerebrum (largest part of the brain)`,
        },
        {
            title: `cis/o`,
            explanation: `to cut`,
        },
        {
            title: `crin/o`,
            explanation: `to secrete (to form and give off)`,
        },
        {
            title: `cyst/o`,
            explanation: `urinary bladder; cyst; sac of fluid`,
        },
        {
            title: `cyt/o`,
            explanation: `cell`,
        },
        {
            title: `derm/o, dermat/o`,
            explanation: `skin`,
        },
        {
            title: `electr/o`,
            explanation: `electricity`,
        },
        {
            title: `encephal/o`,
            explanation: `brain`,
        },
        {
            title: `enter/o`,
            explanation: `intestines (usually small intestine)`,
        },
        {
            title: `erythr/o`,
            explanation: `red`,
        },
        {
            title: `gastr/o`,
            explanation: `stomach`,
        },
        {
            title: `glyc/o`,
            explanation: `glucose; sugar`,
        },
        {
            title: `gnos/o`,
            explanation: `knowledge`,
        },
        {
            title: `gynec/o`,
            explanation: `woman; female`,
        },
        {
            title: `hem/o, hemat/o`,
            explanation: `blood`,
        },
        {
            title: `hepat/o`,
            explanation: `liver`,
        },
        {
            title: `iatr/o`,
            explanation: `physician; treatment`,
        },
        {
            title: `leuk/o`,
            explanation: `white`,
        },
        {
            title: `log/o`,
            explanation: `study`,
        },
        {
            title: `nephr/o`,
            explanation: `kidney`,
        },
        {
            title: `neur/o`,
            explanation: `nerve`,
        },
        {
            title: `onc/o`,
            explanation: `tumor`,
        },
        {
            title: `ophthalm/o`,
            explanation: `eye`,
        },
        {
            title: `oste/o`,
            explanation: `bone`,
        },
        {
            title: `path/o`,
            explanation: `disease`,
        },
        {
            title: `ped/o`,
            explanation: `child`,
        },
        {
            title: `psych/o`,
            explanation: `mind`,
        },
        {
            title: `radi/o`,
            explanation: `x-rays; radioactivity; radius (lateral lower arm bone)`,
        },
        {
            title: `ren/o`,
            explanation: `kidney`,
        },
        {
            title: `rhin/o`,
            explanation: `nose`,
        },
        {
            title: `sarc/o`,
            explanation: `flesh (connective tissue)`,
        },
        {
            title: `sect/o`,
            explanation: `to cut`,
        },
        {
            title: `thromb/o`,
            explanation: `clot`,
        },
        {
            title: `ur/o`,
            explanation: `urine; urinary tract`,
        },
      ],
      titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
      itemSeperator: "false",
    },
    group2: {
      id: "group2",
      type: "accordian",
      placeholder_id: "group2_placeholder",
      items: [
        {
          title: `-ac `,
          explanation: `pertaining to`,
        },
        {
          title: `-al`,
          explanation: `pertaining to`,
        },
        {
          title: `-algia`,
          explanation: `pain`,
      },
      {
          title: `-cyte`,
          explanation: `cell`,
        },
        {
          title: `-ectomy`,
          explanation: `removal; excision;  resection`,
        },
        {
          title: `-emia`,
          explanation: `blood condition`,
      },
      {
          title: `-genic`,
          explanation: `produced by or in`,
        },
        {
          title: `-globin`,
          explanation: `protein`,
        },
        {
          title: `-gram`,
          explanation: `record`,
      },
      {
          title: `-ic, -ical`,
          explanation: `pertaining to`,
        },
        {
          title: `-ion`,
          explanation: `process`,
        },
        {
          title: `-ist`,
          explanation: `specialist`,
      },
      {
          title: `-itis`,
          explanation: `inflammation`,
        },
        {
          title: `-logy`,
          explanation: `study (process of)`,
        },
        {
          title: `-oma`,
          explanation: `tumor; mass; fluid collection`,
      },
      {
          title: `-opsy`,
          explanation: `view of`,
        },
        {
          title: `-osis`,
          explanation: `condition, usually abnormal`,
        },
        {
          title: `-pathy`,
          explanation: `disease condition`,
      },
      {
          title: `-scope`,
          explanation: `instrument for visual examination`,
        },
        {
          title: `-scopy`,
          explanation: `visual examination`,
        },
        {
          title: `-sis`,
          explanation: `state of; condition`,
      },
      {
          title: `-tomy`,
          explanation: `process of cutting`,
        },
        {
          title: `-y`,
          explanation: `condition; process`,
        },
        
      
      ],
      titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
      itemSeperator: "false",
    },
    group3: {
      id: "group3",
      type: "accordian", 
      placeholder_id: "group3_placeholder",
      items: [
        {
            title: `a-, an-`,
            explanation: `no; not; without`,
        },
        {
          title: `aut-, auto-`,
          explanation: `self; own`,
        },
        {
          title: `dia-`,
          explanation: `complete; through`,
        },
        {
          title: `endo-`,
          explanation: `in; within`,
        },
        {
          title: `epi-`,
          explanation: `above; upon; on`,
        },
        {
            title: `ex-, exo-`,
            explanation: `out; outside of; outward`,
        },
        {
          title: `hyper-`,
          explanation: `above; excessive; more than normal`,
        },
        {
          title: `hypo-`,
          explanation: `deficient; below; under; less than normal`,
        },
        {
          title: `in-`,
          explanation: `in; into; not`,
        },
        {
          title: `peri-`,
          explanation: `surrounding; around`,
        },
        {
            title: `pro-`,
            explanation: `before; forward`,
        },
        {
          title: `re-`,
          explanation: `back; again; backward`,
        },
        {
          title: `retro-`,
          explanation: `behind; back; backward`,
        },
        {
          title: `sub-`,
          explanation: `under; below`,
        },
        {
          title: `trans-`,
          explanation: `across; through`,
        },
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
    group4: {
      id: "group4",
      type: "accordian",
      placeholder_id: "group4_placeholder",
      items: [
        {
            title: `adenitis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/adenitis.mp3`,
            explanation: `ah-deh-NI-tis`,
        },
        {
            title: `adenoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/adenoma.mp3`,
            explanation: `ah-deh-NO-mah`,
        },
        {
            title: `adenopathy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/adenopathy.mp3`,
            explanation: `ah-deh-NOP-ah-the`,
        },
        {
            title: `anemia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/anemia.mp3`,
            explanation: `ah-NE-me-ah`,
        },
        {
            title: `arthralgia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/arthralgia.mp3`,
            explanation: `ar-THRAL-jah`,
        },
        {
            title: `arthritis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/arthritis.mp3`,
            explanation: `ar-THRI-tis`,
        },
        {
            title: `autopsy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/autopsy.mp3`,
            explanation: `AW-top-se`,
        },
        {
            title: `biology`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/biology.mp3`,
            explanation: `bi-OL-o-je`,
        },
        {
            title: `biopsy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/biopsy.mp3`,
            explanation: `BI-op-se`,
        },
        {
            title: `carcinogenic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/carcinogenic.mp3`,
            explanation: `kar-sih-no-JEN-ik`,
        },
        {
            title: `carcinoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/carcinoma.mp3`,
            explanation: `kar-sih-NO-mah`,
        },
        {
            title: `cardiac`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cardiac.mp3`,
            explanation: `KAR-de-ak`,
        },
        {
            title: `cardiology`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cardiology.mp3`,
            explanation: `kar-de-OL-o-je`,
        },
        {
            title: `cephalic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cephalic.mp3`,
            explanation: `seh-FAL-ik`,
        },
        {
            title: `cerebral`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cerebral.mp3`,
            explanation: `seh-RE-bral`,
        },
        {
            title: `cystitis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cystitis.mp3`,
            explanation: `sis-TI-tis`,
        },
        {
            title: `cystoscopy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cystoscopy.mp3`,
            explanation: `sis-TOS-ko-pe`,
        },
        {
            title: `cytology`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cytology.mp3`,
            explanation: `si-TOL-o-je`,
        },
        {
            title: `dermatitis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/dermatitis.mp3`,
            explanation: `der-mah-TI-tis`,
        },
        {
            title: `dermatology`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/dermatology.mp3`,
            explanation: `der-mah-TOL-o-je`,
        },
        {
            title: `diagnosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/diagnosis.mp3`,
            explanation: `di-ag-NO-sis`,
        },
        {
            title: `electrocardiogram`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/electrocardiogram.mp3`,
            explanation: `eh-lek-tro-KAR-de-o-gram`,
        },
        {
            title: `electroencephalogram`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/electroencephalogram.mp3`,
            explanation: `eh-lek-tro-en-SEF-ah-lo-gram`,
        },
        {
            title: `encephalopathy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/encephalopathy.mp3`,
            explanation: `en-sef-ah-LOP-ah-the`,
        },
        {
            title: `endocrine glands`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/endocrine_glands.mp3`,
            explanation: `EN-do-kringlanz`,
        },
        {
            title: `endocrinologist`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/endocrinologist.mp3`,
            explanation: `en-do-krin-OL-o-gist`,
        },
        {
            title: `endocrinology`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/endocrinology.mp3`,
            explanation: `en-do-krin-OL-o-je`,
        },
        {
            title: `endoscope`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/endoscope.mp3`,
            explanation: `EN-do-skope`,
        },
        {
            title: `endoscopy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/endoscopy.mp3`,
            explanation: `en-DOS-ko-pe`,
        },
        {
            title: `enteritis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/enteritis.mp3`,
            explanation: `en-teh-RI-tis`,
        },
        {
            title: `epidermis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/epidermis.mp3`,
            explanation: `ep-ih-DER-mis`,
        },
        {
            title: `epigastric`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/epigastric.mp3`,
            explanation: `ep-ih-GAS-trik`,
        },
        {
            title: `erythrocyte`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/erythrocyte.mp3`,
            explanation: `eh-RITH-ro-site`,
        },
        {
            title: `excision`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/excision.mp3`,
            explanation: `ek-SIZH-un`,
        },
        {
            title: `exocrine glands`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/exocrine_glands.mp3`,
            explanation: `EK-so-kringlanz`,
        },
        {
            title: `gastrectomy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/gastrectomy.mp3`,
            explanation: `gas-TREK-to-me`,
        },
        {
            title: `gastric`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/gastric.mp3`,
            explanation: `GAS-trik`,
        },
        {
            title: `gastroenterology`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/gastroenterology.mp3`,
            explanation: `gas-tro-en-teh-ROL-o-je`,
        },
        {
            title: `gastrotomy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/gastrotomy.mp3`,
            explanation: `gas-TROT-o-me`,
        },
        {
            title: `gynecologist`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/gynecologist.mp3`,
            explanation: `gi-neh-KOL-o-jist`,
        },
        {
            title: `gynecology`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/gynecology.mp3`,
            explanation: `gi-neh-KOL-o-je`,
        },
        {
            title: `hematology`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hematology.mp3`,
            explanation: `he-mah-TOL-o-je`,
        },
        {
            title: `hematoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hematoma.mp3`,
            explanation: `he-mah-TO-mah`,
        },
        {
            title: `hemoglobin`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hemoglobin.mp3`,
            explanation: `HE-mo-glo-bin`,
        },
        {
            title: `hepatitis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hepatitis.mp3`,
            explanation: `hep-ah-TI-tis`,
        },
        {
            title: `hepatoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hepatoma.mp3`,
            explanation: `hep-ah-TO-mah`,
        },
        {
            title: `hyperglycemia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hyperglycemia.mp3`,
            explanation: `hi-per-gli-SE-me-ah`,
        },
        {
            title: `hyperthyroidism`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hyperthyroidism.mp3`,
            explanation: `hi-per-THI-royd-izm`,
        },
        {
            title: `hypodermic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypodermic.mp3`,
            explanation: `hi-po-DER-mik`,
        },



        {
            title: `hypogastric`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypogastric.mp3`,
            explanation: `hi-po-GAS-trik`,
        },
        {
            title: `hypoglycemia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypoglycemia.mp3`,
            explanation: `hi-po-gli-SE-me-ah`,
        },
        {
            title: `iatrogenic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/iatrogenic.mp3`,
            explanation: `i-ah-tro-JEN-ik`,
        },
        {
            title: `incision`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/incision.mp3`,
            explanation: `in-SIZH-un`,
        },
        {
            title: `leukemia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/leukemia.mp3`,
            explanation: `lu-KE-me-ah`,
        },
        {
            title: `leukocyte`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/leukocyte.mp3`,
            explanation: `LU-ko-site`,
        },
        {
            title: `leukocytosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/leukocytosis.mp3`,
            explanation: `lu-ko-si-TO-sis`,
        },
        {
            title: `nephrectomy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/nephrectomy.mp3`,
            explanation: `neh-FREK-to-me`,
        },
        {
            title: `nephritis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/nephritis.mp3`,
            explanation: `neh-FRI-tis`,
        },
        {
            title: `nephrology`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/nephrology.mp3`,
            explanation: `neh-FROL-o-je`,
        },{
            title: `nephrosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/nephrosis.mp3`,
            explanation: `neh-FRO-sis`,
        },
        {
            title: `neural`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/neural.mp3`,
            explanation: `NU-ral`,
        },
        {
            title: `neuralgia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/neuralgia.mp3`,
            explanation: `nu-RAL-jah`,
        },
        {
            title: `neurologic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/neurologic.mp3`,
            explanation: `nu-ro-LOJ-ik`,
        },
        {
            title: `neurology`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/neurology.mp3`,
            explanation: `nu-ROL-o-je`,
        },
        {
            title: `oncologist`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/oncologist.mp3`,
            explanation: `ong-KOL-o-jist`,
        },
        {
            title: `oncology`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/oncology.mp3`,
            explanation: `ong-KOL-o-je`,
        },
        {
            title: `ophthalmologist`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ophthalmologist.mp3`,
            explanation: `of-thal-MOL-o-jist`,
        },
        {
            title: `ophthalmoscope`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ophthalmoscope.mp3`,
            explanation: `of-THAL-mo-scope`,
        },
        {
            title: `osteitis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/osteitis.mp3`,
            explanation: `os-te-I-tis`,
        },{
            title: `osteoarthritis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/osteoarthritis.mp3`,
            explanation: `os-te-o-ar-THRI-tis`,
        },
        {
            title: `osteogenic sarcoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/osteogenic_sarcoma.mp3`,
            explanation: `os-te-o-JEN-icsar-KO-mah`,
        },
        {
            title: `osteotomy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/osteotomy.mp3`,
            explanation: `os-te-OT-o-me`,
        },
        {
            title: `pathogenic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pathogenic.mp3`,
            explanation: `path-o-JEN-ik`,
        },
        {
            title: `pathologist`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pathologist.mp3`,
            explanation: `path-OL-o-jist`,
        },
        {
            title: `pathology`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pathology.mp3`,
            explanation: `path-OL-o-je`,
        },
        {
            title: `pediatric`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pediatric.mp3`,
            explanation: `pe-de-AH-trik`,
        },
        {
            title: `pericardium`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pericardium.mp3`,
            explanation: `peh-rih-KAR-de-um`,
        },
        {
            title: `prognosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/prognosis.mp3`,
            explanation: `prog-NO-sis`,
        },
        {
            title: `prostate gland`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/prostate_gland.mp3`,
            explanation: `PROS-taytgland`,
        },{
            title: `psychiatrist`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/psychiatrist.mp3`,
            explanation: `si-KI-ah-trist`,
        },
        {
            title: `psychology`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/psychology.mp3`,
            explanation: `si-KOL-o-je`,
        },
        {
            title: `radiology`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/radiology.mp3`,
            explanation: `ra-de-OL-o-je`,
        },
        {
            title: `renal`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/renal.mp3`,
            explanation: `RE-nal`,
        },
        {
            title: `resection`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/resection.mp3`,
            explanation: `re-SEK-shun`,
        },
        {
            title: `retrocardiac`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/retrocardiac.mp3`,
            explanation: `reh-tro-KAR-de-ac`,
        },
        {
            title: `rhinitis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/rhinitis.mp3`,
            explanation: `ri-NI-tis`,
        },
        {
            title: `sarcoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sarcoma.mp3`,
            explanation: `sar-KO-mah`,
        },
        {
            title: `subhepatic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/subhepatic.mp3`,
            explanation: `sub-heh-PAT-ik`,
        },
        {
            title: `thrombocyte`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thrombocyte.mp3`,
            explanation: `THROM-bo-site`,
        },
        {
            title: `transhepatic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/transhepatic.mp3`,
            explanation: `tranz-heh-PAT-ik`,
        },
        {
            title: `urologist`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/urologist.mp3`,
            explanation: `u-ROL-o-gist`,
        },
      ],
      titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
      itemSeperator: "false",
    },
    group5: {
      id: "group5",
      type: "dropdown",
      placeholder_id: "group5_placeholder",
      commonDropdownOptions:[
        "gastroenterologist",
        "hematologist",
        "nephrologist",
        "cardiologist",
        "oncologist",
        "gynecologist",
        "urologist",
        "ophthalmologist",
        "neurologist",
        "psychiatrist"
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>heart attack #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "cardiologist",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>ovarian cysts #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "gynecologist",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>bipolar (manic-depressive) disorder #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "psychiatrist",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>breast adenocarcinoma #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "oncologist",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>iron deficiency anemia #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "hematologist",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>retinopathy #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ophthalmologist",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>cerebrovascular accident (stroke) #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "neurologist",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>renal failure #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "nephrologist",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>inflammatory bowel disease #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "gastroenterologist",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>prostatic adenocarcinoma (peritoneoscopy) #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "urologist",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
group6: {
      id: "group6",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group6_placeholder",
      items: [
        {
          headerImage:{},
          clozeHtml:`<span>Word beginnings are called #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "prefixes", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>Word endings are called #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "suffixes", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>The foundation of a word is known as the #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "root", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>A letter linking a suffix and a root, or linking two roots, in a term is the #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "combining vowel", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>The combination of a root and a combining vowel is known as the #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "combining form", clozelabel:"fill in the blank"},
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
    group7: {
      id: "group7",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group7_placeholder",
      items: [
        {
          headerImage:{},
          clozeHtml:`<span>cardi/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "heart", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>aden/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "gland", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>bi/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "life", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>cerebr/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "cerebrum, largest part of the brain", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>cephal/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "head", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>arthr/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "joint", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>carcin/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "cancer, cancerous", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>cyst/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "urinary bladder", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>cyt/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "cell", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>derm/o or dermat/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "skin", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>encephal/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "brain", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>electr/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "electricity", clozelabel:"fill in the blank"},
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
    group8: {
      id: "group8",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group8_placeholder",
      items: [
        {
          headerImage:{},
          clozeHtml:`<span>-oma #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "tumor, mass, swelling", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>-al #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "pertaining to", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>-itis #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "inflammation", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>-logy #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "process of study", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>-scopy #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "process of visual examination", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>-ic #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "pertaining to", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>-gram #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "record (image)", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>-opsy #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "rocess of viewing", clozelabel:"fill in the blank"},
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
    group9: {
      id: "group9",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group9_placeholder",
      items: [
        {
          headerImage:{},
          clozeHtml:`<span>cerebral #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "cerebr/al—pertaining to the cerebrum, or largest part of the brain", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>biopsy #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "bi/opsy—process of viewing life (removal of living tissue and viewing it under a microscope)", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>adenitis #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "aden/itis—inflammation of a gland", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>cephalic #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "cephal/ic—pertaining to the head", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>carcinoma #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "carcin/oma—tumor that is cancerous (cancerous tumor)", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>cystoscopy #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "cyst/o/scopy—process of visually examining the urinary bladder", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>electrocardiogram #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "electr/o/cardi/o/gram—record of the electricity in the heart", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>cardiology #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "cardi/o/logy—process of study of the heart", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>electroencephalogram #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "electr/o/encephal/o/gram—record of the electricity in the brain", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>dermatitis #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "dermat/itis—inflammation of the skin", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>arthroscopy #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "arthr/o/scopy—process of visual examination of a joint", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>cytology #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "cyt/o/logy—process of study of cells", clozelabel:"fill in the blank"},
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
group10: {
      id: "group10",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group10_placeholder",
      items: [
        {
          headerImage:{},
          clozeHtml:`<span>erythr/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "red", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>enter/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "intestines (usually small intestine)", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>gastr/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "stomach", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>gnos/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "knowledge", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>hemat/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "blood", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>cis/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "to cut", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>nephr/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "kidney", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>leuk/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "white", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>iatr/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "treatment, physician", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>hepat/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "liver", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>neur/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "nerve", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>gynec/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "woman, female", clozelabel:"fill in the blank"},
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
group11: {
      id: "group11",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group11_placeholder",
      items: [
        {
          headerImage:{},
          clozeHtml:`<span>white blood cell: #cloze1# cyte</span>`,
          clozes:{
            cloze1:{correctValue: "leukocyte", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>inﬂammation of the stomach: gastr #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "gastritis", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>pertaining to being produced by treatment: #cloze1# genic</span>`,
          clozes:{
            cloze1:{correctValue: "iatrogenic", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>study of kidneys: #cloze1# logy</span>`,
          clozes:{
            cloze1:{correctValue: "nephrology", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>red blood cell: #cloze1# cyte</span>`,
          clozes:{
            cloze1:{correctValue: "erythrocyte", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>mass of blood: #cloze1# oma</span>`,
          clozes:{
            cloze1:{correctValue: "hematoma", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>process of viewing living tissue (using a microscope): bi #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "biopsy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>pain of nerves: neur #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "neuralgia", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>process of visual examination of the eye: #cloze1# scopy</span>`,
          clozes:{
            cloze1:{correctValue: "ophthalmoscopy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>inﬂammation of the small intestine: #cloze1# itis</span>`,
          clozes:{
            cloze1:{correctValue: "enteritis", clozelabel:"fill in the blank"},
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
group12: {
      id: "group12",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group12_placeholder",
      items: [
        {
          headerImage:{},
          clozeHtml:`<span>dia- #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "complete, through", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>pro- #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "before", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>aut-, auto- #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "self, own", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>a-, an- #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "no, not, without", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>hyper- #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "excessive, above, more than normal", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>hypo- #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "deficient, below, less than normal", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>epi- #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "above, upon", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>endo- #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "within", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>retro- #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "behind", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>trans- #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "across, through", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>peri- #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "surrounding", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>ex-, exo- #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "out", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>sub- #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "below, under", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>re- #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "back", clozelabel:"fill in the blank"},
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
          clozeHtml:`<span>study of the urinary tract: #cloze1# logy</span>`,
          clozes:{
            cloze1:{correctValue: "urology", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>study of women and women’s diseases: #cloze1# logy</span>`,
          clozes:{
            cloze1:{correctValue: "gynecology", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>study of blood: #cloze1# logy</span>`,
          clozes:{
            cloze1:{correctValue: "hematology", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>study of tumors: #cloze1# logy</span>`,
          clozes:{
            cloze1:{correctValue: "oncology", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>study of the kidneys: #cloze1# logy</span>`,
          clozes:{
            cloze1:{correctValue: "nephrology", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>study of nerves: #cloze1# logy</span>`,
          clozes:{
            cloze1:{correctValue: "neurology", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>treatment of children: #cloze1# iatrics</span>`,
          clozes:{
            cloze1:{correctValue: "pediatrics (combining vowel o has been dropped between ped and iatr)", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>study of x-rays in diagnostic imaging: #cloze1# logy</span>`,
          clozes:{
            cloze1:{correctValue: "radiology", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>study of the eyes: #cloze1# logy</span>`,
          clozes:{
            cloze1:{correctValue: "ophthalmology", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>study of the stomach and intestines: #cloze1# logy</span>`,
          clozes:{
            cloze1:{correctValue: "gastroenterology", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>study of glands that secrete hormones: #cloze1# logy</span>`,
          clozes:{
            cloze1:{correctValue: "endocrinology", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>treatment of the mind: #cloze1# iatry</span>`,
          clozes:{
            cloze1:{correctValue: "psychiatry", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>study of disease: #cloze1# logy</span>`,
          clozes:{
            cloze1:{correctValue: "pathology", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>study of the heart: #cloze1# logy</span>`,
          clozes:{
            cloze1:{correctValue: "cardiology", clozelabel:"fill in the blank"},
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
          clozeHtml:`<span>cerebrovascular accident #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "cerebrum", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>encephalitis #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "brain", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>cystoscope #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "urinary bladder", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>transhepatic #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "across", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>osteogenic sarcoma #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "flesh", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>hypogastric #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "under", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>endocrine glands #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "within", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>nephrectomy #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "excision", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>exocrine glands #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "outside", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>neuralgia #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "pain", clozelabel:"fill in the blank"},
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
          title: `cerebral`,
          feedback: `<span>pertaining to the cerebrum, or largest part of the brain</span>`,
        },
        {
          title: `biopsy`,
          feedback: `<span>process of viewing life (removal of living tissue and viewing it under a microscope)</span>`,
        },
        {
          title: `adenitis`,
          feedback: `<span>inflammation of a gland</span>`,
        },
        {
          title: `cephalic`,
          feedback: `<span>pertaining to the head</span>`,
        },
        {
          title: `carcinoma`,
          feedback: `<span>tumor that is cancerous (cancerous tumor)</span>`,
        },
        {
          title: `cystoscopy`,
          feedback: `<span>process of visually examining the urinary bladder</span>`,
        },
        {
          title: `electrocardiogram`,
          feedback: `<span>record of the electricity in the heart</span>`,
        },
        {
          title: `cardiology`,
          feedback: `<span>process of study of the heart</span>`,
        },
        {
          title: `electroencephalogram`,
          feedback: `<span>record of the electricity in the brain</span>`,
        },
        {
          title: `dermatitis`,
          feedback: `<span>inflammation of the skin</span>`,
        },
        {
          title: `arthroscopy`,
          feedback: `<span>process of visual examination of a joint</span>`,
        },
        {
          title: `cytology`,
          feedback: `<span>process of study of cells</span>`,
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
          title: `cerebrovascular accident `,
          feedback: `<span>A cerebrovascular accident, or stroke, is damage to the blood vessels of the cerebrum, leading to death of brain cells.</span>`,
        },
        {
          title: `encephalitis`,
          feedback: `<span>Encephalitis is inflammation of the brain.</span>`,
        },
        {
          title: `cystoscope`,
          feedback: `<span>A cystoscope is an instrument used to visually examine the urinary bladder. The cystoscope is inserted into the urethra and urinary bladder.</span>`,
        },
        {
          title: `transhepatic`,
          feedback: `<span>Transhepatic means pertaining to across or through the liver.</span>`,
        },
        {
          title: `osteogenic sarcoma `,
          feedback: `<span>Osteogenic sarcoma is a malignant (cancerous) tumor originating in bone, which is considered a fleshy (connective) tissue of the body.</span>`,
        },
        {
          title: `hypogastric`,
          feedback: `<span>Hypogastric means pertaining to below the stomach.</span>`,
        },
        {
          title: `endocrine glands `,
          feedback: `<span>Endocrine glands secrete hormones within the body. Examples of these are the pituitary, thyroid, and adrenal glands.</span>`,
        },
        {
          title: `nephrectomy`,
          feedback: `<span>Nephrectomy is the removal of a kidney.</span>`,
        },
        {
          title: `exocrine glands `,
          feedback: `<span>Exocrine glands secrete chemicals to the outside of the body. Examples are the sweat, lacrimal or tear-producing, prostate, and salivary glands.</span>`,
        },
        {
          title: `neuralgia`,
          feedback: `<span>Neuralgia is nerve pain.</span>`,
        },
        
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },  

group17: {
      id: "group17",
      type: "dropdown",
      placeholder_id: "group17_placeholder",
      commonDropdownOptions:[
        "onc/o",
        "ophthalm/o",
        "oste/o",
        "path/o",
        "psych/o",
        "radi/o",
        "ren/o",
        "rhin/o",
        "sarc/o",
        "sect/o",
        "thromb/o",
        "ur/o"
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>kidney #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ren/o",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>disease #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "path/o",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>eye #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ophthalm/o",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>to cut #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "sect/o",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>nose #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "rhin/o",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>ﬂesh #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "sarc/o",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>mind #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "psych/o",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>urinary tract #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ur/o",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>bone #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "oste/o",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>x-rays #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "radi/o",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>clotting #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thromb/o",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>tumor #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "onc/o",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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



group18: {
      id: "group18",
      type: "dropdown",
      placeholder_id: "group18_placeholder",
      commonDropdownOptions:[],
      items: [
        { 
          headerImage:{},
          dropdownHtml:`<span>process of visual examination of the eye: ophthalmo #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["scopy","scope","tion","tomy","ectomy"],correctValue: "scopy",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          headerImage:{},
          dropdownHtml:`<span>instrument to visually examine the eye: ophthalmo #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["tomy","scope","scopy","ectomy","tion"],correctValue: "scope",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          headerImage:{},
          dropdownHtml:`<span>study of tumors: onco #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["al","genic","cyte","logy"],correctValue: "logy",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          headerImage:{},
          dropdownHtml:`<span>inflammation of bone: oste #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["oma","osis","itis"],correctValue: "itis",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          headerImage:{},
          dropdownHtml:`<span>abnormal condition of the mind: psych #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["osis","itis","oma"],correctValue: "osis",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          headerImage:{},
          dropdownHtml:`<span>clotting cell (platelet): thrombo #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["genic","logy","cyte","al"],correctValue: "cyte",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          headerImage:{},
          dropdownHtml:`<span>pertaining to the kidney: ren #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["cyte","logy","al","genic"],correctValue: "al",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          headerImage:{},
          dropdownHtml:`<span>removal (excision or resection) of the kidney: nephr #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["ectomy","scope","scopy","tion","tomy"],correctValue: "ectomy",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          headerImage:{},
          dropdownHtml:`<span>incision of (process of cutting into) a bone: osteo #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["tion","scope","ectomy","scopy","tomy"],correctValue: "tomy",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          headerImage:{},
          dropdownHtml:`<span>process of cutting back (in the sense of “cutting out” or removal): resect #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["tomy","ectomy","ion","scopy","tion","scope"],correctValue: "ion",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
       { 
          headerImage:{},
          dropdownHtml:`<span>pertaining to producing cancer: carcino #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["cyte","genic","logy","al"],correctValue: "genic",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          headerImage:{},
          dropdownHtml:`<span>tumor of flesh tissue (cancerous tumor found in connective tissue such as bone, fat and muscle):sarc #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["osis","itis","oma"],correctValue: "oma",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
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
       "condition, usually abnormal",
       "blood condition",
       "cell",
       "disease condition",
       "process of cutting, incision",
       "inflammation",
       "instrument to visually examine",
       "pain",
       "pertaining to producing, produced by, or produced in",
       "process",
       "protein",
       "record",
       "excision, removal (resection)"
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>-algia #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pain",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>-ion #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "process",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>-emia #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "blood condition",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>-gram #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "record (image)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>-scope #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "instrument to visually examine",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>-osis #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "condition, usually abnormal",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>-ectomy #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "excision, removal (resection)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>-genic #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pertaining to producing, produced by, or produced in",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>-pathy #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "disease condition",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>-tomy #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "process of cutting, incision",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>-itis #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "inﬂammation",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>-cyte #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "cell",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>-globin #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "protein",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
group20: {
      id: "group20",
      type: "dropdown",
      placeholder_id: "group20_placeholder",
      commonDropdownOptions:[
        "arthralgia",
        "carcinogenic",
        "cystitis",
        "encephalopathy",
        "endocrine",
        "hematoma",
        "hepatoma (hepatocellular carcinoma)",
        "iatrogenic",
        "leukemia",
        "leukocytosis"
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>When Paul smoked cigarettes, he inhaled a #dropdown1# substance with each puff.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "carcinogenic",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Sally’s sore throat, fever, and chills made her doctor order a white blood cell count. The results, indicating infection, showed a slight increase in normal cells, a condition called #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "leukocytosis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Mr. Smith’s liver enlarged, giving him abdominal pain. His radiologic tests and biopsy revealed a malignant tumor, or #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "hepatoma",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Mrs. Rose complained of pain in her hip joints, knees, and shoulders each morning. She was told that she had painful joints, or #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "arthralgia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
       
        {
          headerImage:{},
          dropdownHtml:`<span>Dr. Black was trained to treat disorders of the pancreas, thyroid gland, adrenal glands, and pituitary gland. Thus, he was an expert in the #dropdown1# glands.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "endocrine",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Ms. Walsh told her doctor she had pain when urinating. After tests, the doctor’s  diagnosis was inﬂammation of the urinary bladder, or #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "cystitis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Elizabeth’s overhead tennis shot hit David in the thigh, producing a large #dropdown1# . His skin looked bruised and the affected area was tender.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "hematoma",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Mr. Bell’ s  white blood cell count is 10 times higher than normal. Examination of his blood shows cancerous white blood cells. His diagnosis is #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "leukemia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Mr. Kay was resuscitated (revived from potential or apparent death) in the emergency department after experiencing a heart attack. Unfortunately, he suffered a broken rib as a result of the   physician’s  chest compressions. This is an example of a/an #dropdown1# fracture.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "iatrogenic",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>After playing one season for a professional football team, Bill Smith decided to retire because he worried about the dangers of concussions and head trauma—a condition called CTE, or chronic traumatic #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "encephalopathy",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
group21: {
      id: "group21",
      type: "dropdown",
      placeholder_id: "group21_placeholder",
      commonDropdownOptions:[],
      items: [
        { 
          headerImage:{},
          dropdownHtml:`<span>complete knowledge; a decision about the nature of the patient’s condition after the appropriate tests are done: #dropdown1# gnosis</span>`,
          dropdowns:{
            dropdown1:{values:["pro","an","dia"],correctValue: "dia",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          headerImage:{},
          dropdownHtml:`<span>before knowledge; a prediction about the outcome of treatment, given after the diagnosis: #dropdown1# gnosis</span>`,
          dropdowns:{
            dropdown1:{values:["pro","dia","an"],correctValue: "pro",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          headerImage:{},
          dropdownHtml:`<span>pertaining to below the liver: #dropdown1# hepatic</span>`,
          dropdowns:{
            dropdown1:{values:["hypo","epi","sub","peri","hyper"],correctValue: "sub",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          headerImage:{},
          dropdownHtml:`<span>the membrane surrounding the heart: #dropdown1# cardium</span>`,
          dropdowns:{
            dropdown1:{values:["sub","epi","peri","hypo","hyper"],correctValue: "peri",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          headerImage:{},
          dropdownHtml:`<span>condition of excessive sugar in the blood: #dropdown1# glycemia</span>`,
          dropdowns:{
            dropdown1:{values:["hyper","peri","sub","epi","hypo"],correctValue: "hyper",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          headerImage:{},
          dropdownHtml:`<span>pertaining to under the skin: #dropdown1# dermic</span>`,
          dropdowns:{
            dropdown1:{values:["sub","hypo","epi","hyper","peri"],correctValue: "hypo",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          headerImage:{},
          dropdownHtml:`<span>pertaining to above the stomach: #dropdown1# gastric</span>`,
          dropdowns:{
            dropdown1:{values:["hypo","epi","peri","sub","hyper"],correctValue: "epi",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          headerImage:{},
          dropdownHtml:`<span>process of cutting back (in the sense of cutting out): #dropdown1# section</span>`,
          dropdowns:{
            dropdown1:{values:["dia","re","an"],correctValue: "re",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          headerImage:{},
          dropdownHtml:`<span>condition of deficient (low) sugar in the blood: #dropdown1# glycemia</span>`,
          dropdowns:{
            dropdown1:{values:["peri","hyper","epi","sub","hypo"],correctValue: "hypo",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          headerImage:{},
          dropdownHtml:`<span>condition of low numbers of erythrocytes (red blood cells) or deficient hemoglobin in these cells: #dropdown1# emia</span>`,
          dropdowns:{
            dropdown1:{values:["dia","pro","an"],correctValue: "an",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        }

        


      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
group22: {
      id: "group22",
      type: "dropdown",
      placeholder_id: "group22_placeholder",
      commonDropdownOptions:[
        "neuropathy",
        "biopsy",
        "urologist",
        "oncologist",
        "psychiatrist",
        "thrombocyte",
        "anemia",
        "prognosis",
        "pathogenic",
        "osteoarthritis"
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>Pamela Crick is 72 years old and suffers from a degenerative joint disease that is caused by the wearing away of tissue around her joints. This disease, which literally means “inﬂammation of bones and joints,” is #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "osteoarthritis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>The #dropdown1# sample was removed during surgery and sent to a pathologist to be examined under a microscope for a proper diagnosis.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "biopsy",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>A/An #dropdown1# performed surgery to remove Mr. Simon’s cancerous kidney.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "urologist",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Ms. Rose has suffered from diabetes with hyperglycemia for many years. This condition can lead to long-term complications, such as the disease of nerves called diabetic #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "neuropathy",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>A virus or a bacterium produces disease and is therefore a/an #dropdown1# organism.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pathogenic",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Jordan has a disease caused by abnormal hemoglobin in his erythrocytes. The erythrocytes change shape, collapsing to form sickle-shaped cells that can become clots and stop the ﬂow of blood. His condition is called sickle cell #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "anemia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Dr. Max Shelby is a physician who treats carcinomas and sarcomas. He is a/an #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "oncologist",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Bill had difﬁculty stopping the bleeding from a cut on his face while shaving. He knew his medication caused him to have decreased platelets, or a low #dropdown1# count, and that probably was the reason his blood was not clotting very well.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thrombocyte",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Dr. Susan Parker told Paul that his condition would improve with treatment in a few weeks. She said his #dropdown1# is excellent and he can expect total recovery.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "prognosis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>After ﬂeeing the World Trade Center on September 11, 2001, Mrs. Jones had many problems with her job, her husband, and her family relationships. She went to see a #dropdown1# , who prescribed drugs to treat her depression.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "psychiatrist",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
      commonDropdownOptions:[],
      items: [
        { 
          headerImage:{},
          dropdownHtml:`<span>Ms. Brody had a cough and fever. Her doctor instructed her to go to the #dropdown1# department for a chest x-ray examination.</span>`,
          dropdowns:{
            dropdown1:{values:["pathology","hematology","radiology"],correctValue: "radiology",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          headerImage:{},
          dropdownHtml:`<span>After she gave birth to her fourth child, Ms. Thompson had problems holding her urine (a condition known as urinary incontinence). She made an appointment with a #dropdown1# to evaluate her condition.</span>`,
          dropdowns:{
            dropdown1:{values:["gastroenterologist","urologist","pathologist"],correctValue: "urologist",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          headerImage:{},
          dropdownHtml:`<span>Dr. Monroe told a new mother she had lost much blood during delivery of her child. She had #dropdown1# and needed a blood transfusion immediately.</span>`,
          dropdowns:{
            dropdown1:{values:["adenitis","anemia","leukocytosis"],correctValue: "anemia",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          headerImage:{},
          dropdownHtml:`<span>Mr. Preston was having chest pain during his morning walks. He made an appointment to discuss his new symptom with a #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:["neurologist","cardiologist","nephrologist"],correctValue: "cardiologist",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          headerImage:{},
          dropdownHtml:`<span>After my skiing accident, Dr. Curtin suggested #dropdown1# to visually examine my swollen, painful knee.</span>`,
          dropdowns:{
            dropdown1:{values:["biopsy","arthroscopy","cystoscopy"],correctValue: "arthroscopy",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        }
      
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },              
  },
};