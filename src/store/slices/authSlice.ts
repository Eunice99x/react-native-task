import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  user: null | {
    email: string;
    name: string;
  };
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState>) => {
      state.user = action.payload.user;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    logout: state => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    }
  }
});

const authActions = authSlice.actions;
export {authActions};
