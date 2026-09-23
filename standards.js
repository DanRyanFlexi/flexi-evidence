// ═══════════════════════════════════════════════════════════
//  ACARA V9 ACHIEVEMENT STANDARDS — Reception (Foundation) to Year 10
//  English & Mathematics
//  App label: "Reception" | ACARA label: "Foundation"
// ═══════════════════════════════════════════════════════════

const ACARA_WORK_SAMPLES = {
  English: {
    'Reception': 'https://www.australiancurriculum.edu.au/resources/work-samples/english/foundation',
    'Year 1':    'https://www.australiancurriculum.edu.au/resources/work-samples/english/year-1',
    'Year 2':    'https://www.australiancurriculum.edu.au/resources/work-samples/english/year-2',
    'Year 3':    'https://www.australiancurriculum.edu.au/resources/work-samples/english/year-3',
    'Year 4':    'https://www.australiancurriculum.edu.au/resources/work-samples/english/year-4',
    'Year 5':    'https://www.australiancurriculum.edu.au/resources/work-samples/english/year-5',
    'Year 6':    'https://www.australiancurriculum.edu.au/resources/work-samples/english/year-6',
    'Year 7':    'https://www.australiancurriculum.edu.au/resources/work-samples/english/year-7',
    'Year 8':    'https://www.australiancurriculum.edu.au/resources/work-samples/english/year-8',
    'Year 9':    'https://www.australiancurriculum.edu.au/resources/work-samples/english/year-9',
    'Year 10':   'https://www.australiancurriculum.edu.au/resources/work-samples/english/year-10',
  },
  Mathematics: {
    'Reception': 'https://www.australiancurriculum.edu.au/resources/work-samples/mathematics/foundation',
    'Year 1':    'https://www.australiancurriculum.edu.au/resources/work-samples/mathematics/year-1',
    'Year 2':    'https://www.australiancurriculum.edu.au/resources/work-samples/mathematics/year-2',
    'Year 3':    'https://www.australiancurriculum.edu.au/resources/work-samples/mathematics/year-3',
    'Year 4':    'https://www.australiancurriculum.edu.au/resources/work-samples/mathematics/year-4',
    'Year 5':    'https://www.australiancurriculum.edu.au/resources/work-samples/mathematics/year-5',
    'Year 6':    'https://www.australiancurriculum.edu.au/resources/work-samples/mathematics/year-6',
    'Year 7':    'https://www.australiancurriculum.edu.au/resources/work-samples/mathematics/year-7',
    'Year 8':    'https://www.australiancurriculum.edu.au/resources/work-samples/mathematics/year-8',
    'Year 9':    'https://www.australiancurriculum.edu.au/resources/work-samples/mathematics/year-9',
    'Year 10':   'https://www.australiancurriculum.edu.au/resources/work-samples/mathematics/year-10',
  }
};

