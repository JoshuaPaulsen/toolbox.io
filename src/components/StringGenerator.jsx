import React, { useState } from 'react';
import "./StringGenerator.css"

const StringGenerator = () => {
  const [length, setLength] = useState(10);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [customPhrase, setCustomPhrase] = useState('');
  const [generatedString, setGeneratedString] = useState('');
  const [showOptions, setShowOptions] = useState(true);
  const generateString = () => {
    // Generate a unique string based on user options
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:\'",.<>?/';
    const allChars = includeSpecialChars ? characters + specialChars : characters;
    let resultString = '';
    for (let i = 0; i < length; i++) {
      const randomChar = allChars.charAt(Math.floor(Math.random() * allChars.length));
      resultString += randomChar;
    }
    // Insert custom phrase at a random position
    const randomPosition = Math.floor(Math.random() * (length + 1));
    resultString =
      resultString.slice(0, randomPosition) + customPhrase + resultString.slice(randomPosition);
    setGeneratedString(resultString);
    setShowOptions(false);
  };

  const showOptionsAgain = () => {
    setShowOptions(true);
  };
  
  return (
    <div>
      {showOptions ? (
        <div>
          {/* User input options */}
          <label>
            Length:
            <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
          </label>
          <label>
            Include Special Characters:
            <input
              type="checkbox"
              checked={includeSpecialChars}
              onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
            />
          </label>
          <label>
            Custom Phrase:
            <input
              type="text"
              value={customPhrase}
              onChange={(e) => setCustomPhrase(e.target.value)}
            />
          </label>
          {/* Generate button */}
          <button onClick={generateString}>Generate</button>
        </div>
      ) : (
        <div>
          {/* Display generated string */}
          <p>Generated String: {generatedString}</p>
          {/* Generate again button */}
          <button onClick={showOptionsAgain}>Generate Again</button>
        </div>
      )}
    </div>
  );
};
export default StringGenerator;
