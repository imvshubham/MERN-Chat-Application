import { Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { ChatState } from "../Context/ChatProvider";
import MyChats from "../components/miscellaneous/MyChats";
import ChatBox from "../components/miscellaneous/ChatBox";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import Lottie from "react-lottie"; // Import the Lottie component
import animationData from "../animation/EYTaYnS7e6.json"; // Replace with the path to your Lottie animation JSON file

const ChatPage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // Simulate a delay of 2 seconds (adjust as needed)
    const delayTimeout = setTimeout(() => {
      setShowAnimation(false); // Hide the animation after the delay
    }, 2000); // 2000 milliseconds = 2 seconds

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(delayTimeout);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={{ width: "100%" }}>
      {showAnimation && (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <Lottie options={defaultOptions} height={400} width={400} />{/* Render the Lottie animation */}
        </div>
      )}

      {!showAnimation && user && <SideDrawer />}
      {!showAnimation && (
        <Box
          display="flex"
          justifyContent="space-between"
          w="100%"
          h="100vh"
          p="10px"
        >
          {user && <MyChats fetchAgain={fetchAgain} />}
          {user && (
            <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          )}
        </Box>
      )}
    </div>
  );
};

export default ChatPage;
