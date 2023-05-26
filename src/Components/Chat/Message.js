import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { ChatContext } from "../../Context/ChatContext";

function Message({ message }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  console.log(message);
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <Box
      key={message.id}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        mt: 3,
      }}
    >
      <Box ref={ref} sx={{ display: "flex", flexDirection: "column" }}>
        {message.createdAt && (
          <Typography
            sx={{
              mt: 4,
              height: "20px",
              color: "black",
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
        src={
          message.senderId === currentUser.uid
            ? currentUser.photoURL
            : data.user.photoURL
        }
        sx={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          mb: 5,
          ml: 1,
        }}
      />
    </Box>
  );
}

export default Message;
