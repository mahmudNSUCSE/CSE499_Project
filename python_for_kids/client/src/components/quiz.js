export const quiz = {
  quizTitle: "Python Quiz For Kids",
  quizSynopsis:
    "The test contains 10 questions and there is no time limit. The test is just a nice way to see how much you know, or don't know, about Python.",
  nrOfQuestions: "10",
  questions: [
    {
      question: 'What is a correct syntax to output "Hello World" in Python?',
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        'echo "Hello World"',
        'print("Hello World")',
        'p("Hello World")',
        'echo("Hello World")',
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      point: "20",
    },
    {
      question: "How do you insert COMMENTS in Python code?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "/*This is a comment*/",
        "#This is a comment",
        "//This is a comment",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      point: "20",
    },
    {
      question: "Which one is NOT a legal variable name?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Myvar", "my_var", "my-var", "_myvar"],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      point: "20",
    },
    {
      question: "How do you create a variable with the numeric value 5?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["x = 5", "x = int(5)", "Both of the above"],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      point: "20",
    },
    {
      question: "What is the correct file extension for Python files?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [".pyt", ".py", ".pyth", ".pt"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      point: "20",
    },
    {
      question: "How do you create a variable with the floating number 2.8?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["x = float(2.3)", "x = 2.8", "Both of the above"],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      point: "20",
    },
    {
      question: `In Python, 'Hello', is the same as "Hello"`,
      questionType: "text",
      answerSelectionType: "single",
      answers: ["True", "False"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      point: "20",
    },
    {
      question: `What is a correct syntax to return the first character in a string?`,
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "x = sub('Hello',0,1)",
        "x = 'Hello'[0]",
        "x = 'Hello'.sub(0,1)",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      point: "20",
    },
    {
      question: `Which operator is used to multiply numbers?`,
      questionType: "text",
      answerSelectionType: "single",
      answers: ["#", "/", "%", "*"],
      correctAnswer: "4",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      point: "20",
    },
    {
      question: `Which operator can be used to compare two values?`,
      questionType: "text",
      answerSelectionType: "single",
      answers: ["==", "<>", "=", "><"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      point: "20",
    },
  ],
};
