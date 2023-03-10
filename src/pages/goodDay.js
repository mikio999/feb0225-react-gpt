import { useState, useEffect } from "react";
import axios from "axios";

export default function GoodDay() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    console.log(userInput);
  }, [userInput]);

  const submit = async () => {
    const url = "/api/hello";
    const res = await axios.post(url, {
      userInput: userInput,
    });

    console.log(res.data.result);

    setResult(res.data.result);
    return true;
  };

  return (
    <div>
      <input onChange={(e) => setUserInput(e.target.value)}></input>
      <button onClick={(e) => submit()}>Send</button>

      <div>{result}</div>
    </div>
  );
}
