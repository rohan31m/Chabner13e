const questions_data = {
  sharedProperties: {
    maxWidth: "960px", //"100%", "90%", "760px", "1024px"
    alignment: "center", //"center", "left"
  },
  question_groups: {
    group1: {
      id: "group1",
      type: "accordian",
      placeholder_id: "ch21group1_placeholder",
      items: [
        {
            title: `aer/o`,
            explanation: `air`,
        },
        {
            title: `alges/o`,
            explanation: `sensitivity to pain`,
        },
        {
            title: `bronch/o`,
            explanation: `bronchial tube`,
        },
        {
            title: `chem/o`,
            explanation: `drug; chemical`,
        },
        {
            title: `cras/o`,
            explanation: `mixture; temperament`,
        },
        {
            title: `cutane/o`,
            explanation: `skin`,
        },
        {
            title: `derm/o`,
            explanation: `skin`,
        },
        {
            title: `enter/o`,
            explanation: `intestines (usually small intestine)`,
        },
        {
            title: `erg/o`,
            explanation: `work`,
        },
        {
            title: `esthes/o`,
            explanation: `nervous sensation (feeling)`,
        },
        {
            title: `hist/o`,
            explanation: `tissue`,
        },
        {
            title: `hypn/o`,
            explanation: `sleep`,
        },
        {
            title: `iatr/o`,
            explanation: `physician; treatment`,
        },
        {
            title: `lingu/o`,
            explanation: `tongue`,
        },
        {
            title: `myc/o`,
            explanation: `fungus`,
        },
        {
            title: `narc/o`,
            explanation: `numbness; stupor; sleep`,
        },
        {
            title: `or/o`,
            explanation: `mouth`,
        },
        {
            title: `pharmac/o`,
            explanation: `drug`,
        },
        {
            title: `prurit/o`,
            explanation: `itching`,
        },
        {
            title: `pyret/o`,
            explanation: `fever`,
        },
        {
            title: `thec/o`,
            explanation: `sheath`,
        },
        {
            title: `tox/o`,
            explanation: `poison`,
        },
        {
            title: `toxic/o`,
            explanation: `poison`,
        },
        {
            title: `vas/o`,
            explanation: `vessel; duct; vas deferens`,
        },
        {
            title: `ven/o`,
            explanation: `vein`,
        },
        {
            title: `vit/o`,
            explanation: `life`,
        },
      ],
      titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
      itemSeperator: "false",
    },
    group2: {
      id: "group2",
      type: "accordian",
      placeholder_id: "ch21group2_placeholder",
      items: [
        {
          title: `-amine`,
          explanation: `nitrogen compound`,
        },
        {
          title: `-dote`,
          explanation: `to give`,
        },
        {
          title: `-genic`,
          explanation: `produced by or in`,
      },
      {
          title: `-in`,
          explanation: `in; into; not`,
        },
        {
          title: `-phylaxis`,
          explanation: `protection`,
        },
        {
          title: `-sol`,
          explanation: `solution`,
      },
      ],
      titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
      itemSeperator: "false",
    },
    group3: {
      id: "group3",
      type: "accordian", 
      placeholder_id: "ch21group3_placeholder",
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
          title: `contra-`,
          explanation: `against; opposite`,
        },
        {
          title: `par-`,
          explanation: `other than; abnormal`,
        },
        {
          title: `syn-`,
          explanation: `together; with`,
        },
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
    group4: {
      id: "group4",
      type: "accordian",
      placeholder_id: "ch21group4_placeholder",
      items: [
                {
            title: `ACE inhibitor`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ace_inhibitor.mp3`,
            explanation: `ACEin-HIB-it-or`,
        },
        {
            title: `addiction`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/addiction.mp3`,
            explanation: `ah-DIK-shun`,
        },
        {
            title: `additive action`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/additive_action.mp3`,
            explanation: `AD-it-iveAK-shun`,
        },
        {
            title: `aerosol`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/aerosol.mp3`,
            explanation: `AIR-o-sol`,
        },
        {
            title: `amphetamine`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/amphetamine.mp3`,
            explanation: `am-FET-ah-meen`,
        },
        {
            title: `analgesic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/analgesic.mp3`,
            explanation: `an-al-JE-sik`,
        },
        {
            title: `anaphylaxis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/anaphylaxis.mp3`,
            explanation: `an-ah-fah-LAK-sis`,
        },
        {
            title: `androgen`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/androgen.mp3`,
            explanation: `AN-dro-jen`,
        },
        {
            title: `anesthesia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/anesthesia.mp3`,
            explanation: `an-es-THE-ze-ah`,
        },
        {
            title: `anesthetic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/anesthetic.mp3`,
            explanation: `an-es-THET-ik`,
        },
        {
            title: `angiotensin II receptor blocker`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/angiotensin_ii_receptor_blocker.mp3`,
            explanation: `an-je-o-TEN-sin2re-CEP-torBLOK-er`,
        },
        {
            title: `antacid`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antacid.mp3`,
            explanation: `ant-AS-id`,
        },
        {
            title: `antagonistic action`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antagonistic_action.mp3`,
            explanation: `an-tag-on-NIS-tikAK-shun`,
        },
        {
            title: `antiandrogen`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antiandrogen.mp3`,
            explanation: `an-te-AN-dro-jen`,
        },
        {
            title: `antiarrhythmic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antiarrhythmic.mp3`,
            explanation: `an-te-a-RITH-mik`,
        },
        {
            title: `antibiotic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antibiotic.mp3`,
            explanation: `an-tih-bi-OT-ik`,
        },
        {
            title: `anticoagulant`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/anticoagulant.mp3`,
            explanation: `an-tih-ko-AG-ul-lant`,
        },
        {
            title: `anticonvulsant`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/anticonvulsant.mp3`,
            explanation: `an-tih-kon-VUL-sant`,
        },
        {
            title: `antidepressant`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antidepressant.mp3`,
            explanation: `an-tih-de-PRES-ant`,
        },
        {
            title: `antidiabetic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antidiabetic.mp3`,
            explanation: `an-tih-di-ah-BET-ik`,
        },
        {
            title: `antidiarrheal`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antidiarrheal.mp3`,
            explanation: `an-tih-di-ah-RE-al`,
        },
        {
            title: `antidote`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antidote.mp3`,
            explanation: `AN-tih-dote`,
        },
        {
            title: `antiemetic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antiemetic.mp3`,
            explanation: `an-te-eh-MET-ik`,
        },
        {
            title: `antihistamine`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antihistamine.mp3`,
            explanation: `an-tih-HIS-tah-meen`,
        },
        {
            title: `antimicrobial`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antimicrobial.mp3`,
            explanation: `an-tih-mi-KRO-be-al`,
        },
        {
            title: `antinauseant`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antinauseant.mp3`,
            explanation: `an-tih-NAW-ze-ant`,
        },
        {
            title: `antiplatelet`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antiplatelet.mp3`,
            explanation: `an-tih-PLAYT-let`,
        },
        {
            title: `antipruritic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antipruritic.mp3`,
            explanation: `an-tih-pru-RIT-ik`,
        },
        {
            title: `antipyretic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antipyretic.mp3`,
            explanation: `an-tih-pih-RET-ik`,
        },
        {
            title: `antiulcer`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antiulcer.mp3`,
            explanation: `an-te-UL-ser`,
        },
        {
            title: `antiviral`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antiviral.mp3`,
            explanation: `an-tih-VI-ral`,
        },
        {
            title: `aromatase inhibitor`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/aromatase_inhibitor.mp3`,
            explanation: `ah-RO-mah-tacein-HIB-ih-tor`,
        },
        {
            title: `beta blocker`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/beta-blocker.mp3`,
            explanation: `BA-tahBLOK-er`,
        },
        {
            title: `bisphosphonate`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/bisphosphonate.mp3`,
            explanation: `bis-FOS-fo-nate`,
        },
        {
            title: `brand name`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/brand_name.mp3`,
            explanation: `brandname`,
        },
        {
            title: `bronchodilator`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/bronchodilator.mp3`,
            explanation: `brong-ko-DI-la-tor`,
        },
        {
            title: `caffeine`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/caffeine.mp3`,
            explanation: `kaf-een`,
        },
        {
            title: `calcium channel blocker`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/calcium_channel_blocker.mp3`,
            explanation: `KAL-se-umCHAN-elBLOK-er`,
        },
        {
            title: `cardiac glycoside`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cardiac_glycoside.mp3`,
            explanation: `KAR-de-akGLI-ko-side`,
        },
        {
            title: `cardiovascular drug`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cardiovascular_drug.mp3`,
            explanation: `kar-de-o-VAS-ku-lardrug`,
        },
        {
            title: `cathartic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cathartic.mp3`,
            explanation: `kah-THAR-tik`,
        },
        {
            title: `chemical name`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/chemical_name.mp3`,
            explanation: `KEM-ik-alname`,
        },
        {
            title: `chemotherapy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/chemotherapy.mp3`,
            explanation: `ke-mo-THER-ah-pe`,
        },
        {
            title: `cholesterol-binding drug`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cholesterol-binding_drug.mp3`,
            explanation: `ko-LES-ter-oleBIN-dingdrug`,
        },
        {
            title: `cholesterol-lowering drug`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cholesterol-lowering_drug.mp3`,
            explanation: `ko-LES-ter-oleLO-wer-ingdrug`,
        },
        {
            title: `contraindications`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/contraindications.mp3`,
            explanation: `kon-trah-in-dih-KA-shunz`,
        },
        {
            title: `controlled substances`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/controlled_substances.mp3`,
            explanation: `kon-TROLDSUB-stan-sez`,
        },
        {
            title: `dependence`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/dependence.mp3`,
            explanation: `de-PEND-ents`,
        },
        {
            title: `diuretic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/diuretic.mp3`,
            explanation: `di-u-RET-ik`,
        },
        {
            title: `dose`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/dose.mp3`,
            explanation: `dose`,
        },
        {
            title: `emetic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/emetic.mp3`,
            explanation: `eh-MET-ik`,
        },
        {
            title: `endocrine drug`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/endocrine_drug.mp3`,
            explanation: `EN-do-krindrug`,
        },
        {
            title: `erythromycin`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/erythromycin.mp3`,
            explanation: `eh-rith-ro-MI-sin`,
        },
        {
            title: `estrogen`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/estrogen.mp3`,
            explanation: `ES-tro-jen`,
        },
        {
            title: `gastrointestinal drug`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/gastrointestinal_drug.mp3`,
            explanation: `gas-tro-in-TEST-tih-naldrug`,
        },
        {
            title: `generic name`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/generic_name.mp3`,
            explanation: `jeh-NER-ikname`,
        },
        {
            title: `glucocorticoid`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/glucocorticoid.mp3`,
            explanation: `glu-ko-KOR-tih-koyd`,
        },
        {
            title: `hypnotic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypnotic.mp3`,
            explanation: `hip-NOT-ik`,
        },
        {
            title: `hypodermic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypodermic.mp3`,
            explanation: `hi-po-DER-mik`,
        },
        {
            title: `iatrogenic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/iatrogenic.mp3`,
            explanation: `i-ah-tro-JEN-ik`,
        },
        {
            title: `idiosyncrasy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/idiosyncrasy.mp3`,
            explanation: `id-e-o-SIN-krah-se`,
        },
        {
            title: `idiosyncratic reaction`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/idiosyncratic_reaction.mp3`,
            explanation: `id-e-o-sin-KRAH-tikre-AK-shun`,
        },
        {
            title: `inhalation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/inhalation.mp3`,
            explanation: `in-hah-LA-shun`,
        },
        {
            title: `intrathecal`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/intrathecal.mp3`,
            explanation: `in-trah-THE-kal`,
        },
        {
            title: `intravenous`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/intravenous.mp3`,
            explanation: `in-trah-VE-nus`,
        },
        {
            title: `laxative`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/laxative.mp3`,
            explanation: `LAK-sah-tiv`,
        },
        {
            title: `medicinal chemistry`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/medicinal_chemistry.mp3`,
            explanation: `med-IS-sin-alKEM-is-tre`,
        },
        {
            title: `molecular pharmacology`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/molecular_pharmacology.mp3`,
            explanation: `mo-LEK-u-larfar-mah-KOL-o-je`,
        },
        {
            title: `narcotic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/narcotic.mp3`,
            explanation: `nar-KOT-ik`,
        },
        {
            title: `oral administration`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/oral_administration.mp3`,
            explanation: `OR-alad-min-is-TRA-shun`,
        },
        {
            title: `parenteral administration`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/parenteral_administration.mp3`,
            explanation: `par-EN-ter-alad-min-is-TRA-shun`,
        },
        {
            title: `pharmacist`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pharmacist.mp3`,
            explanation: `FAR-mah-sist`,
        },
        {
            title: `pharmacodynamics`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pharmacodynamics.mp3`,
            explanation: `far-mah-ko-di-NAM-iks`,
        },
        {
            title: `pharmacokinetics`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pharmacokinetics.mp3`,
            explanation: `far-mah-ko-kih-NEH-tiks`,
        },
        {
            title: `pharmacologist`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pharmacologist.mp3`,
            explanation: `far-mah-KOL-o-jist`,
        },
        {
            title: `pharmacology`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pharmacology.mp3`,
            explanation: `far-mah-KOL-o-je`,
        },
        {
            title: `pharmacy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pharmacy.mp3`,
            explanation: `FAR-mah-se`,
        },
        {
            title: `progestin`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/progestin.mp3`,
            explanation: `pro-JES-tin`,
        },
        {
            title: `purgative`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/purgative.mp3`,
            explanation: `PUR-gat-ive`,
        },
        {
            title: `receptor`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/receptor.mp3`,
            explanation: `re-SEP-tor`,
        },
        {
            title: `rectal administration`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/rectal_administration.mp3`,
            explanation: `REK-talad-min-is-TRA-shun`,
        },
        {
            title: `resistance`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/resistance.mp3`,
            explanation: `re-SIS-tans`,
        },
        {
            title: `respiratory drug`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/respiratory_drug.mp3`,
            explanation: `res-pih-rah-TOR-edrug`,
        },
        {
            title: `response`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/response.mp3`,
            explanation: `re-SPONS`,
        },
        {
            title: `schedule`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/schedule.mp3`,
            explanation: `SKED-ule`,
        },
        {
            title: `sedative`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sedative.mp3`,
            explanation: `SED-ah-tiv`,
        },
        {
            title: `side effect`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/side_effect.mp3`,
            explanation: `sideeh-FEKT`,
        },
        {
            title: `stimulant`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/stimulant.mp3`,
            explanation: `STIM-u-lant`,
        },
        {
            title: `subcutaneous`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/subcutaneous.mp3`,
            explanation: `sub-ku-TA-ne-us`,
        },
        {
            title: `sublingual administration`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sublingual_administration.mp3`,
            explanation: `sub-LING-walad-min-is-TRA-shun`,
        },
        {
            title: `synergism`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/synergism.mp3`,
            explanation: `SIN-er-jizm`,
        },
        {
            title: `synergistic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/synergistic.mp3`,
            explanation: `sin-er-JIS-tik`,
        },
        {
            title: `syringe`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/syringe.mp3`,
            explanation: `sih-RINJ`,
        },
        {
            title: `thyroid hormone`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thyroid_hormone.mp3`,
            explanation: `THI-roydHOR-mone`,
        },
        {
            title: `tolerance`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/tolerance.mp3`,
            explanation: `TOL-er-anz`,
        },
        {
            title: `topical application`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/topical_application.mp3`,
            explanation: `TOP-ik-elap-lih-KA-shun`,
        },
        {
            title: `toxic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/toxic.mp3`,
            explanation: `TOK-sik`,
        },
        {
            title: `toxicity`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/toxicity.mp3`,
            explanation: `tok-SIS-ih-te`,
        },
        {
            title: `toxicology`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/toxicology.mp3`,
            explanation: `tok-sih-KOL-o-je`,
        },
        {
            title: `tranquilizer`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/tranquilizer.mp3`,
            explanation: `TRAN-kwil-i-zer`,
        },
        {
            title: `transport`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/transport.mp3`,
            explanation: `TRANS-port`,
        },
        {
            title: `vasodilator`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/vasodilator.mp3`,
            explanation: `vaz-o-DI-la-tor`,
        },
        {
            title: `vitamin`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/vitamin.mp3`,
            explanation: `VI-ta-min`,
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
      "Fluoxetine (Prozac) 20 mg PO b.i.d.",
      "Lisinopril (Zestril) 20 mg 1 cap qAM",
      "Ondansetron (Zofran) 4 mg 1 tab/cap t.i.d. p.r.n. for nausea",
      "Cimetidine (Tagamet) 200 mg 1 tab p.c. t.i.d.",
      "Olanzapine (Zyprexa) 5 mg 1 tab qPM",
      "Acetaminophen (300 mg) and codeine (30 mg) 1 tab q.i.d. p.r.n. for pain"

      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>anti-GERD drug taken before meals #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Cimetidine (Tagamet) 200 mg 1 tab p.c. t.i.d.",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
      
         {
          headerImage:{},
          dropdownHtml:`<span>Tylenol with a narcotic taken 4 times a day as needed #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Acetaminophen (300 mg) and codeine (30 mg) 1 tab q.i.d. p.r.n. for pain", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>antidepressant taken by mouth twice a day #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Fluoxetine (Prozac) 20 mg PO b.i.d.", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>antiemetic taken 3 times a day as needed #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Ondansetron (Zofran) 4 mg 1 tab/cap t.i.d. p.r.n. for nausea", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>antihypertensive taken every morning #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Lisinopril (Zestril) 20 mg 1 cap qAM", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
       
       
         {
          headerImage:{},
          dropdownHtml:`<span>antipsychotic, one tablet every evening #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Olanzapine (Zyprexa) 5 mg 1 tab qPM", useCommonOptions:"true"},
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
             group6: {
      id: "group6",
      type: "dropdown",
      placeholder_id: "group6_placeholder",
      commonDropdownOptions:[
     "antidote",
     "chemical name",
     "Food and Drug Administration",
     "generic name",
     "pharmacist",
     "pharmacologist",
     "Physicians’ Desk Reference",
     "toxicologist",
     "trade (brand) name",
     "United States Pharmacopeia"
       

      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>Specialist in the study of the harmful effects of drugs on the body is a/an #dropdown1#.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "toxicologist",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Agent given to counteract harmful effects of a drug is a/an #dropdown1#.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "antidote", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Government agency with legal responsibility for enforcing proper drug manufacture and clinical use is #dropdown1#.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Food and Drug Administration", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>The #dropdown1# is the commercial name for a drug.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "trade (brand) name", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>The #dropdown1# is the complete chemical formula for a drug.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "chemical name", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Thw #dropdown1# is the legal noncommercial name for a drug.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "generic name", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>Professional who prepares and dispenses drugs is a/an #dropdown1#.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pharmacist", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>Specialist (MD or PhD) who studies the properties, uses, and side effects of drugs is a/an #dropdown1#.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pharmacologist", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>Reference book listing drug products is #dropdown1#.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Physicians’ Desk Reference", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Authoritative listing of drugs, formulas, and preparations that sets a standard for drug manufacturing and dispensing is #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "United States Pharmacopeia", useCommonOptions:"true"},
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
             group7: {
      id: "group7",
      type: "dropdown",
      placeholder_id: "group7_placeholder",
      commonDropdownOptions:[
      "lotions, creams, ointments",
      "tablets and capsules",
      "skin testing for allergy",
      "lumbar puncture",
      "deep injection, usually in buttock",
      "suppositories",
      "blood transfusions",
      "aerosol medications"
      
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>intravenous #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "blood transfusions",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>rectal #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "suppositories", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>oral #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "tablets and capsules", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>topical #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "lotions, creams, ointments", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>inhalation #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "aerosol medications", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>intrathecal #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "lumbar puncture", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>intramuscular #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "deep injection, usually in buttock", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>intradermal #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "skin testing for allergy", useCommonOptions:"true"},
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
      "caffeine or amphetamines",
      "penicillin or erythromycin",
      "insulin",
      "benzodiazepine",
      "heparin",
      "nonsteroidal anti-inflammatory drug",
      "phenothiazine",
      "anaphylactic shock"
      
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>antihistamine #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "anaphylactic shock",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>analgesic #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "nonsteroidal anti-inﬂammatory drug", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>antidiabetic #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "insulin", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>anticoagulant #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "heparin", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>antibiotic #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "penicillin or erythromycin", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>stimulant #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "caffeine or amphetamines", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>sedative-hypnotic #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "benzodiazepine", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>ranquilizer #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "phenothiazine", useCommonOptions:"true"},
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
      commonDropdownOptions:[
      "abnormal uterine bleeding caused by hormonal imbalance",
      "severe behavioral disturbances",
      "epilepsy",
      "congestive heart failure and hypertension",
      "epigastric discomfort",
      "arthritis and neuralgia",
      "anaphylactic shock",
      "thrombosis and embolism",
      "streptococcal pharyngitis",
      "asthma"
      
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>anticonvulsant #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "epilepsy",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>anticoagulant #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thrombosis and embolism", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>antacid #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "epigastric discomfort", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>progestins #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "abnormal uterine bleeding caused by hormonal imbalance", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>antibiotic #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "streptococcal pharyngitis", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>ACE inhibitor #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "congestive heart failure and hypertension", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>bronchodilator #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "asthma", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>antihistamine #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "anaphylactic shock", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>tranquilizer #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "severe behavioral disturbances", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        
         {
          headerImage:{},
          dropdownHtml:`<span>analgesic #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "arthritis and neuralgia", useCommonOptions:"true"},
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
     "ACE inhibitor",
     "anesthetic",
     "antibiotic",
     "anticonvulsant",
     "antidepressant",
     "antiestrogen",
     "antihistamine",
     "antiviral",
     "diuretic",
     "NSAID",
     "oral antidiabetic"
      
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>Cephalosporins (such as cefuroxime and cefprozil) and penicillins are examples of #dropdown1# drugs.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "antibiotic",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Advil (ibuprofen) is an example of a/an #dropdown1#.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "NSAID", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Tegretol (carbamazepine) and Dilantin (phenytoin) are examples of a/an #dropdown1#.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "anticonvulsant", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Zovirax (acyclovir) and Crixivan (indinavir) are both types of a/an #dropdown1# drug.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "antiviral", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Nolvadex (tamoxifen), used to treat estrogen receptor–positive breast cancer in women, is an example of a/an #dropdown1# drug.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "antiestrogen", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>Patients with high blood pressure may need Vasotec (enalapril) or Zestril (lisinopril). Both of these are examples of a/an #dropdown1#.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ACE inhibitor", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>Metformin and Avandia (rosiglitazone) are two types of #dropdown1# drugs.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "oral antidiabetic for type 2 diabetes", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>Elavil (amitriptyline) and Prozac (ﬂuoxetine) are two types of a/an #dropdown1# drug.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "antidepressant", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>If you have an allergy, your doctor may prescribe Allegra (fexofenadine), which is a/an #dropdown1# drug.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "antihistamine", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        
         {
          headerImage:{},
          dropdownHtml:`<span>Two agents that reduce the amount of ﬂuid in the blood and thus lower blood pressure are Lasix (furosemide) and Aldactone (spironolactone). These are #dropdown1# drugs.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "diuretic", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Xylocaine (lidocaine) and Pentothal (thiopental) are examples of a/an #dropdown1# drugs.</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "anesthetic", useCommonOptions:"true"},
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
         group11: {
      id: "group11",
      type: "dropdown",
      placeholder_id: "group11_placeholder",
      commonDropdownOptions:[],
      items: [
        {
          dropdownHtml:`<span>After his heart attack, Bernie was supposed to take many drugs, including diuretics and a/an #dropdown1# to prevent blood clots.</span>`,
          dropdowns:{
            dropdown1:{values:["progestin","laxative","anticoagulant"],correctValue: "anticoagulant",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
        
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          dropdownHtml:`<span>Estelle was always anxious and had a hard time sleeping. Dr. Max suggested that a mild #dropdown1# would help her relax and concentrate on her work.</span>`,
          dropdowns:{
            dropdown1:{values:["antacid","anticonvulsant","tranquilizer"],correctValue: "tranquilizer",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
        
          dropdownHtml:`<span>During chemotherapy Helen was very nauseated. Dr. Cohen prescribed an #dropdown1# to relieve her symptoms of queasy stomach.</span>`,
          dropdowns:{
            dropdown1:{values:["antihypertensive","antiemetic","antianginal"],correctValue: "antiemetic",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          dropdownHtml:`<span>The two antibiotics worked together and were therefore #dropdown1# in killing the bacteria in Susan’s bloodstream.</span>`,
          dropdowns:{
            dropdown1:{values:["idiosyncratic","generic","synergistic"],correctValue: "synergistic",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
        
          dropdownHtml:`<span>The label warned that the drug might impair ﬁne motor skills. It listed the #dropdown1# of the sedative.</span>`,
          dropdowns:{
            dropdown1:{values:["side effects","antidote","pharmacodynamics"],correctValue: "side effects",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
        
          dropdownHtml:`<span>After receiving the results of Judy’s sputum culture, her physician, an expert in #dropdown1# , recommended Biaxin and other #dropdown2# to combat the Mycobacterium avium complex disease in her #dropdown3#.</span>`,
          dropdowns:{
            dropdown1:{values:["endocrinology","cardiology","infectious disease"],correctValue: "infectious disease",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["antihistamines","antibiotics","antidepressants"],correctValue: "antibiotics",dropdownlabel:"Select the type of image", useCommonOptions:"false"},
            dropdown3:{values:["heart","thyroid gland","lungs"],correctValue: "lungs",dropdownlabel:"Select the type of image", useCommonOptions:"false"}
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Our dog, Eli, has had seizures since he was hit by a car last year. The veterinarian currently prescribes phenobarbital, an #dropdown1# , 45 mg b.i.d.#dropdown2#.</span>`,
          dropdowns:{
            dropdown1:{values:["anticoagulant","antinauseant","anticonvulsant"],correctValue: "anticonvulsant",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["every other day","twice a day","every evening"],correctValue: "twice a day",dropdownlabel:"Select the type of image", useCommonOptions:"false"},
  
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
        
          dropdownHtml:`<span> To control his type 1 #dropdown1# , David gives himself daily injections of #dropdown2#.</span>`,
          dropdowns:{
            dropdown1:{values:["heart disease","asthma","diabetes"],correctValue: "diabetes",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["oral drugs","insulin","aromatase inhibitors"],correctValue: "insulin",dropdownlabel:"Select the type of image", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
        
          dropdownHtml:`<span>Many students who want to stay awake to study are taking #dropdown1# containing #dropdown2#.</span>`,
          dropdowns:{
            dropdown1:{values:["stimulants","sedatives","tranquilizers"],correctValue: "stimulants",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["lithium","caffeine","butabarbital"],correctValue: "caffeine",dropdownlabel:"Select the type of image", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        {
      
          dropdownHtml:`<span>Shelly’s wheezing, coughing, and shortness of breath when she is stressed and exposed to animal dander all pointed to a diagnosis of #dropdown1# , which required treatment with steroids and #dropdown2#.</span>`,
          dropdowns:{
            dropdown1:{values:["pneumonia","asthma","heart disease"],correctValue: "asthma",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["antivirals","diuretics","bronchodilators"],correctValue: "bronchodilators",dropdownlabel:"Select the type of image", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        }
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
          clozeHtml:`<span>use of drugs in the treatment of disease #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "chemotherapy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>study of new drug synthesis #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "medicinal chemistry", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>study of how drugs interact with their target molecules #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "molecular pharmacology", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>study of the harmful effects of drugs #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "toxicology", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>study of drug effects in the body #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "pharmacodynamics", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>measurement of drug absorption, distribution, metabolism, and excretion over a period of time #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "pharmacokinetics", clozelabel:"fill in the blank"},
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
          clozeHtml:`<span>administered via suppository or ﬂuid into the anus #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "rectal", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>administered via vapor or gas into the nose or mouth #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "inhalation", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>administered under the tongue #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "sublingual", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>applied locally on skin or mucous membrane #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "topical", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>injected via syringe under the skin or into a vein, muscle, or body cavity #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "parenteral", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>given by mouth and absorbed through the stomach or intestinal wall #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "oral", clozelabel:"fill in the blank"},
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
          clozeHtml:`<span>Combination of two drugs is greater than the total effects of each drug by itself: #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "synergism", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        
        {
          headerImage:{},
          clozeHtml:`<span>Combination of two drugs that is equal to the sum of the effects of each: #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "additive action", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>Effects of a given drug dose become less as treatment continues, and larger and larger doses must be given to achieve the desired effect: #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "tolerance", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>An unexpected effect that may appear in a patient after administration of a drug: #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "idiosyncrasy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>Two drugs give less than an additive effect (action): #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "antagonistic", clozelabel:"fill in the blank"},
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
          clozeHtml:`<span>agent that reduces fever: anti #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "pyretic", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
       
         {
          headerImage:{},
          clozeHtml:`<span>agent that reduces itching: anti #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "pruritic", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>habit-forming analgesic: #cloze1# tic</span>`,
          clozes:{
            cloze1:{correctValue: "narco", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>two drugs cause an effect greater than the sum of each alone: syn #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "ergism", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>antibiotic derived from a red mold: #cloze1# mycin</span>`,
          clozes:{
            cloze1:{correctValue: "erythro", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>legal nonproprietary name of a drug: #cloze1# name</span>`,
          clozes:{
            cloze1:{correctValue: "generic", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>factor in a patient’s condition that prevents the use of a particular drug: contra #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "indication", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>drug that produces an absence of sensation or feeling: an #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "esthetic", clozelabel:"fill in the blank"},
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
          clozeHtml:`<span>NSAID #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "nonsteroidal anti-inflammatory drug", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>p.r.n. #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "as needed", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>q.i.d. #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "four times a day", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>ad lib #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "freely as desired", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>t.i.d. #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "three times a day", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>mg #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "milligram", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>c̅  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "with", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>s̅ #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "without", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>NPO #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "nothing by mouth", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>p.c. #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "after meals", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>b.i.d. #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "twice a day", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>q.h. #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "every hour", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>PO #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "by mouth", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>q #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "every", clozelabel:"fill in the blank"},
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
      type: "reflective_writing", //Short Answers
      placeholder_id: "group17_placeholder",
      items: [
        
        {
          title: `intravenous `,
          feedback: `<span> within a vein</span>`,
        },
        {
          title: `intrathecal `,
          feedback: `<span> within a sheath (membranes around the spinal cord or brain)</span>`,
        },
        {
          title: `antiseptic `,
          feedback: `<span>an agent that works against infection</span>`,
        },
        {
          title: `antipruritic `,
          feedback: `<span>an agent that works against itching</span>`,
        },
        {
          title: `aerosol `,
          feedback: `<span>particles of drug suspended in air and inhaled</span>`,
        },
        {
          title: `intramuscular `,
          feedback: `<span>within a muscle</span>`,
        },
        {
          title: `subcutaneous `,
          feedback: `<span>under the skin </span>`,
        },
        {
          title: `intracavitary `,
          feedback: `<span>within a cavity </span>`,
        },
        {
          title: `addiction`,
          feedback: `<span>physical and psychologic dependence on a drug</span>`,
        },
        {
          title: `dose`,
          feedback: `<span>amount of drug administered </span>`,
        },
        {
          title: `drug resistance`,
          feedback: `<span>lack of beneﬁcial response</span>`,
        },
        {
          title: `response`,
          feedback: `<span>desired and beneficial effect of a drug</span>`,
        },
        {
          title: `schedule`,
          feedback: `<span>exact timing and frequency of drug administration</span>`,
        },
        {
          title: `dependence `,
          feedback: `<span>prolonged use of a drug that may lead to physiologic need for its actions in the body</span>`,
        },
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
group18: {
      id: "group18",
      type: "reflective_writing", //Short Answers
      placeholder_id: "group18_placeholder",
      items: [
        
        {
          title: `antibiotic`,
          feedback: `<span> an agent that inhibits or kills germ life (microorganisms)</span>`,
        },
        {
          title: `antidepressant`,
          feedback: `<span>an agent that relieves the symptoms of depression</span>`,
        },
        {
          title: `antihistamine`,
          feedback: `<span>an agent that blocks the action of histamine and relieves allergic symptoms</span>`,
        },
        {
          title: `analgesic`,
          feedback: `<span> an agent that relieves pain</span>`,
        },
        {
          title: `anticoagulant`,
          feedback: `<span>an agent that prevents blood clotting</span>`,
        },
        {
          title: `anesthetic`,
          feedback: `<span> an agent that reduces or eliminates sensation</span>`,
        },
        {
          title: `antidiabetic`,
          feedback: `<span>an agent used to treat diabetes mellitus</span>`,
        },
        {
          title: `sedative`,
          feedback: `<span>an agent (mildly hypnotic) that relaxes and calms nervousness</span>`,
        },
        {
          title: `stimulant`,
          feedback: `<span>an agent that excites and promotes activity</span>`,
        },
        {
          title: `tranquilizer`,
          feedback: `<span>a drug used to control anxiety and severe disturbances of behavior</span>`,
        },
        
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
 group19: {
      id: "group19",
      type: "reflective_writing", //Short Answers
      placeholder_id: "group19_placeholder",
      items: [
        
        {
          title: `beta blocker`,
          feedback: `<span> drug that blocks the action of epinephrine at sites of receptors of heart muscles, blood vessels, and bronchial tubes (antihypertensive, antianginal, and antiarrhythmic)</span>`,
        },
        {
          title: `androgen`,
          feedback: `<span>a drug that produces male sexual characteristics</span>`,
        },
        {
          title: `glucocorticoid`,
          feedback: `<span>a hormone from the adrenal glands that reduces inﬂammation and raises blood sugar</span>`,
        },
        {
          title: `calcium channel blocker`,
          feedback: `<span>a drug that blocks the entrance of calcium into heart muscle and blood vessel walls (antianginal, antiarrhythmic, and antihypertensive)</span>`,
        },
        {
          title: `estrogen`,
          feedback: `<span> a hormone that produces female sexual characteristics</span>`,
        },
        {
          title: `antacid`,
          feedback: `<span> a drug that neutralizes acid in the stomach</span>`,
        },
        {
          title: `cathartic`,
          feedback: `<span> a drug that relieves constipation</span>`,
        },
        {
          title: `antiemetic`,
          feedback: `<span>a drug that prevents nausea and vomiting</span>`,
        },
        {
          title: `bronchodilator`,
          feedback: `<span>a drug that opens air passages</span>`,
        },
        {
          title: `hypnotic`,
          feedback: `<span>an agent that produces sleep</span>`,
        },
         {
          title: `diuretic`,
          feedback: `<span>a drug that reduces the volume of blood and lowers blood pressure</span>`,
        },
        {
          title: `cholesterol-lowering drug`,
          feedback: `<span>a drug that reduces cholesterol levels (treats hypercholesterolemia)</span>`,
        },
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
group20: {
      id: "group20",
      type: "reflective_writing", //Short Answers
      placeholder_id: "group20_placeholder",
      items: [
        
        {
          title: `1 tab PO q.i.d. p.c. and h.s.`,
          feedback: `<span>take one tablet by mouth, four times a day, after meals and at bedtime</span>`,
        },
        {
          title: `15-60 mg IM q4-6h`,
          feedback: `<span>administer 15 to 60 milligrams intramuscularly, every 4-6 hours</span>`,
        },
        {
          title: `2 caps p.o. h.s.`,
          feedback: `<span>take two capsules by mouth at bedtime</span>`,
        },
        {
          title: `1 tab SL p.r.n.`,
          feedback: `<span>place one tablet under the tongue, as needed</span>`,
        },
        {
          title: `Apply topically qhs prn`,
          feedback: `<span>apply to the skin, at bedtime as needed</span>`,
        },
        
        
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },    
           
  },
};