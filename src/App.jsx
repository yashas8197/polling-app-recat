import { useState } from "react";

export default function App() {
  const [favorite, setFavorite] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const questions = [
    {
      id: 1,
      question: "Favorite Color?",
      options: ["Red", "Blue", "Green", "Yellow"],
    },
    {
      id: 2,
      question: "Favorite Animal?",
      options: ["Dog", "Cat", "Bird", "Fish"],
    },
    {
      id: 3,
      question: "Favorite Food?",
      options: ["Pizza", "Burger", "Pasta", "Salad"],
    },
  ];

  const handleFavorite = (questionId, option) => {
    setFavorite({ ...favorite, [questionId]: option });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(favorite).length >= 3) {
      setFormSubmitted(true);
    }
  };

  const Questions = () => {
    return (
      <div>
        {favorite && !formSubmitted ? (
          <form onSubmit={handleSubmit}>
            {questions.map((question) => (
              <div key={question.id}>
                <h2>{question.question}</h2>
                <ul>
                  {question.options.map((option) => (
                    <li key={option}>
                      <input
                        type="radio"
                        name={question.question.split(" ")[0] + question.id}
                        value={option}
                        onChange={() => handleFavorite(question.id, option)}
                        checked={favorite[question.id] === option}
                      />
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <h1>Thank you</h1>
          </div>
        )}
      </div>
    );
  };

  return (
    <main>
      <h1>Polling App</h1>
      <Questions />
    </main>
  );
}
