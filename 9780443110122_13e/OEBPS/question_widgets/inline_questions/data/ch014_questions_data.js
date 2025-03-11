const questions_data = {
    sharedProperties: {
        maxWidth: "960px", //"100%", "90%", "760px", "1024px"
        alignment: "center", //"center", "left"
    },
    question_groups: {
        group1: {
            id: "group1",
            type: "accordian",
            placeholder_id: "ch14group1_placeholder",
            items: [
                {
                    title: `axill/o`,
                    explanation: `armpit`,
                },
                {
                    title: `cervic/o`,
                    explanation: `neck; cervix (neck of uterus)`,
                },
                {
                    title: `immun/o`,
                    explanation: `immune; protection; safe`,
                },
                {
                    title: `inguin/o`,
                    explanation: `groin`,
                },
                {
                    title: `lymph/o`,
                    explanation: `lymph`,
                },
                {
                    title: `lymphaden/o`,
                    explanation: `lymph gland (node)`,
                },
                {
                    title: `splen/o`,
                    explanation: `spleen`,
                },
                {
                    title: `thym/o`,
                    explanation: `thymus gland`,
                },
                {
                    title: `tox/o`,
                    explanation: `poison`,
                },
            ],
            titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
            itemSeperator: "false",
        },
        group2: {
            id: "group2",
            type: "accordian",
            placeholder_id: "ch14group2_placeholder",
            items: [
                {
                    title: `-cytosis`,
                    explanation: `condition of cells; slight increase in numbers`,
                },
                {
                    title: `-edema`,
                    explanation: `swelling`,
                },
                {
                    title: `-globulin`,
                    explanation: `protein`,
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
                    title: `-oma`,
                    explanation: `tumor; mass; fluid collection`,
                },
                {
                    title: `-pathy`,
                    explanation: `disease; emotion`,
                },
                {
                    title: `-penia`,
                    explanation: `deficiency`,
                },
                {
                    title: `-phylaxis`,
                    explanation: `protection`,
                },
                {
                    title: `-poiesis`,
                    explanation: `formation`,
                },
                {
                    title: `-stitial`,
                    explanation: `pertaining to standing or positioned`,
                },
                {
                    title: `-suppression`,
                    explanation: `stopping`,
                },
            ],
            titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
            itemSeperator: "false",
        },
        group3: {
            id: "group3",
            type: "accordian",
            placeholder_id: "ch14group3_placeholder",
            items: [
                {
                    title: `ana-`,
                    explanation: `up; apart; backward; again, anew`,
                },
                {
                    title: `auto-`,
                    explanation: `self, own`,
                },
                {
                    title: `hyper-`,
                    explanation: `above; excessive`,
                },
                {
                    title: `inter-`,
                    explanation: `between`,
                },
                {
                    title: `retro-`,
                    explanation: `behind; back; backward`,
                },
            ],
            optionStyleType: "st-decimal",
            itemSeperator: "false",
        },
        group4: {
            id: "group4",
            type: "accordian",
            placeholder_id: "ch14group4_placeholder",
            items: [
            {
            title: `adaptive immunity`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/adaptive_immunity.mp3`,
            explanation: `ah-DAP-tivih-MU-nih-te`,
        },
        {
            title: `adenoids`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/adenoids.mp3`,
            explanation: `AH-deh-noydz`,
        },
        {
            title: `anaphylaxis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/anaphylaxis.mp3`,
            explanation: `an-ah-fah-LAK-sis`,
        },
        {
            title: `antibody`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antibody.mp3`,
            explanation: `AN-tih-bod-e`,
        },
        {
            title: `antigen`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/antigen.mp3`,
            explanation: `AN-tih-jen`,
        },
        {
            title: `asplenia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/asplenia.mp3`,
            explanation: `a-SPLEN-e-ah`,
        },
        {
            title: `autoimmune disease`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/autoimmune_disease.mp3`,
            explanation: `aw-to-ih-MEWNdih-ZEEZ`,
        },
        {
            title: `axillary nodes`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/axillary_nodes.mp3`,
            explanation: `AKS-il-ar-enodes`,
        },
        {
            title: `B cell`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/b_cell.mp3`,
            explanation: `Bsel`,
        },
        {
            title: `cell-mediated immunity`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cell-mediated_immunity.mp3`,
            explanation: `selme-de-A-tedih-MU-nit-e`,
        },
        {
            title: `cervical nodes`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cervical_nodes.mp3`,
            explanation: `SER-vih-kulnodes`,
        },
        {
            title: `complement system`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/complement_system.mp3`,
            explanation: `COM-pleh-mentSIS-tem`,
        },
        {
            title: `cytokines`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cytokines.mp3`,
            explanation: `SI-to-kines`,
        },
        {
            title: `cytotoxic T cell`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cytotoxic_t_cell.mp3`,
            explanation: `si-to-TOK-sikTsel`,
        },
        {
            title: `dendritic cell`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/dendritic_cell.mp3`,
            explanation: `den-DRIH-tiksel`,
        },
        {
            title: `helper T cell`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/helper_t_cell.mp3`,
            explanation: `HEL-perTsel`,
        },
        {
            title: `humoral immunity`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/humoral_immunity.mp3`,
            explanation: `HU-mer-alim-MU-nih-te`,
        },
        {
            title: `hypersplenism`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/hypersplenism.mp3`,
            explanation: `hi-per-SPLEN-iz-m`,
        },
        {
            title: `immunity`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/immunity.mp3`,
            explanation: `ih-MU-nih-te`,
        },
        {
            title: `immunoglobulins`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/immunoglobulins.mp3`,
            explanation: `im-u-no-GLOB-u-linz`,
        },
        {
            title: `immunosuppression`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/immunosuppression.mp3`,
            explanation: `im-u-no-su-PREH-shun`,
        },
        {
            title: `immunotherapy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/immunotherapy.mp3`,
            explanation: `ih-mu-no-THER-ah-pe`,
        },
        {
            title: `inguinal node`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/inguinal_node.mp3`,
            explanation: `ING-win-alnode`,
        },
        {
            title: `interferons`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/interferons.mp3`,
            explanation: `in-ter-FE-ronz`,
        },
        {
            title: `interleukins`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/interleukins.mp3`,
            explanation: `in-ter-LU-kinz`,
        },
        {
            title: `interstitial fluid`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/interstitial_fluid.mp3`,
            explanation: `in-ter-STIH-shulFLU-id`,
        },
        {
            title: `lymph`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/lymph.mp3`,
            explanation: `limf`,
        },
        {
            title: `lymph capillaries`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/lymph_capillaries.mp3`,
            explanation: `limfKAP-il-ar-eez`,
        },
        {
            title: `lymph node`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/lymph_node.mp3`,
            explanation: `limfnode`,
        },
        {
            title: `lymph vessel`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/lymph_vessel.mp3`,
            explanation: `limfVES-el`,
        },
        {
            title: `lymphadenitis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/lymphadenitis.mp3`,
            explanation: `limf-ah-deh-NI-tis`,
        },
        {
            title: `lymphadenopathy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/lymphadenopathy.mp3`,
            explanation: `limf-ah-deh-NOP-ah-the`,
        },
        {
            title: `lymphedema`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/lymphedema.mp3`,
            explanation: `limf-eh-DE-mah`,
        },
        {
            title: `lymphocyte`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/lymphocyte.mp3`,
            explanation: `LIMF-o-site`,
        },
        {
            title: `lymphocytopenia`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/lymphocytopenia.mp3`,
            explanation: `limf-o-si-to-PE-ne-ah`,
        },
        {
            title: `lymphocytosis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/lymphocytosis.mp3`,
            explanation: `limf-o-si-TO-sis`,
        },
        {
            title: `lymphoid organs`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/lymphoid_organs.mp3`,
            explanation: `LIMF-oydOR-ganz`,
        },
        {
            title: `lymphopoiesis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/lymphopoiesis.mp3`,
            explanation: `limf-o-poy-E-sis`,
        },
        {
            title: `macrophage`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/macrophage.mp3`,
            explanation: `MAK-ro-fayj`,
        },
        {
            title: `mediastinal nodes`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/mediastinal_nodes.mp3`,
            explanation: `me-de-ah-STI-nalnodes`,
        },
        {
            title: `mesenteric nodes`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/mesenteric_nodes.mp3`,
            explanation: `mez-en-TER-iknodes`,
        },
        {
            title: `monoclonal antibody`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/monoclonal_antibody.mp3`,
            explanation: `mon-o-KLO-nalAN-tih-bod-e`,
        },
        {
            title: `natural immunity`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/natural_immunity.mp3`,
            explanation: `NAH-tu-ralih-MU-nih-te`,
        },
        {
            title: `paraaortic nodes`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/paraaortic_nodes.mp3`,
            explanation: `par-ah-a-OR-tiknodes`,
        },
        {
            title: `plasma cell`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/plasma_cell.mp3`,
            explanation: `PLAZ-mahsel`,
        },
        {
            title: `right lymphatic duct`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/right_lymphatic_duct.mp3`,
            explanation: `ritelimf-FAH-tikdukt`,
        },
        {
            title: `spleen`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/spleen.mp3`,
            explanation: `spleen`,
        },
        {
            title: `splenectomy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/splenectomy.mp3`,
            explanation: `spleh-NEK-to-me`,
        },
        {
            title: `splenomegaly`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/splenomegaly.mp3`,
            explanation: `spleh-no-MEG-ah-le`,
        },
        {
            title: `suppressor T cell`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/suppressor_t_cell.mp3`,
            explanation: `suh-PRE-sorTsel`,
        },
        {
            title: `T cell`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/t_cell.mp3`,
            explanation: `Tsel`,
        },
        {
            title: `thoracic duct`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thoracic_duct.mp3`,
            explanation: `thor-AH-sikdukt`,
        },
        {
            title: `thymectomy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thymectomy.mp3`,
            explanation: `thi-MEK-to-me`,
        },
        {
            title: `thymus gland`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thymus_gland.mp3`,
            explanation: `THI-musgland`,
        },
        {
            title: `tolerance`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/tolerance.mp3`,
            explanation: `TOL-er-antz`,
        },
        {
            title: `tonsils`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/tonsils.mp3`,
            explanation: `TON-silz`,
        },
        {
            title: `toxic`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/toxic.mp3`,
            explanation: `TOK-sik`,
        },
        {
            title: `toxin`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/toxin.mp3`,
            explanation: `TOK-sin`,
        },
        {
            title: `vaccination`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/vaccination.mp3`,
            explanation: `vak-sih-NA-shun`,
        },
        {
            title: `vaccine`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/vaccine.mp3`,
            explanation: `vak-SEEN`,
        },
            ],
            titleElement: "h4",//"h1", "h2", "h3", "h4", "h5", "h6" ,""
            itemSeperator: "false",
        },
        group5: {
            id: "group5",
            type: "accordian",
            placeholder_id: "ch14group5_placeholder",
            items: [ 
                    {
            title: `acquired immunodeficiency syndrome`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/acquired_immunodeficiency_syndrome.mp3`,
            explanation: `ah-KWI-erd im-u-no-deh-FIH-shen-se SIN-drohm`,
        },
        {
            title: `allergen`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/allergen.mp3`,
            explanation: `AL-er-jen`,
        },
        {
            title: `allergy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/allergy.mp3`,
            explanation: `AL-er-je`,
        },
        {
            title: `atopy`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/atopy.mp3`,
            explanation: `AT-o-pe`,
        },
        {
            title: `CD4+ cell`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/cd4+_cell.mp3`,
            explanation: `CD4POS-ih-tivsel`,
        },
        {
            title: `ELISA`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/elisa.mp3`,
            explanation: `eh-LI-zah`,
        },
        {
            title: `Hodgkin lymphoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/Hodgkin_lymphoma.mp3`,
            explanation: `HOJ-kinlimf-O-mah`,
        },
        {
            title: `human immunodeficiency virus`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/human_immunodeficiencyvirus.mp3`,
            explanation: `HU-manim-u-no-deh-FIH-shen-seVI-rus`,
        },
        {
            title: `immunoelectrophoresis`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/immunoelectrophoresis.mp3`,
            explanation: `ih-mu-no-e-lek-tro-phor-E-sis`,
        },
        {
            title: `Kaposi sarcoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/kaposi_sarcoma.mp3`,
            explanation: `KAH-po-sesar-KO-mah`,
        },
        {
            title: `lymphoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/lymphoma.mp3`,
            explanation: `lim-FO-mah`,
        },
        {
            title: `multiple myeloma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/multiple_myeloma.mp3`,
            explanation: `MUL-tih-pelmi-eh-LO-mah`,
        },
        {
            title: `non-Hodgkin lymphoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/non-hodgkin_lymphoma.mp3`,
            explanation: `non-HOJ-kinlim-FO-mah`,
        },
        {
            title: `opportunistic infections`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/opportunistic_infections.mp3`,
            explanation: `op-por-tu-NIS-tikin-FEK-shunz`,
        },
        {
            title: `protease inhibitors`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/protease_inhibitors.mp3`,
            explanation: `PRO-te-ayzin-HIB-ih-torz`,
        },
        {
            title: `reverse transcriptase inhibitor`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/reverse_transcriptase_inhibitors.mp3`,
            explanation: `re-VERS trans-SCRIPT-ayz in-HIB-ih-tor`,
        },
        {
            title: `severe combined immunodeficiency disease`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/severe_combined_immunodeficiency_disease.mp3`,
            explanation: `seh-VEERkom-BINEDih-mu-no-deh-FIH-shen-sedih-ZEEZ`,
        },
        {
            title: `thymoma`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/thymoma.mp3`,
            explanation: `thi-MO-mah`,
        },
        {
            title: `viral load test`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/viral_load_test.mp3`,
            explanation: `VI-ralLOADtest`,
        },
        {
            title: `wasting syndrome`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/wasting_syndrome.mp3`,
            explanation: `WAYST-ingSIN-drohm`,
        },
        {
            title: `Western blot`,
            audio: `../../question_widgets/inline_questions/data/media/audio/group1/western_blot.mp3`,
            explanation: `WES-ternblot`,
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
        "mediastinal (chest)",
        "thoracic duct",
        "cervical (neck)",
        "inguinal (groin)",
        "large veins",
        "paraaortic (lumbar)",
        "lymph vessels",
        "right lymphatic duct",
        "lymph capillaries",
        "mesenteric (intestinal)",
        "lymph nodes",
        "axillary (armpit)"
        
       
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "lymph capillaries",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "lymph vessels",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "lymph nodes",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "cervical (neck)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "axillary (armpit)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "mediastinal (chest)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "mesenteric (intestinal)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "paraaortic (lumbar)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "inguinal (groin)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "right lymphatic duct",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thoracic duct",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span> #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "large veins",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
        "adenoids",
        "interstitial fluid",
        "lymph capillaries",
        "lymph node",
        "right lymphatic duct",
        "spleen",
        "thoracic duct",
        "thymus gland"
       
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>collection of stationary lymphatic tissue along lymph vessels #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "lymph node",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>large lymphatic vessel that drains lymph from the lower and left side of the body #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thoracic duct",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>organ in the left upper quadrant of the abdomen that destroys worn-out erythrocytes, activates lymphocytes, and stores blood #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "spleen",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>mass of lymphatic tissue in the nasopharynx #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "adenoids",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>lymphoid organ in the mediastinum that conditions T cells to react to foreign cells in the immune response #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thymus gland",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>tiniest lymphatic vessels #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "lymph capillaries",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>large lymphatic vessel in the chest that drains lymph from the upper right part of the body #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "right lymphatic duct",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>fluid in the spaces between cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "interstitial fluid",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
      commonDropdownOptions:[],
      items: [
        { 
          
          dropdownHtml:`<span>Cytotoxic T cells are #dropdown1# and directly kill foreign cells.</span>`,
          dropdowns:{
            dropdown1:{values:["CD8+ T cells","helper T cells","suppressor T cells"],correctValue: "CD8+ T cells",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Lymphocytes that directly act on antigens are #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:["B cells","T cells","macrophages"],correctValue: "T cells",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>CD4 + T cells are #dropdown1# and are deficient in people with AIDS.</span>`,
          dropdowns:{
            dropdown1:{values:["helper T cells","Tregs","B cells"],correctValue: "helper T cells",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Lymphocytes that mature into plasma cells and secrete antibodies are #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:["B cells","T cells","macrophages"],correctValue: "B cells",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>The type of immunity in which B cells produce antibodies after exposure to antigens is #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:["natural immunity","cytotoxic immunity","humoral immunity"],correctValue: "humoral immunity",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>The type of immunity that is the ability to recognize and remember specific antigens and mount an attack on them is #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:["adaptive immunity","natural immunity"],correctValue: "adaptive immunity",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
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
      commonDropdownOptions:[
        "complement system",
        "dendritic cell",
        "helper T cell",
        "macrophage",
        "plasma cell",
        "suppressor T cell"
        
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>lymphocyte that matures from a B lymphocyte and secretes antibodies #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "plasma cell",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>large phagocyte found in lymph nodes and other tissues of the body #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "macrophage",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>CD4 + T cell that aids B cells in recognizing antigens #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "helper T cell",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>Treg that inhibits the activity of B and T lymphocytes #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "suppressor T cell",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>proteins in the blood that help antibodies and T cells kill their target #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "complement system",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>antigen-presenting cell; shows B cells and T cells what to attack #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "dendritic cell",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
        "Antibodies—IgA, IgE, IgG, IgM, IgD",
        "Lymphocytes that aids B cells; CD4+ T cell",
        "Poisons (antigens)",
        "T lymphocytes that inhibit the activity of B and T cells",
        "Cytokines secreted by cytotoxic T cells",
        "Transformed B cells that secrete antibodies",
        "T lymphocytes that directly kill foreign cells (CD8+ T cells)"
        
        
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>immunoglobulins #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Antibodies—IgA, IgE, IgG, IgM, IgD",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>toxins #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Poisons (antigens)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>helper T cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Lymphocytes that aids B cells; CD4 + T cell",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>suppressor T cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "T lymphocytes that inhibit the activity of B and T cells",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>cytotoxic T cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "T lymphocytes that directly kill foreign cells (CD8 + T cells)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>plasma cells #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Transformed B cells that secrete antibodies",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>interferons and interleukins #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Cytokines secreted by cytotoxic T cells",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
        "AIDS",
        "allergen",
        "anaphylaxis",
        "Hodgkin lymphoma",
        "hypersplenism",
        "lymphedema",
        "lymphoid organs",
        "thymectomy" 
        
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>syndrome marked by enlargement of the spleen and associated with anemia, leukopenia, and thrombocytopenia #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "hypersplenism",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>extraordinary hypersensitivity to a foreign protein; marked by hypotension, shock, and respiratory distress #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "anaphylaxis",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>antigen capable of causing allergy (hypersensitivity) #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "allergen",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>disorder in which the immune system is suppressed by exposure to HIV #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "AIDS",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>removal of a mediastinal organ #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "thymectomy",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>malignant tumor of lymphoid tissue in the lymph nodes and spleen; Reed-Sternberg cells are in lymph nodes #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Hodgkin lymphoma",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>spleen, thymus, and tonsils #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "lymphoid organs",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"inline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>swelling of tissues due to interstitial fluid accumulation #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "lymphedema",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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
        "CD4+ T cells",
        "ELISA",
        "HAART",
        "HIV",
        "Kaposi sarcoma",
        "opportunistic infections",
        "protease inhibitor",
        "reverse transcriptase inhibitor",
        "viral load test",
        "wasting syndrome"
        
        
      ],
      items: [
        {
          headerImage:{},
          dropdownHtml:`<span>malignant condition associated with AIDS (purplish skin nodules appear) #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "Kaposi sarcoma",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>human immunodeficiency virus; the retrovirus that causes AIDS #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "HIV",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>white blood cells that are destroyed by the AIDS virus #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "CD4 + T cells",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>group of infectious diseases associated with AIDS  #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "opportunistic infections",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>measures the amount of HIV in blood  #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "viral load test",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>weight loss with decreased muscular strength, appetite, and mental activity #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "wasting syndrome",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>drug used to treat AIDS by blocking an enzyme needed to make copies of HIV #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "reverse transcriptase inhibitor",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>drug used to treat AIDS by blocking the production of an enzyme that creates new viral pieces for HIV #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "protease inhibitor",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>use of combinations of drugs to treat AIDS  #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "HAART (highly active antiretroviral therapy)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
          },
          dropdownPlacement:"newline",//inline
        },
        {
          headerImage:{},
          dropdownHtml:`<span>test to detect anti-HIV antibodies  #dropdown1#</span>`,
          dropdowns:{
            dropdown1:{values:[],correctValue: "ELISA (enzyme-linked immunosorbent assay)",dropdownlabel:"Select the Procedures", useCommonOptions:"true"},
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

    group13: {
      id: "group13",
      type: "dropdown",
      placeholder_id: "group13_placeholder",
      commonDropdownOptions:[],
      items: [
        { 
          
          dropdownHtml:`<span>Mr. Blake had been HIV-positive for 5 years before he developed #dropdown1# and was diagnosed with #dropdown2# .</span>`,
          dropdowns:{
            dropdown1:{values:["Pneumocystis pneumonia","thymoma","multiple myeloma"],correctValue: "Pneumocystis pneumonia",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["Hodgkin lymphoma","non-Hodgkin lymphoma","AIDS"],correctValue: "AIDS",dropdownlabel:"Select the type of view", useCommonOptions:"false"}
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Mary developed rhinitis, rhinorrhea, and red eyes every spring when pollen was prevalent. She consulted her doctor about her severe #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:["hypersplenism","allergies","lymphadenitis"],correctValue: "allergies",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Paul felt some marble-sized lumps in his left groin. His doctor told him that he had an infection in his foot and had developed secondary #dropdown1# lymphadenopathy.</span>`,
          dropdowns:{
            dropdown1:{values:["axillary","cervical","inguinal"],correctValue: "inguinal",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Mr. Jones was referred to a dermatologist and an oncologist when his primary physician noticed purple spots on his arms and legs. Because he had AIDS, his physician was concerned about the possibility of #dropdown1# .</span>`,
          dropdowns:{
            dropdown1:{values:["Kaposi sarcoma","splenomegaly","thrombocytopenic purpura"],correctValue: "Kaposi sarcoma",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span> Fifteen-year-old Peter was allergic to peanuts. His allergy was so severe that he carried epinephrine with him at all times to prevent #dropdown1# in case he came in contact with peanut butter at school.</span>`,
          dropdowns:{
            dropdown1:{values:["adaptive immunity","anaphylaxis","immunosuppression"],correctValue: "anaphylaxis",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>When she was in her mid-20s, Rona was diagnosed with a lymph node malignancy known as #dropdown1# . Because the disease was primarily in her chest, her #dropdown2#  lymph nodes were irradiated (radiation therapy), and she was cured. When she developed lung cancer in her mid-40s, her oncologist told her she had a/an #dropdown3# radiation-induced secondary tumor.</span>`,
          dropdowns:{
            dropdown1:{values:["sarcoidosis","Kaposi sarcoma","Hodgkin lymphoma"],correctValue: "Hodgkin lymphoma",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["inguinal","mediastinal","axillary"],correctValue: "mediastinal",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown3:{values:["iatrogenic","hereditary","metastatic"],correctValue: "iatrogenic",dropdownlabel:"Select the type of view", useCommonOptions:"false"}
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        
        { 
          
          dropdownHtml:`<span>Mary has suffered from hay fever, asthma, and chronic dermatitis ever since she was a young child. She has been particularly bothered by the severely pruritic (itching), erythematous (reddish) patches on her hands. Her dermatologist gave her topical steroids for her #dropdown1# dermatitis and told her to avoid soaps, cosmetics, and irritating chemicals.</span>`,
          dropdowns:{
            dropdown1:{values:["toxic","atopic","opportunistic"],correctValue: "atopic",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Bernie noticed pain in his pelvis, spine, and ribs and was evaluated by his physician. Blood tests showed high levels of plasma cells and abnormal globulins. Increased numbers of plasma cells were revealed on #dropdown1# v. Radiologic studies showed bone loss. The physician's diagnosis was multiple #dropdown2# .</span>`,
          dropdowns:{
            dropdown1:{values:["chest x-ray","stem cell transplantation","bone marrow biopsy"],correctValue: " bone marrow biopsy",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["sclerosis","thymoma", "myeloma"],correctValue: "myeloma",dropdownlabel:"Select the position of the heart", useCommonOptions:"false"}
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>AIDS is caused by #dropdown1# . Lymphocytes called #dropdown2# are destroyed, leading to #dropdown3# .</span>`,
          dropdowns:{
            dropdown1:{values:["herpes simplex virus","human immunodeficiency virus","monoclonal antibodies"],correctValue: "human immunodeficiency virus",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["CD4+ cells","suppressor cells", "B cells"],correctValue: "CD4+ cells",dropdownlabel:"Select the position of the heart", useCommonOptions:"false"},
            dropdown3:{values:["anaphylaxis","atopy", "opportunistic infections"],correctValue: "opportunistic infections",dropdownlabel:"Select the position of the heart", useCommonOptions:"false"}
          },
          dropdownPlacement:"inline",//newline
          correctFeedback: `Your answer is correct.`,
          incorrectFeedback: `Your answer is incorrect.`
        },
        { 
          
          dropdownHtml:`<span>Drugs used to treat AIDS are #dropdown1# . Other anti-AIDS drugs are #dropdown2# .</span>`,
          dropdowns:{
            dropdown1:{values:["immunosuppressants","protease inhibitors","interferons"],correctValue: "protease inhibitors",dropdownlabel:"Select the type of view", useCommonOptions:"false"},
            dropdown2:{values:["reverse transcriptase inhibitors","monoclonal antibodies", "immunoglobulins"],correctValue: "reverse transcriptase inhibitors",dropdownlabel:"Select the position of the heart", useCommonOptions:"false"}
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
          
          clozeHtml:`<span>removal of the spleen: #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "splenectomy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>enlargement of the spleen:  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "splenomegaly", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>formation of lymph: #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "lymphopoiesis", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>tumor of the thymus gland:  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "thymoma", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>inflammation of lymph glands (nodes):  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "lymphadenitis", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>deficiency of lymph cells:  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "lymphocytopenia", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>pertaining to poison:  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "toxic", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>disease of lymph glands (nodes):  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "lymphadenopathy", clozelabel:"fill in the blank"},
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
          
          clozeHtml:`<span>chronic, disabling diseases caused by abnormal production of antibodies to normal tissue: auto  #cloze1# diseases</span>`,
          clozes:{
            cloze1:{correctValue: "immune", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>a hypersensitivity or allergic state with an inherited predisposition: a  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "topy", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>a malignant tumor of lymph nodes; follicular and large cell are types of this disease: non  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "Hodgkin lymphoma", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>fluid that lies between cells throughout the body: inter  #cloze1# fluid</span>`,
          clozes:{
            cloze1:{correctValue: "stitial", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>formation of lymphocytes or lymphoid tissue: lympho  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "poiesis", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>chronic swelling of a part of the body due to collection of fluid between tissues secondary to obstruction of lymph vessels and nodes: lymph  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "edema", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>an unusual or exaggerated allergic reaction to a foreign protein: ana  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "phylaxis", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>introduction of altered antigens to produce an immune response and protection from disease: vac  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "cination", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>test that separates immunoglobulins: immuno  #cloze1#</span>`,
          clozes:{
            cloze1:{correctValue: "electrophoresis", clozelabel:"fill in the blank"},
          },
          clozePlacement:"inline",//newline
        },
        {
          
          headerImage:{},            
          
          clozeHtml:`<span>antibody used in immunotherapy; produced in a laboratory to attack antigens and destroy cells: mono  #cloze1# antibody</span>`,
          clozes:{
            cloze1:{correctValue: "clonal", clozelabel:"fill in the blank"},
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
      type: "reflective_writing", //Short Answers
      placeholder_id: "group16_placeholder",
      items: [
        
        {
          title: `inguinal nodes`,
          feedback: `<span>groin region</span>`,
        },
       {
          title: `axillary nodes`,
          feedback: `<span>armpit region</span>`,
        },
        {
          title: `cervical nodes`,
          feedback: `<span>neck (of the body) region</span>`,
        },
        {
          title: `mediastinal nodes`,
          feedback: `<span>space between the lungs in the chest</span>`,
        },
        {
          title: `paraaortic nodes`,
          feedback: `<span>near the aorta in the lumbar area of the body</span>`,
        },
        {
          title: `mesenteric nodes`,
          feedback: `<span>intestinal region</span>`,
        },
        
        
      ],
      optionStyleType: "st-decimal",
      itemSeperator: "true",
    },
    },
};