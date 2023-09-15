import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeSeat } from "../redux/slices/movieTicketSlice";

export default function Tickets() {
  const { selectedSeats } = useSelector((state) => {
    return state.movieTicket;
  });

  const dispatch = useDispatch();

  const handleRemove = (seatNumber) => {
    dispatch(removeSeat(seatNumber));
  };

  console.log("selectedSeats", selectedSeats);
  return (
    <div>
      <h3>Danh sách vé đang chọn</h3>
      {selectedSeats.map((item) => {
        return (
          <div className="mb-2">
            <span className="me-2">
              {item.soGhe} - {item.gia} VNĐ
            </span>
            <button
              className="btn btn-danger"
              onClick={() => handleRemove(item.soGhe)}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}
