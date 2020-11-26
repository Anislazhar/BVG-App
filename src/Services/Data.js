const questions = [
  {
    questionText: "How much time are you planning on staying in the city?",
    answerOptions: [
      { answerText: "less than 1 day", nextId: 1 },
      { answerText: "Longer than 1 Day", nextId: 2 },
    ],
  },
  {
    questionText: "How much time are you planning to use the transport?",
    answerOptions: [
      {
        answerText: "Less than 20 Minutes",
        result:
          "will cost 1,90 € , for more info check this link  https://www.bvg.de/de/Tickets/Preise",
      },
      {
        answerText: "More than 20 Minutes till 2 hours",
        result:
          "will cost 2,90 €, for more info check this link https://www.bvg.de/de/Tickets/Preise",
      },
      {
        answerText: "All the day long",
        result:
          "will cost 8,60 €, for more info check this link https://www.bvg.de/de/Tickets/Preise",
      },
    ],
  },
  {
    questionText: "How much time are you planning on staying in the city?",
    answerOptions: [
      {
        answerText: "Less than 1 week ",
        result:
          "will cost 34,00 €, for more info check this link https://www.bvg.de/de/Tickets/Preise",
      },
      {
        answerText: "longer than 1 week ",
        result:
          "will cost 84,00 €, for more info check this link https://www.bvg.de/de/Tickets/Preise",
      },
    ],
  },
];

export default questions;
