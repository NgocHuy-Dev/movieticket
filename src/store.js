import { configureStore } from "@reduxjs/toolkit";

// import movieTicketReducer from "./redux/slices/movieTicketSlice";

const initState = {
  selectedSeats: [],
  totalPrice: 0,
};

const movieTicketReducer = (state = initState, action) => {
  switch (action.type) {
    case "selectSeat": {
      const { isSelected, ...seat } = action.payload;

      if (isSelected) {
        const totalPrice = state.totalPrice + seat.gia;
        const selectedSeats = [...state.selectedSeats, seat];
        return { ...state, selectedSeats, totalPrice };
      }
      const selectedSeats = state.selectedSeats.filter(
        (item) => item.soGhe !== seat.soGhe
      );
      const totalPrice = state.totalPrice - seat.gia;
      return { ...state, selectedSeats, totalPrice };
    }
    case "removeSeat": {
      const seatNumber = action.payload;
      const selectedSeats = state.selectedSeats.filter(
        (item) => item.soGhe !== seatNumber
      );
      const totalPrice = selectedSeats.reducer(
        (result, item) => result + item.gia,
        0
      );
      return { ...state, selectedSeats, totalPrice };
    }
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    movieTicket: movieTicketReducer,
  },
});

export default store;

console.log("Store:", store.getState());
