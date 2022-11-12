import { StatusBar } from "expo-status-bar";
import Login from "./screens/Login";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native"
import Register from "./screens/Register";
import Dashboard from "./screens/Dashboard";
// import Searchbar from "./screens/searchbar";

const App: React.FC = () => {
  return (
    <>
  
        <TailwindProvider>
        <NavigationContainer>
          <StatusBar style="light" />

    
          {/* <Searchbar /> */}
          <Login />
          <Register/>
          <Dashboard />
          </NavigationContainer>
        </TailwindProvider>
    
    </>
  );
};

export default App;
