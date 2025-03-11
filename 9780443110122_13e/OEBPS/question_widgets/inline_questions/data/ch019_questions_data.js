const questions_data = {
  sharedProperties: {
    maxWidth: "960px", //"100%", "90%", "760px", "1024px"
    alignment: "center", //"center", "left"
  },
  question_groups: {
    group1: {
      id: "group1",
      type: "accordian",
      placeholder_id: "ch19group1_placeholder",
      items: [
        {
            title: `aden/o`,
            explanation: `gland`,
        },
        {
            title: `alveol/o`,
            explanation: `alveolus; air sac; small sac`,
        },
        {
            title: `cac/o`,
            explanation: `bad`,
        },
        {
            title: `carcin/o`,
            explanation: `cancerous; cancer`,
        },
        {
            title: `cauter/o`,
            explanation: `heat; burn`,
        },
        {
            title: `chem/o`,
            explanation: `drug; chemical`,
        },
        {
            title: `cry/o`,
            explanation: `cold`,
        },
        {
            title: `cyst/o`,
            explanation: `urinary bladder; cyst; sac of fluid`,
        },
        {
            title: `fibr/o`,
            explanation: `fiber`,
        },
        {
            title: `follicul/o`,
            explanation: `follicle; small sac`,
        },
        {
            title: `fung/i`,
            explanation: `fungus; mushroom (lower organism lacking chlorophyll)`,
        },
        {
            title: `medull/o`,
            explanation: `medulla (inner section); middle; soft, marrow`,
        },
        {
            title: `mucos/o`,
            explanation: `mucous membrane (mucosa)`,
        },
        {
            title: `mut/a`,
            explanation: `genetic change`,
        },
        {
            title: `mutagen/o`,
            explanation: `causing genetic change`,
        },
        {
            title: `necr/o`,
            explanation: `death`,
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
            title: `papill/o`,
            explanation: `nipple-like; optic disc (disk)`,
        },
        {
            title: `pharmac/o`,
            explanation: `drug`,
        },
        {
            title: `plas/o`,
            explanation: `development; formation; growth`,
        },
        {
            title: `ple/o`,
            explanation: `more; many; varied`,
        },
        {
            title: `polyp/o`,
            explanation: `polyp; small growth`,
        },
        {
            title: `radi/o`,
            explanation: `x-rays; radioactivity; radius (lateral lower arm bone)`,
        },
        {
            title: `sarc/o`,
            explanation: `flesh (connective tissue)`,
        },
        {
            title: `scirrh/o`,
            explanation: `hard`,
        },
        {
            title: `xer/o`,
            explanation: `dry`,
        },
      ],
      titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
      itemSeperator: "false",
    },
    group2: {
      id: "group2",
      type: "accordian",
      placeholder_id: "ch19group2_placeholder",
      items: [
        {
          title: `-ary`,
          explanation: `pertaining to`,
        },
        {
          title: `-blastoma`,
          explanation: `immature tumor (cells)`,
        },
        {
          title: `-oid`,
          explanation: `resembling; originating from`,
      },
      {
          title: `-oma`,
          explanation: `tumor; mass; fluid collection`,
        },
        {
          title: `-plasia`,
          explanation: `development; formation; growth`,
        },
        {
          title: `-plasm`,
          explanation: `formation; structure`,
      },
      {
          title: `-ptosis`,
          explanation: `falling; drooping; prolapse`,
        },
        {
          title: `-stasis`,
          explanation: `stopping; controlling; placing`,
        },
        {
          title: `-stomia`,
          explanation: `condition of the mouth`,
      },
      {
          title: `-suppression`,
          explanation: `stopping`,
        },
        {
          title: `-therapy`,
          explanation: `treatment`,
        },
        {
          title: `-tion`,
          explanation: `process`,
      },
      ],
      titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
      itemSeperator: "false",
    },
    group3: {
      id: "group3",
      type: "accordian", 
      placeholder_id: "ch19group3_placeholder",
      items: [
        {
            title: `ana-`,
            explanation: `up; apart; backward; again, anew`,
        },
        {
          title: `anti-`,
          explanation: `against`,
        },
        {
          title: `apo-`,
          explanation: `off, away`,
        },
        {
          title: `brachy-`,
          explanation: `short`,
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
          title: `hyper-`,
          explanation: `above; excessive`,
        },
        {
          title: `meta-`,
          explanation: `change; beyond`,
        },
        {
          title: `tele-`,
          explanation: `far`,
        },
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
    group4: {
      id: "group4",
      type: "accordian",
      placeholder_id: "ch19group4_placeholder",
      items: [
                {
            title: `adenocarcinoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/adenocarcinoma.mp3`,
            explanation: `ah-deh-no-kar-sih-NO-mah`,
        },
        {
            title: `adjuvant chemotherapy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/adjuvant_therapy.mp3`,
            explanation: `AD-ju-vantke-mo-THER-ah-pe`,
        },
        {
            title: `alkylating agents`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/alkylating_agents.mp3`,
            explanation: `AL-kih-la-tingA-jents`,
        },
        {
            title: `alopecia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/alopecia.mp3`,
            explanation: `al-o-PE-she-ah`,
        },
        {
            title: `alveolar`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/alveolar.mp3`,
            explanation: `al-ve-O-lar`,
        },
        {
            title: `anaplasia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/anaplasia.mp3`,
            explanation: `an-ah-PLA-ze-ah`,
        },
        {
            title: `antibiotics`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antibiotics.mp3`,
            explanation: `an-tih-bi-OT-iks`,
        },
        {
            title: `antimetabolites`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antimetabolites.mp3`,
            explanation: `an-te-meh-TAB-o-lites`,
        },
        {
            title: `antimitotics`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antimitotics.mp3`,
            explanation: `an-tih-mi-TOT-iks`,
        },
        {
            title: `apoptosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/apoptosis.mp3`,
            explanation: `a-pop-TO-sis`,
        },
        {
            title: `benign tumor`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/benign_tumor.mp3`,
            explanation: `be-NINETU-mor`,
        },
        {
            title: `bone marrow biopsy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/bone_marrow_biopsy.mp3`,
            explanation: `boneMAH-roBI-op-se`,
        },
        {
            title: `bone marrow transplantation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/bone_marrow_transplantation.mp3`,
            explanation: `boneMAH-rotranz-plan-TA-shun`,
        },
        {
            title: `brachytherapy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/brachytherapy.mp3`,
            explanation: `bra-ke-THER-ah-pe`,
        },
        {
            title: `cachexia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cachexia.mp3`,
            explanation: `kah-KEK-se-ah`,
        },
        {
            title: `carcinogens`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/carcinogens.mp3`,
            explanation: `kar-SIH-no-jenz`,
        },
        {
            title: `carcinoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/carcinoma.mp3`,
            explanation: `kar-sih-NO-mah`,
        },
        {
            title: `carcinoma in situ`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/carcinoma_in_situ.mp3`,
            explanation: `kar-sih-NO-mahinSI-tu`,
        },
        {
            title: `cauterization`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cauterization.mp3`,
            explanation: `kaw-ter-ih-ZA-shun`,
        },
        {
            title: `chemotherapy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/chemotherapy.mp3`,
            explanation: `ke-mo-THER-ah-pe`,
        },
        {
            title: `combination chemotherapy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/combination_chemotherapy.mp3`,
            explanation: `KOM-bih-NA-shunke-mo-THER-ah-pe`,
        },
        {
            title: `core needle biopsy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/core_needle_biopsy.mp3`,
            explanation: `coreNE-delBI-op-se`,
        },
        {
            title: `cryosurgery`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cryosurgery.mp3`,
            explanation: `kri-o-SUR-jer-e`,
        },
        {
            title: `cystic tumor`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cystic_tumor.mp3`,
            explanation: `SIS-tikTU-mor`,
        },
        {
            title: `cytogenetic analysis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cytogenetic_analysis.mp3`,
            explanation: `si-to-jeh-NET-ikah-NAL-eh-sis`,
        },
        {
            title: `dedifferentiation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/dedifferentiation.mp3`,
            explanation: `de-dif-er-en-she-A-shun`,
        },
        {
            title: `deoxyribonucleic acid`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/deoxyribonucleic_acid.mp3`,
            explanation: `de-ox-e-ri-bo-nu-KLE-ikAS-id`,
        },
        {
            title: `differentiation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/differentiation.mp3`,
            explanation: `dif-er-en-she-A-shun`,
        },
        {
            title: `diffuse`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/diffuse.mp3`,
            explanation: `di-FUS`,
        },
        {
            title: `dysplastic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/dysplastic.mp3`,
            explanation: `dis-PLAS-tik`,
        },
        {
            title: `electrocauterization`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/electrocauterization.mp3`,
            explanation: `eh-lek-tro-kaw-ter-eh-ZA-shun`,
        },
        {
            title: `electron beams`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/electron_beams.mp3`,
            explanation: `eh-LEK-tronbeemz`,
        },
        {
            title: `en bloc resection`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/en_bloc_resection.mp3`,
            explanation: `enblokre-SEK-shun`,
        },
        {
            title: `encapsulated`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/encapsulated.mp3`,
            explanation: `en-KAP-su-la-ted`,
        },
        {
            title: `epidermoid`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/epidermoid.mp3`,
            explanation: `ep-ih-DER-moyd`,
        },
        {
            title: `excisional biopsy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/excisional_biopsy.mp3`,
            explanation: `ek-SIZH-un-alBI-op-se`,
        },
        {
            title: `exenteration`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/exenteration.mp3`,
            explanation: `eks-en-teh-RA-shun`,
        },
        {
            title: `exfoliative cytology`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/exfoliative_cytology.mp3`,
            explanation: `eks-FO-le-a-tivsi-TOL-o-je`,
        },
        {
            title: `external beam radiation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/external_beam_radiation.mp3`,
            explanation: `eks-TER-nalbeamra-de-A-shun`,
        },
        {
            title: `fiberoptic colonoscopy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/fiberoptic_colonoscopy.mp3`,
            explanation: `fi-ber-OP-tikko-lon-OS-ko-pe`,
        },
        {
            title: `fibrosarcoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/fibrosarcoma.mp3`,
            explanation: `fi-bro-sar-KO-mah`,
        },
        {
            title: `fibrosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/fibrosis.mp3`,
            explanation: `fi-BRO-sis`,
        },
        {
            title: `fine needle aspiration`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/fine_needle_aspiration.mp3`,
            explanation: `fineNE-dilas-peh-RA-shun`,
        },
        {
            title: `follicular`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/follicular.mp3`,
            explanation: `fo-LIK-u-lar`,
        },
        {
            title: `fractionation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/fractionation.mp3`,
            explanation: `frak-shah-NA-shun`,
        },
        {
            title: `fulguration`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/fulguration.mp3`,
            explanation: `ful-gu-RA-shun`,
        },
        {
            title: `fungating tumor`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/fungating_tumor.mp3`,
            explanation: `fun-GA-tingTU-mor`,
        },
        {
            title: `genetic screening`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/genetic_screening.mp3`,
            explanation: `jeh-NET-ikSCRE-ning`,
        },
        {
            title: `grading of tumors`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/grading_of_tumors.mp3`,
            explanation: `GRA-dingofTU-morz`,
        },
        {
            title: `gray`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/gray(gy).mp3`,
            explanation: `gra`,
        },
        {
            title: `hyperplasia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hyperplasia.mp3`,
            explanation: `hi-per-PLA-ze-ah`,
        },
        {
            title: `immunohistochemistry`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/immunohistochemistry.mp3`,
            explanation: `im-u-no-his-to-KEM-is-tre`,
        },
        {
            title: `immunotherapy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/immunotherapy.mp3`,
            explanation: `im-u-no-THE-rah-pe`,
        },
        {
            title: `incisional biopsy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/incisional_biopsy.mp3`,
            explanation: `in-SIZH-un-alBI-op-se`,
        },
        {
            title: `infertility`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/infertility.mp3`,
            explanation: `in-fer-TIL-ih-te`,
        },
        {
            title: `infiltrative`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/infiltrative.mp3`,
            explanation: `IN-fil-tra-tiv`,
        },
        {
            title: `invasive`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/invasive.mp3`,
            explanation: `in-VA-siv`,
        },
        {
            title: `irradiation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/irradiation.mp3`,
            explanation: `ir-ra-de-A-shun`,
        },
        {
            title: `laparoscopy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/laparoscopy.mp3`,
            explanation: `lap-ah-ROS-ko-pe`,
        },
        {
            title: `linear accelerator`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/linear_accelerator.mp3`,
            explanation: `LIN-e-arak-SEL-eh-ra-tor`,
        },
        {
            title: `liquid biopsy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/liquid_biopsy.mp3`,
            explanation: `LIK-widBI-op-se`,
        },
        {
            title: `malignant tumor`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/malignant_tumor.mp3`,
            explanation: `mah-LIG-nantTU-mor`,
        },
        {
            title: `mammography`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/mammography.mp3`,
            explanation: `mah-MOG-rah-fe`,
        },
        {
            title: `medullary tumor`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/medullary_tumor.mp3`,
            explanation: `MED-u-lair-eTU-mor`,
        },
        {
            title: `mesenchymal`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/mesenchymal.mp3`,
            explanation: `mez-en-KI-mal`,
        },
        {
            title: `metastasis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/metastasis.mp3`,
            explanation: `met-TAS-tah-sis`,
        },
        {
            title: `mitosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/mitosis.mp3`,
            explanation: `mi-TO-sis`,
        },
        {
            title: `mixed tissue tumors`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/mixed-tissue_tumors.mp3`,
            explanation: `MIKSDTIH-shuTU-morz`,
        },
        {
            title: `modality`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/modality.mp3`,
            explanation: `mo-DAL-ih-te`,
        },
        {
            title: `molecularly targeted therapy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/molecularly_targeted_drugs.mp3`,
            explanation: `mo-LEK-u-lar-leTAR-get-edTHER-ah-pe`,
        },
        {
            title: `monoclonal antibodies`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/monoclonal_antibody.mp3`,
            explanation: `mon-o-CLO-nalANT-ih-bod-eez`,
        },
        {
            title: `morbidity`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/morbidity.mp3`,
            explanation: `mor-BID-ih-te`,
        },
        {
            title: `mucinous`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/mucinous.mp3`,
            explanation: `MU-sin-us`,
        },
        {
            title: `mucositis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/mucositis.mp3`,
            explanation: `mu-ko-SI-tis`,
        },
        {
            title: `mutagenic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/mutagenic.mp3`,
            explanation: `mu-tah-JEN-ik`,
        },
        {
            title: `mutation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/mutation.mp3`,
            explanation: `mu-TA-shun`,
        },
        {
            title: `myelosuppression`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/myelosuppression.mp3`,
            explanation: `mi-eh-lo-su-PRE-shun`,
        },
        {
            title: `necrotic tumor`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/necrotic_tumor.mp3`,
            explanation: `neh-KROT-ikTU-mor`,
        },
        {
            title: `neoadjuvant chemotherapy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/neoadjuvant_chemotherapy.mp3`,
            explanation: `ne-o-AD-ju-vantke-mo-THER-ah-pe`,
        },
        {
            title: `neoplasm`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/neoplasm.mp3`,
            explanation: `NE-o-plazm`,
        },
        {
            title: `neuroblastoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/neuroblastoma.mp3`,
            explanation: `nu-ro-blas-TO-mah`,
        },
        {
            title: `neurofibromatosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/neurofibromatosis.mp3`,
            explanation: `nu-ro-fi-bro-mah-TO-sis`,
        },
        {
            title: `nucleotide`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/nucleotide.mp3`,
            explanation: `NU-kle-o-tide`,
        },
        {
            title: `oncogene`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/oncogene.mp3`,
            explanation: `ON-ko-jeen`,
        },
        {
            title: `oncology`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/oncology.mp3`,
            explanation: `on-KOL-o-je`,
        },
        {
            title: `osteosarcoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/osteosarcoma.mp3`,
            explanation: `os-te-o-sar-KO-mah`,
        },
        {
            title: `palliative`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/palliative.mp3`,
            explanation: `PAH-le-ah-tiv`,
        },
        {
            title: `papillary`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/papillary.mp3`,
            explanation: `PAP-ih-lair-e`,
        },
        {
            title: `pedunculated`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pedunculated.mp3`,
            explanation: `peh-DUNG-ku-la-ted`,
        },
        {
            title: `PET/CT scan`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pet_ct_scan.mp3`,
            explanation: `PET-CTskan`,
        },
        {
            title: `photon therapy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/photon_therapy.mp3`,
            explanation: `FO-tonTHER-ah-pe`,
        },
        {
            title: `pleomorphic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pleomorphic.mp3`,
            explanation: `ple-o-MOR-fik`,
        },
        {
            title: `pneumonitis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pneumonitis.mp3`,
            explanation: `nu-mo-NI-tis`,
        },
        {
            title: `polypoid tumor`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/polypoid_tumor.mp3`,
            explanation: `POL-ih-poydTU-mor`,
        },
        {
            title: `protein marker tests`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/protein_marker_tests.mp3`,
            explanation: `PRO-teenMARK-ertests`,
        },
        {
            title: `protocol`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/protocol.mp3`,
            explanation: `PRO-to-kol`,
        },
        {
            title: `proton therapy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/proton_therapy.mp3`,
            explanation: `PRO-tonTHER-ah-pe`,
        },
        {
            title: `radiation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/radiation.mp3`,
            explanation: `ra-de-A-shun`,
        },
        {
            title: `radiation fields`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/radiation_fields.mp3`,
            explanation: `ra-de-A-shunfeeldz`,
        },
        {
            title: `radiocurable tumor`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/radiocurable_tumor.mp3`,
            explanation: `ra-de-o-KYUR-a-blTU-mor`,
        },
        {
            title: `radionuclide scans`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/radionuclide_scans.mp3`,
            explanation: `ra-de-o-NU-klideskanz`,
        },
        {
            title: `radioresistant tumor`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/radioresistant_tumor.mp3`,
            explanation: `ra-de-o-re-ZIS-tantTU-mor`,
        },
        {
            title: `radiosensitive tumor`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/radiosensitive_tumor.mp3`,
            explanation: `ra-de-o-SEN-sih-tivTU-mor`,
        },
        {
            title: `radiosensitizers`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/radiosensitizers.mp3`,
            explanation: `ra-de-o-SEN-sih-ti-zerz`,
        },
        {
            title: `radiotherapy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/radiotherapy.mp3`,
            explanation: `ra-de-o-THER-ah-pe`,
        },
        {
            title: `relapse`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/relapse.mp3`,
            explanation: `RE-laps`,
        },
        {
            title: `remission`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/remission.mp3`,
            explanation: `re-MIH-shun`,
        },
        {
            title: `retinoblastoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/retinoblastoma.mp3`,
            explanation: `reh-tin-o-blas-TO-mah`,
        },
        {
            title: `ribonucleic acid`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ribonucleic_acid(rna).mp3`,
            explanation: `ri-bo-nu-KLE-ikAS-id`,
        },
        {
            title: `sarcoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sarcoma.mp3`,
            explanation: `sar-KO-mah`,
        },
        {
            title: `scirrhous`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/scirrhous.mp3`,
            explanation: `SKIR-us`,
        },
        {
            title: `secondary tumors`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/secondary_tumors.mp3`,
            explanation: `SEK-on-dair-eTU-morz`,
        },
        {
            title: `serous`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/serous.mp3`,
            explanation: `SER-us`,
        },
        {
            title: `sessile`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sessile.mp3`,
            explanation: `SES-ile`,
        },
        {
            title: `simulation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/simulation.mp3`,
            explanation: `sim-u-LA-shun`,
        },
        {
            title: `solid tumor`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/solid_tumor.mp3`,
            explanation: `SOL-idTU-mor`,
        },
        {
            title: `staging of tumors`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/staging_of_tumors.mp3`,
            explanation: `STA-jingofTU-morz`,
        },
        {
            title: `stem cell transplantation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/stem_cell_transplantation.mp3`,
            explanation: `stemseltranz-plan-TA-shun`,
        },
        {
            title: `stereotactic radiosurgery`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/stereotactic_radiosurgery.mp3`,
            explanation: `steh-re-o-TAK-ticra-de-o-SUR-jeh-ry`,
        },
        {
            title: `teletherapy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/teletherapy.mp3`,
            explanation: `tel-e-THER-ah-pe`,
        },
        {
            title: `ulcerating tumor`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ulcerating_tumor.mp3`,
            explanation: `UL-ser-a-tingTU-mor`,
        },
        {
            title: `undifferentiated`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/undifferentiated.mp3`,
            explanation: `un-dif-er-EN-she-a-ted`,
        },
        {
            title: `verrucous tumor`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/verrucous_tumor.mp3`,
            explanation: `veh-RU-kusTU-mor`,
        },
        {
            title: `viral oncogenes`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/viral_oncogenes.mp3`,
            explanation: `VI-ralONK-o-jenz`,
        },
        {
            title: `virus`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/virus.mp3`,
            explanation: `VI-rus`,
        },
        {
            title: `xerostomia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/xerostomia.mp3`,
            explanation: `zer-o-STO-me-ah`,
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
       "glioma",
       "hepatoma",
       "hypernephroma",
       "lymphoma",
       "melanoma",
       "mesothelioma",
       "multiple myeloma",
       "thymoma"

      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>Which tumor develops from a dysplastic nevus? #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "melanoma",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//newline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Which tumor arises from an organ located within the mediastinum? #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thymoma", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//newline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Which tumor arises from an organ in the RUQ of the abdomen? #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "hepatoma", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//newline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Which tumor has types called astrocytoma, ependymoma, glioblastoma multiforme? #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "glioma", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//newline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>Which tumor is also known as a renal cell carcinoma? #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "hypernephroma", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//newline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Which type of cancer contains large numbers of plasma cells (bone marrow antibody-producing cells)? #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "multiple myeloma", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//newline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Which tumor arises from membrane cells surrounding the lungs? #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "mesothelioma", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//newline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>Which tumor is derived from B cell lymphocytes? #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "lymphoma", useCommonOptions:"true"},
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
      type: "dropdown",
      placeholder_id: "group6_placeholder",
      commonDropdownOptions:[],
      items: [
        { 
          dropdownHtml:`<span>Where was the primary breast lesion located? #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["Under the pigmented area of the breast","About an inch and a half above and to the left of the nipple and pigmented area","Near the axilla and under the shoulder blade"],correctValue: "About an inch and a half above and to the left of the nipple and pigmented area",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>Other associated findings were #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["Redness and swelling","Enlarged lymph nodes under the armpit","None of the above"],correctValue: "None of the above",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>What procedure gave evidence that the tumor had not yet metastasized? #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["Estrogen receptor assay","Excisional biopsy of the mass","Sentinel node biopsy"],correctValue: "Sentinel node biopsy",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>What additional therapy was undertaken? #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["Cytotoxic chemotherapy","Radiation to the breast","Radiation to the breast and then treatment with an estrogen blocker"],correctValue: "Radiation to the breast and then treatment with an estrogen blocker",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>amoxifen was prescribed because #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["The tumor was found to be nonresponsive to estrogen.","The tumor had an estrogen receptor, and tamoxifen is an antiestrogen.","The tumor was at an advanced stage."],correctValue: "The tumor had an estrogen receptor, and tamoxifen is an antiestrogen",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
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
       "chemical carcinogen",
       "DNA",
       "mitosis",
       "mutation",
       "nucleotide",
       "oncogene",
       "radiation",
       "RNA",
       "virus"

      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>replication of cells; two identical cells are produced from a parent cell #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "mitosis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>change in the genetic material of a cell #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "mutation", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>genetic material within the nucleus that controls replication and protein synthesis #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "DNA", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>cellular substance (ribonucleic acid) that is important in protein synthesis #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "RNA", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>energy carried by a stream of particles #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "radiation", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>infectious agent that reproduces by entering a host cell and using the host’s genetic material to make copies of itself #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "virus", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>region of genetic material found in tumor cells and in viruses that causes cancer #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "oncogene", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>an agent (hydrocarbon, insecticide, hormone) that causes cancer #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "chemical carcinogen", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>unit (component) of DNA composed of a sugar, phosphate, and base #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "nucleotide", useCommonOptions:"true"},
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
      commonDropdownOptions:[
       "cystic",
       "fungating",
       "inflammatory",
       "medullary",
       "necrotic",
       "polypoid",
       "ulcerating",
       "verrucous"

      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>Containing dead tissue: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "necrotic",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Mushrooming pattern of growth: tumor cells pile on top of each other: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "fungating", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Characterized by large, open, exposed surfaces: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ulcerating", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Characterized by redness, swelling, and heat: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "inﬂammatory", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Growths are projections from a base; sessile and pedunculated tumors are examples: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "polypoid", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Tumors form large, open spaces filled with fluid; serous and mucinous tumors are examples: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "cystic", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>Tumors resemble wart-like growths: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "verrucous", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>Tumors are large, soft, and fleshy: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "medullary", useCommonOptions:"true"},
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
    group9: {
      id: "group9",
      type: "dropdown",
      placeholder_id: "group9_placeholder",
      commonDropdownOptions:[],
      items: [
        { 
          dropdownHtml:`<span>A #dropdown1#  is a cancerous tumor composed of cells of epithelial tissue.</span>`,
          dropdowns:{
            dropdown1:{values:["carcinoma; thyroid adenocarcinoma, squamous cell carcinoma","sarcoma; liposarcoma, chondrosarcoma, osteogenic sarcoma"],correctValue: "carcinoma; thyroid adenocarcinoma, squamous cell carcinoma",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>A #dropdown1# is a cancerous tumor composed of connective tissue.</span>`,
          dropdowns:{
            dropdown1:{values:["carcinoma; thyroid adenocarcinoma, squamous cell carcinoma","sarcoma; liposarcoma, chondrosarcoma, osteogenic sarcoma"],correctValue: "sarcoma; liposarcoma, chondrosarcoma, osteogenic sarcoma",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>Retinoblastoma and adenomatous polyposis coli syndrome are examples of #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["chemical carcinogens","inherited cancers"],correctValue: "inherited cancers",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>The assessment of a tumor’s degree of maturity or microscopic differentiation is #dropdown1# of the tumor.</span>`,
          dropdowns:{
            dropdown1:{values:["grading","staging"],correctValue: "grading",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>The assessment of a tumor’s extent of spread within the body is known as #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["grading","staging"],correctValue: "staging",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>In the TNM staging system, T stands for #dropdown1#, N stands for #dropdown2#, and M stands for #dropdown3#</span>`,
          dropdowns:{
            dropdown1:{values:["tissue","tumor"],correctValue: "tumor",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["node","necrotic"],correctValue: "node",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown3:{values:["mitotic","metastasis"],correctValue: "metastasis",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>Loss of differentiation of cells is called #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["hyperplasia","anaplasia"],correctValue: "anaplasia",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>Programmed call death is known as #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["apoptosis","carcinogenesis"],correctValue: "apoptosis",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
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
       "fulguration",
       "en bloc resection",
       "incisional biopsy",
       "excisional biopsy",
       "cryosurgery",
       "cauterization",
       "exenteration"

      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>Removal of tumor and a margin of normal tissue for diagnosis and possible cure of small tumors #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "excisional biopsy",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Burning a lesion to destroy tumor cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "cauterization", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Wide resection involving removal of tumor, its organ of origin, and surrounding tissue in the body space #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "exenteration", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Destruction of tissue by electric sparks generated by a high-frequency current #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "fulguration", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Removal of entire tumor and regional lymph nodes #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "en bloc resection", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Freezing a lesion to kill tumor cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "cryosurgery", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>Cutting into a tumor and removing a piece to establish a diagnosis #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "incisional biopsy", useCommonOptions:"true"},
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
             group11: {
      id: "group11",
      type: "dropdown",
      placeholder_id: "group11_placeholder",
      commonDropdownOptions:[
       "alopecia",
       "cystitis and proctitis",
       "desquamation",
       "fibrosis",
       "infertility",
       "myelosuppression",
       "nausea",
       "oral mucositis",
       "pneumonitis",
       "secondary tumors",
       "xerostomia"

      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>Inflammation and ulceration of lining cells in the mouth caused by radiation to the jaw: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "oral mucositis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Radiation to the lungs causes inflammation of the lungs: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pneumonitis", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Chemotherapy for ovarian cancer causes loss of hair on the head: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "alopecia", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Bone marrow depression with leukopenia, anemia, and thrombocytopenia: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "myelosuppression", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Radiation to the lungs causes increase in connective tissue: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ﬁbrosis", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>Radiation of salivary glands causes dryness of the mouth: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "xerostomia", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>Chemotherapy may cause this sensation leading to vomiting: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "nausea", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>New type of growths in separate sites from the primary tumor: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "secondary tumors", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Loss of reproductive function: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "infertility", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Radiation effects on the urinary bladder and rectum: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "cystitis and proctitis", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>Loss of skin over an irradiated area: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "desquamation", useCommonOptions:"true"},
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
       "beta-hCG test",
       "bone marrow biopsy",
       "CA-125",
       "CEA test",
       "core needle biopsy",
       "estrogen receptor assay",
       "exfoliative cytology",
       "laparoscopy",
       "PSA test",
       "stem cell transplant"

      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>test for the presence of a portion of human chorionic gonadotropin hormone (a marker for testicular cancer) #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "beta-hCG test",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>protein marker for ovarian cancer detected in the blood #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "CA-125", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>visual examination of the abdominal cavity; peritoneoscopy #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "laparoscopy", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>test for the presence of a hormone receptor on breast cancer cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "estrogen receptor assay", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>removal of bone marrow tissue for microscopic examination #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "bone marrow biopsy", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>obtaining a plug of tissue for microscopic examination #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "core needle biopsy", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>blood test for the presence of an antigen related to prostate cancer #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "PSA test", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>blood test for carcinoembryonic antigen (marker for GI cancer) #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "CEA test", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>cells are scraped off tissue and microscopically examined #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "exfoliative cytology", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>an intravenous infusion of blood-forming cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "stem cell transplant", useCommonOptions:"true"},
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
      commonDropdownOptions:[],
      items: [
        {
          dropdownHtml:`<span>Pauline was found to have a meningioma, which usually is a/an #dropdown1# tumor. The doctor told her that it was not malignant, but that it should be removed because of the pressure it was causing on the surrounding tissues.</span>`,
          dropdowns:{
            dropdown1:{values:["benign","anaplastic","necrotic"],correctValue: "benign",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
        
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          dropdownHtml:`<span>Marlene underwent surgical resection of her breast mass. After surgery, Dr. Mendez recommended #dropdown1# chemotherapy because her tumor had spread to a lymph node.</span>`,
          dropdowns:{
            dropdown1:{values:["dedifferentiated","modality","adjuvant"],correctValue: "adjuvant",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
        
          dropdownHtml:`<span>Sam had a lung cancer diagnosis, and the tumor had spread to his liver. It was #dropdown1#. The oncologist recommended beginning chemotherapy as soon as possible.</span>`,
          dropdowns:{
            dropdown1:{values:["irradiation","surgery","molecularly targeted drug therapy"],correctValue: "molecularly targeted drug therapy",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          dropdownHtml:`<span>The polyp in Lisa’s colon was not pedunculated, and Dr. Sidney described it as ﬂat and #dropdown1#.</span>`,
          dropdowns:{
            dropdown1:{values:["fungating","scirrhous","sessile"],correctValue: "sessile",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
        
          dropdownHtml:`<span>Mr. Elder had difﬁculty urinating and had an elevated PSA blood level. Dr. Jones examined him and found a hard prostate gland. A needle #dropdown1# demonstrated adenocarcinoma.</span>`,
          dropdowns:{
            dropdown1:{values:["laparoscopy","electrocauterization","biopsy"],correctValue: "biopsy",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
        
          dropdownHtml:`<span>During the days following her chemotherapy for breast cancer, Mrs. Yang experienced loss of appetite and fever. Blood tests revealed low levels of blood cells, indicating chemotherapy-induced #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["hematopoiesis","myeloma","myelosuppression"],correctValue: "myelosuppression",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span> One year after Mr. Smith’s diagnosis and treatment for lung cancer, he underwent follow-up #dropdown1# , which enabled his doctors to #dropdown2# his disease and give him the good news that his disease was in #dropdown3#</span>`,
          dropdowns:{
            dropdown1:{values:["bone marrow biopsy","PET-CT scan","exfoliative cytology"],correctValue: "PET-CT scan",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["restage","regrade"],correctValue: "restage",dropdownlabel:"Select the type of image", useCommonOptions:"false"},
            dropdown3:{values:["remission","relapse"],correctValue: "remission",dropdownlabel:"Select the type of image", useCommonOptions:"false"},
  
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
        
          dropdownHtml:`<span>Mrs. Broom’s doctor told her she needed #dropdown1# because her brain tumor had returned after surgery</span>`,
          dropdowns:{
            dropdown1:{values:["CA-125","RT","PSA"],correctValue: "RT",dropdownlabel:"Select the type of view", useCommonOptions:"false"}
          
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
        
          dropdownHtml:`<span>Mr. Jones has melanoma which is going to be treated with a type of immunotherapy called #dropdown1#.</span>`,
          dropdowns:{
            dropdown1:{values:["brachytherapy","radical mastectomy","checkpoint inhibitor"],correctValue: "checkpoint inhibitor",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
          
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        {
      
          dropdownHtml:`<span> CAR T-cell therapy is indication for #dropdown1#  It is an an effective form of #dropdown2#.</span>`,
          dropdowns:{
            dropdown1:{values:["auto accidents","relapsed ALL","fluid overload"],correctValue: "relapsed acute lymphocytic leukemia",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["chemotherapy","radiotherapy","immunotherapy"],correctValue: "immunotherapy",dropdownlabel:"Select the type of image", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        }
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
        group14: {
      id: "group14",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group14_placeholder",
      items: [
        {
          
          headerImage:{},
          clozeHtml:`<span>loss of differentiation of cells and reversion to a more primitive cell type: ana #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "plasia", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
    
         {
          headerImage:{},
          clozeHtml:`<span>extending beyond the normal tissue boundaries: in #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "filtrative", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>having the ability to enter and destroy surrounding tissue: in #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "vasive", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>spreading to a secondary site: meta #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "stasis", clozelabel:"fill in the blank"},
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
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group15_placeholder",
      items: [
        {
          
          headerImage:{},
          clozeHtml:`<span>small nipple-like projections: pap #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "papillary", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>abnormal formation of cells: dys #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "dysplastic", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>localized growth of cells: carcin #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "carcinoma in situ", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>densely packed; containing fibrous tissue: #cloze1# ous</span>`,
          clozes:{
            cloze1:{correctValue: "scirrhous", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>pattern resembling small, microscopic sacs: alv #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "alveolar", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>small, round, gland-type clusters: foll #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "follicular", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>variety of cell types: pleo #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "pleomorphic", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>lacking structures typical of mature cells: un #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "undifferentiated", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>spreading evenly throughout the tissue: di #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "diffuse", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>resembling epithelial cells: epiderm #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "epidermoid", clozelabel:"fill in the blank"},
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
        group16: {
      id: "group16",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group16_placeholder",
      items: [
        {
          
          headerImage:{},
          clozeHtml:`<span>The method of treating cancer using high-energy radiation is #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "radiation therapy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>If tumor tissue survives large doses of radiation, it is a/an #cloze1# tumor.</span>`,
          clozes:{
            cloze1:{correctValue: "radioresistant", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>If radiation can cause loss of tumor cells without serious damage to surrounding regions, the tumor is #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "radiosensitive", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>A tumor that is completely destroyed by RT is a/an #cloze1# tumor.</span>`,
          clozes:{
            cloze1:{correctValue: "radiocurable", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>The method of giving radiation in small, repeated doses is #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "fractionation", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>Drugs that increase the sensitivity of tumors to x-rays are #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "radiosensitizers", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>Treatment of cancerous tumors with drugs is #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "chemotherapy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>A condition of tumors of ﬁbrous supportive nerve cells is #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "neurofibromatosis", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>The use of two or more drugs to kill tumor cells is #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "combination chemotherapy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>A large electronic device that produces high-energy x-ray or photon beams for treatment of deep-seated tumors is a/an #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "linear accelerator", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>Alkylating agents, antimetabolites, hormones, antibiotics, and antimitotics all are types of #cloze1# agents.</span>`,
          clozes:{
            cloze1:{correctValue: "chemotherapeutic", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>Implantation of seeds of radioactive material directly into a tumor is #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "brachytherapy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>The unit of absorbed radiation dose is #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "gray", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>Radiation applied to a tumor from a distant source is #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "external beam radiation (teletherapy)", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>Technique in which subatomic positively charged particles produced by a cyclotron deposit a dose of radiation at a tightly focused point is #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "proton therapy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>The dimension of the area of the body that receives radiation is a/an #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "radiation field", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>Study performed using CT or MRI to map the area to receive treatment before radiotherapy is given is #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "simulation", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>Technique in which a single large dose of radiation is delivered under precise 3D guidance to destroy vascular abnormalities and small brain tumors is #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "stereotactic radiosurgery", clozelabel:"fill in the blank"},
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
        group17: {
      id: "group17",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group17_placeholder",
      items: [
        {
          
          headerImage:{},
          clozeHtml:`<span>Cancerous tumor composed of cells of epithelial origin #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "carcinoma", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>Drug treatment given after primary treatment #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "adjuvant chemotherapy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>Detailed plan of treatment #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "protocol", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>Study using CT scan or MRI to map the area to receive treatment before radiation therapy #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "simulation", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>Wide and complete resection of tumor in a cavity of the body #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "exenteration", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>Cancerous tumor derived from connective (flesh) tissue #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "sarcoma", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>Chemicals in the blood that measure the presence of tumor in the body #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "protein markers", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>General ill health and malnutrition associated with disease #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "cachexia", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>Teletherapy #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "external beam radiotherapy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>Insertion of radioactive seeds or sealed containers into tumor #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "brachytherapy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>Malignancy that is localized and not invasive #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "carcinoma in situ", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>Cancerous tumor that has spread to lymph nodes and other organs #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "metastasis", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>Stopping the growth of cells in the bone marrow #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "myelosuppression", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>Extraction of cells for microscopic (biopsy) evaluation #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "fine needle aspiration", clozelabel:"fill in the blank"},
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
    group18: {
      id: "group18",
      type: "reflective_writing", //Fill-in-the-Blank
      placeholder_id: "group18_placeholder",
      items: [
       {
          title: `solid tumor`,
          feedback: `<span>tumor composed of a mass of cells</span>`,
        },
      
        {
          title: `adenoma`,
          feedback: `<span>tumor of glandular tissue (benign)</span>`,
        },
        {
          title: `adenocarcinoma`,
          feedback: `<span>cancerous (malignant) tumor of glandular tissue</span>`,
        },
        {
          title: `osteoma`,
          feedback: `<span>tumor of bone (benign)</span>`,
        },
        {
          title: `osteosarcoma`,
          feedback: `<span>ﬂesh (connective tissue) tumor of bone (malignant)</span>`,
        },
        {
          title: `mixed-tissue tumor`,
          feedback: `<span>tumor composed of different types of tissue (both epithelial and connective tissues)</span>`,
        },
        {
          title: `neoplasm`,
          feedback: `<span>new formation (tumor)</span>`,
        },
        {
          title: `neuroﬁbromatosis`,
          feedback: `<span>tumors of ﬁbrous supportive nerve tissue; often benign but may become malignant</span>`,
        },
        {
          title: `benign`,
          feedback: `<span>noncancerous</span>`,
        },
        {
          title: `differentiation`,
          feedback: `<span>specialization of cells</span>`,
        },
       
      ],

      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
    group19: {
      id: "group19",
      type: "reflective_writing", //Fill-in-the-Blank
      placeholder_id: "group19_placeholder",
      items: [
       {
          title: `A carcinoma is a cancerous tumor composed of cells of epithelial tissue. An example of such a cancerous tumor is a/an:`,
          feedback: `<span>Examples of carcinomas: thyroid adenocarcinoma, squamous cell carcinoma</span>`,
        },
      
        {
          title: `A sarcoma is a cancerous tumor composed of connective or flesh tissue. An example of such a cancerous tumor is a/an:`,
          feedback: `<span>Examples of sarcomas: liposarcoma, chondrosarcoma, osteogenic sarcoma</span>`,
        },
      
       
      ],

      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
    group20: {
      id: "group20",
      type: "reflective_writing", //Fill-in-the-Blank
      placeholder_id: "group20_placeholder",
      items: [
       {
          title: `apoptosis`,
          feedback: `<span>Programmed cell death</span>`,
        },
      
        {
          title: `cachexia`,
          feedback: `<span>Malnutrition marked by weakness and emaciation; usually associated with later stages of cancer</span>`,
        },
        {
          title: `modality`,
          feedback: `<span>Method of treatment</span>`,
        },
        {
          title: `morbidity`,
          feedback: `<span>Conditions of damage (disease) to normal tissue</span>`,
        },
        {
          title: `palliative`,
          feedback: `<span>Relieving but not curing symptoms of disease</span>`,
        },
         {
          title: `protocol`,
          feedback: `<span>Report or plan of steps taken in an experiment or disease case</span>`,
        },
         {
          title: `relapse`,
          feedback: `<span>Symptoms of disease return</span>`,
        },
         {
          title: `remission`,
          feedback: `<span>Absence of all signs of disease</span>`,
        },
       
       
      ],

      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
    group21: {
      id: "group21",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group21_placeholder",
      items: [
        {
          clozeHtml:`<span>Complete the following sentences.</span>`,
          headerImage:{
            
          },
          clozeHtml:`<span>Assisting primary treatment with drug therapy is called: #cloze1# chemotherapy.</span>`,
          clozes:{
            cloze1:{correctValue: "adjuvant chemotherapy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>Using drugs to reduce size of a tumor before surgery is: #cloze1# chemotherapy.</span>`,
          clozes:{
            cloze1:{correctValue: "neoadjuvant chemotherapy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>Test to determine if a patient has an inherited cancer-causing gene is: genetic #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "genetic screening", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>A treatment applied to a tumor from a source outside the body is: external beam #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "external beam radiation", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>A cancer treatment using antibodies (T cell lymphocytes) is called: #cloze1#.</span>`,
          clozes:{
            cloze1:{correctValue: "immunotherapy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          clozeHtml:`<span>Drug treatment to attack specific mutations in cancer cells is: #cloze1# therapy.</span>`,
          clozes:{
            cloze1:{correctValue: "molecularly targeted therapy", clozelabel:"fill in the blank"},
         
          },
          clozePlacement:"inline",//newline
        },
         {
          clozeHtml:`<span>A blood test to look for cancer cells or pieces of floating DNA is a #cloze1# biopsy.</span>`,
          clozes:{
            cloze1:{correctValue: "liquid biopsy", clozelabel:"fill in the blank"},
            
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
  },
};