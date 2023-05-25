import React, { useContext, useState } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { IconButton, InputBase, Paper, Stack } from "@mui/material";
import { AuthContext } from "../../Context/AuthContext";
import { ChatContext } from "../../Context/ChatContext";
import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
function Input() {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);
      uploadTask.on(
        (error) => {},
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
    setText("");
    setImg(null);
  };
  return (
    <Stack direction="row" sx={{ bottom: 0, width: "100%" }}>
      <Paper
        sx={{
          width: "100%",
          display: "flex",
          backgroundColor: "black",
          color: "white",
          borderRadius: "10px",
          mt: 1,
        }}
      >
        <IconButton sx={{ color: "white" }}>
          <EmojiEmotionsIcon />
        </IconButton>
        <InputBase
          sx={{ border: "none", borderRadius: 0, color: "white" }}
          type="text"
          fullWidth
          placeholder="Type Something"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <IconButton sx={{ color: "white" }}>
          <CameraAltIcon />
        </IconButton>
        <span>
          <IconButton sx={{ color: "white", mt: 1, cursor: "pointer" }}>
            <label htmlFor="file-input">
              <AttachFileIcon sx={{ cursor: "pointer" }} />
            </label>
          </IconButton>
          <input
            onChange={(event) => setImg(event.target.files[0])}
            id="file-input"
            type="file"
            style={{ display: "none" }}
          />
        </span>
        <IconButton
          sx={{
            padding: 2,
            color: "white",
          }}
          variant="contained"
          onClick={handleSend}
        >
          <SendIcon />
        </IconButton>
      </Paper>
    </Stack>
  );
}

export default Input;
