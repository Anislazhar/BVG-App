const questions = [
  {
    id: 1,
    questionText: "How much time are you planning on staying in the city?",
    answerOptions: [
      { answerText: "less than 1 day" },
      { answerText: "Longer than 1 Day" },
    ],
  },
  {
    id: 2,
    questionText: "How much time are you planning to use the transport?",
    answerOptions: [
      { answerText: "Less than 20 Minutes", isCorrect: "will be 1,90 € " },
      { answerText: "More than 20 Minutes till 2 hours", isCorrect: "will be 2,90 €" },
      { answerText: "All the day long", isCorrect: "will be 12 €" },
    ],
  },
  {
    id: 3,
    questionText: "How much time are you planning on staying in the city?",
    answerOptions: [
      { answerText: "Less than 1 week ", isCorrect: "will be 40 €" },
      { answerText: "longer than 1 week ", isCorrect: "will be 40 €" },
    ],
  },
];

export default questions;
