import { AiOutlineAudio, AiOutlinePaperClip } from "react-icons/ai";
import { BsEmojiSmile, BsImageFill } from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";
import "./input.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../config/Index";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// @ts-ignore
import Perspective from "perspective-api-client";

// ML model
const perspective = new Perspective({
  apiKey: "AIzaSyDynz84MtlqdsENAEJCQEcsj1kWcFA6nS8",
});

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const [analysis, setAnalysis] = useState(null);

  const [error, setError] = useState(false);

  const currentUser = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  //  function where the predictive model os going to sit

  const notify = () =>
    toast.error("🦄 Toxic message!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const scanMessage = async () => {
    try {
      const result = await perspective.analyze(text, {
        attributes: [
          "THREAT",
          "TOXICITY",
          "SEVERE_TOXICITY",
          "IDENTITY_ATTACK",
        ],
        languages: ["en"], // Specify the appropriate language code here
      });

      setAnalysis(result.attributeScores);

      const toxicityScore = result.attributeScores.THREAT.summaryScore.value;
      console.log(text);

      if (toxicityScore >= 0.5) {
        console.log("Toxic message");
        console.log(toxicityScore);
        setError(true);
        notify();
      } else {
        console.log("Message passed toxicity check!");
        console.log(toxicityScore);
        setError(false);
      }
      console.log(analysis);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSend = async () => {
    //
    scanMessage();
    if (img) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          // setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setImg(null);
    setText("");
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        {/* <AiOutlinePaperClip className="icon" /> */}
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
          // value={img}
        />
        <label htmlFor="file">
          <BsImageFill className="icon" />
        </label>
        <label htmlFor="emoji__btn">
          <BsEmojiSmile className="icon" />
        </label>
        <label htmlFor="emoji__btn">
          <AiOutlineAudio className="icon" />
        </label>
        {/* <EmojiPicker className="emoji__" /> */}

        <button onClick={handleSend}>Send</button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className="absolute"
      />
    </div>
  );
};

export default Input;
