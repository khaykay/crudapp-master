import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { async } from "q";

export const fetchCountries = createAsyncThunk(
  "country",
  async (payload, { getState, rejectWithValue, dispatch }) => {
    try {
      let response = await fetch("https://restcountries.com/v2/all");
      let countries = await response.json();
      return countries;
    } catch (error) {
      console.log(error);
      return rejectWithValue("error! something went wrong ");
    }
  }
);

const initialState = {
  isLoading: true,
  error: false,
  favourite: false,
};
export const countrySlices = createSlice({
  name: "country",
  initialState,
  //   extraReducers: {[fetchCountries. ]},
});
