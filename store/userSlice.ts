import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//Saves the username state. Any hard refresh will erase this, however.
interface UserState {
  username: string;
}

const initialState: UserState = {
  username: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    }
  }
});

export const { setUsername } = userSlice.actions;
export default userSlice.reducer;
