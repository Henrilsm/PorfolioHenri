import { Tabs } from "expo-router";
import {
  Home,
  User,
  GraduationCap,
  FolderGit2,
  Info,
  Gamepad2,
} from "lucide-react-native";
import { Platform } from "react-native";

const COLORS = {
  background: "#0a0a0a",
  active: "#ededed",
  inactive: "#666666",
  tabBarBg: "#121212",
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.tabBarBg,
          borderTopColor: "#333",
          height: Platform.OS === "ios" ? 88 : 65, 
          paddingBottom: Platform.OS === "ios" ? 28 : 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: COLORS.active,
        tabBarInactiveTintColor: COLORS.inactive,
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "500",
        },
      }}
    >
      {/* 1. HOME */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => <Home size={22} color={color} />,
        }}
      />

      {/* 2. PERFIL (sobremim.tsx) */}
      <Tabs.Screen
        name="sobremim"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => <User size={22} color={color} />,
        }}
      />

      {/* 3. FORMAÇÃO (experiencia.tsx) */}
      <Tabs.Screen
        name="experiencia"
        options={{
          title: "Formação",
          tabBarIcon: ({ color }) => <GraduationCap size={22} color={color} />,
        }}
      />

      {/* 4. PROJETOS */}
      <Tabs.Screen
        name="projetos"
        options={{
          title: "Projetos",
          tabBarIcon: ({ color }) => <FolderGit2 size={22} color={color} />,
        }}
      />

      {/* 5. JOGO (forca.tsx) */}
      <Tabs.Screen
        name="forca"
        options={{
          title: "Jogar",
          tabBarIcon: ({ color }) => <Gamepad2 size={22} color={color} />,
        }}
      />

      {/* 6. APP INFO (sobre.tsx) */}
      <Tabs.Screen
        name="sobre"
        options={{
          title: "App Info",
          tabBarIcon: ({ color }) => <Info size={22} color={color} />,
        }}
      />
    </Tabs>
  );
}
