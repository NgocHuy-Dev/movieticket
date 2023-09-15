import React from "react";

import { useSelector } from "react-redux";
import SeatRows from "./SeatRows";

export default function SeatList({ seats }) {
  // const { selectedSeats } = useSelector((state) => {
  //   return state.busTicket;
  // });
  return (
    <div className="row">
      <div className="col-md-12 text-center bg-warning">Màn hình</div>

      {seats.map((seat, index) => {
        // Tìm xem ghế hiện tại có đang trong danh sách ghế đang chọn hay không
        // const isSelected = selectedSeats.find((item) => item.id === seat.id);
        // console.log("danh sách ghế:", seat.danhSachGhe);
        return (
          <>
            <div className="row">
              <div className="col-1">
                <div className="btn text-yellow">{seat.hang}</div>
              </div>
              <div className="col-11" key={index}>
                {/* <SeatItem seats={seat.danhSachGhe} /> */}
                <SeatRows seatRows={seat.danhSachGhe} />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
