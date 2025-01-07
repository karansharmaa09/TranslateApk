
import { useState } from "react";
import languages from "../languages";

const Translate = () => {
  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");
  const [fromLanguage, setFromLanguage] = useState("en-GB");
  const [toLanguage, setToLanguage] = useState("hi-IN");
  const [loading, setLoading] = useState(false);

  const handleExchange = () => {
    // Swap texts
    setFromText(toText);
    setToText(fromText);

    // Swap languages
    setFromLanguage(toLanguage);
    setToLanguage(fromLanguage);
  };

  const copyContent = (text) => {
    navigator.clipboard.writeText(text);
  };

  const utterText = (text, languages) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = languages;
    synth.speak(utterance);
  };

  const HandleIconClick = (target, id) => {
    if (target.classList.contains("fa-copy")) {
      if (id == "from") {
        copyContent(fromText);
      } else {
        copyContent(toText);
      }
    } else {
      if (id == "from") {
        utterText(fromText, fromLanguage);
      } else utterText(toText, toLanguage);
    }
  };

  const HandleTranslate = () => {
    setLoading(true);
    // Construct the URL with proper query parameters
    let url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      fromText
    )}&langpair=${fromLanguage}|${toLanguage}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToText(data.responseData.translatedText);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error during translation:", error);
      });
  };


  return (
    <>
      <h1 className="text-center text-4xl font-bold   bg-black text-white">
        Translate Your Text{" "}
      </h1>

      <div className="flex items-center justify-center min-h-screen bg-black ">
        <div className="max-w-3xl w-full bg-white rounded-lg p-8 mb-20 shadow-lg">
          <div className="flex mb-4 space-x-4">
            <textarea
              value={fromText}
              onChange={(event) => setFromText(event.target.value)}
              className="border border-gray-300 rounded-lg p-2 h-64 text-lg resize-none placeholder-gray-400 w-1/2"
              placeholder="Enter Text"
              name="from"
            ></textarea>
            <textarea
              value={toText}
              className="border border-gray-300 rounded-lg p-2 h-64 text-lg resize-none placeholder-gray-400 w-1/2"
              name="to"
            ></textarea>
          </div>

          <ul className="flex items-center justify-between mb-4">
            <li className="flex items-center">
              <div className="flex space-x-2 pr-4 border-r border-gray-300">
                <i
                  onClick={(event) => HandleIconClick(event.target, "from")}
                  id="from"
                  className="fa-solid fa-volume-high text-gray-400 cursor-pointer"
                ></i>
                <i
                  onClick={(event) => HandleIconClick(event.target, "from")}
                  id="from"
                  className="fa-solid fa-copy text-gray-400 cursor-pointer"
                ></i>
              </div>
              <select
                onChange={(event) => setFromLanguage(event.target.value)}
                value={fromLanguage}
                className="text-gray-800 border-none outline-none text-lg px-[10px] py-[10px] mx-[20px] my-[0px]"
              >
                {Object.entries(languages).map(([code, name]) => (
                  <option key={code} value={code}>
                    {name}
                  </option>
                ))}
              </select>
            </li>
            <li className="flex items-center" onClick={handleExchange}>
              <i className="fa-solid fa-arrow-right-arrow-left text-gray-400 cursor-pointer"></i>
            </li>
            <li className="flex items-center">
              <select
                onChange={(event) => setToLanguage(event.target.value)}
                value={toLanguage}
                className="text-gray-800 border-none outline-none text-lg px-[10px] py-[10px] mx-[20px] my-[0px]"
              >
                {Object.entries(languages).map(([code, name]) => (
                  <option key={code} value={code}>
                    {name}
                  </option>
                ))}
              </select>
              <div className="flex space-x-2 pl-4 border-l border-gray-300">
                <i
                  onClick={(event) => HandleIconClick(event.target, "to")}
                  id="to"
                  className="fa-solid fa-copy text-gray-400 cursor-pointer"
                ></i>
                <i
                  onClick={(event) => HandleIconClick(event.target, "to")}
                  id="to"
                  className="fa-solid fa-volume-high text-gray-400 cursor-pointer"
                ></i>
              </div>
            </li>
          </ul>

          <button
            onClick={HandleTranslate}
            className="w-full py-3 bg-purple-600 text-white rounded-md font-semibold text-lg"
          >
            {loading ? "Translating..." : "Translate Text"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Translate;
