import { StatusBar } from "expo-status-bar";
import Login from "./screens/Login";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native"
import Register from "./screens/Register";
import Dashboard from "./screens/Dashboard";
import Adress from "./screens/adress";
const App: React.FC = () => {
  return (
    <>
  
        <TailwindProvider>
        <NavigationContainer>
          <StatusBar style="light" />
          <Adress />
          <Login />
          <Register/>
          <Dashboard />
          </NavigationContainer>
        </TailwindProvider>
    
    </>
  );
};

export default App;
