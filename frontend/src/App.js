import './App.css';
import React, { useState } from 'react';

function App() {
  const questions = [
    {
      questionText: 'Kuri metų diena dažniausiai yra pati trumpiausia?',
      answerOptions: [
        { answerText: 'Gruodžio 22', isCorrect: true },
        { answerText: 'Gruodžio 26', isCorrect: false },
        { answerText: 'Gruodžio 31', isCorrect: false },
        { answerText: 'Sausio 1', isCorrect: false },
      ],
    },
    {
      questionText:
        'Koks yra Suomijos miesto pavadinimas, kuriame įsikuręs Kalėdų senelis?',
      answerOptions: [
        { answerText: 'Helsinki', isCorrect: false },
        { answerText: 'Rovaniemi', isCorrect: true },
        { answerText: 'Tampere', isCorrect: false },
        { answerText: 'Oulu', isCorrect: false },
      ],
    },
    {
      questionText: 'Kokia kalėdinė tradicija yra kilusi iš Danijos?',
      answerOptions: [
        {
          answerText: 'Palikti Kalėdų seneliui pieno ir sausainių',
          isCorrect: true,
        },
        { answerText: 'Palikti elniams morkų', isCorrect: false },
        { answerText: 'Dovanų ryte ieškoti po eglute', isCorrect: false },
        { answerText: 'Rašyti Kalėdų seneliui laišką', isCorrect: false },
      ],
    },
    {
      questionText: 'Kiek elnių tempia Kalėdų senelio roges?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '8', isCorrect: true },
      ],
    },
    {
      questionText: 'Kuri kalėdinė daina yra pati populiariausia?',
      answerOptions: [
        { answerText: 'Kalėdų rytą', isCorrect: false },
        { answerText: 'Laukiu Kalėdų', isCorrect: false },
        { answerText: 'Tyli naktis', isCorrect: true },
        { answerText: 'Skamba varpeliai', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          Teisingai atsakei {score} klausimus iš {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span> Klausimas {currentQuestion + 1} </span> /{' '}
              {questions.length}
            </div>
            <div className='question-text'>
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
//https://www.youtube.com/watch?v=Lya-qYiDqIA
