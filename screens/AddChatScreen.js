import { StyleSheet, Text, View } from "react-native";
import React, { useState, useLayoutEffect } from "react";
import { Button, Input } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a New Chat",
      headerTitleAlign: "center",
      headerBackTitle: "Chats",
    });
  }, []);

  const createChat = async () => {
    await addDoc(collection(db, "chats"), {
      chatName: input,
    })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => alert(error));
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setInput(text)}
        leftIcon={
          <Icon name="wechat" size={24} type="antdesign" color="black" />
        }
        onSubmitEditing={createChat}
      />
      <Button disabled={!input} title="Create new Chat" onPress={createChat} />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    height: "100%",
  },
});
