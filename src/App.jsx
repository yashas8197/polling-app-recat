import { useState } from "react";

export default function App() {
  const [selectedOption, setSelectedOption] = useState([]);
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

  const changeHandler = (questionID, option) => {
    setSelectedOption((prevOptions) => {
      const updatedOptions = prevOptions.filter(
        (prev) => prev.questionID !== questionID,
      );
      return [...updatedOptions, { questionID, option }];
    });
    console.log(selectedOption);
  };

  const formHandler = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      {!formSubmitted ? (
        <form className="App" onSubmit={formHandler}>
          <h1>Polling App</h1>
          {questions.map((question) => {
            return (
              <div key={question.id}>
                <h3>{question.question}</h3>
                <ul>
                  {question.options.map((option, index) => {
                    return (
                      <li key={index}>
                        <input
                          type="radio"
                          value={option}
                          name={question.id}
                          onChange={(event) =>
                            changeHandler(question.id, event.target.value)
                          }
                        />
                        {option}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h2>Thank you for your participation</h2>
        </div>
      )}
    </>
  );
}
