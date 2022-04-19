import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ChatBot() {
  const chatBotList = useSelector((state) => state.chatBot);
  const dispatch = useDispatch();

  const [textToSend, setTextToSend] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log(textToSend);
    dispatch({ type: "ADD_CHAT_BOT", payload: textToSend });

    if (textToSend.includes("que tal")) {
      dispatch({ type: "ADD_CHAT_BOT", payload: "Yo muy bien y tu?" });
    }

    if (textToSend.includes("necesito ayuda")) {
        dispatch({ type: "ADD_CHAT_BOT", payload: "En que puedo ayudarte?" });
      }


    setTextToSend("");
  };

  return (
    <div>
      {chatBotList.map((chatBotItem, index) => (
        <div key={index}>{chatBotItem}</div>
      ))}

      <form onSubmit={submit}>
        <input
          value={textToSend}
          onChange={(e) => setTextToSend(e.target.value)}
          type="text"
        />
        <button>Enviar</button>
      </form>
    </div>
  );
}
