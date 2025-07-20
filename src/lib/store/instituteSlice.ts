import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IInstituteState {
  name: string;
  address: string;
  establishedYear: number | null;
}

const initialState: IInstituteState = {
  name: "",
  address: "",
  establishedYear: null,
};

const instituteSlice = createSlice({
  name: "institute",
  initialState,
  reducers: {
    setInstituteName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setInstituteAddress(state, action: PayloadAction<string>) {
      state.address = action.payload;
    },
    setEstablishedYear(state, action: PayloadAction<number>) {
      state.establishedYear = action.payload;
    },
    setInstituteData(
      state,
      action: PayloadAction<{ name: string; address: string; establishedYear: number }>
    ) {
      state.name = action.payload.name;
      state.address = action.payload.address;
      state.establishedYear = action.payload.establishedYear;
    },
  },
});

export const {
  setInstituteName,
  setInstituteAddress,
  setEstablishedYear,
  setInstituteData,
} = instituteSlice.actions;

export default instituteSlice.reducer;
