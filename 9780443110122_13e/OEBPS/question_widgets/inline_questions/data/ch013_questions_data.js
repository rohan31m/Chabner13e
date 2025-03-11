const questions_data = {
    sharedProperties: {
        maxWidth: "960px", //"100%", "90%", "760px", "1024px"
        alignment: "center", //"center", "left"
    },
    question_groups: {
        group1: {
            id: "group1",
            type: "accordian",
            placeholder_id: "ch13group1_placeholder",
            items: [
                {
                    title: `bas/o`,
                    explanation: `base (alkaline)`,
                },
                {
                    title: `chrom/o`,
                    explanation: `color`,
                },
                {
                    title: `coagul/o`,
                    explanation: `clotting`,
                },
                {
                    title: `cyt/o`,
                    explanation: `cell`,
                },
                {
                    title: `eosin/o`,
                    explanation: `red, dawn, rosy`,
                },
                {
                    title: `erythr/o`,
                    explanation: `red`,
                },
                {
                    title: `fibrin/o`,
                    explanation: `fiber`,
                },
                {
                    title: `granul/o`,
                    explanation: `granules`,
                },
                {
                    title: `hem/o`,
                    explanation: `blood`,
                },
                {
                    title: `hemat/o`,
                    explanation: `blood`,
                },
                {
                    title: `hemoglobin/o`,
                    explanation: `hemoglobin`,
                },
                {
                    title: `is/o`,
                    explanation: `same, equal`,
                },
                {
                    title: `leuk/o`,
                    explanation: `white`,
                },
                {
                    title: `kary/o`,
                    explanation: `nucleus`,
                },
                {
                    title: `mon/o`,
                    explanation: `one, single`,
                },
                {
                    title: `morph/o`,
                    explanation: `shape, form`,
                },
                {
                    title: `myel/o`,
                    explanation: `bone marrow`,
                },
                {
                    title: `neutr/o`,
                    explanation: `neutral (neither base nor acid)`,
                },
                {
                    title: `nucle/o`,
                    explanation: `nucleus`,
                },
                {
                    title: `phag/o`,
                    explanation: `eat, swallow`,
                },
                {
                    title: `poikil/o`,
                    explanation: `varied, irregular`,
                },
                {
                    title: `sider/o`,
                    explanation: `iron`,
                },
                {
                    title: `spher/o`,
                    explanation: `globe, round`,
                },
                {
                    title: `thromb/o`,
                    explanation: `clot`,
                },
            ],
            titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
            itemSeperator: "false",
        },
        group2: {
            id: "group2",
            type: "accordian",
            placeholder_id: "ch13group2_placeholder",
            items: [
                {
                    title: `-apheresis`,
                    explanation: `removal and carrying away`,
                },
                {
                    title: `-blast`,
                    explanation: `immature cell, embryonic`,
                },
                {
                    title: `-cytosis`,
                    explanation: `abnormal condition in cells (increase in cells)`,
                },
                {
                    title: `-emia`,
                    explanation: `blood condition`,
                },
                {
                    title: `-gen`,
                    explanation: `giving rise to`,
                },
                {
                    title: `-globin`,
                    explanation: `protein`,
                },
                {
                    title: `-globulin`,
                    explanation: `protein`,
                },
                {
                    title: `-lytic`,
                    explanation: `pertaining to destruction`,
                },
                {
                    title: `-oid`,
                    explanation: `derived from or originating from`,
                },
                {
                    title: `-osis`,
                    explanation: `abnormal condition`,
                },
                {
                    title: `-penia`,
                    explanation: `deficiency`,
                },
                {
                    title: `-phage`,
                    explanation: `eat, swallow`,
                },
                {
                    title: `-philia`,
                    explanation: `attraction for (increase in cell numbers)`,
                },

                {
                    title: `-phoresis`,
                    explanation: `carrying, transmission`,
                },
                {
                    title: `-plasia`,
                    explanation: `development; formation; growth`,
                },
                {
                    title: `-poiesis`,
                    explanation: `formation`,
                },
                {
                    title: `-stasis`,
                    explanation: `stop, control`,
                },
            ],
            titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
            itemSeperator: "false",
        },
        group3: {
            id: "group3",
            type: "accordian",
            placeholder_id: "ch13group3_placeholder",
            items: [
                {
                    title: `a-, an-`,
                    explanation: `no; not; without`,
                },
                {
                    title: `anti-`,
                    explanation: `against`,
                },
                {
                    title: `hypo-`,
                    explanation: `deficient, under`,
                },
                {
                    title: `macro-`,
                    explanation: `large`,
                },
                {
                    title: `mega-`,
                    explanation: `large`,
                },
                {
                    title: `micro-`,
                    explanation: `small`,
                },
                {
                    title: `mono-`,
                    explanation: `one; single`,
                },
                {
                    title: `pan-`,
                    explanation: `all`,
                },
                {
                    title: `poly-`,
                    explanation: `many; much`,
                },
            ],
            optionStyleType: "st-decimal",
            itemSeperator: "false",
        },
        group4: {
            id: "group4",
            type: "accordian",
            placeholder_id: "ch13group4_placeholder",
            items: [
        {
            title: `albumin`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/albumin.mp3`,
            explanation: `al-BU-min`,
        },
        {
            title: `anisocytosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/anisocytosis.mp3`,
            explanation: `an-i-so-si-TO-sis`,
        },
        {
            title: `antibody`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antibody.mp3`,
            explanation: `AN-tih-bod-e`,
        },
        {
            title: `anticoagulant`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/anticoagulant.mp3`,
            explanation: `an-tih-ko-AG-u-lant`,
        },
        {
            title: `antigen`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antigen.mp3`,
            explanation: `AN-tih-jen`,
        },
        {
            title: `basophil`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/basophil.mp3`,
            explanation: `BA-so-fil`,
        },
        {
            title: `bilirubin`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/bilirubin.mp3`,
            explanation: `bil-ih-RU-bin`,
        },
        {
            title: `coagulation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/coagulation.mp3`,
            explanation: `ko-ag-u-LA-shun`,
        },
        {
            title: `coagulopathy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/coagulopathy.mp3`,
            explanation: `ko-ag-u-LOP-ah-the`,
        },
        {
            title: `colony-stimulating factor`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/colony-stimulating_factor.mp3`,
            explanation: `KOL-o-neSTIM-u-la-tingFAK-tor`,
        },
        {
            title: `cytology`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cytology.mp3`,
            explanation: `si-TOL-o-je`,
        },
        {
            title: `differentiation`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/differentiation.mp3`,
            explanation: `dif-er-en-she-A-shun`,
        },
        {
            title: `electrophoresis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/electrophoresis.mp3`,
            explanation: `eh-lek-tro-fo-RE-sis`,
        },
        {
            title: `eosinophil`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/eosinophil.mp3`,
            explanation: `e-o-SIH-no-fil`,
        },
        {
            title: `eosinophilia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/eosinophilia.mp3`,
            explanation: `e-o-sih-no-FIL-e-ah`,
        },
        {
            title: `erythroblast`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/erythroblast.mp3`,
            explanation: `eh-RITH-ro-blast`,
        },
        {
            title: `erythrocyte`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/erythrocyte.mp3`,
            explanation: `eh-RITH-ro-site`,
        },
        {
            title: `erythropoiesis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/erythropoiesis.mp3`,
            explanation: `eh-rith-ro-poy-E-sis`,
        },
        {
            title: `erythropoietin`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/erythropoietin.mp3`,
            explanation: `eh-rith-ro-PO-eh-tin`,
        },
        {
            title: `fibrin`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/fibrin.mp3`,
            explanation: `FI-brin`,
        },
        {
            title: `fibrinogen`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/fibrinogen.mp3`,
            explanation: `fi-BRIN-o-jen`,
        },
        {
            title: `globulin`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/globulin.mp3`,
            explanation: `GLOB-u-lin`,
        },
        {
            title: `granulocyte`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/granulocyte.mp3`,
            explanation: `GRAN-u-lo-site`,
        },
        {
            title: `granulocytopenia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/granulocytopenia.mp3`,
            explanation: `gran-u-lo-si-to-PE-ne-ah`,
        },
        {
            title: `hematopoiesis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hematopoiesis.mp3`,
            explanation: `he-mah-to-poy-E-sis`,
        },
        {
            title: `hematopoietic stem cell`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hematopoietic_stem_cell.mp3`,
            explanation: `he-mah-to-poy-EH-tikstemsel`,
        },
        {
            title: `hemoglobin`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hemoglobin.mp3`,
            explanation: `HE-mo-glo-bin`,
        },
        {
            title: `hemoglobinopathy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hemoglobinopathy.mp3`,
            explanation: `he-mo-glo-bin-OP-ah-the`,
        },
        {
            title: `hemolysis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hemolysis.mp3`,
            explanation: `he-MOL-ih-sis`,
        },
        {
            title: `hemostasis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hemostasis.mp3`,
            explanation: `he-mo-STA-sis`,
        },
        {
            title: `heparin`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/heparin.mp3`,
            explanation: `HEP-ah-rin`,
        },
        {
            title: `hypochromic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypochromic.mp3`,
            explanation: `hi-po-KRO-mik`,
        },
        {
            title: `immune reaction`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/immune_reaction.mp3`,
            explanation: `im-MEWNre-AK-shun`,
        },
        {
            title: `immunoglobulin`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/immunoglobulin.mp3`,
            explanation: `im-u-no-GLOB-u-lin`,
        },
        {
            title: `leukapheresis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/leukapheresis.mp3`,
            explanation: `lu-kah-feh-RE-sis`,
        },
        {
            title: `leukocyte`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/leukocyte.mp3`,
            explanation: `LU-ko-site`,
        },
        {
            title: `leukopenia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/leukopenia.mp3`,
            explanation: `lu-ko-PE-ne-ah`,
        },
        {
            title: `lymphocyte`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/lymphocyte.mp3`,
            explanation: `LIMF-o-site`,
        },
        {
            title: `lymphoid`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/lymphoid.mp3`,
            explanation: `LIMF-oyd`,
        },
        {
            title: `macrocytosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/macrocytosis.mp3`,
            explanation: `mak-ro-si-TO-sis`,
        },
        {
            title: `macrophage`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/macrophage.mp3`,
            explanation: `MAK-ro-fayj`,
        },
        {
            title: `megakaryocyte`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/megakaryocyte.mp3`,
            explanation: `meg-ah-KAR-e-o-site`,
        },
        {
            title: `microcytosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/microcytosis.mp3`,
            explanation: `mi-kro-si-TO-sis`,
        },
        {
            title: `monoblast`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/monoblast.mp3`,
            explanation: `MON-o-blast`,
        },
        {
            title: `monocyte`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/monocyte.mp3`,
            explanation: `MON-o-site`,
        },
        {
            title: `mononuclear`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/mononuclear.mp3`,
            explanation: `mon-o-NU-kle-ar`,
        },
        {
            title: `morphology`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/morphology.mp3`,
            explanation: `mor-FOL-o-je`,
        },
        {
            title: `myeloblast`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/myeloblast.mp3`,
            explanation: `MI-eh-lo-blast`,
        },
        {
            title: `myelodysplasia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/myelodysplasia.mp3`,
            explanation: `mi-eh-lo-dis-PLA-ze-ah`,
        },
        {
            title: `myeloid`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/myeloid.mp3`,
            explanation: `MI-eh-loyd`,
        },
        {
            title: `myelopoiesis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/myelopoiesis.mp3`,
            explanation: `mi-eh-lo-poy-E-sis`,
        },
        {
            title: `neutropenia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/neutropenia.mp3`,
            explanation: `nu-tro-PE-ne-ah`,
        },
        {
            title: `neutrophil`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/neutrophil.mp3`,
            explanation: `NU-tro-fil`,
        },
        {
            title: `neutrophilia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/neutrophilia.mp3`,
            explanation: `nu-tro-FIL-e-ah`,
        },
        {
            title: `pancytopenia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pancytopenia.mp3`,
            explanation: `pan-si-to-PE-ne-ah`,
        },
        {
            title: `phagocyte`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/phagocyte.mp3`,
            explanation: `FA-go-site`,
        },
        {
            title: `plasma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/plasma.mp3`,
            explanation: `PLAZ-mah`,
        },
        {
            title: `plasmapheresis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/plasmapheresis.mp3`,
            explanation: `plaz-mah-feh-RE-sis`,
        },
        {
            title: `platelet`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/platelet.mp3`,
            explanation: `PLAYT-let`,
        },
        {
            title: `plateletpheresis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/plateletpheresis.mp3`,
            explanation: `playt-let-feh-RE-sis`,
        },
        {
            title: `poikilocytosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/poikilocytosis.mp3`,
            explanation: `poy-kih-lo-si-TO-sis`,
        },
        {
            title: `polymorphonuclear`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/polymorphonuclear.mp3`,
            explanation: `pol-e-mor-fo-NU-kle-ar`,
        },
        {
            title: `prothrombin`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/prothrombin.mp3`,
            explanation: `pro-THROM-bin`,
        },
        {
            title: `reticulocyte`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/reticulocyte.mp3`,
            explanation: `reh-TIK-u-lo-site`,
        },
        {
            title: `Rh factor`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/rh_factor.mp3`,
            explanation: `R-hFAK-tor`,
        },
        {
            title: `serum`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/serum.mp3`,
            explanation: `SER-um`,
        },
        {
            title: `sideropenia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sideropenia.mp3`,
            explanation: `si-der-o-PE-ne-ah`,
        },
        {
            title: `spherocytosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/spherocytosis.mp3`,
            explanation: `sfer-o-si-TO-sis`,
        },
        {
            title: `stem cell`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/stem_cell.mp3`,
            explanation: `STEMsel`,
        },
        {
            title: `thrombin`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thrombin.mp3`,
            explanation: `THROM-bin`,
        },
        {
            title: `thrombocyte`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thrombocyte.mp3`,
            explanation: `THROM-bo-site`,
        },
        {
            title: `thrombocytopenia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thrombocytopenia.mp3`,
            explanation: `throm-bo-si-to-PE-ne-ah`,
        },
        {
            title: `thrombolytic therapy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thrombolytic_therapy.mp3`,
            explanation: `throm-bo-LIH-tikTHER-ah-pe`,
        },
        {
            title: `thrombosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thrombosis.mp3`,
            explanation: `throm-BO-sis`,
        },
        ],
            titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
            itemSeperator: "false",
        },
        group5: {
            id: "group5",
            type: "accordian",
            placeholder_id: "ch13group5_placeholder",
            items: [   
        {
            title: `acute lymphoid leukemia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/acute_lymphoid_leukemia.mp3`,
            explanation: `uh-KYOOTLIMP-oydlu-KE-me-ah`,
        },
        {
            title: `acute myeloid leukemia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/acute_myelogenous_leukemia.mp3`,
            explanation: `uh-KYOOTMI-eh-loydlu-KE-me-ah`,
        },
        {
            title: `anemia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/anemia.mp3`,
            explanation: `ah-NE-me-ah`,
        },
        {
            title: `antiglobulin test`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antiglobulin_test.mp3`,
            explanation: `an-te-GLOB-u-lintest`,
        },
        {
            title: `apheresis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/apheresis.mp3`,
            explanation: `ah-feh-RE-sis`,
        },
        {
            title: `aplastic anemia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/aplastic_anemia.mp3`,
            explanation: `a-PLAS-tikah-NE-me-ah`,
        },
        {
            title: `autologous transfusion`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/autologous_transfusion.mp3`,
            explanation: `aw-TOL-o-gustrans-FU-zhun`,
        },
        {
            title: `blood transfusion`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/blood_transfusion.mp3`,
            explanation: `bludtrans-FU-zhun`,
        },
        {
            title: `bone marrow biopsy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/bone_marrow_biopsy.mp3`,
            explanation: `boneMAH-roBI-op-se`,
        },
        {
            title: `chronic lymphoid leukemia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/chronic_lymphocytic_leukemiaa.mp3`,
            explanation: `KRON-ikLIM-foydlu-KE-me-ah`,
        },
        {
            title: `chronic myeloid leukemia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/chronic_myeloid_leukemia.mp3`,
            explanation: `KRON-ikMI-eh-loydlu-KE-me-ah`,
        },
        {
            title: `complete blood count`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/complete_blood_count.mp3`,
            explanation: `kom-PLEETbludkownt`,
        },
        {
            title: `dyscrasia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/dyscrasia.mp3`,
            explanation: `dis-KRA-ze-ah`,
        },
        {
            title: `ecchymoses`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/ecchymoses.mp3`,
            explanation: `ek-kih-MO-seez`,
        },
        {
            title: `erythrocyte sedimentation rate`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/erythrocyte_sedimentation_rate.mp3`,
            explanation: `eh-RITH-ro-sitesed-ih-men-TA-shunrate`,
        },
        {
            title: `granulocytosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/granulocytosis.mp3`,
            explanation: `gran-u-lo-si-TO-sis`,
        },
        {
            title: `hematocrit`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hematocrit.mp3`,
            explanation: `he-MAT-o-krit`,
        },
        {
            title: `hematopoietic stem cell transplant`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hematopoietic_stem_cell_transplant.mp3`,
            explanation: `he-mah-to-poy-E-tikstemselTRANS-plant`,
        },
        {
            title: `hemochromatosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hemochromatosis.mp3`,
            explanation: `he-mo-kro-mah-TO-sis`,
        },
        {
            title: `hemoglobin test`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hemoglobin_test.mp3`,
            explanation: `HE-mo-glo-bintest`,
        },
        {
            title: `hemolytic anemia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hemolytic_anemia.mp3`,
            explanation: `he-mo-LIH-tikah-NE-me-ah`,
        },
        {
            title: `hemophilia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hemophilia.mp3`,
            explanation: `he-mo-FIL-e-ah`,
        },
        {
            title: `intrinsic factor`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/intrinsic_factor.mp3`,
            explanation: `in-TRIN-sikFAK-tor`,
        },
        {
            title: `leukemia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/leukemia.mp3`,
            explanation: `lu-KE-me-ah`,
        },
        {
            title: `mononucleosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/mononucleosis.mp3`,
            explanation: `mon-o-nu-kle-O-sis`,
        },
        {
            title: `multiple myeloma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/multiple_myeloma.mp3`,
            explanation: `MUL-tih-pelmi-eh-LO-mah`,
        },
        {
            title: `palliative`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/palliative.mp3`,
            explanation: `PAH-le-ah-tiv`,
        },
        {
            title: `pernicious anemia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/pernicious_anemia.mp3`,
            explanation: `per-NIH-shusah-NE-me-uh`,
        },
        {
            title: `petechiae`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/petechiae.mp3`,
            explanation: `peh-TE-ke-i`,
        },
        {
            title: `platelet count`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/platelet_count.mp3`,
            explanation: `PLAYT-letkownt`,
        },
        {
            title: `polycythemia vera`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/polycythemia_vera.mp3`,
            explanation: `pol-e-si-THE-me-ahVER-ah`,
        },
        {
            title: `prothrombin time`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/prothrombin_time.mp3`,
            explanation: `pro-THROM-bintime`,
        },
        {
            title: `purpura`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/purpura.mp3`,
            explanation: `PUR-pur-ah`,
        },
        {
            title: `red blood cell count`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/red_blood_cell_count.mp3`,
            explanation: `redbludselkownt`,
        },
        {
            title: `red blood cell morphology`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/red_blood_cell_morphology.mp3`,
            explanation: `redbludselmor-FOL-o-je`,
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
            title: `sickle cell anemia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/sickle_cell_anemia.mp3`,
            explanation: `SIK-elselah-NE-me-uh`,
        },
        {
            title: `thalassemia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thalassemia.mp3`,
            explanation: `thal-ah-SE-me-ah`,
        },
        {
            title: `white blood cell count`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/white_blood_cell_count.mp3`,
            explanation: `witebludselkownt`,
        },
        {
            title: `white blood cell differential`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/white_blood_cell_differential.mp3`,
            explanation: `witebludseldif-er-EN-shul`,
        },
            ],
            titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
            itemSeperator: "false",
        },

        group6: {
      id: "group6",
      type: "dropdown",
      placeholder_id: "group6_placeholder",
      commonDropdownOptions:[],
      items: [
        { 
          
          dropdownHtml:`<span>What's the likely diagnosis for this patient? #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["AML","CLL","ALL","CML"],correctValue: "ALL",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
       { 
          
          dropdownHtml:`<span>The probable cause of Sally’s ecchymoses is: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["Neutropenia","Thrombocytopenia","Anorexia","Otitis"],correctValue: "Thrombocytopenia",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>The likely explanation for Sally’s fatigue is: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["Anemia","Sore throat and cough", "Thrombocytopenia", "Neutropenia"],correctValue: "Anemia",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Treatment for Sally’s condition is likely to be: #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:["Prolonged antibiotic therapy","Intravenous feeding","Surgery to repair the bone marrow","Chemotherapy"],correctValue: "Chemotherapy",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
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
        "basophil",
        "eosinophil",
        "erythrocyte",
        "hematopoietic stem cell",
        "lymphocyte",
        "monocyte",
        "neutrophil",
        "platelet"
        
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>mononuclear white blood cell formed in lymph tissue; it is a phagocyte and the precursor of a macrophage #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "monocyte",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
       {
          headerImage:{},
          dropdownHtml:`<span>thrombocyte or cell fragment that helps blood clot #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "platelet",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>cell in the bone marrow that gives rise to different types of blood cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "hematopoietic stem cell",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>mononuclear leukocyte formed in lymph tissue; produces antibodies #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "lymphocyte",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>leukocyte with dense, reddish granules having an affinity for red acidic dye; associated with allergic reactions #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "eosinophil",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>red blood cell #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "erythrocyte",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>leukocyte (polymorphonuclear granulocyte) formed in the bone marrow; granules do not stain intensely and have a pale color #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "neutrophil",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>leukocyte (granulocyte) with dark-staining blue granules; releases histamine and heparin  #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "basophil",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
        "albumin",
        "antibody",
        "antigen",
        "bilirubin",
        "colony-stimulating factor",
        "differentiation",
        "erythropoietin",
        "fibrinogen",
        "globulin",
        "heparin",
        "plasma",
        "serum"
       
        
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>liquid portion of blood #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "plasma",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
       {
          headerImage:{},
          dropdownHtml:`<span>orange-yellow pigment produced from hemoglobin when red blood cells are destroyed #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "bilirubin",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>plasma protein converted to fibrin in clotting process #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "fibrinogen",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>proteins in plasma; separated into alpha, beta, and gamma types #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "globulin",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>hormone secreted by the kidneys to stimulate bone marrow to produce red blood cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "erythropoietin",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>substance (usually foreign) that stimulates production of an antibody #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "antigen",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>protein in blood that maintains the proper amount of water in the blood #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "albumin",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>specific protein produced by lymphocytes in response to antigens in the blood #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "antibody",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>anticoagulant found in blood and tissue cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "heparin",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>plasma minus clotting proteins and cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "serum",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>change in structure and function of a cell as it matures #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "differentiation",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>protein that stimulates growth of developing blood cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "colony-stimulating factor",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
        "coagulation",
        "fibrin",
        "fibrinogen",
        "heparin",
        "prothrombin",
        "serum",
        "thrombin",
        "warfarin (Coumadin)"
              
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>anticoagulant substance found in liver cells, blood, and tissues #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "heparin",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
       {
          headerImage:{},
          dropdownHtml:`<span>protein thread that forms the basis of a blood clot #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "fibrin",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>plasma protein that is converted to thrombin in the clotting process #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "prothrombin",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>plasma minus clotting proteins and cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "serum",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>drug given to patients to prevent formation of clots #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "warfarin (Coumadin)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>plasma protein that is converted to fibrin in the clotting process #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "fibrinogen",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>process of clotting #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "coagulation",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>enzyme that helps convert fibrinogen to fibrin #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thrombin",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
        "coagulopathy",
        "eosinophilia",
        "hematocrit",
        "leukapheresis",
        "myeloid",
        "neutropenia",
        "thrombocytopenia",
        "thrombosis"
        
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>derived in bone marrow #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "myeloid",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
       {
          headerImage:{},
          dropdownHtml:`<span>deficiency of a type of white blood cell #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "neutropenia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>percentage of red blood cells in a volume of blood #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "hematocrit",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>increase in a type of white blood cell (seen in allergies) #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "eosinophilia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>abnormal condition of clot formation #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thrombosis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>separation of white blood cells from a blood sample #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "leukapheresis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>disease of clotting process #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "coagulopathy",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>deficiency of platelets #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thrombocytopenia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
        "anemia",
        "anisocytosis",
        "erythropoiesis",
        "hematocrit",
        "hemoglobin",
        "hemolysis",
        "hypochromic",
        "macrocytosis",
        "microcytosis",
        "poikilocytosis",
        "polycythemia vera",
        "spherocytosis"
       
        
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>any irregularity in the shape of red blood cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "poikilocytosis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
       {
          headerImage:{},
          dropdownHtml:`<span>oxygen-containing protein in red blood cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "hemoglobin",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>formation of red blood cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "erythropoiesis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>deficiency in numbers of red blood cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "anemia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>destruction of red blood cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "hemolysis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>pertaining to reduction of hemoglobin in red blood cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "hypochromic",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>variation in size of red blood cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "anisocytosis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>abnormal numbers of round, rather than normally biconcave-shaped, red blood cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "spherocytosis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>increase in number of small red blood cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "microcytosis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>general increase in numbers of red blood cells; erythremia #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "polycythemia vera",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>increase in numbers of large red blood cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "macrocytosis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>separation of blood so that the percentage of red blood cells in relation to the volume of a blood sample is measured #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "hematocrit",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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

    group12: {
      id: "group12",
      type: "dropdown",
      placeholder_id: "group12_placeholder",
      commonDropdownOptions:[
        "Deficiency of all blood cells",
        "Immunoglobulin fragment found in the urine of patients with multiple myeloma",
        "Increase in numbers of granulocytes; seen in allergic conditions",
        "Large blue or purplish patches on skin (bruises)",
        "Symptoms of the disease return",
        "Tiny purple or flat red spots on skin occurring as a result of small hemorrhages",
        "Symptoms of the disease disappear",
        "Separation of blood into its parts",
        "Preparation of erythrocytes separated from plasma",
        "Relieving but not curing"
       
      
  
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>relapse #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Symptoms of the disease return",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
      {
          headerImage:{},
          dropdownHtml:`<span>remission #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Symptoms of the disease disappear",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>palliative #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Relieving but not curing",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Bence Jones protein #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Immunoglobulin fragment found in the urine of patients with multiple myeloma",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>ecchymoses #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Large blue or purplish patches on skin (bruises)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>pancytopenia #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Deficiency of all blood cells",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>apheresis #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Separation of blood into its parts",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>eosinophilia #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Increase in numbers of granulocytes; seen in allergic conditions",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>petechiae #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Tiny purple or flat red spots on skin occurring as a result of small hemorrh",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>packed cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Preparation of erythrocytes separated from plasma",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
        "antiglobulin (Coombs) test",
        "autologous transfusion",
        "bone marrow biopsy",
        "erythrocyte sedimentation rate",
        "hematocrit",
        "hematopoietic stem cell transplantation",
        "platelet count",
        "red blood cell count",
        "red blood cell morphology",
        "white blood cell differential"
        
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>microscopic examination of a stained blood smear to determine the shape of individual red blood cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "red blood cell morphology",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
      {
          headerImage:{},
          dropdownHtml:`<span>percentage of red blood cells in a volume of blood #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "hematocrit",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>determines the number of clotting cells per mm3 or μL of blood #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "platelet count",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>speed at which erythrocytes settle out of plasma #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "erythrocyte sedimentation rate",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>percentages of different types of leukocytes in the blood #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "white blood cell differential",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>test for the presence of antibodies that coat and damage erythrocytes #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "antiglobulin (Coombs) test",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>peripheral stem cells from a compatible donor are infused into a recipient's vein to repopulate the bone marrow #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "hematopoietic stem cell transplantation",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>microscopic examination of a core of bone marrow removed with a needle #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "bone marrow biopsy",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>number of erythrocytes per mm3 or μL of blood #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "red blood cell count",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>blood is collected from and later reinfused into the same patient  #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "autologous transfusion",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
      commonDropdownOptions:[],
      items: [
        { 
          
          dropdownHtml:`<span>Gary, a 1-year-old African American child, was failing to gain weight normally. He seemed pale and without energy. His blood tests showed a decreased hemoglobin (5.0 g/dL) and decreased hematocrit (16.5%). After a blood smear revealed abnormally shaped red cells, the physician told Gary's parents that their son had #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:["iron deficiency anemia","hemophilia","sickle cell anemia"],correctValue: "sickle cell anemia",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>While in the hospital, Mr. Klein was told he had an elevated #dropdown1# count with a "shift to the left." This was information that confirmed his diagnosis of a systemic infection.</span>`,
          dropdowns:{
            dropdown1:{values:["red blood cell","white blood cell","platelet"],correctValue: "white blood cell",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>While Mr. Chen was taking warfarin (Coumadin), a blood thinner, his physician made sure to check his #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:["prothrombin time","hematocrit","sed rate"],correctValue: "prothrombin time",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Sixty-one-year-old Barbara's laboratory tests showed abnormal proteins in her plasma and Bence Jones protein in her urine. She had osteopenia and a fracture in one of her ribs. Her oncologist diagnosed her condition as #dropdown1# . He prescribed analgesics and drugs such as thalidomide and bortezomib (Velcade).</span>`,
          dropdowns:{
            dropdown1:{values:["mononucleosis","thrombocytopenic purpura","multiple myeloma"],correctValue: "multiple myeloma",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Bobby was diagnosed at a very early age with a bleeding disorder called #dropdown1# . He needed factor VIII regularly, especially after even the slightest traumatic injury.</span>`,
          dropdowns:{
            dropdown1:{values:["hemophilia","thalassemia","eosinophilia"],correctValue: "hemophilia",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Juan was a 9-year-old boy who suddenly noticed many black and blue marks all over his legs. He had a fever and was tired all the time. The physician did a blood test that revealed pancytopenia. A bone marrow biopsy confirmed the diagnosis of #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:["acute lymphoid leukemia","polycythemia vera","aplastic anemia"],correctValue: "aplastic anemia",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Alice and her friends had been staying up late for weeks, cramming for exams. She developed a sore throat and swollen lymph nodes in her neck and felt fatigued all the time. Dr. Smith did a blood test, and the results showed lymphocytosis and antibodies to EBV in the bloodstream. His diagnosis was #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:["leukapheresis","lymphocytopenia","mononucleosis"],correctValue: "mononucleosis",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Susan was experiencing heavy menstrual periods #dropdown1# . Because of the bleeding, she frequently felt tired and weak and probably was sideropenic. Her physician performed blood tests that revealed her problem as #dropdown2# .</span>`,
          dropdowns:{
            dropdown1:{values:["menorrhea","menorrhagia","hemoptysis"],correctValue: "menorrhagia",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["thrombocytopenia","pernicious anemia", "iron deficiency anemia"],correctValue: "iron deficiency anemia",dropdownlabel:"Select the position of the heart", useCommonOptions:"false"}
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Dr. Harris examined a highly allergic patient and sent a blood sample to a specialist, a #dropdown1# pathologist. The specialist stained the blood smear and found an abundance of leukocytes with dense, reddish granules. She made the diagnosis of #dropdown2# .</span>`,
          dropdowns:{
            dropdown1:{values:["pulmonary","cardiovascular","hematologic"],correctValue: "hematologic",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["basophilia","eosinophilia", "neutrophilia"],correctValue: "eosinophilia",dropdownlabel:"Select the position of the heart", useCommonOptions:"false"}
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>George’s blood cell counts had been falling in recent weeks. His scheduled laparotomy was canceled because blood tests revealed #dropdown1# . Bone marrow biopsy determined that the cause was #dropdown1#  of all cellular elements.</span>`,
          dropdowns:{
            dropdown1:{values:["pancytopenia","plasmapheresis","myelopoiesis"],correctValue: "pancytopenia",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["hyperplasia","hypoplasia", "differentiation"],correctValue: "hypoplasia",dropdownlabel:"Select the position of the heart", useCommonOptions:"false"}
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },

      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },

    group15: {
      id: "group15",
      type: "dropdown",
      placeholder_id: "group15_placeholder",
      commonDropdownOptions:[
        "hemoglobin",
        "graft-versus-host disease",
        "acute lymphoid leukemia",
        "prothrombin time",
        "chronic myeloid (myelocytic) leukemia",
        "erythropoietin",
        "immunoglobulins",
        "chronic lymphoid leukemia",
        "hematocrit",
        "acute myeloid (myelocytic) leukemia"
       
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>Blood protein that transports oxygen to tissues. #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "hemoglobin",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Immune reaction of donor's cells/tissue to recipient's cells/tissue; a possible outcome of hematopoietic stem cell or bone marrow transplantation. #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "graft-versus-host disease",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Malignant condition of white blood cells; immature lymphocytes predominate. #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "acute lymphoid leukemia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Test used to follow patients who are taking certain anticoagulants. #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "prothrombin time",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Malignant condition of white blood cells in which both mature and immature granulocytes are present; a slowly progressive illness. #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "chronic myeloid (myelocytic) leukemia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Hormone that stimulates the growth of red blood cells. #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "erythropoietin",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Proteins containing antibodies. #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "immunoglobulins",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Malignant condition of white blood cells in which relatively mature lymphocytes predominate in lymph nodes, spleen, and bone marrow; usually seen in elderly patients. #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "chronic lymphoid leukemia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Percentage of red cells in blood volume. #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "hematocrit",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Malignant condition of white blood cells; immature granulocytes (myeloblasts) predominate. #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "acute myeloid (myelocytic) leukemia",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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

    group16: {
      id: "group16",
      type: "cloze", //Fill-in-the-Blank
      placeholder_id: "group16_placeholder",
      items: [
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>Hgb #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "hemoglobin", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>GVHD  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "graft-versus-host disease", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>ALL #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "acute lymphoid leukemia", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>PT  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "prothrombin time", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>CML #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "chronic myeloid (myelocytic) leukemia", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>EPO  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "erythropoietin", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>IgA, IgE, IgD  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "immunoglobulins", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>CLL #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "chronic lymphoid leukemia", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>Hct  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "hematocrit", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>AML  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "acute myeloid (myelocytic) leukemia", clozelabel:"fill in the blank"},
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
          title: `coagulation`,
          feedback: `<span>blood clotting</span>`,
        },
        {
          title: `granulocyte`,
          feedback: `<span>white blood cell with numerous, cytoplasmic granules (neutrophil, basophil, and eosinophil)</span>`,
        },
       {
          title: `mononuclear`,
          feedback: `<span>pertaining to a leukocyte with a single round nucleus; monocytes and lymphocytes are mononuclear leukocytes</span>`,
        },
        {
          title: `polymorphonuclear`,
          feedback: `<span>pertaining to a white blood cell with a multilobed nucleus; neutrophil</span>`,
        },
        {
          title: `globulin`,
          feedback: `<span>plasma protein; alpha, beta, and gamma (immune) globulins are examples</span>`,
        },
        {
          title: `erythroblast`,
          feedback: `<span>immature red blood cell</span>`,
        },
        {
          title: `megakaryocyte`,
          feedback: `<span>large platelet precursor (forerunner) cell found in bone marrow</span>`,
        },
        {
          title: `macrophage`,
          feedback: `<span>monocyte that migrates from blood to tissue spaces; phagocyte that engulfs foreign material and ingests red blood cells</span>`,
        },
        {
          title: `hemoglobin`,
          feedback: `<span>blood protein containing iron; carries oxygen in erythrocytes</span>`,
        },
        {
          title: `plasma`,
          feedback: `<span>liquid portion of blood</span>`,
        },
        {
          title: `myeloblast`,
          feedback: `<span>immature bone marrow cell that gives rise to granulocytes</span>`,
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
          title: `Name four types of plasma proteins.`,
          feedback: `<span>albumin, globulins, fibrinogen, and prothrombin </span>`,
        },
        {
          title: `What is the Rh factor?`,
          feedback: `<span>an antigen normally found on red blood cells of Rh+ individuals</span>`,
        },
        {
          title: `What is hemolysis?`,
          feedback: `<span>destruction or breakdown of red blood cells </span>`,
        },
        {
          title: `A person with type A blood has ________ antigens and ________ antibodies in his or her blood.`,
          feedback: `<span>A; anti-B </span>`,
        },
        {
          title: `A person with type B blood has ________ antigens and ________ antibodies in his or her blood.`,
          feedback: `<span>B; anti-A </span>`,
        },
        {
          title: `A person with type O blood has ________ antigens and ________ antibodies in his or her blood.`,
          feedback: `<span>no A or B; anti-A and anti-B </span>`,
        },
        {
          title: `A person with type AB blood has ________ antigens and _______ antibodies in his or her blood.`,
          feedback: `<span>A and B; no anti-A and no anti-B </span>`,
        },
        {
          title: `Can you transfuse blood from a type A donor into a type B recipient? Why or why not?`,
          feedback: `<span>no; A antigens will react with the anti-A antibodies in the type B recipient's bloodstream </span>`,
        },
        {
          title: `Can you transfuse blood from a type AB donor into a type O recipient? Why or why not?`,
          feedback: `<span>no; A and B antigens will react with the anti-A and anti-B antibodies in the type O recipient's bloodstream </span>`,
        },
        {
          title: `What is electrophoresis?`,
          feedback: `<span>method of separating serum proteins by electrical charge and size </span>`,
        },
        {
          title: `What is an immunoglobulin?`,
          feedback: `<span>protein with antibody activity; IgG, IgH, IgE </span>`,
        },
        {
          title: `What is differentiation?`,
          feedback: `<span>change in structure and function of a cell as it matures; specialization </span>`,
        },
        {
          title: `What is plasmapheresis?`,
          feedback: `<span>removal by centrifuge of plasma from withdrawn blood </span>`,
        },
        {
          title: `Why is a person with type O blood the universal donor?`,
          feedback: `<span>type O blood does not contain A or B antigens and therefore will not react with antibodies in any recipient's blood </span>`,
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
          title: `anticoagulant`,
          feedback: `<span>anti/coagul/ant—a substance that prevents clotting</span>`,
        },
        {
          title: `hemoglobinopathy`,
          feedback: `<span>hemoglobin/o/pathy—disease (abnormality) of hemoglobin</span>`,
        },
        {
          title: `cytology`,
          feedback: `<span>cyt/o/logy—study of cells</span>`,
        },
        {
          title: `leukopenia`,
          feedback: `<span>leuk/o/penia—deficiency of white (blood) cells</span>`,
        },
        {
          title: `morphology`,
          feedback: `<span>morph/o/logy—study of the shape or form (of cells)</span>`,
        },
        {
          title: `megakaryocyte`,
          feedback: `<span>mega/kary/o/cyte—cell with a large (mega-) nucleus (kary); platelet precursor</span>`,
        },
        {
          title: `sideropenia`,
          feedback: `<span>sider/o/penia—deficiency of iron</span>`,
        },
        {
          title: `phagocyte`,
          feedback: `<span>phag/o/cyte—cell that eats or swallows other cells</span>`,
        },
        {
          title: `myelopoiesis`,
          feedback: `<span>myel/o/poiesis—formation of bone marrow</span>`,
        },
        {
          title: `plateletpheresis`,
          feedback: `<span>platelet/pheresis—separation of platelets from the rest of the blood</span>`,
        },
        {
          title: `monoblast`,
          feedback: `<span>mon/o/blast—immature monocyte</span>`,
        },
        {
          title: `myelodysplasia`,
          feedback: `<span>myel/o/dys/plasia—abnormal (ineffective) production of myeloid cells in bone marrow. Myeloid progenitor cells give rise to erythrocytes, granulocytes, and platelets</span>`,
        },
        {
          title: `hemostasis`,
          feedback: `<span>hem/o/stasis—controlling or stopping the flow of blood</span>`,
        },
        {
          title: `thrombolytic (therapy)`,
          feedback: `<span>thromb/o/lytic (therapy)—pertaining to treatment using drugs to destroy clots</span>`,
        },
        {
          title: `hematopoiesis`,
          feedback: `<span>hemat/o/poiesis—formation of blood cells</span>`,
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
          title: `iron deficiency anemia`,
          feedback: `<span>lack of iron leading to insufficient hemoglobin production</span>`,
        },
        {
          title: `pernicious anemia`,
          feedback: `<span>lack of mature erythrocytes caused by inability to absorb vitamin B12 into the bloodstream (intrinsic factor is missing in gastric juice, so B12 is not absorbed)</span>`,
        },
        {
          title: `sickle cell anemia`,
          feedback: `<span>hereditary disorder of abnormal hemoglobin producing sickle-shaped erythrocytes and hemolysis</span>`,
        },
        {
          title: `aplastic anemia`,
          feedback: `<span>failure of blood cell production in bone marrow</span>`,
        },
        {
          title: `thalassemia`,
          feedback: `<span>inherited disorder of abnormal hemoglobin production leading to hypochromia</span>`,
        },
        
        
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },

    group21: {
      id: "group21",
      type: "reflective_writing", //Short Answers
      placeholder_id: "group21_placeholder",
      items: [
        
        {
          title: `purpura`,
          feedback: `<span>multiple pinpoint hemorrhages and accumulation of blood under the skin (cause may be deficiency of platelets)</span>`,
        },
       {
          title: `granulocytosis`,
          feedback: `<span>abnormal increase in granulocytes in the blood (eosinophilia and basophilia)</span>`,
        },
        {
          title: `hemophilia`,
          feedback: `<span>excessive bleeding caused by hereditary lack of blood clotting factors</span>`,
        },
        {
          title: `hemochromatosis`,
          feedback: `<span>excessive iron deposits throughout the body</span>`,
        },
        {
          title: `multiple myeloma`,
          feedback: `<span>malignant neoplasm of bone marrow</span>`,
        },
        {
          title: `mononucleosis`,
          feedback: `<span>infectious disease marked by increased numbers of mononuclear leukocytes and enlarged cervical lymph nodes</span>`,
        },
        
        
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
    },
};