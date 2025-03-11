const questions_data = {
  sharedProperties: {
    maxWidth: "960px", //"100%", "90%", "760px", "1024px"
    alignment: "center", //"center", "left"
  },
  question_groups: {
    group1: {
      id: "group1",
      type: "accordian",
      placeholder_id: "ch18group1_placeholder",
      items: [
        {
            title: `aden/o`,
            explanation: ``,
        },
        {
            title: `adrenal/o`,
            explanation: `adrenal gland`,
        },
        {
            title: `andr/o`,
            explanation: `male`,
        },
        {
            title: `calc/o, calci/o`,
            explanation: `calcium`,
        },
        {
            title: `cortic/o`,
            explanation: `cortex, outer region`,
        },
        {
            title: `crin/o`,
            explanation: `secrete`,
        },
        {
            title: `dips/o`,
            explanation: `thirst`,
        },
        {
            title: `estr/o`,
            explanation: `female`,
        },
        {
            title: `gluc/o`,
            explanation: `glucose; sugar`,
        },
        {
            title: `glyc/o`,
            explanation: `glucose; sugar`,
        },
        {
            title: `gonad/o`,
            explanation: `sex glands`,
        },
        {
            title: `home/o`,
            explanation: `sameness; unchanging; constant`,
        },
        {
            title: `hormon/o`,
            explanation: `hormone`,
        },
        {
            title: `insulin/o`,
            explanation: `insulin (pancreatic hormone)`,
        },
        {
            title: `kal/i`,
            explanation: `potassium`,
        },
        {
            title: `lact/o`,
            explanation: `milk`,
        },
        {
            title: `myx/o`,
            explanation: `mucus`,
        },
        {
            title: `natr/o`,
            explanation: `sodium`,
        },
        {
            title: `pancreat/o`,
            explanation: `pancreas`,
        },
        {
            title: `parathyroid/o`,
            explanation: `parathyroid glands`,
        },
        {
            title: `phys/o`,
            explanation: `growing`,
        },
        {
            title: `pituitar/o`,
            explanation: `pituitary gland`,
        },
        {
            title: `somat/o`,
            explanation: `body`,
        },
        {
            title: `ster/o`,
            explanation: `solid structure; steroid`,
        },
        {
            title: `thyr/o`,
            explanation: `thyroid gland; shield`,
        },
        {
            title: `thyroid/o`,
            explanation: `thyroid gland`,
        },
        {
            title: `toc/o`,
            explanation: `labor; birth`,
        },
        {
            title: `toxic/o`,
            explanation: `poison`,
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
      placeholder_id: "ch18group2_placeholder",
      items: [
        {
          title: `-agon`,
          explanation: `assemble, gather`,
        },
        {
          title: `-ectomy`,
          explanation: `removal; excision; resection`,
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
          title: `-in, -ine`,
          explanation: `substance`,
        },
        {
          title: `-megaly`,
          explanation: `enlargement`,
      },
      {
          title: `-oid`,
          explanation: `resembling; originating from`,
        },
        {
          title: `-osis`,
          explanation: `condition, usually abnormal`,
        },
        {
          title: `-physis`,
          explanation: `to grow`,
      },
      {
          title: `-stasis`,
          explanation: `stopping; controlling; placing`,
        },
        {
          title: `-tocin`,
          explanation: `labor; birth (a substance for)`,
        },
        {
          title: `-tropin`,
          explanation: `stimulate; act on`,
      },
      {
          title: `-uria`,
          explanation: `urination; condition of urine`,
        },
      
      ],
      titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
      itemSeperator: "false",
    },
    group3: {
      id: "group3",
      type: "accordian", 
      placeholder_id: "ch18group3_placeholder",
      items: [
        {
            title: `eu-`,
            explanation: `good; normal; true`,
        },
        {
          title: `hyper-`,
          explanation: `above; excessive`,
        },
        {
          title: `hypo-`,
          explanation: `deficient; below; under; less than`,
        },
        {
          title: `oxy-`,
          explanation: `rapid; sharp; acid`,
        },
        {
          title: `pan-`,
          explanation: `all`,
        },
        {
            title: `poly-`,
            explanation: `many; much; increased`,
        },
        {
          title: `tetra-`,
          explanation: `four`,
        },
        {
          title: `tri-`,
          explanation: `three`,
        },
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
    group4: {
      id: "group4",
      type: "accordian",
      placeholder_id: "ch18group4_placeholder",
      items: [
        {
            title: `adenitis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/adenitis.mp3`,
            explanation: `ah-deh-NI-tis`,
        },
        {
            title: `adenohypophysis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/adenohypophysis.mp3`,
            explanation: `ah-deh-no-hi-POF-ih-sis`,
        },
        {
            title: `adrenal cortex`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/adrenal_cortex.mp3`,
            explanation: `ad-RE-nalKOR-teks`,
        },
        {
            title: `adrenal medulla`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/adrenal_medulla.mp3`,
            explanation: `ah-DRE-nalme-DU-lah`,
        },
        {
            title: `adrenalectomy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/adrenalectomy.mp3`,
            explanation: `ah-dre-nal-EK-to-me`,
        },
        {
            title: `adrenaline`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/adrenaline.mp3`,
            explanation: `ah-DREH-nah-lin`,
        },
        {
            title: `adrenocorticotropic hormone`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/adrenocorticotropic_hormone.mp3`,
            explanation: `ah-dre-no-kor-tih-ko-TROP-ikHOR-mone`,
        },
        {
            title: `adrenocorticotropin`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/adrenocorticotropin.mp3`,
            explanation: `ah-dre-no-kor-tih-ko-TRO-pin`,
        },
        {
            title: `aldosterone`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/aldosterone.mp3`,
            explanation: `al-DOS-teh-rone`,
        },
        {
            title: `androgen`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/androgen.mp3`,
            explanation: `AN-dro-jen`,
        },
        {
            title: `antidiuretic hormone`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antidiuretic_hormone.mp3`,
            explanation: `an-tih-di-u-RET-ikHOR-mone`,
        },
        {
            title: `calcitonin`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/calcitonin.mp3`,
            explanation: `kal-sih-TO-nin`,
        },
        {
            title: `catecholamines`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/catecholamines.mp3`,
            explanation: `kat-ek-OHL-am-eenz`,
        },
        {
            title: `corticosteroids`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/corticosteroids.mp3`,
            explanation: `kor-tik-o-STER-oydz`,
        },
        {
            title: `cortisol`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cortisol.mp3`,
            explanation: `KOR-tih-sole`,
        },
        {
            title: `electrolyte`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/electrolyte.mp3`,
            explanation: `eh-LEK-tro-lite`,
        },
        {
            title: `endocrinologist`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/endocrinologist.mp3`,
            explanation: `en-do-crin-OL-o-jist`,
        },
        {
            title: `epinephrine`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/epinephrine.mp3`,
            explanation: `ep-ih-NEF-rin`,
        },
        {
            title: `estradiol`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/estradiol.mp3`,
            explanation: `es-trah-DI-ol`,
        },
        {
            title: `estrogen`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/estrogen.mp3`,
            explanation: `ES-tro-jen`,
        },
        {
            title: `estrogenic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/estrogenic.mp3`,
            explanation: `es-tro-JEN-ik`,
        },
        {
            title: `euthyroid`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/euthyroid.mp3`,
            explanation: `u-THI-royd`,
        },
        {
            title: `follicle-stimulating hormone`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/follicle-stimulating_hormone.mp3`,
            explanation: `FOL-ik-ilSTIM-u-la-tingHOR-mone`,
        },
        {
            title: `glucagon`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/glucagon.mp3`,
            explanation: `GLU-kah-gon`,
        },
        {
            title: `glucocorticoid`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/glucocorticoid.mp3`,
            explanation: `glu-ko-KOR-tih-koyd`,
        },
        {
            title: `glycemic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/glycemic.mp3`,
            explanation: `gli-SE-mik`,
        },
        {
            title: `glycogen`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/glycogen.mp3`,
            explanation: `GLI-ko-jen`,
        },
        {
            title: `glycosuria`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/glycosuria.mp3`,
            explanation: `gli-kohs-U-re-ah`,
        },
        {
            title: `gonadotropin`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/gonadotropin.mp3`,
            explanation: `go-nad-o-TRO-pin`,
        },
        {
            title: `growth hormone`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/growth_hormone.mp3`,
            explanation: `growthHOR-mone`,
        },
        {
            title: `homeostasis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/homeostasis.mp3`,
            explanation: `ho-me-o-STA-sis`,
        },
        {
            title: `hormonal`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hormonal.mp3`,
            explanation: `hor-MO-nal`,
        },
        {
            title: `hormone`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hormone.mp3`,
            explanation: `HOR-mone`,
        },
        {
            title: `hypercalcemia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypercalcemia.mp3`,
            explanation: `hi-per-kal-SE-me-ah`,
        },
        {
            title: `hypercalciuria`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypercalciuria.mp3`,
            explanation: `hi-per-kal-se-U-re-ah`,
        },
        {
            title: `hyperglycemia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hyperglycemia.mp3`,
            explanation: `hi-per-gli-SE-me-ah`,
        },
        {
            title: `hyperkalemia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hyperkalemia.mp3`,
            explanation: `hi-per-ka-LE-me-ah`,
        },
        {
            title: `hypocalcemia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypocalcemia.mp3`,
            explanation: `hi-po-kal-SE-me-ah`,
        },
        {
            title: `hypoglycemia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypoglycemia.mp3`,
            explanation: `hi-po-gli-SE-me-ah`,
        },
        {
            title: `hypogonadism`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypogonadism.mp3`,
            explanation: `hi-po-GO-nad-iz-im`,
        },
        {
            title: `hypoinsulinism`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypoinsulinism.mp3`,
            explanation: `hi-po-IN-su-lin-iz-im`,
        },
        {
            title: `hypokalemia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypokalemia.mp3`,
            explanation: `hi-po-ka-LE-me-ah`,
        },
        {
            title: `hyponatremia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hyponatremia.mp3`,
            explanation: `hi-po-na-TRE-me-ah`,
        },
        {
            title: `hypophysectomy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypophysectomy.mp3`,
            explanation: `hi-pof-ih-SEK-to-me`,
        },
        {
            title: `hypophysis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypophysis.mp3`,
            explanation: `hi-POF-ih-sis`,
        },
        {
            title: `hypopituitarism`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypopituitarism.mp3`,
            explanation: `hi-po-pih-TU-it-ar-izm`,
        },
        {
            title: `hypothalamus`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypothalamus.mp3`,
            explanation: `hi-po-THAL-ah-mus`,
        },
        {
            title: `insulin`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/insulin.mp3`,
            explanation: `IN-su-lin`,
        },
        {
            title: `luteinizing hormone`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/luteinizing_hormone.mp3`,
            explanation: `LU-teh-ni-zingHOR-mone`,
        },
        {
            title: `mineralocorticoid`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/mineralocorticoid.mp3`,
            explanation: `min-er-al-o-KOR-tih-koyd`,
        },
        {
            title: `neurohypophysis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/neurohypophysis.mp3`,
            explanation: `nur-o-hi-POF-ih-sis`,
        },
        {
            title: `norepinephrine`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/norepinephrine.mp3`,
            explanation: `nor-ep-ih-NEF-rin`,
        },
        {
            title: `ovaries`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ovaries.mp3`,
            explanation: `O-vah-reez`,
        },
        {
            title: `oxytocin`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/oxytocin.mp3`,
            explanation: `ox-se-TO-sin`,
        },
        {
            title: `pancreas`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pancreas.mp3`,
            explanation: `PAN-kre-as`,
        },
        {
            title: `pancreatectomy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pancreatectomy.mp3`,
            explanation: `pan-kre-ah-TEK-to-me`,
        },
        {
            title: `parathormone`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/parathormone.mp3`,
            explanation: `par-ah-THOR-mone`,
        },
        {
            title: `parathyroid glands`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/parathyroid_glands.mp3`,
            explanation: `par-ah-THI-roydglanz`,
        },
        {
            title: `parathyroidectomy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/parathyroidectomy.mp3`,
            explanation: `par-ah-thi-roy-DEK-to-me`,
        },
        {
            title: `pineal gland`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pineal_gland.mp3`,
            explanation: `pi-NE-algland`,
        },
        {
            title: `pituitary gland`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pituitary_gland.mp3`,
            explanation: `pih-TU-ih-ter-egland`,
        },
        {
            title: `polydipsia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/polydipsia.mp3`,
            explanation: `pol-e-DIP-se-ah`,
        },
        {
            title: `polyuria`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/polyuria.mp3`,
            explanation: `pol-e-U-re-ah`,
        },
        {
            title: `progesterone`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/progesterone.mp3`,
            explanation: `pro-JES-teh-rone`,
        },
        {
            title: `prolactin`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/prolactin.mp3`,
            explanation: `pro-LAK-tin`,
        },
        {
            title: `receptor`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/receptor.mp3`,
            explanation: `re-SEP-tor`,
        },
        {
            title: `sella turcica`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sella_turcica.mp3`,
            explanation: `SEL-ahTUR-sih-kah`,
        },
        {
            title: `sex hormones`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sex_hormones.mp3`,
            explanation: `sexHOR-mones`,
        },
        {
            title: `somatotropin`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/somatotropin.mp3`,
            explanation: `so-mah-to-TRO-pin`,
        },
        {
            title: `steroid`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/steroid.mp3`,
            explanation: `STEH-royd`,
        },
        {
            title: `sympathomimetic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sympathomimetic.mp3`,
            explanation: `sim-pah-tho-mih-MET-ik`,
        },
        {
            title: `target tissue`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/target_tissue.mp3`,
            explanation: `TAR-getTIH-shu`,
        },
        {
            title: `testes`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/testes.mp3`,
            explanation: `TES-teez`,
        },
        {
            title: `testosterone`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/testosterone.mp3`,
            explanation: `tes-TOS-teh-rone`,
        },
        {
            title: `tetraiodothyronine`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/tetraiodothyronine.mp3`,
            explanation: `tet-rah-i-o-do-THI-ro-neen`,
        },
        {
            title: `thyroid gland`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thyroid_gland.mp3`,
            explanation: `THI-roydgland`,
        },
        {
            title: `thyroiditis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thyroiditis.mp3`,
            explanation: `thi-royd-I-tis`,
        },
        {
            title: `thyrotropin`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thyrotropin.mp3`,
            explanation: `thi-ro-TRO-pin`,
        },
        {
            title: `thyroxine`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thyroxine.mp3`,
            explanation: `thi-ROK-sin`,
        },
        {
            title: `triiodothyronine`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/triiodothyronine.mp3`,
            explanation: `tri-i-o-do-THI-ro-neen`,
        },
        {
            title: `vasopressin`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/vasopressin.mp3`,
            explanation: `vaz-o-PRES-in`,
        },        
      ],
      titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
      itemSeperator: "false",
    }, 
    group5: {
      id: "group5",
      type: "accordian",
      placeholder_id: "ch18group5_placeholder",
      items: [
        {
            title: `acromegaly`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/acromegaly.mp3`,
            explanation: `ak-ro-MEG-ah-le`,
        },
        {
            title: `Addison disease`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/addison_disease.mp3`,
            explanation: `AD-ih-sondih-ZEEZ`,
        },
        {
            title: `adrenal virilism`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/adrenal_virilism.mp3`,
            explanation: `ah-DRE-nalVIR-il-izm`,
        },
        {
            title: `cretinism`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cretinism.mp3`,
            explanation: `KRE-tin-izm`,
        },
        {
            title: `Cushing syndrome`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cushing_syndrome.mp3`,
            explanation: `KUSH-ingSIN-drohm`,
        },
        {
            title: `diabetes insipidus`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/diabetes_insipidus.mp3`,
            explanation: `di-ah-BE-teezin-SIP-ih-dus`,
        },
        {
            title: `diabetes mellitus`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/diabetes_mellitus.mp3`,
            explanation: `di-ah-BE-teezMEL-ih-tus`,
        },
        {
            title: `dwarfism`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/dwarfism.mp3`,
            explanation: `DWARF-izm`,
        },
        {
            title: `endemic goiter`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/endemic_goiter.mp3`,
            explanation: `em-DEM-ikGOY-ter`,
        },
        {
            title: `exophthalmometry`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/exophthalmometry.mp3`,
            explanation: `ek-sof-thal-MOM-eh-tre`,
        },
        {
            title: `exophthalmos`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/exophthalmos.mp3`,
            explanation: `ek-sof-THAL-mose`,
        },
        {
            title: `fasting plasma glucose`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/fasting_plasma_glucose.mp3`,
            explanation: `FAS-tingPLAS-mahGLU-kose`,
        },
        {
            title: `gastroparesis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/gastroparesis.mp3`,
            explanation: `gas-tro-par-E-sis`,
        },
        {
            title: `gigantism`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/gigantism.mp3`,
            explanation: `JI-gan-tiz-im`,
        },
        {
            title: `glucose tolerance test`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/glucose_tolerance_test.mp3`,
            explanation: `GLU-kohsTOL-er-anstest`,
        },
        {
            title: `goiter`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/goiter.mp3`,
            explanation: `GOY-ter`,
        },
        {
            title: `Graves disease`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/graves_disease.mp3`,
            explanation: `GRAVZdih-ZEEZ`,
        },
        {
            title: `hirsutism`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hirsutism.mp3`,
            explanation: `HER-soot-izm`,
        },
        {
            title: `hyperinsulinism`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hyperinsulinism.mp3`,
            explanation: `hi-per-IN-su-lin-izm`,
        },
        {
            title: `hyperparathyroidism`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hyperparathyroidism.mp3`,
            explanation: `hi-per-par-ah-THI-royd-izm`,
        },
        {
            title: `hyperthyroidism`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hyperthyroidism.mp3`,
            explanation: `hi-per-THI-royd-izm`,
        },
        {
            title: `hypoparathyroidism`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypoparathyroidism.mp3`,
            explanation: `hi-po-par-ah-THI-royd-iz-im`,
        },
        {
            title: `hypothyroidism`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypothyroidism.mp3`,
            explanation: `hi-po-THI-royd-izm`,
        },
        {
            title: `ketoacidosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ketoacidosis.mp3`,
            explanation: `ke-to-ah-sih-DO-sis`,
        },
        {
            title: `myxedema`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/myxedema.mp3`,
            explanation: `mik-seh-DE-mah`,
        },
        {
            title: `nodular goiter`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/nodular_goiter.mp3`,
            explanation: `NOD-u-larGOY-ter`,
        },
        {
            title: `panhypopituitarism`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/panhypopituitarism.mp3`,
            explanation: `pan-hi-po-pih-TU-ih-tar-iz-im`,
        },
        {
            title: `pheochromocytoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pheochromocytoma.mp3`,
            explanation: `fe-o-kro-mo-si-TO-mah`,
        },
        {
            title: `syndrome of inappropriate ADH`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/syndrome_of_inappropriate_adh.mp3`,
            explanation: `SIN-drohmofin-ah-PRO-pre-itADH`,
        },
        {
            title: `tetany`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/tetany.mp3`,
            explanation: `TET-ah-ne`,
        },
        {
            title: `thyroid carcinoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thyroid_carcinoma.mp3`,
            explanation: `THI-roydkar-sih-NO-mah`,
        },
        {
            title: `thyroid function tests`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thyroid_function_tests.mp3`,
            explanation: `THI-roydFUNK-shuntests`,
        },
        {
            title: `thyroid scan`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thyroid_scan.mp3`,
            explanation: `THI-roydskan`,
        },
        {
            title: `thyrotoxicosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thyrotoxicosis.mp3`,
            explanation: `thi-ro-tok-sih-KO-sis`,
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
       "thyroid gland",
       "parathyroid glands (four glands)",
       "adrenal glands (one pair)",
       "pancreas (islets of Langerhans)",
       "pituitary gland",
       "ovaries in female (one pair)",
       "testes in male (one pair)",
       "pineal gland"

      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thyroid gland",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "parathyroid glands (four glands)", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "adrenal glands (one pair)", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pancreas (islets of Langerhans)", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pituitary gland", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ovaries in female (one pair)", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "testes in male (one pair)", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pineal gland", useCommonOptions:"true"},
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
       "isthmus",
       "thyroid gland",
       "thyroid cartilage",
       "trachea"
      

      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thyroid gland",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "trachea", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thyroid cartilage", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "isthmus", useCommonOptions:"true"},
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
       "thyroid gland",
       "parathyroid glands"
      

      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "parathyroid glands",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thyroid gland", useCommonOptions:"true"},
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
       "adrenal medulla",
       "kidney",
       "adrenal cortex"
      

      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "kidney",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "adrenal cortex",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "adrenal medulla", useCommonOptions:"true"},
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
       "pancreas",
       "islets of Langerhans or islet cells",
       "stomach"
      

      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pancreas",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "stomach",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "islets of Langerhans or islet cells", useCommonOptions:"true"},
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
       "hypothalamus",
       "anterior lobe or adenohypophysis",
       "posterior lobe or neurohypophysis"
      

      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "anterior lobe or adenohypophysis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "posterior lobe or neurohypophysis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "hypothalamus", useCommonOptions:"true"},
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
          dropdownHtml:`<span>Which endocrine medicine treats hypothyroidism? #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["Prednisone","Prophylthiouracil","Liothyronine"],correctValue: "Liothyronine",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>Which endocrine medicine treats type 2 diabetes? #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["Desmopressin","Metformin","Hydrocortisone"],correctValue: "Metformin",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>Which endocrine medicine treats osteoporosis? #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["Alendronate","Beta blockers","Insulin"],correctValue: "Alendronate",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
            group13: {
      id: "group13",
      type: "dropdown",
      placeholder_id: "group13_placeholder",
      commonDropdownOptions:[
       "adrenal cortex",
       "adrenal medulla",
       "ovary",
       "pancreas",
       "parathyroid",
       "pituitary (hypophysis)",
       "testis",
       "thyroid"

      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>behind the stomach #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pancreas",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>posterior side of the thyroid gland #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "parathyroid", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>inner section of glands above each kidney #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "adrenal medulla", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>in the scrotal sac #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "testis", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>on either side of the trachea #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thyroid gland", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>outer section of gland above each kidney #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "adrenal cortex", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>lower abdomen of a female #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ovary", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>below the brain in the sella turcica #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pituitary (hypophysis)", useCommonOptions:"true"},
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
       "ACTH",
       "ADH",
       "aldosterone",
       "cortisol",
       "epinephrine",
       "estradiol",
       "insulin",
       "parathyroid hormone",
       "testosterone",
       "thyroxine"

      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>sympathomimetic; raises heart rate and blood pressure #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "epinephrine",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>promotes growth and maintenance of male sex characteristics #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "testosterone",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>stimulates water reabsorption by kidney tubules; decreases urine output #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ADH",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>increases metabolism in body cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thyroxine", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>raises blood calcium #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "parathyroid hormone", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>increases reabsorption of sodium by kidney tubules #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "aldosterone", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>stimulates secretion of hormones from the adrenal cortex #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ACTH", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>increases blood sugar #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "cortisol", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>helps transport glucose to cells; decreases blood sugar #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "insulin", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>develops and maintains female sex characteristics #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "estradiol", useCommonOptions:"true"},
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
      commonDropdownOptions:[],
      items: [
        { 
          dropdownHtml:`<span>Cushing syndrome #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["hypersecretion","hyposecretion"],correctValue: "hypersecretion",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>tetany #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["hypersecretion","hyposecretion"],correctValue: "hyposecretion",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>Graves disease #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["hyposecretion","hypersecretion"],correctValue: "hypersecretion",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>diabetes insipidus #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["hypersecretion","hyposecretion"],correctValue: "hyposecretion",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>acromegaly #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["hyposecretion","hypersecretion"],correctValue: "hypersecretion",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>myxedema #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["hyposecretion","hypersecretion"],correctValue: "hyposecretion",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>diabetes mellitus #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["hyposecretion","hypersecretion"],correctValue: "hyposecretion",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>Addison disease #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["hyposecretion","hypersecretion"],correctValue: "hyposecretion",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>gigantism #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["hyposecretion","hypersecretion"],correctValue: "hypersecretion",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
         { 
          dropdownHtml:`<span>endemic goiter #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["hyposecretion","hypersecretion"],correctValue: "hyposecretion",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
                     },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
        
          dropdownHtml:`<span>cretinism #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["hypersecretion","hyposecretion"],correctValue: "hyposecretion",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        {
        
          dropdownHtml:`<span>pheochromocytoma #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["vitiligo","urticaria"],correctValue: "hypersecretion",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        }
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
             group16: {
      id: "group16",
      type: "dropdown",
      placeholder_id: "group16_placeholder",
      commonDropdownOptions:[
       "neurohypophysis",
       "adrenal cortex",
       "adenohypophysis",
       "adrenal medulla",
       "pancreas",
       "thyroid gland",
       "parathyroid gland"
       

      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>Cushing syndrome #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "adrenal cortex",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>tetany #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "parathyroid gland", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Graves disease #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thyroid gland", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>diabetes insipidus #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "neurohypophysis", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>acromegaly #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "adenohypophysis", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>myxedema #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thyroid gland", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>diabetes mellitus #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pancreas", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>Addison disease #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "adrenal cortex", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>gigantism #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "adenohypophysis", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>endemic goiter #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thyroid gland", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>cretinism #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thyroid gland", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>pheochromocytoma #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "adrenal medulla", useCommonOptions:"true"},
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
       "ADH",
       "aldosterone and cortisol",
       "thyroxine",
       "GH",
       "parathyroid hormone",
       "epinephrine",
       "insulin",
       "cortisol"
       

      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>Cushing syndrome #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "cortisol",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>tetany #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "parathyroid hormone", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Graves disease #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thyroxine", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>diabetes insipidus #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ADH", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>acromegaly #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "GH", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>myxedema #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thyroxine", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>diabetes mellitus #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "insulin", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>Addison disease #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "aldosterone and cortisol", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>gigantism #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "GH", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>endemic goiter #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thyroxine", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>cretinism #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thyroxine", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
         {
          headerImage:{},
          dropdownHtml:`<span>pheochromocytoma #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "epinephrine", useCommonOptions:"true"},
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
            group18: {
      id: "group18",
      type: "dropdown",
      placeholder_id: "group18_placeholder",
      commonDropdownOptions:[],
      items: [
        {
          dropdownHtml:`<span>Phyllis was diagnosed with Graves disease when her husband noticed her #dropdown1# . Her eyes seemed to be bulging out of their sockets.</span>`,
          dropdowns:{
            dropdown1:{values:["panhypopituitarism","hirsutism","exophthalmos"],correctValue: "exophthalmos",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
        
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          dropdownHtml:`<span>Helen had a primary brain tumor called a #dropdown1# adenoma. Her entire endocrine system was disrupted, and her physician recommended surgery and radiation therapy to help relieve her symptoms.</span>`,
          dropdowns:{
            dropdown1:{values:["pituitary","thyroid","thyroid"],correctValue: "pituitary",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
        
          dropdownHtml:`<span>Bessie’s facial features gradually became “rough” in her late thirties and forties. By the time she was 50, her adult children noticed her very large hands and recommended that she see an endocrinologist, who diagnosed her chronically progressive condition as #dropdown1#.</span>`,
          dropdowns:{
            dropdown1:{values:["hyperinsulism","gigantism","acromegaly"],correctValue: "acromegaly",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          dropdownHtml:`<span>Bobby was brought into the emergency department because he was found passed out in the kitchen. He had not taken his usual dose of insulin and had developed #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:["Cushing disease","hyperparathyroidism","diabetic ketoacidosis"],correctValue: "diabetic ketoacidosis",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
        
          dropdownHtml:`<span>Because her 1-hour test of blood sugar was slightly abnormal, Selma’s obstetrician ordered a #dropdown1# to rule out gestational #dropdown2#.</span>`,
          dropdowns:{
            dropdown1:{values:["glucose tolerance test","thyroid function test","Pap smear"],correctValue: "glucose tolerance test",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["hyperthyroidism","hyperthyroidism","diabetes"],correctValue: "diabetes",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
        
          dropdownHtml:`<span>Bill noticed that he was passing his urine more frequently, a condition known as #dropdown1# , and was experiencing increased thirst, manifested as #dropdown2# . His wife urged him to see a physician, who performed a #dropdown3# . that revealed inappropriately dilute #dropdown4# . Measurement of the hormone  #dropdown5# in his blood showed low levels. His diagnosis was #dropdown6# . Treatment with #dropdown7# delivered by nasal spray was prescribed, and his condition improved.</span>`,
          dropdowns:{
            dropdown1:{values:["polyphagia","polyphagia","hyperglycemia"],correctValue: "polyuria",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["polydipsia","hypernatremia","polyphagia"],correctValue: "polydipsia",dropdownlabel:"Select the type of image", useCommonOptions:"false"},
            dropdown3:{values:["serum calcium test","urinalysis","serum sodium test"],correctValue: "urinalysis",dropdownlabel:"Select the type of image", useCommonOptions:"false"},
            dropdown4:{values:["blood","sweat","urine"],correctValue: "urine",dropdownlabel:"Select the type of image", useCommonOptions:"false"},
            dropdown5:{values:["PTH","ADH","HCG"],correctValue: "ADH",dropdownlabel:"Select the type of image", useCommonOptions:"false"},
            dropdown6:{values:["DI","DM","SIADH"],correctValue: "DI",dropdownlabel:"Select the type of image", useCommonOptions:"false"},
            dropdown7:{values:["oxytocin","cortisol","vasopressin"],correctValue: "vasopressin",dropdownlabel:"Select the type of image", useCommonOptions:"false"}

          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Mary noticed that she had gained weight recently and that her face had a moon-like fullness with new heavy hair growth. Her blood pressure was high at her doctor’s appointment. Blood and urine tests showed high levels of blood sugar and #dropdown1#. Her diagnostic workup included a/an #dropdown2#, which revealed a tumor in the #dropdown3#. Her doctor made the diagnosis of #dropdown4#.</span>`,
          dropdowns:{
            dropdown1:{values:["cortisol","vasopressin","thyroid hormone"],correctValue: "cortisol",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["CT scan of the abdomen","thyroid ultrasound","thyroid scan"],correctValue: "CT scan of the abdomen",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown3:{values:["pancreas","thyroid gland","adrenal gland"],correctValue: "adrenal gland",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown4:{values:["hyperthyroidism","Cushing syndrome","Addison disease"],correctValue: "Cushing syndrome",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
  
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
        
          dropdownHtml:`<span>Jack had several fractures of ribs and vertebrae in a skiing accident. X-ray images of his bones revealed a generalized decrease in bone density, a condition known as #dropdown1# A blood test showed high serum #dropdown2# and high levels of #dropdown3#. An ultrasound scan of the neck revealed a #dropdown4# adenoma, which was removed surgically. His bone disease and other abnormalities were all related to #dropdown5#.</span>`,
          dropdowns:{
            dropdown1:{values:["osteoporosis","tetany","acromegaly"],correctValue: "osteoporosis",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["sodium","calcium","growth hormone"],correctValue: "calcium",dropdownlabel:"Select the type of image", useCommonOptions:"false"},
            dropdown3:{values:["mineralocorticoids","somatotropin","parathyroid hormone"],correctValue: "parathyroid hormone",dropdownlabel:"Select the type of image", useCommonOptions:"false"},
            dropdown4:{values:["thymus","parathyroid","thyroid"],correctValue: "parathyroid",dropdownlabel:"Select the type of image", useCommonOptions:"false"},
            dropdown5:{values:["hypoparathyroidism","hyperparathyroidism","hypothyroidism"],correctValue: "hyperparathyroidism",dropdownlabel:"Select the type of image", useCommonOptions:"false"},
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
    
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
        group19: {
      id: "group19",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group19_placeholder",
      items: [
        {
          
         
          clozeHtml:`<span>follicle-stimulating hormone #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "anterior pituitary gland (adenohypophysis)", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>vasopressin #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "posterior pituitary gland (neurohypophysis)", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>aldosterone #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "adrenal cortex", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>insulin #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "beta islet cells of the pancreas", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>thyroxine #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "thyroid gland", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>cortisol #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "adrenal cortex", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>gonadotropic hormones #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "anterior pituitary gland; these hormones are FSH and LH", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>epinephrine #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "adrenal medulla", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>oxytocin #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "posterior pituitary gland", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>prolactin #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "anterior pituitary gland", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>growth hormone #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "anterior pituitary gland", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>glucagon #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "alpha islet cells of the pancreas", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>adrenocorticotropic hormone #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "anterior pituitary gland", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>estradiol #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "ovaries", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>progesterone #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "ovaries", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>testosterone #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "testes", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>thyroid-stimulating hormone #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "anterior pituitary gland", clozelabel:"fill in the blank"},
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
        group20: {
      id: "group20",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group20_placeholder",
      items: [
        {
          
          headerImage:{},
          clozeHtml:`<span>ADH #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "antidiuretic hormone", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>ACTH #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "adrenocorticotropic hormone", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>LH #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "luteinizing hormone", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>FSH #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "follicle-stimulating hormone", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>TSH #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "thyroid-stimulating hormone", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>PTH #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "parathyroid hormone", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>GH #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "growth hormone", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>PRL #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "prolactin", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>T4 #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "thyroxine; tetraiodothyronine", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>T3 #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "triiodothyronine", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>OT #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "oxytocin", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>HCG #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "human chorionic gonadotropin", clozelabel:"fill in the blank"},
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
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group21_placeholder",
      items: [
        {
          
          headerImage:{},
          clozeHtml:`<span>removal of the pancreas: #cloze1# ectomy</span>`,
          clozes:{
            cloze1:{correctValue: "pancreat", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>condition of deﬁciency or underdevelopment of the sex organs: hypo #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "gonadism", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>pertaining to producing female (characteristics): #cloze1# genic</span>`,
          clozes:{
            cloze1:{correctValue: "estro", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>removal of the pituitary gland: #cloze1# ectomy</span>`,
          clozes:{
            cloze1:{correctValue: "hypophys", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>deﬁciency of calcium in the blood: hypo #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "calcemia", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>excessive sugar in the blood: #cloze1# emia</span>`,
          clozes:{
            cloze1:{correctValue: "hyperglyc", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>inﬂammation of the thyroid gland: #cloze1# itis</span>`,
          clozes:{
            cloze1:{correctValue: "thyroid", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>specialist in the study of hormone disorders: #cloze1# ist</span>`,
          clozes:{
            cloze1:{correctValue: "endocrinolog", clozelabel:"fill in the blank"},
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
        group22: {
      id: "group22",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group22_placeholder",
      items: [
        {
          
          headerImage:{},
          clozeHtml:`<span>ENDOCRINE GLAND: Adrenal cortex HYPERSECRETION: #cloze1# #cloze2# HYPOSECRETION: #cloze3#</span>`,
          clozes:{
            cloze1:{correctValue: "adrenal virilism", clozelabel:"fill in the blank"},
            cloze2:{correctValue: "Cushing syndrome", clozelabel:"fill in the blank"},
            cloze3:{correctValue: "Addison disease", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
      
         {
          headerImage:{},
          clozeHtml:`<span>ENDOCRINE GLAND: Adrenal medulla #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "pheochromocytoma", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>ENDOCRINE GLAND: Pancreas HYPERSECRETION: #cloze1# HYPOSECRETION: #cloze2#</span>`,
          clozes:{
            cloze1:{correctValue: "hyperinsulinism", clozelabel:"fill in the blank"},
            cloze2:{correctValue: "diabetes mellitus", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>ENDOCRINE GLAND: Parathyroid glands #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "hyperparathyroidism", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>ENDOCRINE GLAND: Pituitary—anterior lobe HYPERSECRETION #cloze1# #cloze2# HYPOSECRETION #cloze3# #cloze4#</span>`,
          clozes:{
            cloze1:{correctValue: "acromegaly", clozelabel:"fill in the blank"},
            cloze2:{correctValue: "gigantism", clozelabel:"fill in the blank"},
            cloze3:{correctValue: "dwarfism", clozelabel:"fill in the blank"},
            cloze4:{correctValue: "panhypopituitarism", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>ENDOCRINE GLAND: Pituitary—posterior lobe HYPERSECRETION: #cloze1# HYPOSECRETION: #cloze2#</span>`,
          clozes:{
            cloze1:{correctValue: "syndrome of inappropriate antidiuretic hormone", clozelabel:"fill in the blank"},
            cloze2:{correctValue: "diabetes insipidus", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>ENDOCRINE GLAND: Thyroid gland HYPERSECRETION: #cloze1# #cloze2# HYPOSECRETION: #cloze3# #cloze4# #cloze5#</span>`,
          clozes:{
            cloze1:{correctValue: "exophthalmic goiter", clozelabel:"fill in the blank"},
            cloze2:{correctValue: "nodular goiter", clozelabel:"fill in the blank"},
            cloze3:{correctValue: "cretinism", clozelabel:"fill in the blank"},
            cloze4:{correctValue: "endemic goiter", clozelabel:"fill in the blank"},
            cloze5:{correctValue: "myxedema", clozelabel:"fill in the blank"},
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
       group23: {
      id: "group23",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group23_placeholder",
      items: [
        {
          
          headerImage:{},
          clozeHtml:`<span>test to assess glucose control #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "A1C", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        
        
         {
          headerImage:{},
          clozeHtml:`<span>sodium—an important electrolyte  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "Na+", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>thyroxine  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "T4", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>pregnancy hormone  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "hCG", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
         {
          headerImage:{},
          clozeHtml:`<span>potassium—an important electrolyte #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "K+", clozelabel:"fill in the blank"},
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
    group24: {
      id: "group24",
      type: "reflective_writing", //Fill-in-the-Blank
      placeholder_id: "group24_placeholder",
      items: [
       {
          title: `hyponatremia`,
          feedback: `<span>deﬁcient sodium in the blood</span>`,
        },
       {
          title: `polydipsia`,
          feedback: `<span>condition of excessive thirst</span>`,
        },
        {
          title: `hyperkalemia`,
          feedback: `<span>excessive potassium in the blood</span>`,
        },
        {
          title: `hypercalcemia`,
          feedback: `<span>excessive calcium in the blood</span>`,
        },
        {
          title: `hypoglycemia`,
          feedback: `<span>deﬁcient sugar in the blood</span>`,
        },
        {
          title: `glycosuria`,
          feedback: `<span>condition of sugar in the urine</span>`,
        },
        {
          title: `euthyroid`,
          feedback: `<span>normal thyroid function</span>`,
        },
        {
          title: `hyperthyroidism`,
          feedback: `<span>condition of increased secretion from the thyroid gland</span>`,
        },
        {
          title: `tetany`,
          feedback: `<span>constant muscle contraction (result of hypoparathyroidism)</span>`,
        },
        {
          title: `ketoacidosis`,
          feedback: `<span>condition of excessive ketones (acids) in the blood as a result of diabetes mellitus</span>`,
        },
      ],

      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
    group25: {
      id: "group25",
      type: "reflective_writing", //Fill-in-the-Blank
      placeholder_id: "group25_placeholder",
      items: [
       {
          title: `gonadotropins`,
          feedback: `<span>the male and female sex organs (ovaries and testes); examples of gonadotropins are FSH and LH</span>`,
        },
      
        {
          title: `somatotropin`,
          feedback: `<span>bones; another name for somatotropin is growth hormone</span>`,
        },
        {
          title: `thyrotropin`,
          feedback: `<span>thyroid gland; another name for thyrotropin is thyroid-stimulating hormone (TSH)</span>`,
        },
        {
          title: `adrenocorticotropin`,
          feedback: `<span>adrenal cortex; another name for adrenocorticotropin is adrenocorticotropic hormone (ACTH)</span>`,
        },
      ],

      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
    group26: {
      id: "group26",
      type: "reflective_writing", //Fill-in-the-Blank
      placeholder_id: "group26_placeholder",
      items: [
       {
          title: `steroids`,
          feedback: `<span>complex substances derived from cholesterol; hormones from the adrenal cortex and sex hormones are steroids</span>`,
        },
       {
          title: `catecholamines`,
          feedback: `<span>complex substances derived from an amino acid; epinephrine (adrenaline) and norepinephrine (noradrenaline) are examples</span>`,
        },
        {
          title: `adenohypophysis`,
          feedback: `<span>anterior lobe of the pituitary gland</span>`,
        },
        {
          title: `tetany`,
          feedback: `<span>continuous contractions of muscles associated with low levels of parathyroid hormone</span>`,
        },
        {
          title: `exophthalmos`,
          feedback: `<span>eyeballs that bulge outward; associated with hyperthyroidism</span>`,
        },
        {
          title: `mineralocorticoids`,
          feedback: `<span>steroid hormones from the adrenal cortex (outer region of the adrenal gland) that inﬂuence salt (minerals such as sodium and potassium) metabolism</span>`,
        },
        {
          title: `homeostasis`,
          feedback: `<span> tendency of an organism to maintain a constant internal environment</span>`,
        },
        {
          title: `sympathomimetic`,
          feedback: `<span> substance that mimics the action of the sympathetic nerves; epinephrine (adrenaline) is an example</span>`,
        },
        {
          title: `glucocorticoids`,
          feedback: `<span>steroid hormones from the adrenal cortex that inﬂuence sugar metabolism in the body</span>`,
        },
        {
          title: `epinephrine`,
          feedback: `<span>catecholamine hormone from the adrenal medulla; adrenaline</span>`,
        },
        {
          title: `glycogen`,
          feedback: `<span>animal starch; storage form of glucose</span>`,
        },
        {
          title: `androgen`,
          feedback: `<span> male hormone; testosterone is an example</span>`,
        },
        {
          title: `corticosteroid`,
          feedback: `<span>hormone secreted by the adrenal cortex; cortisol is an example </span>`,
        },
        {
          title: `oxytocin`,
          feedback: `<span>hormone from the posterior lobe of the pituitary that stimulates contraction of the uterus during labor</span>`,
        },
        {
          title: `tetraiodothyronine`,
          feedback: `<span>major hormone from the thyroid gland; thyroxine (contains four iodine atoms)</span>`,
        },
        {
          title: `adrenal virilism`,
          feedback: `<span>abnormal secretion of androgens from the adrenal cortex produces masculine characteristics in a female</span>`,
        },
        {
          title: `thyroid carcinoma`,
          feedback: `<span>cancerous tumor of the thyroid gland</span>`,
        },
        {
          title: `hirsutism`,
          feedback: `<span>excessive hair on the body (result of excessive secretion of androgens)</span>`,
        },
        {
          title: `acromegaly`,
          feedback: `<span>enlargement of extremities (excessive secretion of growth hormone after puberty)</span>`,
        },
        {
          title: `estradiol`,
          feedback: `<span>female hormone; an estrogen</span>`,
        },
      ],

      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
    group27: {
      id: "group27",
      type: "reflective_writing", //Fill-in-the-Blank
      placeholder_id: "group27_placeholder",
      items: [
       {
          title: `type 1`,
          feedback: `<span>destruction of the beta cells (islets of Langerhans); insulin is not produced</span>`,
        },
       {
          title: `diabetic neuropathy`,
          feedback: `<span>destruction of nerves as a secondary complication of diabetes mellitus</span>`,
        },

       {
          title: `ketoacidosis`,
          feedback: `<span>abnormal condition of high levels of ketones (acids) in the blood as a result of improper burning of fats; fats are burned because the cells do not have sugar available as a result of lack of insulin or inability of insulin to act</span>`,
        },
         {
          title: `hypoglycemia`,
          feedback: `<span>too little sugar in the blood; this can occur if too much insulin is taken by a diabetic patient</span>`,
        },
        {
          title: `type 2`,
          feedback: `<span>insulin deficiency and resistance by target tissue to the action of insulin</span>`,
        },
        {
          title: `diabetic retinopathy`,
          feedback: `<span>destruction of blood vessels in the retina as a secondary complication of diabetes mellitus</span>`,
        },
        {
          title: `diabetic coma`,
          feedback: `<span>unconsciousness caused by high levels of sugar in the blood; water leaves cells to balance the large amounts of sugar in the blood, leading to cellular dehydration</span>`,
        },
        {
          title: `diabetic nephropathy`,
          feedback: `<span>destruction of the kidneys as a secondary complication of diabetes mellitus</span>`,
        },
        {
          title: `atherosclerosis`,
          feedback: `<span>collection of fatty plaque in arteries</span>`,
        },
        {
          title: `hyperglycemia`,
          feedback: `<span>high level of sugar in the blood; insulin is unavailable or unable to transport sugar from the blood into cells</span>`,
        },
        {
          title: `gastroparesis`,
          feedback: `<span>decreased gastric motility (-paresis means slight paralysis); secondary complication of diabetes</span>`,
        },
        {
          title: `insulin shock`,
          feedback: `<span>hypoglycemic shock caused by an overdose of insulin, decreased intake of food, or excessive exercise</span>`,
        },
      ],

      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
    group28: {
      id: "group28",
      type: "reflective_writing", //Fill-in-the-Blank
      placeholder_id: "group28_placeholder",
      items: [
       {
          title: `thyroid scan`,
          feedback: `<span>Radioactive compound is given, and the thyroid gland is imaged using a scanning device</span>`,
        },
      
        {
          title: `fasting plasma glucose`,
          feedback: `<span>Measurement of blood sugar levels in a fasting patient (at least 8 hours)</span>`,
        },
        {
          title: `exophthalmometry`,
          feedback: `<span>Measurement of eyeball protrusion (symptom of Graves disease)</span>`,
        },
        {
          title: `thyroid function test`,
          feedback: `<span>Measurement of T3, T4, and TSH in the bloodstream </span>`,
        },
       
      ],

      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
  },
};