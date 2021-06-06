import React from "react";
import { View, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

import styles from "./styles";

type Props = {
  video: {
    id: string;
  };
};

const VideoListItem = (props) => {
  console.log(props);
  return (
    <View>
      <View>
        <Image
          style={styles.thumbnail}
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail1.jpeg",
          }}
        />
        <View style={styles.timeContainer}>
          <Text style={styles.time}>15:23</Text>
        </View>
      </View>
      <View style={styles.titleRow}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
          }}
        />
        <View style={styles.middleContainer}>
          <Text style={styles.title}>YouTube clone using React Native</Text>
          <Text style={styles.subtitle}>Nishant 10m 1 week ago</Text>
        </View>
        <View style={styles.dots}>
          <Entypo name="dots-three-vertical" size={15} color="white" />
        </View>
      </View>
    </View>
  );
};

export default VideoListItem;
