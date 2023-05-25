import { Avatar, Badge, Box, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { ChatContext } from "../../Context/ChatContext";
import { AuthContext } from "../../Context/AuthContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      border: "1px solid currentColor",
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
function Messages() {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);
  console.log(Object.entries(chats));

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };
  return (
    <Box>
      <Typography sx={{ fontWeight: "700", ml: 2, fontSize: "16px" }}>
        Connections
      </Typography>
      <Box sx={{ mt: 4, ml: 3 }}>
        {Object.entries(chats)?.map((chat) => (
          <Box
            onClick={() => handleSelect(chat[1].userInfo)}
            key={chat[0]}
            sx={{ display: "flex", cursor: "pointer", mt: 2 }}
          >
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="Remy Sharp" src={chat[1].userInfo.photoURL} />
            </StyledBadge>
            <Stack direction="column">
              <Typography sx={{ fontWeight: "600", ml: 2 }}>
                {chat[1].userInfo.displayName}
              </Typography>
              <Typography
                sx={{
                  ml: 2,
                  fontWeight: "100",
                  color: "grey",
                  fontSize: "13px",
                }}
              >
                {chat[1].lastMessage?.text}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Messages;
