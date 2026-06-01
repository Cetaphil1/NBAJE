// survey-data.js — Fit Beyond Interest · Pilot v2.1 instrument

const AGREE = "agreement";
const FREQ = "frequency";
const SINGLE = "single";
const CONSENT = "consent";
const SHORT = "short_text";
const LONG = "long_text";
const ATTN = "attention";
const ADVISING = "advising";
const FIT = "global_fit";
const YESNO = "yes_no";

const SECTIONS = [
  {
    id: "consent", number: 1,
    title: "Consent and Eligibility",
    subtitle: "Read the following carefully. Participation is voluntary.",
    construct: null,
    questions: [
      {
        id: "consent_agree", type: CONSENT, required: true,
        title: "Informed Consent Agreement",
        help:
          "By checking the box below, you confirm that:\n" +
          "• You are 18 years of age or older\n" +
          "• You understand this is a voluntary research study\n" +
          "• Your responses will be used only for academic research\n" +
          "• You may withdraw at any time without penalty",
        label: "I have read the above and agree to participate.",
      },
      {
        id: "enrolled", type: SINGLE, required: true,
        title: "Are you currently enrolled as an undergraduate college student?",
        choices: ["Yes, full time", "Yes, part time", "No"],
      },
    ],
  },
  {
    id: "background", number: 2,
    title: "Background Information",
    subtitle: "A few quick questions about you and your academic situation.",
    construct: null,
    questions: [
      {
        id: "attn_1", type: ATTN, required: true, construct: "Attention",
        title: "Attention check: This item tests whether you are reading carefully. Please select 'Agree' for this question.",
        choices: ["1 — Strongly Disagree","2 — Disagree","3 — Neutral","4 — Agree","5 — Strongly Agree"],
        correct: "4 — Agree",
      },
      {
        id: "year", type: SINGLE, required: true,
        title: "What is your current year in school?",
        choices: ["First year (Freshman)","Second year (Sophomore)","Third year (Junior)","Fourth year (Senior)","Fifth year or beyond"],
      },
      {
        id: "declared", type: SINGLE, required: true,
        title: "What is your current major declaration status?",
        choices: ["I have declared a major","I am in the process of declaring a major","I am undecided or undeclared","I am actively exploring multiple majors"],
      },
      {
        id: "major_field", type: SINGLE, required: true,
        title: "Which of the following best describes your declared or intended major field?",
        choices: [
          "STEM (Science, Technology, Engineering, Mathematics)",
          "Social Sciences (Psychology, Sociology, Economics, Political Science, etc.)",
          "Humanities (English, History, Philosophy, Languages, Literature, etc.)",
          "Arts and Design (Visual Arts, Music, Theater, Film, etc.)",
          "Business, Management, and Finance",
          "Health, Medicine, and Biomedical Sciences",
          "Education",
          "Law and Public Policy",
          "Interdisciplinary or Double Major",
          "Undecided / Still Exploring",
        ],
      },
      {
        id: "arrived", type: SINGLE, required: true,
        title: "How did you primarily arrive at your current or intended major?",
        choices: [
          "Strong personal interest in the subject",
          "Expectation of career outcomes or salary potential",
          "Encouragement from family or peers",
          "Academic strength or high performance in related courses",
          "Availability or convenience of the program at my institution",
          "Required for a professional pathway, such as pre med or pre law",
          "I have not yet chosen a major",
          "Other",
        ],
      },
      {
        id: "institution", type: SINGLE, required: true,
        title: "What type of institution do you attend?",
        choices: ["Public four year university","Private four year university","Community college or two year institution","Liberal arts college","Technical or vocational institute","Other"],
      },
      {
        id: "gpa", type: SINGLE, required: false,
        title: "What is your approximate cumulative GPA on a 4.0 scale?",
        choices: ["Below 2.0","2.0 to 2.49","2.5 to 2.99","3.0 to 3.49","3.5 to 4.0","I do not currently have grades, such as first semester","My institution does not use a 4.0 GPA scale","Prefer not to say"],
      },
      {
        id: "first_gen", type: SINGLE, required: true,
        title: "Are you the first person in your immediate family to attend a four year college or university?",
        choices: ["Yes, I am first generation","No, at least one parent attended a four year college","Unsure"],
      },
    ],
  },
  {
    id: "interest", number: 3,
    title: "What Drew You In",
    subtitle: "What pulled you toward your current or intended major. If you are undecided, answer about the field you are leaning toward most.",
    construct: "Interest",
    questions: [
      { id: "int_1", type: AGREE, required: true, construct: "Interest", title: "I had a clear academic interest or passion before starting college that pointed toward my current or intended major." },
      { id: "int_2", type: AGREE, required: true, construct: "Interest", title: "My enjoyment of specific high school subjects was a meaningful factor in choosing my current or intended college major." },
      { id: "int_3", type: AGREE, required: true, construct: "Interest", title: "I pursued extracurricular activities, projects, or hobbies related to my current or intended major before or during college." },
      { id: "int_4", type: AGREE, required: true, construct: "Interest", title: "The subjects I find most intellectually stimulating are closely related to the subject matter of my current or intended major." },
      { id: "int_5", type: AGREE, required: true, construct: "Interest", reverse: true, reverseNote: "Reverse-coded", title: "I find it difficult to stay engaged with the subject matter in my current or intended major courses." },
      { id: "int_6", type: AGREE, required: false, construct: "Interest", title: "Career exploration tools, assessments, or inventories played a role in my major choice." },
    ],
  },
  {
    id: "environment", number: 4,
    title: "Fit With the Field Environment",
    subtitle: "How your major's environment, culture, and demands fit how you naturally work and think. It's okay to estimate if you're early in college.",
    construct: "Environment Fit",
    questions: [
      { id: "env_1", type: AGREE, required: true, construct: "Environment Fit", group: "Environment & Culture", title: "In my major, what is valued and rewarded, such as precision, originality, collaboration, or independence, matches what I value." },
      { id: "env_2", type: AGREE, required: true, construct: "Environment Fit", group: "Environment & Culture", title: "My major environment rewards the type of thinking that comes naturally to me." },
      { id: "env_3", type: AGREE, required: true, construct: "Environment Fit", group: "Environment & Culture", title: "The skills and competencies my major demands are ones I have or am developing confidently." },
      { id: "env_4", type: AGREE, required: true, construct: "Environment Fit", group: "Environment & Culture", title: "My major environment encourages and supports the kind of work I find most engaging." },
      { id: "env_5", type: AGREE, required: true, construct: "Environment Fit", group: "Environment & Culture", title: "The career pathways and professional opportunities in my field feel appealing to me." },
      { id: "pmf_1", type: AGREE, required: true, construct: "Person-Major Fit", group: "Personal Fit", title: "I feel that my current or intended major is a good fit for my interests and abilities." },
      { id: "pmf_2", type: AGREE, required: true, construct: "Person-Major Fit", group: "Personal Fit", title: "My current or intended major is aligned with my long term career and personal goals." },
      { id: "pmf_3", type: AGREE, required: true, construct: "Person-Major Fit", group: "Personal Fit", title: "The academic demands of my current or intended major align well with my natural strengths." },
      { id: "pmf_4", type: AGREE, required: false, construct: "Person-Major Fit", group: "Personal Fit", title: "I feel my current or intended major is becoming an important part of who I am." },
      { id: "wsf_1", type: AGREE, required: true, construct: "Work Style Fit", group: "Work Style", title: "The type of thinking required in my major, such as analytical, creative, abstract, or interpersonal thinking, feels natural to me." },
      { id: "wsf_2", type: AGREE, required: true, construct: "Work Style Fit", group: "Work Style", title: "I prefer working on tasks and problems similar to what professionals in my field typically do." },
      { id: "wsf_3", type: AGREE, required: true, construct: "Work Style Fit", group: "Work Style", title: "The pace and structure of coursework in my major matches how I prefer to learn and work." },
      { id: "wsf_4", type: AGREE, required: true, construct: "Work Style Fit", group: "Work Style", title: "The broad range of career paths connected to my field includes options I would find energizing and sustainable long term." },
      { id: "wsf_5", type: AGREE, required: true, construct: "Work Style Fit", group: "Work Style", reverse: true, reverseNote: "Reverse-coded", title: "I struggle when my field requires working on problems without one clear correct answer or obvious path forward." },
      { id: "wsf_6", type: AGREE, required: true, construct: "Work Style Fit", group: "Work Style", title: "I feel energized rather than drained after working on challenging assignments in my major." },
    ],
  },
  {
    id: "engagement", number: 5,
    title: "How You Actually Engage",
    subtitle: "Real behaviors related to your major outside of required coursework. Think about the past month or current semester.",
    construct: "Behavioral Engagement",
    questions: [
      { id: "beh_1", type: FREQ, required: true, construct: "Behavioral Engagement", title: "I voluntarily read, watch, or listen to content related to my major outside of class requirements." },
      { id: "beh_2", type: FREQ, required: true, construct: "Behavioral Engagement", title: "I lose track of time when working on projects or problems related to my major." },
      { id: "beh_3", type: FREQ, required: true, construct: "Behavioral Engagement", title: "I actively look for ways to apply skills or knowledge from my major in self-directed projects or work outside my coursework." },
      { id: "beh_4", type: FREQ, required: true, construct: "Behavioral Engagement", title: "I discuss topics, concepts, or recent developments from my major with friends, family, or peers outside of class." },
      { id: "attn_2", type: ATTN, required: true, construct: "Attention", title: "Attention check: To confirm you are still reading carefully, please select 'Agree' for this item.", choices: ["1 — Strongly Disagree","2 — Disagree","3 — Neutral","4 — Agree","5 — Strongly Agree"], correct: "4 — Agree" },
      { id: "beh_5", type: FREQ, required: false, construct: "Behavioral Engagement", title: "I work on independent projects, personal experiments, or self directed learning directly related to my field." },
      { id: "beh_6", type: FREQ, required: true, construct: "Behavioral Engagement", title: "When I encounter a difficult problem or concept in my major, I persist in trying to understand it rather than avoiding it." },
      { id: "beh_7", type: FREQ, required: true, construct: "Behavioral Engagement", title: "I stay on top of coursework and commitments in my major compared to my other subjects." },
    ],
  },
  {
    id: "motivation", number: 6,
    title: "What Drives Your Studying",
    subtitle: "What's actually behind your effort in your major.",
    construct: "Motivation Quality",
    questions: [
      { id: "attn_3", type: ATTN, required: true, construct: "Attention", title: "Attention check: Please select 'Strongly Disagree' for this item to confirm you are reading carefully.", choices: ["1 — Strongly Disagree","2 — Disagree","3 — Neutral","4 — Agree","5 — Strongly Agree"], correct: "1 — Strongly Disagree" },
      { id: "mot_1", type: AGREE, required: true, construct: "Motivation Quality", title: "When studying, I find myself genuinely curious about the material rather than just trying to complete the work." },
      { id: "mot_2", type: AGREE, required: true, construct: "Motivation Quality", title: "My genuine interest in my major is what primarily drives my studying." },
      { id: "mot_3", type: AGREE, required: true, construct: "Motivation Quality", title: "I understand the value of what I am learning in my major and believe it will be useful to me." },
    ],
  },
  {
    id: "burnout", number: 7,
    title: "Stress, Burnout, and Resilience",
    subtitle: "Emotional experience and stress related to your major. Answer based on your overall experience this academic year.",
    construct: "Burnout / Resilience",
    questions: [
      { id: "bo_1", type: AGREE, required: true, construct: "Burnout Exhaustion", group: "Stress and Workload", title: "I frequently feel burned out or emotionally exhausted by the workload in my major." },
      { id: "bo_2", type: AGREE, required: true, construct: "Burnout Exhaustion", group: "Stress and Workload", title: "Stress related to my major negatively impacts my overall academic performance and well being." },
      { id: "res_1", type: AGREE, required: true, construct: "Resilience", group: "Coping and Engagement", title: "I remain motivated and engaged in my major work even when assignments are difficult or frustrating." },
      { id: "res_2", type: AGREE, required: true, construct: "Resilience", group: "Coping and Engagement", title: "I feel that the effort and time required by my major is worth the knowledge, skills, and satisfaction I gain." },
      { id: "res_3", type: AGREE, required: true, construct: "Resilience", group: "Coping and Engagement", title: "I am able to maintain a healthy balance between my academic workload and personal life." },
    ],
  },
  {
    id: "satisfaction", number: 8,
    title: "Satisfaction in This Field",
    subtitle: "Your emotional and academic experience right now — not whether you objectively fit the field.",
    construct: "Satisfaction",
    questions: [
      { id: "sat_1", type: AGREE, required: true, construct: "Satisfaction", title: "I feel satisfied with my overall experience in my current or intended major." },
      { id: "sat_2", type: AGREE, required: true, construct: "Satisfaction", title: "My major coursework feels rewarding enough that I want to continue in this field." },
    ],
  },
  {
    id: "persistence", number: 9,
    title: "Staying In or Leaving This Field",
    subtitle: "Whether you'd stay in this major if you could choose again — the primary outcome the deeper-fit model is trying to predict.",
    construct: "Persistence & Switch Risk",
    questions: [
      { id: "per_1", type: AGREE, required: true, construct: "Persistence & Switch Risk", reverse: true, reverseNote: "Reverse-coded", title: "I often feel uncertain about whether my current or intended major is the right choice for me." },
      { id: "per_2", type: AGREE, required: true, construct: "Persistence & Switch Risk", title: "If I could choose again today, I would still choose this major or intended field." },
      { id: "per_3", type: AGREE, required: true, construct: "Persistence & Switch Risk", reverse: true, reverseNote: "Reverse-coded", title: "I often question whether continuing in my current or intended major is the right decision due to stress or dissatisfaction." },
    ],
  },
  {
    id: "belonging", number: 10,
    title: "Belonging and Advising",
    subtitle: "Your sense of connection to other students in the field, and the quality of academic advising you've received.",
    construct: "Belonging / Advising",
    questions: [
      { id: "bel_1", type: AGREE, required: true, construct: "Belonging", title: "I feel a sense of belonging among students in my current or intended major field." },
      { id: "adv_1", type: ADVISING, required: false, construct: "Advising", title: "My academic advisor has been helpful in guiding my major related decisions.", choices: ["1 — Strongly Disagree","2 — Disagree","3 — Neutral","4 — Agree","5 — Strongly Agree","Not applicable — I have not met with an academic advisor yet"] },
    ],
  },
  {
    id: "global", number: 11,
    title: "Overall Fit and Pilot Feedback",
    subtitle: "A final reflection — plus optional feedback to help refine the instrument.",
    construct: "Global Fit",
    questions: [
      { id: "global_fit", type: FIT, required: true, construct: "Global Fit", title: "Overall, how would you rate the fit between your current or intended major and your personal interests, strengths, and long term goals?", choices: ["1 — Very Poor Fit","2 — Poor Fit","3 — Neutral","4 — Good Fit","5 — Excellent Fit"] },
      { id: "follow_up", type: YESNO, required: true, construct: "Follow-up", title: "Would you be willing to participate in a brief follow up interview (about 15–20 minutes) to discuss your major fit experience in more depth?", choices: ["Yes, I would be open to a follow up","No, I prefer not to be contacted"] },
      { id: "follow_up_contact", type: SHORT, required: false, title: "Optional: If you said yes above, you may enter an email address or preferred contact method here.", help: "This is optional. Contact information would be separated from survey responses before analysis.", placeholder: "you@example.edu", dependsOn: { id: "follow_up", equals: "Yes, I would be open to a follow up" } },
      { id: "pilot_unclear", type: LONG, required: false, pilotOnly: true, title: "Pilot only — were any questions unclear, confusing, or hard to understand? If so, which ones and what made them difficult?", help: "Be as specific as possible. Leave blank if all questions were clear.", placeholder: "Optional — leave blank if none." },
      { id: "pilot_repetitive", type: LONG, required: false, pilotOnly: true, title: "Pilot only — did any questions feel repetitive, or were any difficult to answer honestly?", help: "Leave blank if none applied.", placeholder: "Optional — leave blank if none." },
    ],
  },
];

const SCALES = {
  [AGREE]: ["1 — Strongly Disagree","2 — Disagree","3 — Neutral","4 — Agree","5 — Strongly Agree"],
  [FREQ]:  ["1 — Never","2 — Rarely","3 — Sometimes","4 — Often","5 — Always or Almost Always"],
  [FIT]:   ["1 — Very Poor Fit","2 — Poor Fit","3 — Neutral","4 — Good Fit","5 — Excellent Fit"],
};

const TOTAL_QUESTIONS = SECTIONS.reduce((n, s) => n + s.questions.length, 0);

export const SURVEY_DATA = {
  sections: SECTIONS,
  scales: SCALES,
  totalQuestions: TOTAL_QUESTIONS,
  types: { AGREE, FREQ, SINGLE, CONSENT, SHORT, LONG, ATTN, ADVISING, FIT, YESNO },
  meta: {
    version: "v2.1",
    title: "Major Fit Pilot Survey",
    subtitle: "This survey asks whether your major or intended field fits how you think, work, stay motivated, handle stress, and see your future.",
    estimate: "10–12 minutes",
    audience: "Undergraduate students",
    privacy: "Anonymous unless you choose to leave contact information.",
  },
};
