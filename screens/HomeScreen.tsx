import React from "react";
import { View } from "react-native";
import VideoListItem from "../components/VideoListItem";
import videos from "../assets/data/videos.json";

const HomeScreen = () => {
  return (
    <View>
      {videos.map((video) => (
        <VideoListItem video={video} />
      ))}
    </View>
  );
};

export default HomeScreen;
