const questions_data = {
  sharedProperties: {
    maxWidth: "960px", //"100%", "90%", "760px", "1024px"
    alignment: "center", //"center", "left"
  },
  question_groups: {
    group1: {
      id: "group1",
      type: "accordian",
      placeholder_id: "ch11group1_placeholder",
      items: [
        {
            title: `aneurysm/o`,
            explanation: `aneurysm (widened blood vessel)`,
        },
        {
            title: `angi/o`,
            explanation: `vessel (blood))`,
        },
        {
            title: `aort/o`,
            explanation: `aorta (largest artery)`,
        },
        {
            title: `arter/o, arteri/o`,
            explanation: `artery`,
        },
        {
            title: `ather/o`,
            explanation: `plaque (fatty substance))`,
        },
        {
            title: `atri/o`,
            explanation: `atrium (upper heart chamber))`,
        },
        {
            title: `axill/o`,
            explanation: `armpit`,
        },
        {
            title: `brachi/o`,
            explanation: `arm`,
        },
        {
            title: `cardi/o`,
            explanation: `heart`,
        },
        {
            title: `cholesterol/o`,
            explanation: `cholesterol`,
        },
        {
            title: `coron/o`,
            explanation: `heart`,
        },
        {
            title: `cyan/o`,
            explanation: `blue`,
        },
        {
            title: `isch/o`,
            explanation: `hold back; back`,
        },
        {
            title: `my/o`,
            explanation: `muscle`,
        },
        {
            title: `myx/o`,
            explanation: `mucus`,
        },
        {
            title: `ox/o`,
            explanation: `oxygen`,
        },
        {
            title: `pericardi/o`,
            explanation: `pericardium (sac surrounding heart)`,
        },
        {
            title: `phleb/o`,
            explanation: `vein`,
        },
        {
            title: `pulmon/o`,
            explanation: `lung`,
        },
        {
            title: `rrhythm/o`,
            explanation: `rhythm`,
        },
        {
            title: `sphygm/o`,
            explanation: `pulse`,
        },
        {
            title: `steth/o`,
            explanation: `chest`,
        },
        {
            title: `thromb/o`,
            explanation: `clot`,
        },
        {
            title: `valv/o`,
            explanation: `valve`,
        },
        {
            title: `valvul/o`,
            explanation: `valve`,
        },
        {
            title: `vas/o`,
            explanation: `vessel; duct; vas deferens`,
        },
        {
            title: `vascul/o`,
            explanation: `vessel (blood)`,
        },
        {
            title: `ven/o, ven/i`,
            explanation: `vein`,
        },
        {
            title: `ventricul/o`,
            explanation: `ventricle (of heart or brain)`,
        },
      ],
      titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
      itemSeperator: "false",
    },
    group2: {
      id: "group2",
      type: "accordian",
      placeholder_id: "ch11group2_placeholder",
      items: [
        {
          title: `-constriction`,
          explanation: `narrowing`,
        },
        {
          title: `-dilation`,
          explanation: `widening; stretching; expanding`,
        },
        {
          title: `-emia`,
          explanation: `blood condition`,
      },
      {
          title: `-graphy`,
          explanation: `process of recording`,
        },
        {
          title: `-lysis`,
          explanation: `breakdown; separation; destruction; loosening`,
        },
        {
          title: `-megaly`,
          explanation: `enlargement`,
      },
      {
          title: `-meter`,
          explanation: `measure`,
        },
        {
          title: `-oma`,
          explanation: `tumor; mass; fluid collection`,
        },
        {
          title: `-osis`,
          explanation: `condition, usually abnormal`,
      },
      {
          title: `-plasty`,
          explanation: `surgical repair`,
        },
        {
          title: `-sclerosis`,
          explanation: `hardening`,
        },
        {
          title: `-stenosis`,
          explanation: `tightening; stricture`,
      },
      {
          title: `-tomy`,
          explanation: `process of cutting`,
        },
      
      ],
      titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
      itemSeperator: "false",
    },
    group3: {
      id: "group3",
      type: "accordian", 
      placeholder_id: "ch11group3_placeholder",
      items: [
        {
            title: `a-, an-`,
            explanation: `no; not; without`,
        },
        {
          title: `brady-`,
          explanation: `slow`,
        },
        {
          title: `de-`,
          explanation: `lack of; down; less; removal of`,
        },
        {
          title: `dys-`,
          explanation: `bad; painful; difficult; abnormal`,
        },
        {
          title: `endo-`,
          explanation: `in; within`,
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
          title: `inter-`,
          explanation: `between`,
        },
        {
          title: `peri-`,
          explanation: `surrounding`,
        },
        {
          title: `tachy-`,
          explanation: `fast`,
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
      placeholder_id: "ch11group4_placeholder",
      items: [
                {
            title: `angiogram`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/angiogram.mp3`,
            explanation: `AN-je-o-gram`,
        },
        {
            title: `angioplasty`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/angioplasty.mp3`,
            explanation: `AN-je-o-plas-te`,
        },
        {
            title: `anoxia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/anoxia.mp3`,
            explanation: `ah-NOK-se-ah`,
        },
        {
            title: `aorta`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/aorta.mp3`,
            explanation: `a-OR-tah`,
        },
        {
            title: `aortic stenosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/aortic_stenosis.mp3`,
            explanation: `a-OR-tiksteh-NO-sis`,
        },
        {
            title: `apex of the heart`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/apex_of_the_heart.mp3`,
            explanation: `A-pexofthehart`,
        },
        {
            title: `arrhythmia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/arrhythmia.mp3`,
            explanation: `a-RITH-me-ah`,
        },
        {
            title: `arterial anastomosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/arterial_anastomosis.mp3`,
            explanation: `ar-TE-re-alah-nas-to-MO-sis`,
        },
        {
            title: `arteriography`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/arteriography.mp3`,
            explanation: `ar-TE-re-OG-rah-fe`,
        },
        {
            title: `arteriole`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/arteriole.mp3`,
            explanation: `ar-TE-re-ohl`,
        },
        {
            title: `arteriosclerosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/arteriosclerosis.mp3`,
            explanation: `ar-te-re-o-skleh-RO-sis`,
        },
        {
            title: `artery`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/artery.mp3`,
            explanation: `AR-teh-re`,
        },
        {
            title: `atherectomy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/atherectomy.mp3`,
            explanation: `ath-eh-REK-to-me`,
        },
        {
            title: `atheroma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/atheroma.mp3`,
            explanation: `ath-er-O-mah`,
        },
        {
            title: `atherosclerosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/atherosclerosis.mp3`,
            explanation: `ath-er-o-skleh-RO-sis`,
        },
        {
            title: `atrial`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/atrial.mp3`,
            explanation: `A-tre-al`,
        },
        {
            title: `atrioventricular bundle`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/atrioventricular_bundle.mp3`,
            explanation: `a-tre-o-ven-TRIK-u-lar BUN-dil`,
        },
        {
            title: `atrioventricular node`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/atrioventricular_node.mp3`,
            explanation: `a-tre-o-ven-TRIK-u-larnode`,
        },
        {
            title: `atrium; pl. atria`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/atrium_atria.mp3`,
            explanation: `A-tre-um;A-tre-ah`,
        },
        {
            title: `brachial artery`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/brachial_artery.mp3`,
            explanation: `BRA-ke-alAR-ter-e`,
        },
        {
            title: `bradycardia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/bradycardia.mp3`,
            explanation: `bra-de-KAR-de-ah`,
        },
        {
            title: `bundle of His`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/bundle_of_his.mp3`,
            explanation: `BUN-dilofhiss`,
        },
        {
            title: `capillary`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/capillary.mp3`,
            explanation: `KAP-ih-lah-re`,
        },
        {
            title: `carbon dioxide`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/carbon_dioxide.mp3`,
            explanation: `KAR-bondi-OX-ide`,
        },
        {
            title: `cardiogenic shock`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cardiogenic_shock.mp3`,
            explanation: `kar-de-o-JEN-ikshok`,
        },
        {
            title: `cardiomegaly`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cardiomegaly.mp3`,
            explanation: `kar-de-o-MEG-ah-le`,
        },
        {
            title: `cardiomyopathy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cardiomyopathy.mp3`,
            explanation: `kar-de-o-mi-OP-ah-the`,
        },
        {
            title: `coronary arteries`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/coronary_arteries.mp3`,
            explanation: `KOR-o-nair-eAR-teh-reez`,
        },
        {
            title: `cyanosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cyanosis.mp3`,
            explanation: `si-ah-NO-sis`,
        },
        {
            title: `deoxygenated blood`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/deoxygenated_blood.mp3`,
            explanation: `de-OX-ih-jeh-NA-tedblud`,
        },
        {
            title: `diastole`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/diastole.mp3`,
            explanation: `di-AS-to-le`,
        },
        {
            title: `electrocardiogram`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/electrocardiogram.mp3`,
            explanation: `eh-lek-tro-KAR-de-o-gram`,
        },
        {
            title: `endocardium`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/endocardium.mp3`,
            explanation: `en-do-KAR-de-um`,
        },
        {
            title: `endothelium`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/endothelium.mp3`,
            explanation: `en-do-THE-le-um`,
        },
        {
            title: `hypercholesterolemia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypercholesterolemia.mp3`,
            explanation: `hi-per-ko-les-ter-ol-E- me-ah`,
        },
        {
            title: `hypoxia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypoxia.mp3`,
            explanation: `hi-POX-e-ah`,
        },
        {
            title: `interventricular septum`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/interventricular_septum.mp3`,
            explanation: `in-ter-ven-TRIK-u-lar SEP-tum`,
        },
        {
            title: `mitral valve`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/mitral_valve.mp3`,
            explanation: `MI-tralvalv`,
        },
        {
            title: `mitral valvulitis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/mitral_valvulitis.mp3`,
            explanation: `MI-tralval-vu-LI-tis`,
        },
        {
            title: `myocardium`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/myocardium.mp3`,
            explanation: `mi-o-KAR-de-um`,
        },
        {
            title: `myxoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/myxoma.mp3`,
            explanation: `mik-SO-mah`,
        },
        {
            title: `normal sinus rhythm`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/normal_sinus_rhythm.mp3`,
            explanation: `NOR-malSI-nus RIH-thim`,
        },
        {
            title: `oxygen`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/oxygen.mp3`,
            explanation: `OX-ih-jen`,
        },
        {
            title: `pacemaker`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pacemaker.mp3`,
            explanation: `PACE-ma-ker`,
        },
        {
            title: `pericardiocentesis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pericardiocentesis.mp3`,
            explanation: `peh-rih-kar-de-o-sen- TE-sis`,
        },
        {
            title: `pericardium`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pericardium.mp3`,
            explanation: `peh-rih-KAR-de-um`,
        },
        {
            title: `phlebotomy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/phlebotomy.mp3`,
            explanation: `fleh-BOT-o-me`,
        },
        {
            title: `pulmonary artery`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pulmonary_artery.mp3`,
            explanation: `PUL-mo-nair-eAR-teh-re`,
        },
        {
            title: `pulmonary circulation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pulmonary_circulation.mp3`,
            explanation: `PUL-mo-nair-eser-ku-LA-shun`,
        },
        {
            title: `pulmonary valve`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pulmonary_valve.mp3`,
            explanation: `PUL-mo-nair-evalv`,
        },
        {
            title: `pulmonary vein`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pulmonary_vein.mp3`,
            explanation: `PUL-mo-nair-evayn`,
        },
        {
            title: `pulse`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pulse.mp3`,
            explanation: `puls`,
        },
        {
            title: `septum; pl. septa`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/septum_septa.mp3`,
            explanation: `SEP-tum;SEP-ta`,
        },
        {
            title: `sinoatrial node`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sinoatrial_node.mp3`,
            explanation: `si-no-A-tre-alnode`,
        },
        {
            title: `sphygmomanometer`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sphygmomanometer.mp3`,
            explanation: `sfig-mo-mah-NOM-eh-ter`,
        },
        {
            title: `stethoscope`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/stethoscope.mp3`,
            explanation: `STETH-o-skope`,
        },
        {
            title: `systemic circulation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/systemic_circulation.mp3`,
            explanation: `sis-TEM-ikser-ku-LA-shun`,
        },
        {
            title: `systole`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/systole.mp3`,
            explanation: `SIS-to-le`,
        },
        {
            title: `tachycardia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/tachycardia.mp3`,
            explanation: `tah-ke-KAR-de-ah`,
        },
        {
            title: `thrombolysis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thrombolysis.mp3`,
            explanation: `throm-BOL-ih-sis`,
        },
        {
            title: `thrombophlebitis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thrombophlebitis.mp3`,
            explanation: `throm-bo-fleh-BI-tis`,
        },
        {
            title: `tricuspid valve`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/tricuspid_valve.mp3`,
            explanation: `tri-KUS-pidvalv`,
        },
        {
            title: `valve`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/valve.mp3`,
            explanation: `valv`,
        },
        {
            title: `valvotomy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/valvotomy.mp3`,
            explanation: `val-VOT-o-me`,
        },
        {
            title: `valvuloplasty`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/valvuloplasty.mp3`,
            explanation: `val-vu-lo-PLAS-te`,
        },
        {
            title: `vascular`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/vascular.mp3`,
            explanation: `VAS-ku-lar`,
        },
        {
            title: `vasoconstriction`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/vasoconstriction.mp3`,
            explanation: `vaz-o-kon-STRIK-shun`,
        },
        {
            title: `vasodilation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/vasodilation.mp3`,
            explanation: `vaz-o-di-LA-shun`,
        },
        {
            title: `vein`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/vein.mp3`,
            explanation: `vayn`,
        },
        {
            title: `vena cava; pl. venae cavae`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/vena_cava_venae_cavae.mp3`,
            explanation: `VE-nahKA-vah;VE-ne KA-ve`,
        },
        {
            title: `venipuncture`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/venipuncture.mp3`,
            explanation: `ve-nih-PUNK-chur`,
        },
        {
            title: `venous`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/venous.mp3`,
            explanation: `VE-nus`,
        },
        {
            title: `ventricle`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ventricle.mp3`,
            explanation: `VEN-trih-kel`,
        },
        {
            title: `venule`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/venule.mp3`,
            explanation: `VEN-ule`,
        },
      ],
      titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
      itemSeperator: "false",
    },
        group5: {
      id: "group5",
      type: "accordian",
      placeholder_id: "ch11group5_placeholder",
      items: [
    {
            title: `ACE inhibitor`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ace_inhibitor.mp3`,
            explanation: `ACEin-HIB-ih-tor`,
        },
{
            title: `acute coronary syndromes`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/acute_coronary_syndromes.mp3`,
            explanation: `a-KYOOTKOR-o-nair-e SIN-drohms`,
        },
{
            title: `aneurysm`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/aneurysm.mp3`,
            explanation: `AN-yoo-rih-zim`,
        },
{
            title: `angina`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/angina.mp3`,
            explanation: `an-JI-nah`,
        },
{
            title: `angiography`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/angiography.mp3`,
            explanation: `an-je-OG-rah-fe`,
        },
{
            title: `atrial fibrillation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/atrial_fibrillation.mp3`,
            explanation: `A-tre-alfib-rih-LA-shun`,
        },
{
            title: `atrioventricular block`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/atrioventricular_block.mp3`,
            explanation: `a-tre-o-ven-TRIK-u-lar blok`,
        },
{
            title: `auscultation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/auscultation.mp3`,
            explanation: `aw-skul-TA-shun`,
        },
{
            title: `beta blocker`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/beta-blocker.mp3`,
            explanation: `BA-tahBLOK-er`,
        },
{
            title: `biventricular pacemaker`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/biventricular_pacemaker.mp3`,
            explanation: `bi-ven-TRIK-u-lar PACE-ma-ker`,
        },
{
            title: `BNP test`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/bnp_tests.mp3`,
            explanation: `BNPtest`,
        },
{
            title: `bruit`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/bruit.mp3`,
            explanation: `BRU-e`,
        },
{
            title: `calcium channel blocker`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/calcium_channel_blocker.mp3`,
            explanation: `KAL-se-umCHA-nel BLOK-er`,
        },
{
            title: `cardiac arrest`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cardiac_arrest.mp3`,
            explanation: `KAR-de-akah-REST`,
        },
{
            title: `cardiac biomarkers`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cardiac_biomarkers.mp3`,
            explanation: `KAR-de-akBI-o-mar-kerz`,
        },
{
            title: `cardiac catheterization`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cardiac_catheterization.mp3`,
            explanation: `KAR-de-ak kath-eh-ter-ih-ZA-shun`,
        },
{
            title: `cardiac MRI`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cardiac_mri.mp3`,
            explanation: `KAR-de-akMRI`,
        },
{
            title: `cardiac tamponade`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cardiac_tamponade.mp3`,
            explanation: `KAR-de-aktam-po-NADE`,
        },
{
            title: `cardioversion`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cardioversion.mp3`,
            explanation: `kar-de-o-VER-zhun`,
        },
{
            title: `catheter ablation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/catheter_ablation.mp3`,
            explanation: `KATH-eh-terab-LA-shun`,
        },
{
            title: `claudication`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/claudication.mp3`,
            explanation: `klaw-deh-KA-shun`,
        },
{
            title: `coarctation of the aorta`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/coarctation_of_the_aorta.mp3`,
            explanation: `ko-ark-TA-shunofthe a-OR-tah`,
        },
{
            title: `computed tomography angiography`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/computed_tomography_angiography.mp3`,
            explanation: `kom-PU-ted to-MOG-rah-fe an-je-OG-rah-fe`,
        },
{
            title: `congenital heart disease`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/congenital_heart_disease.mp3`,
            explanation: `kon-JEN-ih-talhart dih-ZEEZ`,
        },
{
            title: `congestive heart failure`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/congestive_heart_failure.mp3`,
            explanation: `kon-JES-tivhartFAIL-yur`,
        },
{
            title: `coronary artery bypass grafting`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/coronary_artery_bypass_grafting.mp3`,
            explanation: `KOR-o-nair-eAR-teh-re BI-pas GRAF-ting`,
        },
{
            title: `coronary artery disease`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/coronary_artery_disease.mp3`,
            explanation: `KOR-o-nair-eAR-teh-re dih-ZEEZ`,
        },
{
            title: `deep vein thrombosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/deep_vein_thrombosis.mp3`,
            explanation: `deepvaynthrom-BO-sis`,
        },
{
            title: `defibrillation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/defibrillation.mp3`,
            explanation: `de-fib-rih-LA-shun`,
        },
{
            title: `digital subtraction angiography`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/digital_subtraction_angiography.mp3`,
            explanation: `DIJ-ih-talsub-TRAK-shunan-je-OG-rah-fe`,
        },
{
            title: `digoxin`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/digoxin.mp3`,
            explanation: `dih-JOK-sin`,
        },
{
            title: `Doppler ultrasound`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/doppler_ultrasound.mp3`,
            explanation: `DOP-lerUL-trah-sound`,
        },
{
            title: `dysrhythmia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/dysrhythmia.mp3`,
            explanation: `dis-RITH-me-ah`,
        },
{
            title: `echocardiography`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/echocardiography.mp3`,
            explanation: `ek-o-kar-de-OG-rah-fe`,
        },
{
            title: `electrocardiography`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/electrocardiography.mp3`,
            explanation: `eh-lek-tro-kar-de-OG- rah-fe`,
        },
{
            title: `electron beam computed tomography`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/electron_beam_computed_tomography.mp3`,
            explanation: `eh-LEK-tronbeemkom-PU-tedto-MOG-rah-fe`,
        },
{
            title: `embolus; pl. emboli`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/embolus_emboli.mp3`,
            explanation: `EM-bo-lus;EM-bo-li`,
        },
{
            title: `endarterectomy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/endarterectomy.mp3`,
            explanation: `en-dar-ter-EK-to-me`,
        },
{
            title: `endocarditis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/endocarditis.mp3`,
            explanation: `en-do-kar-DI-tis`,
        },
{
            title: `extracorporeal circulation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/extracorporeal_circulation.mp3`,
            explanation: `eks-trah-kor-POR-e-alser-ku-LA-shun`,
        },
{
            title: `fibrillation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/fibrillation.mp3`,
            explanation: `fib-rih-LA-shun`,
        },
{
            title: `flutter`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/flutter.mp3`,
            explanation: `FLUH-ter`,
        },
{
            title: `heart block`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/heart_block.mp3`,
            explanation: `hartblok`,
        },
{
            title: `heart transplantation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/heart_transplantation.mp3`,
            explanation: `harttranz-plan-TA-shun`,
        },
{
            title: `hemorrhoids`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hemorrhoids.mp3`,
            explanation: `HEM-uh-roydz`,
        },
{
            title: `Holter monitoring`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/holter_monitoring.mp3`,
            explanation: `HOL-terMON-ih-teh-ring`,
        },
{
            title: `hypertension`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypertension.mp3`,
            explanation: `hi-per-TEN-shun`,
        },
{
            title: `hypertensive heart disease`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypertensive_heart_disease.mp3`,
            explanation: `hi-per-TEN-sivhartdih-ZEEZ`,
        },
{
            title: `implantable cardioverter defibrillator`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/implantable_cardioverter_defibrillator.mp3`,
            explanation: `im-PLANT-ah-bulkar-de-o-VER-ter de-FIB-rih-la-tor`,
        },
{
            title: `infarction`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/infarction.mp3`,
            explanation: `in-FARK-shun`,
        },
{
            title: `ischemia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ischemia.mp3`,
            explanation: `is-KE-me-ah`,
        },
{
            title: `left ventricular assist device`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/left_ventricular_assist_device.mp3`,
            explanation: `leftven-TRIH-ku-larah-SISTde-vise`,
        },
{
            title: `lipid tests`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/lipid_tests.mp3`,
            explanation: `LIH-pidtests`,
        },
{
            title: `lipoprotein electrophoresis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/lipoprotein_electrophoresis.mp3`,
            explanation: `li-po-PRO-teen eh-lek-tro-for-E-sis`,
        },
{
            title: `mitral stenosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/mitral_stenosis.mp3`,
            explanation: `MI-tralsteh-NO-sis`,
        },
{
            title: `mitral valve prolapse`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/mitral_valve_prolapse.mp3`,
            explanation: `MI-tralvalvPRO-laps`,
        },
{
            title: `murmur`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/murmur.mp3`,
            explanation: `MUR-mer`,
        },
{
            title: `myocardial infarction`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/myocardial_infarction.mp3`,
            explanation: `mi-o-KAR-de-alin-FARK-shun`,
        },
{
            title: `nitrates`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/nitrates.mp3`,
            explanation: `ni-TRAYTS`,
        },
{
            title: `nitroglycerin`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/nitroglycerin.mp3`,
            explanation: `ni-tro-GLIS-er-in`,
        },
{
            title: `occlusion`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/occlusion.mp3`,
            explanation: `o-KLU-zhun`,
        },
{
            title: `palpitations`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/palpitations.mp3`,
            explanation: `pal-pih-TA-shunz`,
        },
{
            title: `patent`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/patent.mp3`,
            explanation: `PA-tent`,
        },
{
            title: `patent ductus arteriosus`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/patent_ductus_arteriosus.mp3`,
            explanation: `PA-tent DUK-tusar-te-re-O-sus`,
        },
{
            title: `percutaneous coronary intervention`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/percutaneous_coronary_intervention.mp3`,
            explanation: `per-ku-TA-ne-usKOR-in-air-ein-ter-VEN-shun`,
        },
{
            title: `pericardial friction rub`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pericardial_friction_rub.mp3`,
            explanation: `peh-rih-KAR-de-alFRIK-shunrub`,
        },
{
            title: `pericarditis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pericarditis.mp3`,
            explanation: `peh-rih-kar-DI-tis`,
        },
{
            title: `peripheral arterial disease`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/peripheral_arterial_disease.mp3`,
            explanation: `peh-RIH-fer-alar-TE-re-al dih-ZEEZ`,
        },
{
            title: `petechiae`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/petechiae.mp3`,
            explanation: `peh-TE-ke-i`,
        },
{
            title: `positron emission tomography of the heart`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/positron_emission_tomography_of_the_heart.mp3`,
            explanation: `pos-ih-trone-MIH-shun to-MOG-rah-feofthe hart`,
        },
{
            title: `Raynaud disease`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/raynaud_disease.mp3`,
            explanation: `ra-NOdih-ZEEZ`,
        },
{
            title: `rheumatic heart disease`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/rheumatic_heart_disease.mp3`,
            explanation: `ru-MAT-ikhartdih-ZEEZ`,
        },
{
            title: `septal defects`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/septal_defects.mp3`,
            explanation: `SEP-talDE-fekts`,
        },
{
            title: `statins`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/statins.mp3`,
            explanation: `STAT-inz`,
        },
{
            title: `stress test`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/stress_test.mp3`,
            explanation: `STRESStest`,
        },
{
            title: `technetium Tc99m sestamibi scan`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/technetium_tc99m_sestamibi_scan.mp3`,
            explanation: `tek-NE-she-umTc99m ses-tah-MIH-beskan`,
        },
{
            title: `telemetry`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/telemetry.mp3`,
            explanation: `tel-EM-et-re`,
        },
{
            title: `tetralogy of Fallot`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/tetralogy_of_fallot.mp3`,
            explanation: `teh-TRAH-lo-jeoffah-LO`,
        },
{
            title: `thallium 201 scan`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thallium_201_scan.mp3`,
            explanation: `THAL-e-um201skan`,
        },
{
            title: `thrill`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thrill.mp3`,
            explanation: `thril`,
        },
{
            title: `thrombolytic therapy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thrombolytic_therapy.mp3`,
            explanation: `throm-bo-LIT-ikTHER-ah-pe`,
        },
{
            title: `thrombotic occlusion`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thrombotic_occlusion.mp3`,
            explanation: `throm-BOT-ik o-KLU-zhun`,
        },
{
            title: `transcatheter aortic valve replacement`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/transcatheter_aortic_valve_replacement.mp3`,
            explanation: `tranz-KATH-eh-ter a-OR-tikvalv re-PLAYS-ment`,
        },
{
            title: `varicose veins`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/varicose_veins.mp3`,
            explanation: `VAR-ih-kosvaynz`,
        },
{
            title: `vegetations`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/vegetations.mp3`,
            explanation: `vej-eh-TA-shunz`,
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
        "pulmonary artery",
        "inferior vena cava",
        "mitral valve",
        "left ventricle",
        "pulmonary valve",
        "superior vena cava",
        "left atrium",
        "right atrium",
        "right ventricle",
        "aorta",
        "tricuspid valve",
        "pulmonary veins",
        "aortic valve"
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "superior vena cava",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "inferior vena cava",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "right atrium",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "tricuspid valve",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "right ventricle",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pulmonary valve",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pulmonary artery",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pulmonary veins",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "left atrium",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "mitral valve",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "left ventricle",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "aortic valve",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "aorta",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
        "myocardium",
        "interventricular septum",
        "endocardium",
        "pericardium",
        "interatrial septum"
        
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "interatrial septum",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "interventricular septum",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "endocardium",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "myocardium",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pericardium",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
        "atrioventricular bundle or bundle of His",
        "sinoatrial node (SA node) or pacemaker",
        "right bundle branch",
        "atrioventricular node (AV node)",
        "left bundle branch"
        
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "sinoatrial node (SA node) or pacemaker",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "atrioventricular node (AV node)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "atrioventricular bundle or bundle of His",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "left bundle branch",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "right bundle branch",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
        "Protrusion of the wall of a lower heart chamber",
        "Cardiac tamponade (ﬂuid in the space surrounding the heart)",
        "Peripheral vascular disease",
        "Heart block",
        "Disabling angina and extensive coronary atherosclerosis despite medical therapy",
        "Atherosclerotic occlusion of a main artery leading to the head",
        "Congestive heart failure",
        "Varicose veins",
        "Congenital hole in the wall of the upper chamber of the heart",
        "Aortic stenosis"
        
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>coronary artery bypass grafting #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Disabling angina and extensive coronary atherosclerosis despite medical therapy",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>left carotid endarterectomy #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Atherosclerotic occlusion of a main artery leading to the head",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>sclerosing injections and laser treatment #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Varicose veins",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>LV aneurysmectomy #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Protrusion of the wall of a lower heart chamber",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>atrial septal defect repair #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Congenital hole in the wall of the upper chamber of the heart",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>left ventricular assist device #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Congestive heart failure",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>pericardiocentesis #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Cardiac tamponade (ﬂuid in the space surrounding the heart)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>aortic valve replacement #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Aortic stenosis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>pacemaker implantation #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Heart block",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>femoral-popliteal bypass grafting #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Peripheral vascular disease",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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

    group10: {
      id: "group10",
      type: "dropdown",
      placeholder_id: "group10_placeholder",
      commonDropdownOptions:[
        "inferior vena cava",
        "tricuspid valve",
        "superior vena cava",
        "atrium",
        "venule",
        "capillary",
        "ventricle",
        "arteriole",
        "aorta",
        "pulmonary artery",
        "mitral valve",
        "pulmonary vein"
        
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>valve that lies between the right atrium and the right ventricle #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "tricuspid valve",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },

        {
          headerImage:{},
          dropdownHtml:`<span>smallest blood vessel #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "capillary",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>carries oxygenated blood from the lungs to the heart #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pulmonary vein",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>largest artery in the body #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "aorta",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>brings oxygen-poor blood into the heart from the upper parts of the body #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "superior vena cava",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>upper chamber of the heart #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "atrium",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>carries oxygen-poor blood to the lungs from the heart #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pulmonary artery",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>small artery #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "arteriole",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>valve that lies between the left atrium and the left ventricle #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "mitral valve",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>brings blood from the lower half of the body to the heart #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "inferior vena cava",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>small vein #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "venule",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>lower chamber of the heart #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ventricle",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
        "congestive heart failure",
        "fibrillation",
        "coronary artery disease",
        "hypertensive heart disease",
        "atrial septal defect",
        "pericarditis",
        "patent ductus arteriosus",
        "flutter",
        "tetralogy of Fallot",
        "coarctation of the aorta",
        "endocarditis",
        "mitral valve prolapse"
        
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>inflammation of the inner lining of the heart #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "endocarditis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },

        {
          headerImage:{},
          dropdownHtml:`<span>rapid but regular atrial or ventricular contractions #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "flutter",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>small hole between the upper heart chambers; congenital anomaly #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "atrial septal defect",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>improper closure of the valve between the left atrium and ventricle during systole #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "mitral valve prolapse",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>blockage of the arteries surrounding the heart leading to ischemia #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "coronary artery disease",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>high blood pressure affecting the heart #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "hypertensive heart disease",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>rapid, random, ineffectual, and irregular contractions of the heart #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "fibrillation",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>inflammation of the sac surrounding the heart #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pericarditis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>inability of the heart to pump its required amount of blood #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "congestive heart failure",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>congenital malformation involving four separate heart defects #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "tetralogy of Fallot",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>congenital narrowing of the large artery leading from the heart #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "coarctation of the aorta",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>a duct between the aorta and the pulmonary artery, which normally closes soon after birth, remains open #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "patent ductus arteriosus",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
        "secondary hypertension",
        "vegetations",
        "peripheral arterial disease",
        "rheumatic heart disease",
        "emboli",
        "Raynaud disease",
        "auscultation",
        "claudication",
        "petechiae",
        "murmur",
        "aneurysm",
        "essential hypertension"
        
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>lesions that form on heart valves after damage by infection #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "vegetations",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },

        {
          headerImage:{},
          dropdownHtml:`<span>clots that travel to and suddenly block a blood vessel #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "emboli",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>small, pinpoint hemorrhages #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "petechiae",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>an extra heart sound, heard between normal beats and caused by a valvular defect or condition that disrupts the smooth flow of blood through the heart #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "murmur",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>listening with a stethoscope #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "auscultation",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>heart disease caused by rheumatic fever #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "rheumatic heart disease",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>high blood pressure in arteries when the etiology is idiopathic #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "essential hypertension",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>high blood pressure related to kidney disease #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "secondary hypertension",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>episodes of pallor, numbness, and cyanosis in fingers and toes caused by a temporary  constriction of arterioles #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Raynaud disease",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>local widening of an artery #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "aneurysm",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>pain, tension, and weakness in a limb after walking has begun #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "claudication",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>blockage of arteries in the lower extremities; etiology is atherosclerosis #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "peripheral arterial disease",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
        "stress test",
        "lipid tests (profile)",
        "angiography",
        "endarterectomy",
        "thallium 201 scan",
        "defibrillation",
        "electrocardiography",
        "cardiac biomarkers",
        "cardiac MRI",
        "echocardiography",
        "coronary artery bypass grafting",
        "lipoprotein electrophoresis"
        
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>surgical removal of plaque from the inner lining of an artery #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "endarterectomy",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },

        {
          headerImage:{},
          dropdownHtml:`<span>application of brief electrical discharges across the chest to stop ventricular fibrillation and pulseless ventricular tachycardia #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "defibrillation",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>measurement of levels of fatty substances (cholesterol and triglycerides) in the bloodstream #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "lipid tests (profile)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>measurement of the heart ’ s response to physical exertion (patient monitored while jogging on a treadmill) #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "stress test",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>measurement of troponin-T and troponin-I after myocardial infarction #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "cardiac biomarkers",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>injection of contrast into vessels and x-ray imaging #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "angiography",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>recording of the electricity in the heart #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "electrocardiography",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>intravenous injection of a radioactive substance and measurement of its accumulation in heart muscle #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thallium 201 scan",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>use of echoes from high-frequency sound waves to produce images of the heart #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "echocardiography",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>separation of HDL and LDL from a blood sample #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "lipoprotein electrophoresis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>anastomosis of vessel grafts to existing coronary arteries to maintain blood supply to the myocardium #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "coronary artery bypass grafting",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>beaming of magnetic waves at the heart to produce images of its structure #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "cardiac MRI",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
        "LDL",
        "cTnI or cTnT",
        "CRT",
        "ECMO",
        "RFA",
        "ETT",
        "ICD",
        "BNP",
        "ECHO",
        "ETT-MIBI",
        "LVAD",
        "TEE"
        
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>cardiac serum enzyme test for myocardial infarction #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "cTnI or cTnT",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },

        {
          headerImage:{},
          dropdownHtml:`<span>booster pump implanted in the abdomen with a cannula leading to the heart as a “bridge to transplant” #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "LVAD",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>ultrasound imaging of the heart using transducer within the esophagus #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "TEE",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>device implanted in the chest that senses and corrects arrhythmias by shocking the heart #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ICD",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>catheter delivery of a high-frequency current to damage a small portion of the heart muscle and reverse an abnormal heart rhythm #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "RFA",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>procedure to determine the heart ’ s response to physical exertion (stress) #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ETT",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>cardiac imaging using high-frequency sound waves pulsed through the chest wall and bounced off heart structures #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ECHO",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>radioactive test of heart function with stress test #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ETT-MIBI",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>technique using heart-lung machine to divert blood from the heart and lungs while the heart is being repaired #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ECMO",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>biventricular pacing to correct serious abnormal ventricular rhythms #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "CRT",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>lipoprotein sample is measured #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "LDL",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>brain chemical measured to identify patients at risk for complications after MI and with CHF #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "BNP",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
        "aneurysmorrhaphy",
        "embolectomy",
        "catheter ablation",
        "atherectomy",
        "BNP test",
        "pericardiocentesis",
        "CABG",
        "endarterectomy",
        "valvotomy",
        "STEMI",
        "PCI",
        "thrombolytic therapy"
        
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>incision of a heart valve #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "valvotomy", dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },

       {
          headerImage:{},
          dropdownHtml:`<span>removal of a clot that has traveled into a blood vessel and suddenly caused occlusion #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "embolectomy", dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>coronary artery bypass grafting (to relieve ischemia) #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "CABG", dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>surgical puncture to remove fluid from the pericardial space #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pericardiocentesis", dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>insertion of a balloon-tipped catheter and stents into a coronary artery #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "PCI", dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>removal of the inner lining of an artery to make it wider #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "endarterectomy", dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>suture (repair) of a ballooned-out portion of an artery #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "aneurysmorrhaphy", dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>removal of plaque from an artery #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "atherectomy", dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>type of acute coronary syndrome #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "STEMI", dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>use of streptokinase and tPA to dissolve clots #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thrombolytic therapy", dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>brief delivery of radiofrequency energy to destroy areas of heart tissue for treating arrhythmias #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "catheter ablation", dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>measures a peptide elevated in patients with heart failure #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "BNP test", dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
      commonDropdownOptions:[],
      items: [
        { 
          
          dropdownHtml:`<span>Bill was having pain in his chest that radiated up his neck and down his arm. He called his family physician, who thought Bill should report to the local hospital’s emergency department (ED) immediately. The first test performed in the ED was a/an #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["stress test","ECG","CABG"],correctValue: "ECG",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Dr. Kelly explained to the family that their observation of the bluish color of baby Charles’s skin helped her make the diagnosis of a/an #dropdown1# defect in the baby ’s heart, which needed immediate attention.</span>`,
          dropdowns:{
            dropdown1:{values:["septal","thrombotic","aneurysmal"],correctValue: "septal",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Mr. Duggan had a fever of unknown origin. When the doctors completed an echocardiogram and saw vegetations on his mitral valve, they suspected #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["hypertensive heart disease","angina","bacterial endocarditis"],correctValue: "bacterial endocarditis",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Claudia’s fingers turned white or bluish whenever she went out into the cold or became stressed. Her physician thought it might be wise to evaluate her for #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["Raynaud’s","varicose veins","intermittent claudication"],correctValue: "Raynaud’s",dropdownlabel:"Select the type of view", useCommonOptions:"false"},

          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Daisy’s heart felt as if it was skipping beats every time she drank coffee. Her physician suggested that she wear a/an #dropdown1# for 24 hours to assess the nature of the arrhythmia.</span>`,
          dropdowns:{
            dropdown1:{values:["LVAD","CABG","Holter monitor"],correctValue: "Holter monitor",dropdownlabel:"Select the type of view", useCommonOptions:"false"},

          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Paola’s father and grandfather died of heart attacks. Her physician tells her that she has inherited a tendency to accumulate fats in her bloodstream. Blood tests reveal high levels of #dropdown1# . Discussing her family history with her Fill-in blank 7 #dropdown2# , she understands that she has familial #dropdown3# .</span>`,
          dropdowns:{
            dropdown1:{values:["enzymes","nitroglycerin","lipids"],correctValue: "lipids",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["hematologist","cardiologist", "gynecologist"],correctValue: "cardiologist",dropdownlabel:"Select the position of the heart", useCommonOptions:"false"},
            dropdown3:{values:["hypercholesterolemia","hypocholesterolemia", "cardiomyopathy"],correctValue: "hypercholesterolemia",dropdownlabel:"Select the position of the heart", useCommonOptions:"false"}
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>While exercising, Bernard experienced a pain (cramp) in his calf muscle. The pain disappeared when he was resting. After performing #dropdown1# on his leg to assess blood flow, Dr. Shaw found #dropdown2# , indicating poor circulation. She recommended a daily exercise program, low-fat diet, careful foot care, and antiplatelet drug therapy to treat Bernard’s intermittent #dropdown3# .</span>`,
          dropdowns:{
            dropdown1:{values:["echocardiography","Holter monitoring","Doppler ultrasound"],correctValue: "Doppler ultrasound",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["fibrillation","stenosis", "endocarditis"],correctValue: "stenosis",dropdownlabel:"Select the position of the heart", useCommonOptions:"false"},
            dropdown3:{values:["claudication","hypertension", "palpitations"],correctValue: "claudication",dropdownlabel:"Select the position of the heart", useCommonOptions:"false"}
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Carol noticed that her 6-week-old son Louis had a slightly bluish or #dropdown1# coloration to his skin. She consulted a pediatric #dropdown2# , who performed #dropdown3# and diagnosed Louis’s condition as #dropdown4# .</span>`,
          dropdowns:{
            dropdown1:{values:["cyanotic","jaundiced","diastolic"],correctValue: "cyanotic",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["cardiologist","dermatologist", "hematologist"],correctValue: "cardiologist",dropdownlabel:"Select the position of the heart", useCommonOptions:"false"},
            dropdown3:{values:["endarterectomy","PET scan", "echocardiography"],correctValue: "echocardiography",dropdownlabel:"Select the position of the heart", useCommonOptions:"false"},
            dropdown4:{values:["tetralogy of Fallot","endocarditis", "congestive heart disease"],correctValue: "tetralogy of Fallot",dropdownlabel:"Select the position of the heart", useCommonOptions:"false"}
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Seventy-eight-year-old John Smith has had coronary artery disease and high blood pressure for the past 10 years. His history included an acute heart attack, or #dropdown1# . He often was tired and complained of #dropdown2# and swelling in his ankles. His physician diagnosed his condition as #dropdown3# and recommended restricted salt intake, diuretics, and an #dropdown4# .</span>`,
          dropdowns:{
            dropdown1:{values:["PDA","MI","CABG"],correctValue: "MI",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["nausea","dyspnea", "migraine headaches"],correctValue: "dyspnea",dropdownlabel:"Select the position of the heart", useCommonOptions:"false"},
            dropdown3:{values:["congestive heart failure","congenital heart disease", "aortic aneurysm"],correctValue: "congestive heart failure",dropdownlabel:"Select the position of the heart", useCommonOptions:"false"},
            dropdown4:{values:["analgesic","antibiotic", "ACE inhibitor"],correctValue: "ACE inhibitor",dropdownlabel:"Select the position of the heart", useCommonOptions:"false"}
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Sarah had a routine checkup that included #dropdown1# of her chest with a #dropdown2# to listen to her heart. Her physician noticed a midsystolic murmur characteristic of #dropdown3# . An echocardiogram confirmed the diagnosis.</span>`,
          dropdowns:{
            dropdown1:{values:["vasoconstriction","auscultation","vasodilation"],correctValue: "auscultation",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["stethoscope","stent", "catheter"],correctValue: "stethoscope",dropdownlabel:"Select the position of the heart", useCommonOptions:"false"},
            dropdown3:{values:["LDL","MVP", "DVT"],correctValue: "MVP",dropdownlabel:"Select the position of the heart", useCommonOptions:"false"}
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        }
        

      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
    group17: {
      id: "group17",
      type: "dropdown",
      placeholder_id: "group17_placeholder",
      commonDropdownOptions:[
        "lung capillaries",
        "left atrium",
        "aorta",
        "inferior vena cava",
        "left ventricle",
        "tricuspid valve",
        "pulmonary vein",
        "mitral valve",
        "right ventricle",
        "right atrium",
        "pulmonary artery",
        "superior vena cava"
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "superior vena cava",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "inferior vena cava",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "right atrium",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "tricuspid valve",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "right ventricle",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pulmonary artery",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "lung capillaries",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pulmonary vein",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "left atrium",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "mitral valve",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "left ventricle",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>#dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "aorta",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group18_placeholder",
      items: [
        {
          
          headerImage:{},            
          
          clozeHtml:`<span> #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "right atrium", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span> #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "tricuspid valve", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span> #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "right ventricle", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span> #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "pulmonary valve", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span> #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "pulmonary artery", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span> #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "capillaries of the lung", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span> #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "pulmonary veins", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span> #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "left atrium", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span> #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "mitral valve", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span> #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "left ventricle", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span> #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "aortic valve", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span> #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "aorta", clozelabel:"fill in the blank"},
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

    group19: {
      id: "group19",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group19_placeholder",
      items: [
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>The pacemaker of the heart is the #cloze1# .</span>`,
          clozes:{
            cloze1:{correctValue: " sinoatrial (SA) node", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>The sac-like membrane surrounding the heart is the #cloze1# .</span>`,
          clozes:{
            cloze1:{correctValue: "pericardium", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>The wall of the heart between the right and the left atria is the #cloze1# .</span>`,
          clozes:{
            cloze1:{correctValue: "interatrial septum", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>The relaxation phase of the heartbeat is called #cloze1# .</span>`,
          clozes:{
            cloze1:{correctValue: "diastole", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>Specialized conductive tissue in the wall between the ventricles is the #cloze1# .</span>`,
          clozes:{
            cloze1:{correctValue: "atrioventricular bundle or bundle of His", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>The inner lining of the heart is the #cloze1# .</span>`,
          clozes:{
            cloze1:{correctValue: "endocardium", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>The contractive phase of the heartbeat is called #cloze1# .</span>`,
          clozes:{
            cloze1:{correctValue: "systole", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>A gas released as a metabolic product of catabolism is #cloze1# .</span>`,
          clozes:{
            cloze1:{correctValue: "carbon dioxide (CO2)", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>Specialized conductive tissue at the base of the wall between the two upper heart chambers is the #cloze1# .</span>`,
          clozes:{
            cloze1:{correctValue: "atrioventricular (AV) node", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>The inner lining of the pericardium, closely enveloping the heart, is the #cloze1# .</span>`,
          clozes:{
            cloze1:{correctValue: "visceral pericardium (the outer lining is the parietal pericardium)", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>An abnormal heart sound due to improper closure of heart valves is a  #cloze1# .</span>`,
          clozes:{
            cloze1:{correctValue: "murmur", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>The beat of the heart as felt through the walls of arteries is called the #cloze1# .</span>`,
          clozes:{
            cloze1:{correctValue: "pulse", clozelabel:"fill in the blank"},
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
          
          clozeHtml:`<span>hardening of arteries: arterio  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "sclerosis", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>disease condition of heart muscle: cardio  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "myopathy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>enlargement of the heart: cardio  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "megaly", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>inflammation of a vein: phleb  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "itis", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>condition of rapid heartbeat:  #cloze1# cardia</span>`,
          clozes:{
            cloze1:{correctValue: "tachy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>condition of slow heartbeat: #cloze1# cardia</span>`,
          clozes:{
            cloze1:{correctValue: "brady", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>high levels of cholesterol in the blood: hyper #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "cholesterolemia", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>surgical repair of a valve: valvulo #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "plasty", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>condition of daeficient oxygen: hyp #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "oxia", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>pertaining to an upper heart chamber: #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "atrial", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>narrowing of the mitral valve: mitral #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "stenosis", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>breakdown of a clot: thrombo #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "lysis", clozelabel:"fill in the blank"},
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
          
          clozeHtml:`<span>AF #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "atrial fibrillation", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>VT  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "ventricular tachycardia", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>VF  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "ventricular fibrillation", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>PVC  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "premature ventricular contraction", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>PAC  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "premature atrial contraction", clozelabel:"fill in the blank"},
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
          
          clozeHtml:`<span>CHF #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "congestive heart failure", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>VSD  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "ventricular septal defect", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>MI  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "myocardial infarction", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>PDA  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "patent ductus arteriosus", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>MVP  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "mitral valve prolapse", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>AS  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "aortic stenosis", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>CAD  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "coronary artery disease", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>ASD  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "atrial septal defect", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>HFrEF  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "heart failure reduced ejection fraction", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>DVT  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "deep vein thrombosis", clozelabel:"fill in the blank"},
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
          
          clozeHtml:`<span>pertaining to the heart:  #cloze1# ary</span>`,
          clozes:{
            cloze1:{correctValue: "coron", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>not a normal heart rhythm: arr  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "hythmia", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>abnormal condition of blueness:  #cloze1# osis</span>`,
          clozes:{
            cloze1:{correctValue: "cyan", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>relaxation phase of the heartbeat:  #cloze1# tole</span>`,
          clozes:{
            cloze1:{correctValue: "dias", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>chest pain:  #cloze1# pectoris</span>`,
          clozes:{
            cloze1:{correctValue: "angina", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>inflammation of a vein:  #cloze1# itis</span>`,
          clozes:{
            cloze1:{correctValue: "phleb", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>widening of a vessel: vaso  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "dilation", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>enlargement of the heart: cardio  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "megaly", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>hardening of arteries with fatty plaque:  #cloze1# sclerosis</span>`,
          clozes:{
            cloze1:{correctValue: "athero", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>swollen veins in the rectal region:  #cloze1# oids</span>`,
          clozes:{
            cloze1:{correctValue: "hemorrh", clozelabel:"fill in the blank"},
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
      type: "reflective_writing", //Short Answers
      placeholder_id: "group24_placeholder",
      items: [
        
        {
          title: `cyanosis`,
          feedback: `<span>bluish discoloration of the skin owing to deficient oxygen in the blood</span>`,
        },
        {
          title: `phlebotomy`,
          feedback: `<span>incision of a vein</span>`,
        },
        {
          title: `arterial anastomosis`,
          feedback: `<span>new connection between arteries</span>`,
        },
        {
          title: `cardiogenic shock`,
          feedback: `<span>circulatory failure due to poor heart function</span>`,
        },
        {
          title: `atheroma`,
          feedback: `<span>mass of yellowish plaque (fatty substance)</span>`,
        },
        {
          title: `arrhythmia`,
          feedback: `<span>abnormal heart rhythm</span>`,
        },
        {
          title: `sphygmomanometer`,
          feedback: `<span>instrument to measure blood pressure</span>`,
        },
        {
          title: `stethoscope`,
          feedback: `<span>instrument to listen to sounds within the chest</span>`,
        },
        {
          title: `mitral valvulitis`,
          feedback: `<span>inflammation of the mitral valve</span>`,
        },
        {
          title: `atherosclerosis`,
          feedback: `<span>hardening of arteries with a yellowish, fatty substance (plaque)</span>`,
        },
        {
          title: `vasoconstriction`,
          feedback: `<span>narrowing of a vessel</span>`,
        },
        {
          title: `vasodilation`,
          feedback: `<span>widening of a vessel</span>`,
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
          title: `heart block`,
          feedback: `<span>failure of proper conduction of impulses through the AV node to the atrioventricular bundle (bundle of His)</span>`,
        },
        {
          title: `cardiac arrest`,
          feedback: `<span>sudden unexpected stoppage of heart action</span>`,
        },
        {
          title: `palpitations`,
          feedback: `<span>uncomfortable sensations in the chest associated with arrhythmias</span>`,
        },
        {
          title: `artificial cardiac pacemaker`,
          feedback: `<span>battery-operated device that is placed in the chest and wired to send electrical current to the heart to establish a normal sinus rhythm</span>`,
        },
        {
          title: `thrombotic occlusion`,
          feedback: `<span>blockage of a vessel by a clot</span>`,
        },
        {
          title: `angina`,
          feedback: `<span>chest pain resulting from insufficient oxygen being supplied to the heart muscle (ischemia)</span>`,
        },
        {
          title: `myocardial infarction`,
          feedback: `<span>area of necrosis (tissue death in the heart muscle; heart attack)</span>`,
        },
        {
          title: `necrosis`,
          feedback: `<span>abnormal condition of death (dead tissue)</span>`,
        },
        {
          title: `infarction`,
          feedback: `<span>damage or death of tissue due to deprivation of oxygen</span>`,
        },
        {
          title: `ischemia`,
          feedback: `<span>blood is held back from an area of the body</span>`,
        },
        {
          title: `nitroglycerin`,
          feedback: `<span>nitrate drug used in the treatment of angina</span>`,
        },
        {
          title: `digoxin`,
          feedback: `<span>drug that treats arrhythmias and strengthens the heartbeat</span>`,
        },
        {
          title: `bruit`,
          feedback: `<span>abnormal sound (murmur) heard on auscultation</span>`,
        },
        {
          title: `thrill`,
          feedback: `<span>vibration felt on palpation of the chest</span>`,
        },
        {
          title: `acute coronary syndromes`,
          feedback: `<span>consequences of plaque rupture in coronary arteries; MI and unstable angina</span>`,
        },
        {
          title: `pericardial friction rub`,
          feedback: `<span>scraping or grating noise on auscultation of heart; indicates pericarditis</span>`,
        },
        {
          title: `deep vein thrombosis`,
          feedback: `<span>clot formation in a large vein, usually in lower limb</span>`,
        },
        {
          title: `biventricular pacemaker`,
          feedback: `<span>device enabling ventricles to beat in synchrony; cardiac resynchronization therapy</span>`,
        },
       
        
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },

    group26: {
      id: "group26",
      type: "reflective_writing", //Short Answers
      placeholder_id: "group26_placeholder",
      items: [
        
        {
          title: `Types of drugs used to treat acute coronary syndromes include`,
          feedback: `<span>beta blockers, ACE inhibitors, statins, aspirin, calcium channel blockers</span>`,
        },
        {
          title: `When damaged valves in veins fail to prevent the backflow of blood, a condition (swollen, twisted vein) that results is`,
          feedback: `<span>varicose veins</span>`,
        },
        {
          title: `Swollen, twisted veins in the rectal region are called`,
          feedback: `<span>hemorrhoids</span>`,
        },
        {
          title: `Name the four defects in tetralogy of Fallot from their descriptions:<br/> narrowing of the artery leading to the lungs from the heart`,
          feedback: `<span>pulmonary artery stenosis</span>`,
        },

        {
          title: `gap in the wall between the ventricles`,
          feedback: `<span>ventricular septal defect</span>`,
        },
        {
          title: `the large vessel leading from the left ventricle moves over the interventricular septum`,
          feedback: `<span>shift of the aorta to the right</span>`,
        },
        {
          title: `excessive development of the wall of the right lower heart ch`,
          feedback: `<span>hypertrophy of the right ventricle</span>`,
        },
       
        
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },

    group27: {
      id: "group27",
      type: "reflective_writing", //Short Answers
      placeholder_id: "group27_placeholder",
      items: [
        
        {
          title: `digital subtraction angiography `,
          feedback: `<span>Video equipment and a computer produce x-ray pictures of blood vessels by taking two pictures (without and with contrast) and subtracting the first image (without contrast) from the second.</span>`,
        },
        {
          title: `heart transplantation `,
          feedback: `<span>A donor heart is transferred to a recipient.</span>`,
        },
        {
          title: `ETT-MIBI `,
          feedback: `<span>Exercise tolerance test combined with a radioactive tracer scan.</span>`,
        },
        {
          title: `Doppler ultrasound `,
          feedback: `<span>An instrument that focuses sound waves on a blood vessel to measure blood flow.</span>`,
        },
        {
          title: `Holter monitoring `,
          feedback: `<span>A compact version of an electrocardiograph is worn during a 24-hour period to detect cardiac arrhythmias.</span>`,
        },
        {
          title: `thrombolytic therapy`,
          feedback: `<span>Treatment with drugs (streptokinase and tPA) to dissolve clots after a heart attack.</span>`,
        },
        {
          title: `extracorporeal circulation `,
          feedback: `<span>A heart-lung machine is used to divert blood from the heart and lungs during surgery. The machine oxygenates the blood and sends it back into the bloodstream.</span>`,
        },
        {
          title: `cardiac catheterization`,
          feedback: `<span>A catheter (tube) is inserted into an artery or vein and threaded into the heart chambers. Contrast can be injected to take x-ray pictures, patterns of blood flow can be detected, and blood pressures can be measured.</span>`,
        },
        {
          title: `percutaneous coronary intervention `,
          feedback: `<span>A balloon-tipped catheter is inserted into a coronary artery to open the artery; stents are put in place.</span>`,
        },
        {
          title: `drug-eluting stent`,
          feedback: `<span>Stents are expandable slotted tubes that are placed in arteries during PCI. They release polymers that prevent plaque from reforming.</span>`,
        },
        {
          title: `electron beam computed tomography `,
          feedback: `<span>Electron beams and CT identify calcium deposits in and around coronary arteries to diagnose CAD.</span>`,
        },
        {
          title: `CT angiography `,
          feedback: `<span>X-ray images of the heart and coronary arteries obtained using CT technology.</span>`,
        }
       
        
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },

    group51: {
      id: "group51",
      type: "dropdown",
      placeholder_id: "group51_placeholder",
      commonDropdownOptions:[
        "angina",
        "bruit",
        "digoxin",
        "nitroglycerin",
        "palpitations",
        "pericardial friction rub",
        "thrill"
       
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>A nitrate drug used in the treatment of chest pain  #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "nitroglycerin",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Uncomfortable sensations in the chest; associated with arrhythmias  #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "palpitations",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Vibration felt on physical examination of the chest  #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thrill",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Abnormal sound (murmur) heard on auscultation  #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "bruit",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>A drug that treats arrhythmias and strengthens the heartbeat  #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "digoxin",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Scraping or grating noise heard through a stethoscope  #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "pericardial friction rub",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Chest pain resulting from ischemia #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "angina",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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

    group52: {
      id: "group52",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group52_placeholder",
      items: [
        {
          headerImage:{},
          clozeHtml:`<span>Failure of proper conduction of impulses through the AV node to the atrioventricular bundle is heart #cloze1# .</span>`,
          clozes:{
            cloze1:{correctValue: "block", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>Sudden unexpected stoppage of heart action is called cardiac  #cloze1# .</span>`,
          clozes:{
            cloze1:{correctValue: "arrest", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>A heart attack is also known as a myocardial  #cloze1# .</span>`,
          clozes:{
            cloze1:{correctValue: "infarction", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>Blockage of a vessel by a clot is a thrombotic  #cloze1# .</span>`,
          clozes:{
            cloze1:{correctValue: "occulsion", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>Plaque rupture in coronary arteries, MI, and unstable angina are all acute coronary  #cloze1# .</span>`,
          clozes:{
            cloze1:{correctValue: "syndromes", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          headerImage:{},
          clozeHtml:`<span>A device enabling ventricles to beat in synchrony is a biventricular #cloze1# .</span>`,
          clozes:{
            cloze1:{correctValue: "pacemaker", clozelabel:"fill in the blank"},
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


  },
};