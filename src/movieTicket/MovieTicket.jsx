import React from "react";
import data from "./danhSachGhe.json";
import { useSelector } from "react-redux";
import SeatList from "./SeatList";
import Tickets from "./Tickets";

export default function MovieTicket() {
  const { totalPrice } = useSelector((state) => {
    return state.movieTicket;
  });

  const handleBook = () => {
    alert(`toongr tiền là: ${totalPrice}`);
  };

  return (
    <div className="container">
      <h1 className="text-center text-primary">Đặt vé xem phim CyberSoft</h1>

      <div className="row">
        <div className="col-md-8">
          <SeatList seats={data} />
        </div>
        <div className="col-md-4">
          <Tickets />
        </div>
      </div>

      <div className="text-center mt-3">
        <button className="btn btn-primary" onClick={handleBook}>
          Đặt vé
        </button>
      </div>
    </div>
  );
}
