import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, ListItem } from "@rneui/themed";
import { db } from "../firebase";
import { collection, onSnapshot, orderBy } from "firebase/firestore";

const CustomListItem = ({ id, chatName, enterChat }) => {
  const [chatMessages, setChatMessages] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "chats", id, "messages"),
      orderBy("timestamp", "desc"),
      (snapshot) => setChatMessages(snapshot.docs.map((doc) => doc.data()))
    );
    return () => {
      unsubscribe();
    };
  }, [chatMessages]);
  console.log(chatMessages);
  return (
    <ListItem key={id} bottomDivider onPress={() => enterChat(id, chatName)}>
      <Avatar
        rounded
        source={{
          uri:
            chatMessages?.[0]?.photoURL ||
            "https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: 800 }}>{chatName}</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          {chatMessages?.[0]?.displayName} : {chatMessages?.[0]?.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
