import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // moje reducery
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
