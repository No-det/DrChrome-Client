import { useEffect } from "react";
import socketIoClient from "socket.io-client";
import Peer from "peer";

const VideoConf = (props) => {
  const api = "http://localhost:8000/";
  let videoGrid, socket;
  let peer;
  let connectionOptions = {
    "force new connection": true,
    reconnectionAttempts: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  };
  useEffect(() => {
    peer = new Peer(undefined, {
      path: "/peerjs",
      host: "/",
      port: 8000,
    });
    socket = socketIoClient(api, connectionOptions);
    videoGrid = document.getElementById("video-grid");
    const myVideo = document.createElement("video");
    myVideo.muted = true;
    let myVideoStream;
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        myVideoStream = stream;
        addVideoStream(myVideo, stream);
      });

    peer.on("open", (id) => {
      console.log(id);
    });
    socket.emit("join-room", props.match.params.id);

    const connectToNewUser = () => {
      console.log("New User");
    };
    const addVideoStream = (video, stream) => {
      video.srcObject = stream;
      video.addEventListener("loadedmetadata", () => {
        video.play();
      });
      videoGrid.append(video);
    };
    socket.on("user-connected", () => {
      connectToNewUser();
    });
  }, []);

  return (
    <div id="video-grid">
      <h1>Testing</h1>
    </div>
  );
};

export default VideoConf;
