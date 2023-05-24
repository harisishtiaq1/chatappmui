import React, { useContext, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { db } from "../../firebase";
import {
  Avatar,
  Box,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { AuthContext } from "../../Context/AuthContext";
function Search() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };
  const handleSelect = async () => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if(!res.exists()){
        await setDoc(doc(db,"chats",combinedId),{messages:[]})

       await updateDoc(doc(db,'userChats',currentUser.uid),{
        [combinedId+".userInfo"]:{
            uid:user.uid,
            displayName:user.displayName,
            photoURL:user.photoURL
        },
        [combinedId+".date"]:serverTimestamp()
       })
      }
    } catch (err) {
      setErr(true);
    }
    setUser(null)
    setUserName("")
  };
  return (
    <>
      {err && <Typography> User Not Found</Typography>}
      <Paper
        sx={{
          width: "210px",
          height: "30px",
          backgroundColor: "#F4F7FE",
          borderRadius: "40px",
          padding: "8px 42px 8px 20px",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          mt: 2,
        }}
      >
        <InputBase
          onKeyDown={handleKey}
          sx={{ ml: 2 }}
          placeholder="Search.."
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <IconButton onClick={handleSearch}>
          <SearchIcon fontSize="small" />
        </IconButton>
      </Paper>
      {user && (
        <Box
          onClick={handleSelect}
          sx={{ display: "flex", cursor: "pointer", mt: 2, ml: 2 }}
        >
          <Avatar alt="Remy Sharp" src={user.photoURL} />
          <Stack direction="column">
            <Typography sx={{ fontWeight: "600", ml: 2, mt: 1 }}>
              {user.displayName}
            </Typography>
          </Stack>
        </Box>
      )}
    </>
  );
}

export default Search;
