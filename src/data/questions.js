const QUIZ_QUESTIONS = [
  {
    id: 'q1',
    text: 'When you picture actually showing up, what feels easier?',
    hint: 'Be honest about the first-day vibe',
    yes: { tags: ['social_team'], label: 'Going with people' },
    no:  { tags: ['shy_solo'],    label: 'Trying it solo first' },
  },
  {
    id: 'q2',
    text: 'How much awkward beginner energy can you handle?',
    hint: 'Some activities look messy before they feel good',
    yes: { tags: ['low_impact', 'shy_solo'], label: 'Keep it low-key' },
    no:  { tags: ['high_energy', 'competitive'], label: 'I can look chaotic' },
  },
  {
    id: 'q3',
    text: 'What would stop you from trying it this week?',
    hint: 'Money, gear, and logistics are real blockers',
    yes: { tags: ['low_budget', 'no_equipment', 'limited_time'], label: 'Cost or hassle' },
    no:  { tags: [], label: 'I can spend a little' },
  },
  {
    id: 'q4',
    text: 'What kind of payoff sounds more motivating?',
    hint: 'Different people chase different feelings',
    yes: { tags: ['high_energy', 'competitive'], label: 'Sweaty progress' },
    no:  { tags: ['low_impact'], label: 'Calm reset' },
  },
  {
    id: 'q5',
    text: 'Would you rather have a routine or a scene?',
    hint: 'Gym habit, class energy, pickup culture, trail ritual',
    yes: { tags: ['shy_solo', 'limited_time'], label: 'A repeatable routine' },
    no:  { tags: ['social_team'], label: 'A place with people' },
  },
  {
    id: 'q6',
    text: 'If you kept doing it, what would make you proud?',
    hint: 'This decides whether you need a score, a skill, or a streak',
    yes: { tags: ['competitive', 'high_energy'], label: 'Getting noticeably better' },
    no:  { tags: ['low_impact'], label: 'Just feeling good' },
  },
]

export default QUIZ_QUESTIONS
