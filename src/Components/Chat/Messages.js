import {
  Box,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { db, auth } from "../../firebase";
import {
  collection,
  addDoc,
  where,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import image from "../Assets/A10.jpg";
import image2 from "../Assets/A11.jpg";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars";
const thumbStyle = {
  backgroundColor: "transparent",
  borderRadius: "6px",
  cursor: "pointer",
  width: "3px",
  height: "5px",
};

function Messages({ room }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });

      const formattedMessages = messages.map((message, index) => {
        return {
          ...message,
          align: index % 2 === 0 ? "left" : "right",
        };
      });

      setMessages(formattedMessages);
    });

    return () => unsubscribe();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setNewMessage("");
    if (newMessage === "") return;
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Scrollbars
        style={{ height: 285 }}
        autoHide={true}
        renderThumbVertical={({ style, ...props }) => (
          <div {...props} style={{ ...style, ...thumbStyle }} />
        )}
      >
        {messages &&
          messages.map((message, index) => (
            <>
              {message.user === auth.currentUser?.displayName ? (
                <Box
                  key={message.id}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    {message.createdAt && (
                      <Typography
                        sx={{
                          mt: 4,
                          height: "20px",
                          color: "rgb(107, 114, 128)",
                        }}
                      >
                        {message.createdAt.toDate().toLocaleTimeString()}
                      </Typography>
                    )}
                    <Box
                      sx={{
                        border: "1px solid rgb(238, 238, 238)",
                        borderRadius: "16px 0px 10px 16px",
                        display: "flex",
                        backgroundColor: "rgba(10, 143, 220, 0.1)",
                        color: "rgb(107, 114, 128)",
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="h6"
                        sx={{
                          ml: 1,
                          mr: 1,
                          mt: 2,
                          fontSize: "16px",
                          textTransform: "capitalize",
                          height: "40px",
                          fontWeight: "400",
                          width: "fit-content",
                        }}
                      >
                        {message.text}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    component="img"
                    src={image}
                    sx={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      mb: 5,
                      ml: 1,
                    }}
                  />
                </Box>
              ) : (
                <Box
                  key={message.id}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Box
                    component="img"
                    src={image2}
                    sx={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      mt: 4,
                      ml: 1,
                    }}
                  />
                  <Box sx={{ display: "flex", flexDirection: "column", ml: 1 }}>
                    {message.createdAt && (
                      <Typography sx={{ mt: 4, height: "20px", width: 90 }}>
                        {message.createdAt.toDate().toLocaleTimeString()}
                      </Typography>
                    )}
                    <Box
                      sx={{
                        border: "1px solid rgb(238, 238, 238)",
                        borderRadius: "0px 16px 16px 16px",
                        display: "flex",
                        borderTopRightRadius: "16px",
                        borderBottomRightRadius: "16px",
                        width: "fit-content",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="h6"
                        sx={{
                          fontSize: "14px",
                          ml: 1,
                          mr: 1,
                          mt: 2,
                          textTransform: "capitalize",
                          height: "40px",
                          fontWeight: "400",
                          width: "fit-content",
                        }}
                      >
                        {message.text}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              )}
            </>
          ))}
      </Scrollbars>
      <Divider sx={{ backgroundColor: "grey", mt: 2 }} />

      <form onSubmit={handleSubmit}>
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
              value={newMessage}
              autoComplete="off"
              onChange={(event) => setNewMessage(event.target.value)}
            />
            <IconButton sx={{ color: "white" }}>
              <CameraAltIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <AttachFileIcon />
            </IconButton>
            {newMessage.length > 0 ? (
              <IconButton
                sx={{
                  padding: 2,
                  backgroundColor: "blueviolet",
                  borderRadius: "16px 0px 0px 16px",
                  "&:hover": {
                    backgroundColor: "blueViolet",
                  },
                  color: "white",
                }}
                variant="contained"
                type="submit"
              >
                <SendIcon />
              </IconButton>
            ) : (
              <IconButton
                sx={{
                  padding: 2,
                  backgroundColor: "black",
                  borderRadius: "16px",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                  color: "white",
                }}
                variant="contained"
                type="submit"
              >
                <KeyboardVoiceIcon />
              </IconButton>
            )}
          </Paper>
        </Stack>
      </form>
    </Box>
  );
}

export default Messages;
