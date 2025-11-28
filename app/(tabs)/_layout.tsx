import React from "react";
import { Tabs } from "expo-router";
import { Platform } from "react-native";
import {
  Home,
  User,
  GraduationCap,
  FolderGit2,
  Info,
  Gamepad2,
} from "lucide-react-native";

const COLORS = {
  tabBarBg: "#121212",
  active: "#ededed",
  inactive: "#666666", 
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: COLORS.tabBarBg,
          borderTopColor: "#333",
          borderTopWidth: 1,
          elevation: 0,

          height: Platform.OS === "ios" ? 88 : 96,

          paddingBottom: Platform.OS === "ios" ? 28 : 36,

          paddingTop: 8,
        },

        tabBarActiveTintColor: COLORS.active,
        tabBarInactiveTintColor: COLORS.inactive,

        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "500",
          marginTop: 2,
        },
      }}
    >
      {/* 1. INÍCIO */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
        }}
      />

      {/* 2. PERFIL */}
      <Tabs.Screen
        name="sobremim"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => <User size={24} color={color} />,
        }}
      />

      {/* 3. FORMAÇÃO */}
      <Tabs.Screen
        name="experiencia"
        options={{
          title: "Formação",
          tabBarIcon: ({ color }) => <GraduationCap size={24} color={color} />,
        }}
      />

      {/* 4. PROJETOS */}
      <Tabs.Screen
        name="projetos"
        options={{
          title: "Projetos",
          tabBarIcon: ({ color }) => <FolderGit2 size={24} color={color} />,
        }}
      />

      {/* 5. JOGO */}
      <Tabs.Screen
        name="forca"
        options={{
          title: "Jogar",
          tabBarIcon: ({ color }) => <Gamepad2 size={24} color={color} />,
        }}
      />

      {/* 6. INFO */}
      <Tabs.Screen
        name="sobre"
        options={{
          title: "Info",
          tabBarIcon: ({ color }) => <Info size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
