import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ColorSchemeName} from "react-native";

interface ThemeState {
  colorScheme: ColorSchemeName;
  useSystemTheme: boolean;
}

const initialState: ThemeState = {
  colorScheme: "light",
  useSystemTheme: true
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setColorScheme: (state, action: PayloadAction<ColorSchemeName>) => {
      state.colorScheme = action.payload;
    },
    setUseSystemTheme: (state, action: PayloadAction<boolean>) => {
      state.useSystemTheme = action.payload;
    }
  }
});

export const themeActions = themeSlice.actions;
