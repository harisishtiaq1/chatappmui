import { Box, Divider } from "@mui/material";
import { db } from "../../firebase";
import { onSnapshot, doc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import Input from "./Input";
import { ChatContext } from "../../Context/ChatContext";
import Message from "./Message";
const thumbStyle = {
  backgroundColor: "transparent",
  borderRadius: "6px",
  cursor: "pointer",
  width: "3px",
  height: "5px",
};

function Messages() {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

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
        {messages.map((message) => (
          <Message message={message} key={message.id} />
        ))}
      </Scrollbars>
      <Divider sx={{ backgroundColor: "grey", mt: 2 }} />
      <Input />
    </Box>
  );
}

export default Messages;
