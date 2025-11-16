export const TONES = [
  { id: 'formal', label: 'Formal', icon: '🎩' },
  { id: 'friendly', label: 'Friendly', icon: '😊' },
  { id: 'concise', label: 'Concise', icon: '📝' },
  { id: 'apologetic', label: 'Apologetic', icon: '🙏' },
  { id: 'professional', label: 'Professional', icon: '💼' },
];

export const PLACEHOLDER_EMAIL = `Dear Team,

I wanted to follow up on our discussion about the Q4 project timeline. Given the recent changes in requirements, I believe we need to reassess our delivery dates.

Could we schedule a meeting this week to align on priorities and resource allocation?

Best regards,
Alex`;

export const TONE_PROMPTS = {
  formal: "Generate a formal and respectful email reply",
  friendly: "Generate a warm and friendly email reply",
  concise: "Generate a brief and to-the-point email reply",
  apologetic: "Generate an apologetic and understanding email reply",
  professional: "Generate a professional and balanced email reply",
};