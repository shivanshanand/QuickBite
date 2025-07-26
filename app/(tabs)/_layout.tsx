import React from "react";
import { Redirect, Slot } from "expo-router";

export default function _layout() {
  const isauthenticated = false;
  if (!isauthenticated) {
    return <Redirect href={"/SignIn"} />;
  }
  return <Slot />;
}
