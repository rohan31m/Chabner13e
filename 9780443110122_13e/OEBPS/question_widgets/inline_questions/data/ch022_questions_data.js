const questions_data = {
  sharedProperties: {
    maxWidth: "960px", //"100%", "90%", "760px", "1024px"
    alignment: "center", //"center", "left"
  },
  question_groups: {
    group1: {
      id: "group1",
      type: "accordian",
      placeholder_id: "ch22group1_placeholder",
      items: [
        {
            title: `anxi/o`,
            explanation: `uneasy; anxious`,
        },
        {
            title: `aut/o`,
            explanation: `self, own`,
        },
        {
            title: `cycl/o`,
            explanation: `ciliary body of eye; cycle; circle`,
        },
        {
            title: `hallucin/o`,
            explanation: `hallucination`,
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
            title: `klept/o`,
            explanation: `to steal`,
        },
        {
            title: `ment/o`,
            explanation: `mind; chin`,
        },
        {
            title: `neur/o`,
            explanation: `nerve`,
        },
        {
            title: `phil/o`,
            explanation: `like; love; attraction to`,
        },
        {
            title: `phren/o`,
            explanation: `diaphragm; mind`,
        },
        {
            title: `psych/o`,
            explanation: `mind`,
        },
        {
            title: `pyr/o`,
            explanation: `fever; fire`,
        },
        {
            title: `schiz/o`,
            explanation: `split`,
        },
        {
            title: `somat/o`,
            explanation: `body`,
        },
        {
            title: `ton/o`,
            explanation: `tension`,
        },
        {
            title: `xen/o`,
            explanation: `stranger`,
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
          title: `-form`,
          explanation: `resembling; in the shape of`,
        },
        {
          title: `-genic`,
          explanation: `produced by or in`,
        },
        {
          title: `-kinesia`,
          explanation: `movement`,
      },
      {
          title: `-leptic`,
          explanation: `pertaining to seizing, taking hold of`,
        },
        {
          title: `-mania`,
          explanation: `obsessive preoccupation`,
        },
        {
          title: `-oid`,
          explanation: `resembling; originating from`,
      },
      {
          title: `-pathy`,
          explanation: `disease; emotion`,
        },
        {
          title: `-phobia`,
          explanation: `fear`,
        },
        {
          title: `-phoria`,
          explanation: `to bear, carry; feeling (mental state)`,
      },
      {
          title: `-somnia`,
          explanation: `sleep`,
        },
        {
          title: `-thymia`,
          explanation: `mind (condition of)`,
        },
        {
          title: `-tropic`,
          explanation: `pertaining to stimulating`,
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
            title: `a-, an-`,
            explanation: `no; not; without`,
        },
        {
          title: `agora-`,
          explanation: `marketplace`,
        },
        {
          title: `cata-`,
          explanation: `down`,
        },
        {
          title: `dys-`,
          explanation: `bad; painful; difficult; abnormal`,
        },
        {
          title: `eu-`,
          explanation: `good; normal; true`,
        },
        {
            title: `hypo-`,
            explanation: `deficient; below; under; less than`,
        },
        {
          title: `para-`,
          explanation: `normal`,
        },
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
    group4: {
      id: "group4",
      type: "accordian",
      placeholder_id: "ch22group4_placeholder",
      items: [
                {
            title: `affect`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/affect.mp3`,
            explanation: `AF-ekt`,
        },
        {
            title: `agoraphobia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/agoraphobia.mp3`,
            explanation: `ah-gor-ah-FO-be-ah`,
        },
        {
            title: `amnesia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/amnesia.mp3`,
            explanation: `am-NE-ze-ah`,
        },
        {
            title: `amphetamines`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/amphetamines.mp3`,
            explanation: `am-FET-ah-meez`,
        },
        {
            title: `anorexia nervosa`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/anorexia_nervosa.mp3`,
            explanation: `an-o-REK-se-ahner-VO-sah`,
        },
        {
            title: `antisocial personality`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antisocial_personality.mp3`,
            explanation: `an-te-SO-shalper-son-AL-ih-te`,
        },
        {
            title: `anxiety disorders`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/anxiety_disorders.mp3`,
            explanation: `ang-ZI-et-edis-OR-derz`,
        },
        {
            title: `anxiolytic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/anxiolytic.mp3`,
            explanation: `ang-zi-o-LIT-ik`,
        },
        {
            title: `apathy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/apathy.mp3`,
            explanation: `AH-pah-the`,
        },
        {
            title: `atypical antipsychotics`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/atypical_antipsychotics.mp3`,
            explanation: `a-TIP-ik-alan-tih-si-KOT-iks`,
        },
        {
            title: `autism`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/autism.mp3`,
            explanation: `AW-tizm`,
        },
        {
            title: `avoidant personality`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/avoidant_personality.mp3`,
            explanation: `ah-VOY-dantper-son-AL-ih-te`,
        },
        {
            title: `benzodiazepines`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/benzodiazepines.mp3`,
            explanation: `ben-zo-di-AZ-eh-penz`,
        },
        {
            title: `bipolar disorders`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/bipolar_disorder.mp3`,
            explanation: `bi-PO-lardis-OR-derz`,
        },
        {
            title: `borderline personality`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/borderline_personality.mp3`,
            explanation: `BOR-der-lineper-son-AL-ih-te`,
        },
        {
            title: `bulimia nervosa`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/bulimia_nervosa.mp3`,
            explanation: `bu-LE-me-ahner-VO-sah`,
        },
        {
            title: `cannabis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cannabis.mp3`,
            explanation: `KAN-ah-bis`,
        },
        {
            title: `catatonia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/catatonia.mp3`,
            explanation: `kat-ah-TO-ne-ah`,
        },
        {
            title: `claustrophobia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/claustrophobia.mp3`,
            explanation: `klaws-tro-FO-be-ah`,
        },
        {
            title: `cognitive behavioral therapy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cognitive_behavioral_therapy.mp3`,
            explanation: `KOG-nit-ivbe-HAYV-yor-alTHER-ah-pe`,
        },
        {
            title: `compulsion`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/compulsion.mp3`,
            explanation: `kom-PUL-shun`,
        },
        {
            title: `conversion disorder`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/conversion_disorder.mp3`,
            explanation: `kon-VER-zshundis-OR-der`,
        },
        {
            title: `cyclothymia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cyclothymia.mp3`,
            explanation: `si-klo-THI-me-ah`,
        },
        {
            title: `defense mechanism`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/defense_mechanism.mp3`,
            explanation: `de-FENSmeh-kan-NIZM`,
        },
        {
            title: `delirium`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/delirium.mp3`,
            explanation: `deh-LEER-e-um`,
        },
        {
            title: `delirium tremens`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/delirium_tremens.mp3`,
            explanation: `deh-LEER-e-umTRE-menz`,
        },
        {
            title: `delusion`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/delusion.mp3`,
            explanation: `deh-LU-zhun`,
        },
        {
            title: `dementia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/dementia.mp3`,
            explanation: `de-MEN-she-ah`,
        },
        {
            title: `dependent personality`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/dependent_personality.mp3`,
            explanation: `de-PEN-dantper-son-AL-ih-te`,
        },
        {
            title: `depressive disorders`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/depressive_disorders.mp3`,
            explanation: `de-PRES-ivdis-OR-derz`,
        },
        {
            title: `dissociative disorder`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/dissociative_disorder.mp3`,
            explanation: `dih-SO-she-ah-tivdis-OR-der`,
        },
        {
            title: `dysphoria`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/dysphoria.mp3`,
            explanation: `dis-FOR-e-ah`,
        },
        {
            title: `dysthymia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/dysthymia.mp3`,
            explanation: `dis-THI-me-ah`,
        },
        {
            title: `ego`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ego.mp3`,
            explanation: `E-go`,
        },
        {
            title: `electroconvulsive therapy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/electroconvulsive_therapy.mp3`,
            explanation: `eh-lek-tro-kon-VUL-sivTHER-ah-pe`,
        },
        {
            title: `euphoria`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/euphoria.mp3`,
            explanation: `u-FOR-e-ah`,
        },
        {
            title: `euthymia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/euthymia.mp3`,
            explanation: `u-THI-me-ah`,
        },
        {
            title: `exhibitionistic disorder`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/exhibitionistic_disorder.mp3`,
            explanation: `ek-ih-bih-shun-IS-ticdis-OR-der`,
        },
        {
            title: `family therapy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/family_therapy.mp3`,
            explanation: `FAM-il-eTHER-ah-pe`,
        },
        {
            title: `fetishistic disorder`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/fetishistic_disorder.mp3`,
            explanation: `FET-ish-ist-ikdis-OR-der`,
        },
        {
            title: `free association`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/free_association.mp3`,
            explanation: `freeah-so-she-A-shun`,
        },
        {
            title: `fugue`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/fugue.mp3`,
            explanation: `fewg`,
        },
        {
            title: `group therapy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/group_therapy.mp3`,
            explanation: `groopTHER-ah-pe`,
        },
        {
            title: `hallucination`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hallucination.mp3`,
            explanation: `hah-lu-sih-NA-shun`,
        },
        {
            title: `hallucinogen`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hallucinogen.mp3`,
            explanation: `hah-LU-sih-no-jen`,
        },
        {
            title: `histrionic personality`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/histrionic_personality.mp3`,
            explanation: `his-tre-ON-ikper-son-AL-ih-te`,
        },
        {
            title: `hypnosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypnosis.mp3`,
            explanation: `hip-NO-sis`,
        },
        {
            title: `hypomania`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypomania.mp3`,
            explanation: `hi-po-MA-ne-ah`,
        },
        {
            title: `iatrogenic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/iatrogenic.mp3`,
            explanation: `i-ah-tro-JEN-ik`,
        },
        {
            title: `id`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/id.mp3`,
            explanation: `id`,
        },
        {
            title: `insight-oriented therapy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/insight-oriented_therapy.mp3`,
            explanation: `IN-siteOR-e-en-tedTHER-ah-pe`,
        },
        {
            title: `interpersonal therapy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/interpersonal_therapy.mp3`,
            explanation: `in-ter-PER-son-al THER-ah-pe`,
        },
        {
            title: `kleptomania`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/kleptomania.mp3`,
            explanation: `klep-to-MA-ne-ah`,
        },
        {
            title: `labile`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/labile.mp3`,
            explanation: `LA-bile`,
        },
        {
            title: `light therapy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/light_therapy.mp3`,
            explanation: `lite THER-ah-pe`,
        },
        {
            title: `lithium`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/lithium.mp3`,
            explanation: `LITH-e-um`,
        },
        {
            title: `mania`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/mania.mp3`,
            explanation: `MA-ne-ah`,
        },
        {
            title: `mental`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/mental.mp3`,
            explanation: `MEN-tal`,
        },
        {
            title: `mutism`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/mutism.mp3`,
            explanation: `MU-tiz-im`,
        },
        {
            title: `narcissistic personality`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/narcissistic_personality.mp3`,
            explanation: `nar-sih-SIS-tikper-son-AL-ih-te`,
        },
        {
            title: `neurocognitive disorders`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/neurocognitive_disorders.mp3`,
            explanation: `nu-ro-KOG-nat-ivdis-OR-derz`,
        },
        {
            title: `neurodevelopmental disorders`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/neurodevelopmental_disorders.mp3`,
            explanation: `nu-ro-de-VEL-op-men-taldis-OR-derz`,
        },
        {
            title: `neuroleptic drug`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/neuroleptic_drug.mp3`,
            explanation: `nu-ro-LEP-tikdrug`,
        },
        {
            title: `neurotransmitter`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/neurotransmitter.mp3`,
            explanation: `nu-ro-TRANZ-mit-er`,
        },
        {
            title: `obsession`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/obsession.mp3`,
            explanation: `ob-SEH-shun`,
        },
        {
            title: `obsessive- compulsive disorder`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/obsessive-compulsive_disorder.mp3`,
            explanation: `ob-SES-ivcom-PUL-sivdis-OR-der`,
        },
        {
            title: `opioids`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/opioids.mp3`,
            explanation: `O-pe-oydz`,
        },
        {
            title: `paranoia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/paranoia.mp3`,
            explanation: `par-ah-NOY-ah`,
        },
        {
            title: `paranoid personality`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/paranoid_personality.mp3`,
            explanation: `PAR-ah-noydper-son-AL-ih-te`,
        },
        {
            title: `paraphilic disorders`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/paraphilic_disorders.mp3`,
            explanation: `par-ah-FIL-ic dis-OR-derz`,
        },
        {
            title: `pedophilia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pedophilia.mp3`,
            explanation: `ped-uh-FIL-e-ah`,
        },
        {
            title: `personality disorders`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/personality_disorders.mp3`,
            explanation: `per-son-AL-ih-tedis-OR-derz`,
        },
        {
            title: `phenothiazines`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/phenothiazines.mp3`,
            explanation: `fe-no-THI-ah-zeenz`,
        },
        {
            title: `phobia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/phobia.mp3`,
            explanation: `FO-be-ah`,
        },
        {
            title: `play therapy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/play_therapy.mp3`,
            explanation: `playTHER-ah-pe`,
        },
        {
            title: `post-traumatic stress disorder`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/post-traumatic_stress_disorder.mp3`,
            explanation: `post-traw-MAH-tikstresdis-OR-der`,
        },
        {
            title: `projective test`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/projective_test.mp3`,
            explanation: `pro-JEK-tivtest`,
        },
        {
            title: `psychiatrist`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/psychiatrist.mp3`,
            explanation: `si-KI-ah-trist`,
        },
        {
            title: `psychiatry`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/psychiatry.mp3`,
            explanation: `si-KI-ah-tre`,
        },
        {
            title: `psychoanalysis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/psychoanalysis.mp3`,
            explanation: `si-ko-an-AL-ih-sis`,
        },
        {
            title: `psychodrama`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/psychodrama.mp3`,
            explanation: `si-ko-dra-mah`,
        },
        {
            title: `psychogenic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/psychogenic.mp3`,
            explanation: `si-ko-JEN-ik`,
        },
        {
            title: `psychologist`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/psychologist.mp3`,
            explanation: `si-KOL-o-jist`,
        },
        {
            title: `psychopharmacology`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/psychopharmacology.mp3`,
            explanation: `si-ko-far-mah-KOL-o-je`,
        },
        {
            title: `psychosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/psychosis.mp3`,
            explanation: `si-KO-sis`,
        },
        {
            title: `psychosomatic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/psychosomatic.mp3`,
            explanation: `si-ko-so-MAT-ik`,
        },
        {
            title: `psychotherapy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/psychotherapy.mp3`,
            explanation: `si-ko-THER-ah-pe`,
        },
        {
            title: `pyromania`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pyromania.mp3`,
            explanation: `pi-ro-MA-ne-ah`,
        },
        {
            title: `reality testing`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/reality_testing.mp3`,
            explanation: `re-AL-ih-teTEST-ing`,
        },
        {
            title: `repression`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/repression.mp3`,
            explanation: `re-PREH-shun`,
        },
        {
            title: `schizoid personality`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/schizoid_personality.mp3`,
            explanation: `SKIZ-oydper-son-AL-ih-te`,
        },
        {
            title: `schizophrenia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/schizophrenia.mp3`,
            explanation: `skiz-o-FREN-e-ah`,
        },
        {
            title: `sedatives`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sedatives.mp3`,
            explanation: `SED-ah-tivz`,
        },
        {
            title: `sexual dysfunctions`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sexual_dysfunctions.mp3`,
            explanation: `SEX-u-aldis-FUNK-shunz`,
        },
        {
            title: `sexual masochism disorder`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sexual_masochism.mp3`,
            explanation: `SEX-u-alMAH-so-kism dis-OR-der`,
        },
        {
            title: `sexual sadism disorder`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sexual_sadism.mp3`,
            explanation: `SEX-u-alSA-dizm dis-OR-der`,
        },
        {
            title: `somatic symptom disorders`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/somatic_symptom_disorders.mp3`,
            explanation: `so-MAT-ikSIM-tomdis-OR-derz`,
        },
        {
            title: `substance-related and addictive disorders`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/substance-related_and_addictive_disorders.mp3`,
            explanation: `SUB-stansre-LA-tedandah-DIK-tivdis-OR-derz`,
        },
        {
            title: `superego`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/superego.mp3`,
            explanation: `su-per-E-go`,
        },
        {
            title: `supportive psychotherapy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/supportive_psychotherapy.mp3`,
            explanation: `suh-POR-tivsi-ko-THER-ah-pe`,
        },
        {
            title: `tolerance`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/tolerance.mp3`,
            explanation: `TOL-er-ans`,
        },
        {
            title: `transcranial magnetic stimulation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/transcranial_magnetic_stimulation.mp3`,
            explanation: `trans-KRA-ne-al mag-NET-ic stim-u-LA-shun`,
        },
        {
            title: `transference`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/transference.mp3`,
            explanation: `trans-FUR-enz`,
        },
        {
            title: `tricyclic antidepressants`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/tricyclic_antidepressants.mp3`,
            explanation: `tri-SIK-likan-tih-deh-PRES-antz`,
        },
        {
            title: `voyeuristic disorder`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/voyeuristic_disorder.mp3`,
            explanation: `Voy-yer-is-tik dis-OR-der`,
        },
        {
            title: `xenophobia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/xenophobia.mp3`,
            explanation: `zen-o-FO-be-ah`,
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
        "amnesia",
        "anxiety",
        "apathy",
        "compulsion",
        "conversion",
        "delusion",
        "dissociation",
        "hallucination",
        "mania",
        "mutism",
        "obsession"
        
        
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>nonreactive state marked by inability to speak #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "mutism",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>state of excessive excitability; agitation #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "mania",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>loss of memory #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "amnesia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>uncontrollable urge to perform an act repeatedly #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "compulsion",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>persistent idea, emotion, or urge #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "obsession",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>feelings of apprehension, uneasiness, dread #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "anxiety",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>uncomfortable feelings are separated from their real object and redirected toward a second object or behavior pattern #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "dissociation",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>anxiety becomes a bodily symptom that has no organic basis #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "conversion",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>absence of emotions; lack of motivation or emotional involvement #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "apathy",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>fixed false belief that cannot be changed by logical reasoning or evidence #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "delusion",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>false or unreal sensory perception #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "hallucination",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
        "anxiety disorders",
        "delirium",
        "dementia",
        "dissociative disorders",
        "eating disorders",
        "bipolar disorders",
        "personality disorders",
        "sexual dysfunctions",
        "somatic symptom disorders",
        "substance-related and addictive disorders",
       
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>Disturbances of memory and identity that hide the anxiety of unconscious conflicts are #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "dissociative disorder",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Troubled feelings, unpleasant tension, distress, and avoidance behavior describe a/an #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "anxiety disorder",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Conditions related to regular use of drugs and alcohol are #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "substance-related/addictive disorder",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Bulimia and anorexia nervosa are examples of #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "eating disorder",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>A disorder involving paraphilias is a/an #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "sexual dysfunction",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Disorders marked by alternating periods of mania and depression are #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "bipolar disorder",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Mental conditions in which physical symptoms cannot be explained by an actual physical disorder or injury are #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "somatic symptom disorder",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Lifelong patterns of thought and behavior that are inflexible and causes distress, conflict, and impairment of social functioning are #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "personality disorder",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Loss of intellectual abilities with impairment of memory, judgment, and reasoning is #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "dementia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Confusion in thinking with faulty perceptions and irrational behavior is #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "delirium",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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

    group7: {
      id: "group7",
      type: "dropdown",
      placeholder_id: "group7_placeholder",
      commonDropdownOptions:[
        "conversion disorder",
        "cocaine abuse",
        "phobia",
        "negative symptoms such as flat affect and lack of initiative",
        "pedophilic disorder",
        "autism",
        "alternating mania and depression",
        "delirium and dementia",
        "fugue and identity disorder"


      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>somatic symptom disorder #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "conversion disorder",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>sexual dysfunction #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pedophilia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>anxiety disorder #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "phobia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>bipolar disorder #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "alternating mania and depression",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>substance-related and addictive disorder #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "cocaine abuse",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>schizophrenia spectrum #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "negative symptoms such as flat affect and lack of initiative",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>dissociative disorder #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "fugue and identity disorder",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>neurocognitive disorder #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "delirium and dementia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>neurodevelopmental disorder #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "autism",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
        "paranoid",
        "schizoid",
        "schizotypal",
        "antisocial",
        "borderline",
        "histrionic",
        "narcissistic",
        "avoidant",
        "dependent",
        "obsessive-compulsive"
        
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>flamboyant, theatrical, emotionally immature #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "histrionic",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>no loyalty or concern for others; does not tolerate frustration and blames others when he or she is at fault #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "antisocial",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>fantasies of success and power and a grandiose sense of self-importance #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "narcissistic",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>pervasive, unwarranted suspiciousness and mistrust of people #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "paranoid",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>emotionally cold, aloof, indifferent to praise or criticism or to the feelings of others #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "schizoid",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>instability in personal relationships and sense of self; alternating overinvolvement with and rejection of people #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "borderline",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>pattern of social inhibition, feelings of inadequacy, and hypersensitivity to negative evaluations #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "avoidant",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>acute discomfort in close relationships with odd beliefs and bizarre fantasies #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "schizotypal",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>needing orderliness, perfectionism and control; preoccupied with details, rules, lists, and schedules #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "obsessive-compulsive",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>submissive and clinging behavior related to an excessive need to be taken care of #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "dependent",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
        "agoraphobia",
        "amphetamines",
        "benzodiazepines",
        "cyclothymia",
        "dysthymia",
        "first generation antipsychotics",
        "kleptomania",
        "lithium",
        "MAO inhibitors",
        "pyromania",
        "tricyclic antidepressants",
        "xenophobia"
        
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>Fear of strangers is #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "xenophobia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Obsessive preoccupation with stealing is #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "kleptomania",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Antidepressant agents that work by blocking the action of a specific enzyme are #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "MAO inhibitors",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Depression disorder that is milder than major depression is #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "dysthymia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Neuroleptic drugs such as Thorazine and Haldol are #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "first generation antipsychotics",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Fear of being left alone in unfamiliar surroundings is #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "agoraphobia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Stimulants used for treatment of children with attention deficit–hyperactivity disorder are #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "amphetamines",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Mild form of bipolar disorder in which hypomanic episodes alternate with depression is #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "cyclothymia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Obsessive preoccupation with fire is #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pyromania",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Drugs (with molecular structure containing three fused rings) used to elevate mood and increase physical activity and mental alertness are #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "tricyclic antidepressants",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Anxiolytic agents that lessen the anxiety associated with panic attacks are #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "benzodiazepines",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Drug that is used to treat bipolar illness is #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "lithium",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
        "alprazolam (Xanax)",
        "amitriptyline (Elavil)",
        "aripiprazole (Abilify)",
        "escitalopram (Lexapro)",
        "lamotrigine (Lamictal)",
        "methylphenidate (Ritalin, Concerta)",
        "thiothixene (Navane)",
        "zolpidem (Ambien)"
   
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>SSRI; treats anxiety and depression #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "escitalopram (Lexapro)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
       {
          headerImage:{},
          dropdownHtml:`<span>atypical antipsychotic; treats schizophrenia and bipolar disorder #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "aripiprazole (Abilify)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>stimulant; treats attention deficit–hyperactivity disorder #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "methylphenidate (Ritalin, Concerta)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>tricyclic antidepressant; treats depression #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "amitriptyline (Elavil)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>benzodiazepine; treats anxiety and panic attacks #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "alprazolam (Xanax)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>sedative; treats insomnia #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "zolpidem (Ambien)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>anticonvulsant that also is used to treat bipolar disorders #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "lamotrigine (Lamictal)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>first generation antipsychotic that treats schizophrenia #dropdown1# </span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thiothixene (Navane)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
          
          dropdownHtml:`<span>Robin fluctuated between bouts of depression and mania and finally was diagnosed as having a #dropdown1# disorder.</span>`,
          dropdowns:{
            dropdown1:{values:["xenophobic","histrionic","bipolar"],correctValue: "bipolar",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Although the root of Jon’s problems could hardly be addressed simply with medication, his personality disorder and his depression were treated with a selective serotonin reuptake inhibitor (SSRI) called #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:["lithium","Prozac","Valium"],correctValue: "Prozac",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        
        { 
          
          dropdownHtml:`<span>Hillary had an enormous fear of open-air markets, shopping malls, and stadiums. She was diagnosed as having #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:["agoraphobia","xenophobia","pyromania"],correctValue: "agoraphobia",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>When Sam was admitted to the hospital after his automobile accident, his physicians were told of his alcoholism. They needed to know Sam’s history so that they could prevent #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:["dementia","dysthymia","delirium tremens"],correctValue: "delirium tremens",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Hanna was afraid of everyone she met. She had the #dropdown1# delusion that everyone was out to get her.</span>`,
          dropdowns:{
            dropdown1:{values:["paranoid","narcissistic","schizoid"],correctValue: "paranoid",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Bill was told that an important potential side effect of taking neuroleptic drugs such as atypical and first-generation antipsychotics was #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:["amnesia","mutism","tardive dyskinesia"],correctValue: "tardive dyskinesia",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Ever since she was trapped in an elevator for 3 hours, Lil experienced a #dropdown1# marked by palpitations, sweating, and trembling when she was unable to get out of an enclosed space.</span>`,
          dropdowns:{
            dropdown1:{values:["social phobia","panic attack","somatic symptom disorder"],correctValue: "panic attack",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>The few survivors of the nightclub fire were diagnosed with #dropdown1# . They regularly experienced insomnia, nightmares, and feelings of helplessness.</span>`,
          dropdowns:{
            dropdown1:{values:["OCD","dissociative fugue","PTSD"],correctValue: "post-traumatic stress disorder",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Sarah couldn’t stop herself from eating a half-gallon of ice cream and a box of cookies every evening. She would then feel very anxious and guilty about overeating and induce vomiting. Her mother took her to a/an #dropdown1# , who diagnosed her condition as #dropdown2# and prescribed #dropdown3# .</span>`,
          dropdowns:{
            dropdown1:{values:["endocrinologist","psychiatrist","gastroenterologist"],correctValue: "psychiatrist",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["anorexia nervosa ","somatic symptom disorder","bulimia nervosa"],correctValue: "bulimia nervosa",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown3:{values:["sex therapy","ECT","psychotherapy"],correctValue: "psychotherapy",dropdownlabel:"Select the type of view", useCommonOptions:"false"}
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },

        { 
          
          dropdownHtml:`<span>Bill felt depressed during the months of November through February. In March his #dropdown1# changed and his mood was characterized by #dropdown2# .</span>`,
          dropdowns:{
            dropdown1:{values:["OCD","ADHD","SAD"],correctValue: "SAD",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["hypomania","dysphoria","paranoia"],correctValue: "hypomania",dropdownlabel:"Select the type of view", useCommonOptions:"false"}
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
          
          clozeHtml:`<span>physician specializing in treating mental illness #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "psychiatrist", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>nonphysician professionals trained in the treatment of mental illness #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "psychologist, psychiatric nurse, licensed clinical social worker", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>therapist who practices psychoanalysis #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "psychoanalyst", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>branch of psychiatry dealing with legal matters #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "forensic psychiatry", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>unconscious part of the personality #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "id", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>conscious, coordinating part of the personality #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "ego", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>conscience or moral part of the personality #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "superego", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>psychological process used to distinguish fact from fantasy #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "reality testing", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>unconscious technique used to resolve or conceal conflicts and anxiety #cloze1# mechanism.</span>`,
          clozes:{
            cloze1:{correctValue: "defense", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>branch of psychology dealing with patient care #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "clinical", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        }
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
          
          clozeHtml:`<span>Patients express feelings by acting out roles with other patients #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "psychodrama", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>A trance helps patients recover deeply repressed feelings: #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "hypnosis", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>Long-term and intense exploration of unconscious feelings uses techniques such as transference and free association: #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "psychoanalysis", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>Toys help a child express conflicts and feelings: #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "play therapy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>Conditioning changes actual behavior patterns rather than focusing on subconscious thoughts and feelings: #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "behavioral therapy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>Techniques help patients overcome sexual dysfunctions: #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "sexual therapy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>Electrical current is applied to the brain to reverse major depression: #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "electroconvulsive therapy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>Agents (chemicals) relieve symptoms of psychiatric disorders: #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "psychopharmacology, or drug therapy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>Face-to-face discussion of life's problems and associated feelings: #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "insight-oriented psychotherapy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>Offering encouragement, support, and hope to patients facing difficult life transitions and events:  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "supportive psychotherapy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        }
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
          
          clozeHtml:`<span>phren/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "mind", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>hypn/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "sleep", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>somat/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "body", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>phil/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "love", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>iatr/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "treatment", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>schiz/o #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "split", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>-mania #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "obsessive preoccupation", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>-phobia #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "fear", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>-thymia #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "mind", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>-tropic #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "to influence", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>-genic #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "produced by", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>para- #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "abnormal", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>hypo- #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "deficient", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>cata- #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "down", clozelabel:"fill in the blank"},
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
          title: `dysphoria`,
          feedback: `<span>sadness, hopelessness, unpleasant feeling</span>`,
        },
        {
          title: `euphoria`,
          feedback: `<span>exaggerated feeling of well-being (“high”)</span>`,
        },
        {
          title: `amnesia`,
          feedback: `<span>loss of memory</span>`,
        },
        {
          title: `paranoia`,
          feedback: `<span>suspicious system of thinking; fixed delusion that one is being treated unfairly or harassed</span>`,
        },
        {
          title: `psychosis`,
          feedback: `<span>loss of contact with reality; often delusions and hallucinations</span>`,
        },
        {
          title: `iatrogenic`,
          feedback: `<span>pertaining to a disorder caused by a treatment</span>`,
        },
        {
          title: `phobia`,
          feedback: `<span>irrational fear (avoidance) of an object or a situation</span>`,
        },
        {
          title: `agoraphobia`,
          feedback: `<span>fear of leaving one's home or a safe place</span>`,
        },
        {
          title: `labile`,
          feedback: `<span>unstable; undergoing rapid emotional change; fluctuating</span>`,
        },
        {
          title: `affect`,
          feedback: `<span>expression of emotion</span>`,
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
          title: `obsessive-compulsive disorder`,
          feedback: `<span>recurrent thoughts and repetitive acts that dominate a person's behavior</span>`,
        },
        {
          title: `post-traumatic stress disorder`,
          feedback: `<span>anxiety-related symptoms appear after exposure to personal experience of a traumatic event</span>`,
        },
        {
          title: `bipolar disorder`,
          feedback: `<span>alternating periods of mania and depression</span>`,
        },
        {
          title: `fugue`,
          feedback: `<span>amnesia with flight from customary surroundings</span>`,
        },
        {
          title: `paranoia`,
          feedback: `<span>delusions of persecution or grandeur</span>`,
        },
        {
          title: `amphetamines`,
          feedback: `<span>CNS stimulants</span>`,
        },
        {
          title: `cannabis`,
          feedback: `<span>marijuana, hashish; active substance in marijuana; THC</span>`,
        },
        {
          title: `schizophrenia`,
          feedback: `<span>psychosis marked by a split from reality; disorganized thinking and behavior</span>`,
        },
        {
          title: `sexual sadism`,
          feedback: `<span>achievement of sexual gratification by inflicting physical or psychological pain</span>`,
        },
        {
          title: `somatic symptom disorder`,
          feedback: `<span>presence of physical symptoms that cannot be explained by an actual medical disorder or injury</span>`,
        },
        
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },

    group17: {
      id: "group17",
      type: "reflective_writing", //Short Answers
      placeholder_id: "group17_placeholder",
      items: [
        
        {
          title: `anorexia nervosa`,
          feedback: `<span>eating disorder marked by excessive dieting related to emotional factors</span>`,
        },
         {
          title: `bulimia nervosa`,
          feedback: `<span>eating disorder characterized by binge eating followed by vomiting, purging, and depression</span>`,
        },
         {
          title: `repression`,
          feedback: `<span>a defense mechanism by which unacceptable thoughts, feelings, and impulses are pushed into the unconscious</span>`,
        },
         {
          title: `dementia`,
          feedback: `<span>loss of higher mental functioning, memory, judgment, and reasoning</span>`,
        },
         {
          title: `hypomania`,
          feedback: `<span>mood disorder resembling mania (exaggerated excitement, hyperactivity) but of lesser intensity</span>`,
        },
         {
          title: `hallucinogen`,
          feedback: `<span>drug that produces hallucinations (false sensory perceptions)</span>`,
        },
         {
          title: `opioids`,
          feedback: `<span>drugs that are derived from opium (morphine and heroin)</span>`,
        },
         {
          title: `cocaine`,
          feedback: `<span>stimulant drug that causes euphoria and hallucinations</span>`,
        },
         {
          title: `cyclothymic disorder`,
          feedback: `<span>alternating periods of hypomania and depressive episodes of lesser intensity than with bipolar illness</span>`,
        },
         {
          title: `dysthymia`,
          feedback: `<span>depressed mood persisting over a 2-year period but not as severe as a major depression</span>`,
        },
        
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
  },
};