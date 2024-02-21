"use client"
import React, { useState } from 'react';
import { IoMdArrowForward } from 'react-icons/io';

const CharacterqTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(10).fill(null));
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [careerRecommendations, setCareerRecommendations] = useState("");

  const quizQuestions = [
    {
      question: "What motivates you to excel in your work or studies?",
      options: [
        { text: "A. Recognition and praise from others", value: 1 },
        { text: "B. Solving complex problems", value: 2 },
        { text: "C. Helping others succeed", value: 3 },
        { text: "D. Expressing creativity and innovation", value: 4 }
      ],
    },
    {
      question: "How do you approach challenges or obstacles?",
      options: [
        { text: "A. With determination and perseverance", value: 1 },
        { text: "B. By analyzing the problem from different angles", value: 2 },
        { text: "C. By seeking advice and collaboration", value: 3 },
        { text: "D. By thinking outside the box and trying new approaches", value: 4 }
      ],
    },
    {
      question: "When working in a team, what role do you usually take?",
      options: [
        { text: "A. Leader, organizing and guiding the team", value: 1 },
        { text: "B. Analyst, critically evaluating ideas and strategies", value: 2 },
        { text: "C. Supporter, helping and encouraging team members", value: 3 },
        { text: "D. Innovator, generating new ideas and approaches", value: 4 }
      ],
    },
    {
      question: "What type of work environment do you thrive in?",
      options: [
        { text: "A. Fast-paced and competitive", value: 1 },
        { text: "B. Structured and organized", value: 2 },
        { text: "C. Collaborative and supportive", value: 3 },
        { text: "D. Creative and dynamic", value: 4 }
      ],
    },
    {
      question: "How do you prefer to learn new skills or information?",
      options: [
        { text: "A. Through hands-on experience", value: 1 },
        { text: "B. By studying and researching independently", value: 2 },
        { text: "C. By discussing and interacting with others", value: 3 },
        { text: "D. Through experimentation and trial-and-error", value: 4 }
      ],
    },
    {
      question: "What values are most important to you in a career?",
      options: [
        { text: "A. Success and achievement", value: 1 },
        { text: "B. Integrity and ethics", value: 2 },
        { text: "C. Work-life balance and well-being", value: 3 },
        { text: "D. Creativity and innovation", value: 4 }
      ],
    },
    {
      question: "Which of these statements resonates with you the most?",
      options: [
        { text: "A. 'Success is not the key to happiness. Happiness is the key to success.' - Albert Schweitzer", value: 1 },
        { text: "B. 'The only way to do great work is to love what you do.' - Steve Jobs", value: 2 },
        { text: "C. 'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.' - Steve Jobs", value: 3 },
        { text: "D. 'Choose a job you love, and you will never have to work a day in your life.' - Confucius", value: 4 }
      ],
    },
    {
      question: "How do you handle stressful situations?",
      options: [
        { text: "A. By staying calm and focused", value: 1 },
        { text: "B. By analyzing the situation and finding solutions", value: 2 },
        { text: "C. By seeking support and advice from others", value: 3 },
        { text: "D. By using creativity and innovation to overcome challenges", value: 4 }
      ],
    },
    {
      question: "What role does personal development play in your life?",
      options: [
        { text: "A. It is a top priority, always seeking growth and improvement", value: 1 },
        { text: "B. It is important, but balanced with other aspects of life", value: 2 },
        { text: "C. It is something I consider from time to time", value: 3 },
        { text: "D. It is not a priority, focusing more on immediate goals and needs", value: 4 }
      ],
    },
    {
      question: "How do you envision your career impacting others or the world?",
      options: [
        { text: "A. By making a significant impact on a global scale", value: 1 },
        { text: "B. By improving the lives of individuals or communities", value: 2 },
        { text: "C. By contributing to the advancement of knowledge or technology", value: 3 },
        { text: "D. By inspiring others and fostering creativity and innovation", value: 4 }
      ],
    },
    // Add more questions here...
  ];


  const handleAnswerSelect = (optionValue) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = optionValue;
    setUserAnswers(updatedAnswers);

  };

  const calculateRecommendations = (answers) => {
    const weights = [
      2,  // Question 1 weight
      3,  // Question 2 weight
      4,  // Question 3 weight
      2,  // Question 4 weight
      3,  // Question 5 weight
      2,  // Question 6 weight
      3,  // Question 7 weight
      4,  // Question 8 weight
      2,  // Question 9 weight
      3,  // Question 10 weight
      // Add more weights for each question...
    ];


    const scores = {
      "Software Development": 0,
      "Data Science": 0,
      "Healthcare": 0,
      "Engineering": 0,
      "Environmental Science": 0
    };

    answers.forEach((answer, index) => {
      switch (answer) {
        case 1: // Option A
          scores["Software Development"] += weights[index];
          scores["Engineering"] += weights[index] / 2; // Engineering related to Software Development
          break;
        case 2: // Option B
          scores["Data Science"] += weights[index];
          break;
        case 3: // Option C
          scores["Healthcare"] += weights[index];
          break;
        case 4: // Option D
          scores["Environmental Science"] += weights[index];
          break;
        // Add cases for more options...
      }
    });

    let maxScore = -1;
    let recommendedPath = "";
    for (const path in scores) {
      if (scores[path] > maxScore) {
        maxScore = scores[path];
        recommendedPath = path;
      }
    }

    return recommendedPath;
  };


  const handleGetRecommendations = () => {
    const recommendations = calculateRecommendations(userAnswers);
    setCareerRecommendations(recommendations);
    setShowRecommendations(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate and display career recommendations
      const recommendations = calculateRecommendations(userAnswers);
      setCareerRecommendations(recommendations);
      setShowRecommendations(true);
    }
  };

  return (
    <main className="w-full h-screen bg-gradient-to-r from-pink-500 to-purple-500 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        {!showRecommendations ? (
          <>
            <h1 className="text-2xl font-bold mb-6">Character Test</h1>
            <p className="mb-6">{quizQuestions[currentQuestion].question}</p>
            <div className="grid grid-cols-2 gap-4">
              {quizQuestions[currentQuestion].options.map((option) => (
                <button
                  key={option.value}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleAnswerSelect(option.value)}
                >
                  {option.text}
                </button>
              ))}
            </div>
            <button
              className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleNextQuestion}
            >
              Next <IoMdArrowForward />
            </button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-6">Career Recommendations</h1>
            <p className="mb-6">{careerRecommendations}</p>
            <button
              className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => window.location.reload()}
            >
              Restart
            </button>
          </>
        )}
      </div>
    </main>
  );
};

export default CharacterqTest;
