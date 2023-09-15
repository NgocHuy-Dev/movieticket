import { createSlice } from "@reduxjs/toolkit";

const movieTicketSlice = createSlice({
  name: "movieTicket",
  initialState: {
    selectedSeats: [],
    totalPrice: 0,
  },
  reducers: {
    selectSeat: (state, action) => {
      const { isSelected, ...seat } = action.payload;
      if (isSelected) {
        state.selectedSeats.push(seat);
        // state.totalPrice +=
      } else {
        // const index= state.selectedSeats.findIndex((item)=>item.id === id chổ ngồi)
        // state.selectedSeats.splice(index, 1);
        // state.totalPrice -= seat.price
      }
    },

    removeSeat: (state, action) => {
      const seatId = action.payload;
      const index = state.selectedSeats.findIndex((item) => item.id === seatId);
      state.selectedSeats.splice(index, 1);
      state.totalPrice = state.selectedSeats.reduce(
        (result, item) => result + item.price,
        0
      );
    },
  },
});

export const { selectSeat, removeSeat } = movieTicketSlice.actions;
export default movieTicketSlice.reducer;
