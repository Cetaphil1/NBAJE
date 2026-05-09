const QUIZ_QUESTIONS = [
  {
    id: 'q1',
    text: 'Do you want something social?',
    hint: 'Playing or training with other people',
    yes: { tags: ['social_team'], label: 'Yes' },
    no:  { tags: ['shy_solo'],    label: 'Not really' },
  },
  {
    id: 'q2',
    text: 'Do you want something low pressure?',
    hint: 'Relaxed, beginner-friendly, no judgment',
    yes: { tags: ['low_impact'],  label: 'Yes, keep it easy' },
    no:  { tags: ['competitive'], label: 'I want a challenge' },
  },
  {
    id: 'q3',
    text: 'Does cost matter a lot?',
    hint: 'Looking for free or very cheap options',
    yes: { tags: ['low_budget'], label: 'Keep it cheap' },
    no:  { tags: [],             label: 'Gear is fine' },
  },
  {
    id: 'q4',
    text: 'Do you want something intense?',
    hint: 'High effort, cardio, physically demanding',
    yes: { tags: ['high_energy'], label: 'Push me' },
    no:  { tags: ['low_impact'],  label: 'Something gentler' },
  },
  {
    id: 'q5',
    text: 'Do you prefer doing it alone?',
    hint: 'No team or partner required to start',
    yes: { tags: ['shy_solo'],    label: 'Solo works' },
    no:  { tags: ['social_team'], label: 'I like company' },
  },
  {
    id: 'q6',
    text: 'Do you want to compete?',
    hint: 'Leagues, tournaments, or head-to-head',
    yes: { tags: ['competitive'], label: 'Yes — compete' },
    no:  { tags: [],              label: 'Just for fun' },
  },
]

export default QUIZ_QUESTIONS
