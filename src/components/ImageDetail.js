import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// const ImageDetail = (props) => {
//   return (
//     console.log(props),
//     (
//       <View>
//         <Image source={props.imageSource} />
//         <Text>{props.title}</Text>
//         <Text>Image score - {props.imageScore}</Text>
//       </View>
//     )
//   );
// };

const ImageDetail = ({ imageSource, title, imageScore }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image score - {imageScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
