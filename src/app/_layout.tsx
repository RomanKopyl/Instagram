import { Stack } from "expo-router";
import React from "react";
import "../../global.css";
import AuthProvider from "../providers/AuthProvider";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </AuthProvider>
  );
}