const STD = {
  English: {
    'Reception': {
      strands: ['Speaking & Listening', 'Reading & Viewing', 'Writing & Creating'],
      standards: [
        { code:'AC9EFS1', strand:'Speaking & Listening', text:'Listen to texts, interact with others and create short spoken texts, including retelling stories. Share thoughts and preferences, retell events and report information or key ideas to an audience.' },
        { code:'AC9EFS2', strand:'Speaking & Listening', text:'Use language features including words and phrases from learning and texts. Listen for and identify rhymes, letter patterns and sounds (phonemes) in words.' },
        { code:'AC9EFS3', strand:'Speaking & Listening', text:'Orally blend and segment phonemes in single-syllable words.' },
        { code:'AC9EFR1', strand:'Reading & Viewing', text:'Read, view and comprehend texts, making connections between characters, settings and events, and to personal experiences.' },
        { code:'AC9EFR2', strand:'Reading & Viewing', text:'Identify the language features of texts including connections between print and images. Name the letters of the English alphabet and know and use the most common sounds represented by these letters.' },
        { code:'AC9EFR3', strand:'Reading & Viewing', text:'Read words including consonant–vowel–consonant words and some high-frequency words.' },
        { code:'AC9EFW1', strand:'Writing & Creating', text:'Create short written texts, including retelling stories using words and images where appropriate. Retell, report information and state thoughts, feelings and key ideas.' },
        { code:'AC9EFW2', strand:'Writing & Creating', text:'Use words and phrases from learning and texts. Form letters, spell most consonant–vowel–consonant words and experiment with capital letters and full stops.' },
      ]
    },
    'Year 1': {
      strands: ['Speaking & Listening', 'Reading & Viewing', 'Writing & Creating'],
      standards: [
        { code:'AC9E1S1', strand:'Speaking & Listening', text:'Listen to and create spoken and/or multimodal texts to entertain and inform, sharing ideas, experiences and information and expressing preferences, with some details.' },
        { code:'AC9E1S2', strand:'Speaking & Listening', text:'Demonstrate understanding of how text structures are used to organise information in a text. Use language features including words, phrases and simple sentences.' },
        { code:'AC9E1S3', strand:'Speaking & Listening', text:'Listen for rhyme, letter patterns and sounds in words, and blend and segment phonemes in multi-syllable words.' },
        { code:'AC9E1R1', strand:'Reading & Viewing', text:'Read, view and comprehend texts, identifying key ideas and making connections between characters, settings and events, and to personal experiences.' },
        { code:'AC9E1R2', strand:'Reading & Viewing', text:'Identify how texts are organised differently depending on their purpose. Identify how language features including words, phrases and images create meaning.' },
        { code:'AC9E1R3', strand:'Reading & Viewing', text:'Read words using knowledge of letter–sound relationships including consonant blends and digraphs, short and long vowels, and common sight words.' },
        { code:'AC9E1W1', strand:'Writing & Creating', text:'Create written and/or multimodal texts to entertain and inform, sharing ideas, experiences and information and expressing preferences, with some details.' },
        { code:'AC9E1W2', strand:'Writing & Creating', text:'Use text structures to organise ideas and use language features including words, phrases and simple sentences with capital letters, full stops and some correct spelling.' },
      ]
    },
    'Year 2': {
      strands: ['Speaking & Listening', 'Reading & Viewing', 'Writing & Creating'],
      standards: [
        { code:'AC9E2S1', strand:'Speaking & Listening', text:'Listen to and create spoken and/or multimodal texts to entertain and inform, organising ideas in some detail, making connections to personal experience and expressing a point of view.' },
        { code:'AC9E2S2', strand:'Speaking & Listening', text:'Identify how text structures and language features including words, phrases and images create meaning in texts.' },
        { code:'AC9E2S3', strand:'Speaking & Listening', text:'Use developing knowledge of phonics, morphemes, grammar and punctuation when creating texts.' },
        { code:'AC9E2R1', strand:'Reading & Viewing', text:'Read, view and comprehend texts, identifying the main idea, key details and some implied meaning and connecting ideas and information to personal experience.' },
        { code:'AC9E2R2', strand:'Reading & Viewing', text:'Identify how text structures and language features including literary devices, words, phrases and images create meaning and effect in texts.' },
        { code:'AC9E2R3', strand:'Reading & Viewing', text:'Read words using knowledge of letter–sound relationships, morphemes and common sight words, self-correcting when reading does not make sense.' },
        { code:'AC9E2W1', strand:'Writing & Creating', text:'Create written and/or multimodal texts to entertain and inform, organising ideas with some detail, making connections to personal experience and expressing a point of view.' },
        { code:'AC9E2W2', strand:'Writing & Creating', text:'Use text structures and language features including words, phrases and simple and compound sentences with correct spelling of most common words and use of capital letters, full stops and question marks.' },
      ]
    },
    'Year 3': {
      strands: ['Speaking & Listening', 'Reading & Viewing', 'Writing & Creating'],
      standards: [
        { code:'AC9E3S1', strand:'Speaking & Listening', text:'Listen to and create spoken and/or multimodal texts to entertain and inform, organising ideas in a way that attempts to meet the purpose of the text, with some supporting detail.' },
        { code:'AC9E3S2', strand:'Speaking & Listening', text:'Identify how text structures and language features including literary devices and images are used to create meaning and effect.' },
        { code:'AC9E3R1', strand:'Reading & Viewing', text:'Read, view and comprehend texts, identifying the main idea, key details and implied meaning and making connections between ideas and information in texts and to personal experience.' },
        { code:'AC9E3R2', strand:'Reading & Viewing', text:'Identify how text structures, language features including literary devices and images create meaning and effect in texts.' },
        { code:'AC9E3R3', strand:'Reading & Viewing', text:'Identify how texts reflect the context in which they were created.' },
        { code:'AC9E3W1', strand:'Writing & Creating', text:'Create written and/or multimodal texts to entertain and inform, organising ideas to meet the purpose of the text, with some supporting detail.' },
        { code:'AC9E3W2', strand:'Writing & Creating', text:'Use text structures and language features including words, phrases, and simple, compound and some complex sentences, with correct spelling of common words and use of capital letters, full stops, exclamation marks and commas.' },
      ]
    },
    'Year 4': {
      strands: ['Speaking & Listening', 'Reading & Viewing', 'Writing & Creating'],
      standards: [
        { code:'AC9E4S1', strand:'Speaking & Listening', text:'Listen to and create spoken and/or multimodal texts to entertain and inform, organising ideas logically, with some detail and supporting evidence.' },
        { code:'AC9E4S2', strand:'Speaking & Listening', text:'Identify how text structures, language features including literary devices and visual features create meaning and effect.' },
        { code:'AC9E4R1', strand:'Reading & Viewing', text:'Read, view and comprehend texts, identifying and explaining the main idea, key details and implied meaning, and making connections between ideas and information in texts and to personal experience.' },
        { code:'AC9E4R2', strand:'Reading & Viewing', text:'Identify how text structures, language features including literary devices and visual features create meaning and effect in texts.' },
        { code:'AC9E4R3', strand:'Reading & Viewing', text:'Identify how texts reflect the contexts in which they were created.' },
        { code:'AC9E4W1', strand:'Writing & Creating', text:'Create written and/or multimodal texts to entertain and inform, organising ideas logically, with some detail and supporting evidence.' },
        { code:'AC9E4W2', strand:'Writing & Creating', text:'Use text structures and language features including literary devices, words, phrases, and simple, compound and complex sentences, with mostly correct spelling, punctuation and grammar.' },
      ]
    },
    'Year 5': {
      strands: ['Speaking & Listening', 'Reading & Viewing', 'Writing & Creating'],
      standards: [
        { code:'AC9E5S1', strand:'Speaking & Listening', text:'Listen to and create spoken and/or multimodal texts including literary texts, for different purposes and audiences, organising ideas logically with detail and supporting evidence.' },
        { code:'AC9E5S2', strand:'Speaking & Listening', text:'Use text structures and language features including literary devices and visual features to create meaning and effect.' },
        { code:'AC9E5R1', strand:'Reading & Viewing', text:'Read, view and comprehend texts created to inform, influence and/or engage audiences, explaining key ideas, and making connections between ideas and information in texts and to personal experience.' },
        { code:'AC9E5R2', strand:'Reading & Viewing', text:'Identify how text structures, language features including literary devices and visual features shape meaning and create effect.' },
        { code:'AC9E5R3', strand:'Reading & Viewing', text:'Identify how texts reflect the contexts in which they were created and identify the audience they are aimed at.' },
        { code:'AC9E5W1', strand:'Writing & Creating', text:'Create written and/or multimodal texts, including literary texts, for different purposes and audiences, organising ideas logically with detail and supporting evidence.' },
        { code:'AC9E5W2', strand:'Writing & Creating', text:'Use text structures and language features including literary devices, words, phrases and a variety of sentence types, with accurate spelling, punctuation and grammar.' },
      ]
    },
    'Year 6': {
      strands: ['Speaking & Listening', 'Reading & Viewing', 'Writing & Creating'],
      standards: [
        { code:'AC9E6S1', strand:'Speaking & Listening', text:'Listen to and create spoken and/or multimodal texts including literary texts, for different purposes and audiences, discussing and expressing ideas with supporting evidence.' },
        { code:'AC9E6S2', strand:'Speaking & Listening', text:'Adopt text structures and language features including literary devices and visual features to create meaning and effect.' },
        { code:'AC9E6R1', strand:'Reading & Viewing', text:'Read, view and comprehend texts created to inform, influence and/or engage audiences, identifying how ideas are portrayed and how texts are influenced by contexts.' },
        { code:'AC9E6R2', strand:'Reading & Viewing', text:'Identify the aesthetic qualities of texts and how text structures, language features including literary devices and visual features shape meaning.' },
        { code:'AC9E6R3', strand:'Reading & Viewing', text:'Identify how language features, including rhetorical devices, are used to represent ideas and perspectives.' },
        { code:'AC9E6W1', strand:'Writing & Creating', text:'Create written and/or multimodal texts, including literary texts, for different purposes and audiences, discussing and expressing ideas with supporting evidence.' },
        { code:'AC9E6W2', strand:'Writing & Creating', text:'Adopt text structures and language features including literary devices, words, phrases and varied sentence types, with accurate spelling, punctuation and grammar.' },
      ]
    },
    'Year 7': {
      strands: ['Speaking & Listening', 'Reading & Viewing', 'Writing & Creating'],
      standards: [
        { code:'AC9E7S1', strand:'Speaking & Listening', text:'Interact with others and listen to and create spoken and/or multimodal texts including literary texts, discussing, expressing and expanding ideas with evidence for different purposes and audiences.' },
        { code:'AC9E7S2', strand:'Speaking & Listening', text:'Adopt text structures to organise, develop and link ideas in spoken and multimodal texts.' },
        { code:'AC9E7S3', strand:'Speaking & Listening', text:'Adopt language features including literary devices, multimodal features and features of voice in spoken and multimodal texts.' },
        { code:'AC9E7R1', strand:'Reading & Viewing', text:'Read, view and comprehend texts created to inform, influence and/or engage audiences, identifying how ideas are portrayed and how texts are influenced by contexts.' },
        { code:'AC9E7R2', strand:'Reading & Viewing', text:'Identify the aesthetic qualities of texts and how text structures, language features including literary devices and visual features shape meaning.' },
        { code:'AC9E7R3', strand:'Reading & Viewing', text:'Identify how techniques such as vectors, angle and/or social distance in visual texts can be used to create a perspective.' },
        { code:'AC9E7W1', strand:'Writing & Creating', text:'Create written and/or multimodal texts, including literary texts, for different purposes and audiences, expressing and expanding on ideas with evidence.' },
        { code:'AC9E7W2', strand:'Writing & Creating', text:'Adopt text structures to organise, develop and link ideas in written and multimodal texts.' },
        { code:'AC9E7W3', strand:'Writing & Creating', text:'Adopt language features including literary devices and/or multimodal features in written and multimodal texts.' },
      ]
    },
    'Year 8': {
      strands: ['Speaking & Listening', 'Reading & Viewing', 'Writing & Creating'],
      standards: [
        { code:'AC9E8S1', strand:'Speaking & Listening', text:'Interact with others and listen to and create spoken and/or multimodal texts including literary texts, discussing, expressing and elaborating on ideas with supporting evidence for different purposes and audiences.' },
        { code:'AC9E8S2', strand:'Speaking & Listening', text:'Select and vary text structures to organise, develop and link ideas in spoken and multimodal texts.' },
        { code:'AC9E8S3', strand:'Speaking & Listening', text:'Select and vary language features including literary devices, multimodal features and features of voice in spoken texts.' },
        { code:'AC9E8R1', strand:'Reading & Viewing', text:'Read, view and comprehend a range of texts created to inform, influence and/or engage audiences, explaining how ideas are represented and how texts reflect or challenge contexts.' },
        { code:'AC9E8R2', strand:'Reading & Viewing', text:'Explain the aesthetic qualities of texts and how text structures shape meaning, and analyse the effect of language features including literary devices and visual features.' },
        { code:'AC9E8R3', strand:'Reading & Viewing', text:'Explain how language features, including rhetorical devices and conventions of genres, are used to represent ideas and perspectives.' },
        { code:'AC9E8W1', strand:'Writing & Creating', text:'Create written and/or multimodal texts, including literary texts, for different purposes and audiences, expressing and elaborating on ideas with supporting evidence.' },
        { code:'AC9E8W2', strand:'Writing & Creating', text:'Select and vary text structures to organise, develop and link ideas in written and multimodal texts.' },
        { code:'AC9E8W3', strand:'Writing & Creating', text:'Select and vary language features including literary devices and/or multimodal features in written and multimodal texts.' },
      ]
    },
    'Year 9': {
      strands: ['Speaking & Listening', 'Reading & Viewing', 'Writing & Creating'],
      standards: [
        { code:'AC9E9S1', strand:'Speaking & Listening', text:'Interact with others and listen to and create spoken and multimodal texts including literary texts, discussing and expanding on ideas, shaping meaning and providing substantiation for a range of purposes and audiences.' },
        { code:'AC9E9S2', strand:'Speaking & Listening', text:'Select and experiment with text structures to organise and develop ideas in spoken and multimodal texts.' },
        { code:'AC9E9S3', strand:'Speaking & Listening', text:'Select and experiment with language features including literary devices, multimodal features and features of voice in spoken texts.' },
        { code:'AC9E9R1', strand:'Reading & Viewing', text:'Read, view and comprehend texts created to inform, influence and/or engage audiences, analysing how ideas are represented and how texts are positioned within or challenge contexts.' },
        { code:'AC9E9R2', strand:'Reading & Viewing', text:'Analyse the aesthetic qualities of texts and how text structures, language features including literary devices and visual features create meaning and effect.' },
        { code:'AC9E9R3', strand:'Reading & Viewing', text:'Analyse how language features, including rhetorical devices and conventions, are used across texts to represent ideas, perspectives and/or stances.' },
        { code:'AC9E9W1', strand:'Writing & Creating', text:'Create written and multimodal texts, including literary texts, for a range of purposes and audiences, discussing and expanding on ideas, shaping meaning and providing substantiation.' },
        { code:'AC9E9W2', strand:'Writing & Creating', text:'Select and experiment with text structures to organise and develop ideas in written and multimodal texts.' },
        { code:'AC9E9W3', strand:'Writing & Creating', text:'Select and experiment with language features including literary devices and/or multimodal features in written texts.' },
      ]
    },
    'Year 10': {
      strands: ['Speaking & Listening', 'Reading & Viewing', 'Writing & Creating'],
      standards: [
        { code:'AC9E10S1', strand:'Speaking & Listening', text:'Interact with others and listen to and create spoken and multimodal texts including literary texts, discussing ideas and responses to representations, making connections and providing substantiation for a range of purposes and audiences.' },
        { code:'AC9E10S2', strand:'Speaking & Listening', text:'Select and experiment with text structures to organise and develop ideas in spoken and multimodal texts.' },
        { code:'AC9E10S3', strand:'Speaking & Listening', text:'Select, vary and experiment with language features including rhetorical and literary devices, and multimodal features and features of voice in spoken texts.' },
        { code:'AC9E10R1', strand:'Reading & Viewing', text:'Read, view and comprehend texts created to inform, influence and/or engage audiences, evaluating how ideas are represented and how texts are positioned within, reflect or challenge contexts and perspectives.' },
        { code:'AC9E10R2', strand:'Reading & Viewing', text:'Evaluate the aesthetic qualities of texts and analyse how text structures, language features including rhetorical and literary devices and visual features create meaning and effect.' },
        { code:'AC9E10R3', strand:'Reading & Viewing', text:'Evaluate how language features, including rhetorical devices and conventions, are used across texts to construct and challenge representations of ideas, perspectives and/or stances.' },
        { code:'AC9E10W1', strand:'Writing & Creating', text:'Create written and multimodal texts, including literary texts, for a range of purposes and audiences, discussing ideas and responses to representations, making connections and providing substantiation.' },
        { code:'AC9E10W2', strand:'Writing & Creating', text:'Select and experiment with text structures to organise and develop ideas in written and multimodal texts.' },
        { code:'AC9E10W3', strand:'Writing & Creating', text:'Select, vary and experiment with language features including rhetorical and literary devices and/or multimodal features in written texts.' },
      ]
    },
  },

  Mathematics: {
    'Reception': {
      strands: ['Number', 'Algebra', 'Measurement', 'Space', 'Statistics', 'Probability'],
      standards: [
        { code:'AC9MFN1', strand:'Number', text:'Make connections between number names, numerals and quantities up to 10, including zero. Subitise small collections of objects.' },
        { code:'AC9MFN2', strand:'Number', text:'Compare and order small collections of objects using language such as more than, fewer than, the same as to describe the size of collections.' },
        { code:'AC9MFN3', strand:'Number', text:'Count to and from 20 and order small collections. Represent and solve simple addition and subtraction problems using materials.' },
        { code:'AC9MFA1', strand:'Algebra', text:'Recognise, copy and continue repeating patterns represented in different ways.' },
        { code:'AC9MFM1', strand:'Measurement', text:'Compare objects using mass, length and capacity. Connect events and the days of the week. Explain the order and duration of events.' },
        { code:'AC9MFSP1', strand:'Space', text:'Use appropriate language to describe location. Sort and name familiar 2D shapes and 3D objects.' },
        { code:'AC9MFST1', strand:'Statistics', text:'Answer simple questions to collect information and make simple inferences.' },
      ]
    },
    'Year 1': {
      strands: ['Number', 'Algebra', 'Measurement', 'Space', 'Statistics', 'Probability'],
      standards: [
        { code:'AC9M1N1', strand:'Number', text:'Identify representations of one half. Recognise Australian coins according to their value. Count to and from 100 and locate numbers on a number line.' },
        { code:'AC9M1N2', strand:'Number', text:'Carry out simple additions and subtractions using counting strategies. Partition numbers using place value.' },
        { code:'AC9M1N3', strand:'Number', text:'Describe number sequences resulting from skip counting by 2s, 5s and 10s.' },
        { code:'AC9M1A1', strand:'Algebra', text:'Continue simple patterns involving numbers and objects and identify the missing element in a number sequence.' },
        { code:'AC9M1M1', strand:'Measurement', text:'Order objects based on lengths and capacities using informal units. Tell time to the half-hour. Explain time durations.' },
        { code:'AC9M1SP1', strand:'Space', text:'Describe two-dimensional shapes and three-dimensional objects. Use the language of direction to move from place to place.' },
        { code:'AC9M1ST1', strand:'Statistics', text:'Collect data by asking questions, draw simple data displays and make simple inferences.' },
        { code:'AC9M1P1', strand:'Probability', text:'Classify outcomes of simple familiar events as likely or unlikely and identify some events as certain or impossible.' },
      ]
    },
    'Year 2': {
      strands: ['Number', 'Algebra', 'Measurement', 'Space', 'Statistics', 'Probability'],
      standards: [
        { code:'AC9M2N1', strand:'Number', text:'Recognise increasing and decreasing number sequences involving 2s, 3s and 5s. Count to and from 1000. Perform simple addition and subtraction calculations using a range of strategies.' },
        { code:'AC9M2N2', strand:'Number', text:'Represent multiplication and division by grouping into sets. Divide collections and shapes into halves, quarters and eighths.' },
        { code:'AC9M2N3', strand:'Number', text:'Associate collections of Australian coins with their value.' },
        { code:'AC9M2A1', strand:'Algebra', text:'Identify the missing element in a number sequence. Describe and continue patterns formed by skip-counting.' },
        { code:'AC9M2M1', strand:'Measurement', text:'Order shapes and objects using informal units. Tell time to the quarter-hour and use a calendar to identify the date and the months included in seasons.' },
        { code:'AC9M2SP1', strand:'Space', text:'Recognise the features of three-dimensional objects. Interpret simple maps of familiar locations. Explain the effects of one-step transformations.' },
        { code:'AC9M2ST1', strand:'Statistics', text:'Collect, organise and represent data to make simple inferences.' },
        { code:'AC9M2P1', strand:'Probability', text:'Describe outcomes of familiar events as likely or unlikely and identify some events as certain or impossible.' },
      ]
    },
    'Year 3': {
      strands: ['Number', 'Algebra', 'Measurement', 'Space', 'Statistics', 'Probability'],
      standards: [
        { code:'AC9M3N1', strand:'Number', text:'Recognise the connection between addition and subtraction and solve problems using efficient strategies for multiplication. Model and represent unit fractions. Represent money values in various ways.' },
        { code:'AC9M3N2', strand:'Number', text:'Apply place value to partition, rearrange and regroup numbers to at least 10 000.' },
        { code:'AC9M3A1', strand:'Algebra', text:'Describe, continue and create number patterns resulting from performing addition or subtraction.' },
        { code:'AC9M3M1', strand:'Measurement', text:'Measure, order and compare objects using familiar metric units of length, mass and capacity. Tell time to the nearest minute.' },
        { code:'AC9M3SP1', strand:'Space', text:'Identify symmetry in the environment. Match positions on maps with given information. Recognise angles in real situations.' },
        { code:'AC9M3ST1', strand:'Statistics', text:'Collect data, organise into categories and create displays using lists, tables, picture graphs and simple column graphs.' },
        { code:'AC9M3P1', strand:'Probability', text:'Conduct chance experiments, identify and describe possible outcomes and recognise variation in results.' },
      ]
    },
    'Year 4': {
      strands: ['Number', 'Algebra', 'Measurement', 'Space', 'Statistics', 'Probability'],
      standards: [
        { code:'AC9M4N1', strand:'Number', text:'Apply place value to partition, rearrange and regroup numbers to at least tens of thousands. Solve problems involving addition and subtraction of 4-digit numbers.' },
        { code:'AC9M4N2', strand:'Number', text:'Recall multiplication facts up to 10 × 10 and related division facts. Solve problems involving multiplication of large numbers by 1- or 2-digit numbers.' },
        { code:'AC9M4N3', strand:'Number', text:'Count by quarters, halves and thirds, including with mixed numerals. Locate and represent these fractions on a number line.' },
        { code:'AC9M4A1', strand:'Algebra', text:'Explore and describe number patterns resulting from performing multiplication. Solve word problems by using number sentences involving multiplication or division.' },
        { code:'AC9M4M1', strand:'Measurement', text:'Use scaled instruments to measure and compare lengths, masses, capacities and temperatures. Convert between units of time.' },
        { code:'AC9M4SP1', strand:'Space', text:'Compare the areas of regular and irregular shapes by informal means. Create symmetrical patterns, pictures and shapes with and without digital technologies.' },
        { code:'AC9M4ST1', strand:'Statistics', text:'Select and trial methods for data collection including survey questions and recording sheets. Construct suitable data displays, with and without the use of digital technologies.' },
        { code:'AC9M4P1', strand:'Probability', text:'Describe possible everyday events and order their chances of occurring. Identify everyday events where one cannot happen if the other happens.' },
      ]
    },
    'Year 5': {
      strands: ['Number', 'Algebra', 'Measurement', 'Space', 'Statistics', 'Probability'],
      standards: [
        { code:'AC9M5N1', strand:'Number', text:'Solve simple problems involving the 4 operations with whole numbers. Compare and order common unit fractions and locate and represent them on a number line.' },
        { code:'AC9M5N2', strand:'Number', text:'Investigate strategies to solve problems involving addition and subtraction of fractions with the same denominator. Recognise that the place value system can be extended beyond hundredths.' },
        { code:'AC9M5N3', strand:'Number', text:'Create simple financial plans. Solve problems involving multiplication of large numbers by 2-digit numbers.' },
        { code:'AC9M5A1', strand:'Algebra', text:'Describe, continue and create patterns with fractions, decimals and whole numbers resulting from addition and subtraction.' },
        { code:'AC9M5M1', strand:'Measurement', text:'Choose appropriate units of measurement for length, area, volume, capacity and mass. Calculate perimeter and area of rectangles using familiar metric units.' },
        { code:'AC9M5SP1', strand:'Space', text:'Connect three-dimensional objects with their nets and other two-dimensional representations. Use a grid reference system to describe locations.' },
        { code:'AC9M5ST1', strand:'Statistics', text:'Pose questions and collect categorical or numerical data by observation or survey. Construct displays, including column graphs, dot plots and tables, appropriate for data type.' },
        { code:'AC9M5P1', strand:'Probability', text:'List outcomes of chance experiments involving equally likely outcomes and represent probabilities of those outcomes using fractions.' },
      ]
    },
    'Year 6': {
      strands: ['Number', 'Algebra', 'Measurement', 'Space', 'Statistics', 'Probability'],
      standards: [
        { code:'AC9M6N1', strand:'Number', text:'Identify and describe properties of prime, composite, square and triangular numbers. Select and apply efficient mental and written strategies to solve problems involving all 4 operations with whole numbers.' },
        { code:'AC9M6N2', strand:'Number', text:'Compare fractions with related denominators and locate and represent them on a number line. Solve problems involving addition and subtraction of fractions with related denominators.' },
        { code:'AC9M6N3', strand:'Number', text:'Multiply and divide decimals by powers of 10. Add and subtract decimals, with and without digital technologies, and use estimation and rounding to check the reasonableness of answers.' },
        { code:'AC9M6A1', strand:'Algebra', text:'Continue and create sequences involving whole numbers, fractions and decimals. Describe the rule used to create the sequence.' },
        { code:'AC9M6M1', strand:'Measurement', text:'Solve problems involving the comparison of lengths and areas using appropriate units. Connect volume and capacity and their units of measurement.' },
        { code:'AC9M6SP1', strand:'Space', text:'Construct simple prisms and pyramids. Investigate combinations of translations, reflections and rotations, with and without the use of digital technologies.' },
        { code:'AC9M6ST1', strand:'Statistics', text:'Interpret and compare a variety of data displays, including side-by-side column graphs for two categorical variables.' },
        { code:'AC9M6P1', strand:'Probability', text:'Describe probabilities using fractions, decimals and percentages. Conduct chance experiments with both small and large numbers of trials using appropriate digital technologies.' },
      ]
    },
    'Year 7': {
      strands: ['Number', 'Algebra', 'Measurement', 'Space', 'Statistics', 'Probability'],
      standards: [
        { code:'AC9M7N1', strand:'Number', text:'Represent natural numbers in expanded form and as products of prime factors using exponent notation, solving problems involving squares of numbers and square roots of perfect square numbers.' },
        { code:'AC9M7N2', strand:'Number', text:'Solve problems involving addition and subtraction of integers, using all 4 operations with positive fractions and decimals and choosing efficient calculation strategies.' },
        { code:'AC9M7N3', strand:'Number', text:'Choose between equivalent representations of rational numbers and percentages to assist in calculations, and use mathematical modelling to solve practical problems involving rational numbers, percentages and ratios in financial and other applied contexts.' },
        { code:'AC9M7A1', strand:'Algebra', text:'Use algebraic expressions to represent situations, describe relationships between variables from authentic data and substitute values into formulas to determine unknown values.' },
        { code:'AC9M7A2', strand:'Algebra', text:'Solve linear equations with natural number solutions and create tables of values related to algebraic expressions and formulas, describing the effect of variation.' },
        { code:'AC9M7M1', strand:'Measurement', text:'Solve problems involving the perimeter and area of composite shapes using appropriate metric units, and solve problems involving volume of right prisms.' },
        { code:'AC9M7M2', strand:'Measurement', text:'Demonstrate the relationship between the area of a parallelogram and a rectangle, and solve problems involving duration and time zones.' },
        { code:'AC9M7SP1', strand:'Space', text:'Classify triangles, quadrilaterals and other polygons and describe their properties, and identify and reason about angle relationships.' },
        { code:'AC9M7SP2', strand:'Space', text:'Represent objects and transformations in the plane using coordinates, and describe the effects of transformations.' },
        { code:'AC9M7ST1', strand:'Statistics', text:'Acquire data sets for discrete and continuous numerical variables and calculate mean, median, mode and range, interpreting the variation in data using these measures.' },
        { code:'AC9M7ST2', strand:'Statistics', text:'Create and interpret different representations of data sets including stem-and-leaf plots, and describe and compare distributions of data.' },
        { code:'AC9M7P1', strand:'Probability', text:'Identify the sample space for single-stage events, assign probabilities to the outcomes and predict frequencies for experiments.' },
      ]
    },
    'Year 8': {
      strands: ['Number', 'Algebra', 'Measurement', 'Space', 'Statistics', 'Probability'],
      standards: [
        { code:'AC9M8N1', strand:'Number', text:'Recognise irrational numbers and terminating or recurring decimals, and apply the exponent laws to calculations with numbers involving positive integer exponents.' },
        { code:'AC9M8N2', strand:'Number', text:'Solve problems involving the 4 operations with integers and positive rational numbers, using mathematical modelling to solve practical problems involving ratios, percentages and rates in measurement and financial contexts.' },
        { code:'AC9M8A1', strand:'Algebra', text:'Apply algebraic properties to rearrange, expand and factorise linear expressions.' },
        { code:'AC9M8A2', strand:'Algebra', text:'Graph linear relations and solve linear equations with rational solutions and one-variable inequalities, graphically and algebraically.' },
        { code:'AC9M8M1', strand:'Measurement', text:'Use appropriate metric units when solving measurement problems involving the perimeter and area of composite shapes, and volume of right prisms.' },
        { code:'AC9M8M2', strand:'Measurement', text:'Use Pythagoras\' theorem to solve measurement problems involving unknown lengths of right-angle triangles, and use formulas to solve problems involving the area and circumference of circles.' },
        { code:'AC9M8M3', strand:'Measurement', text:'Solve problems of duration involving 12- and 24-hour cycles across multiple time zones.' },
        { code:'AC9M8SP1', strand:'Space', text:'Use 3 dimensions to locate and describe position, identify conditions for congruency and similarity in shapes.' },
        { code:'AC9M8SP2', strand:'Space', text:'Apply the properties of quadrilaterals to solve problems.' },
        { code:'AC9M8ST1', strand:'Statistics', text:'Conduct statistical investigations and explain the implications of obtaining data through sampling, and analyse and describe the distribution of data.' },
        { code:'AC9M8ST2', strand:'Statistics', text:'Compare the variation in distributions of random samples of the same and different size from a given population with respect to shape, measures of central tendency and range.' },
        { code:'AC9M8P1', strand:'Probability', text:'Represent the possible combinations of 2 events with tables and diagrams, and determine related probabilities to solve practical problems.' },
      ]
    },
    'Year 9': {
      strands: ['Number', 'Algebra', 'Measurement', 'Space', 'Statistics', 'Probability'],
      standards: [
        { code:'AC9M9N1', strand:'Number', text:'Recognise and use rational and irrational numbers to solve problems, and extend and apply the exponent laws with positive integers to variables.' },
        { code:'AC9M9A1', strand:'Algebra', text:'Expand binomial products and factorise monic quadratic expressions.' },
        { code:'AC9M9A2', strand:'Algebra', text:'Find the distance between 2 points on the Cartesian plane, and the gradient and midpoint of a line segment, and use mathematical modelling to solve problems involving change in financial and other applied contexts.' },
        { code:'AC9M9A3', strand:'Algebra', text:'Graph quadratic functions and solve monic quadratic equations with integer roots algebraically.' },
        { code:'AC9M9M1', strand:'Measurement', text:'Solve problems involving the surface area and volume of prisms and cylinders, using appropriate units.' },
        { code:'AC9M9M2', strand:'Measurement', text:'Solve problems involving ratio and scale in similar figures, and apply Pythagoras\' theorem and trigonometry to solve right-angle triangle problems.' },
        { code:'AC9M9SP1', strand:'Space', text:'Apply the enlargement transformation to shapes and describe the relationship between the original and image, and identify line and rotational symmetry.' },
        { code:'AC9M9SP2', strand:'Space', text:'Describe the effects of transformations of 2D shapes using coordinates.' },
        { code:'AC9M9ST1', strand:'Statistics', text:'Analyse data from primary and secondary sources, including bivariate numerical data, and calculate and interpret measures of spread and central tendency.' },
        { code:'AC9M9ST2', strand:'Statistics', text:'Identify everyday questions and issues involving at least one numerical and at least one categorical variable, and collect data directly and from secondary sources.' },
        { code:'AC9M9P1', strand:'Probability', text:'List all outcomes for two-step chance experiments, both with and without replacement, using tree diagrams or arrays, and assign probabilities to outcomes.' },
        { code:'AC9M9P2', strand:'Probability', text:'Calculate relative frequencies from given or collected data to estimate probabilities of events involving "and", "or" and "not" and verify using simulation.' },
      ]
    },
    'Year 10': {
      strands: ['Number', 'Algebra', 'Measurement', 'Space', 'Statistics', 'Probability'],
      standards: [
        { code:'AC9M10N1', strand:'Number', text:'Recognise the effect of using approximations of real numbers in repeated calculations, and solve problems involving the use of scientific notation and significant figures.' },
        { code:'AC9M10A1', strand:'Algebra', text:'Expand and factorise expressions and solve equations algebraically, and use algebraic reasoning to model situations and solve problems.' },
        { code:'AC9M10A2', strand:'Algebra', text:'Graph and describe linear, quadratic and other non-linear relationships, and solve related equations graphically and algebraically.' },
        { code:'AC9M10A3', strand:'Algebra', text:'Substitute into and use simple algebraic models of authentic situations, interpreting and reviewing the model in context.' },
        { code:'AC9M10M1', strand:'Measurement', text:'Solve problems involving surface area and volume of right pyramids, right cones, spheres and related composite solids, using appropriate units.' },
        { code:'AC9M10M2', strand:'Measurement', text:'Apply trigonometry to solve problems involving angles of elevation and depression, and find unknown lengths and angles in non-right-angle triangles.' },
        { code:'AC9M10SP1', strand:'Space', text:'Apply deductive reasoning to proofs involving shapes in the plane, and interpret and use congruence and similarity.' },
        { code:'AC9M10SP2', strand:'Space', text:'Describe and perform combinations of transformations of shapes, and describe the results.' },
        { code:'AC9M10ST1', strand:'Statistics', text:'Compare data distributions for continuous numerical variables using appropriate data displays including box plots, and calculate and interpret quartiles and interquartile range.' },
        { code:'AC9M10ST2', strand:'Statistics', text:'Evaluate statistical reports in the media and other places by linking claims to displays, statistics and representative data.' },
        { code:'AC9M10P1', strand:'Probability', text:'Describe the results of two- and three-step chance experiments, both with and without replacement, assign probabilities to outcomes and determine probabilities of events.' },
        { code:'AC9M10P2', strand:'Probability', text:'Investigate reports of surveys in digital media and elsewhere for information on how data were obtained to estimate population means and medians.' },
      ]
    },
  }
};
