import React from "react";

import { FaCalendarCheck, FaRegHeart } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../../constants/route";

const EventItem = ({ data }) => {
  const navigate = useNavigate();

  const onNavigateToEventDetail = () => {
    navigate(ROUTE_PATH.EVENT_DETAIL(data.id));
  };

  return (
    <div
      className="border border-[#d1d5e8] rounded-md cursor-pointer"
      onClick={onNavigateToEventDetail}
    >
      <div
        className="pt-[45%] bg-no-repeat bg-cover bg-center rounded-t relative"
        style={{ backgroundImage: `url(${data.thumbnail})` }}
      >
        <div className="absolute right-4 bottom-3 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer border border-[#ffd8dc] bg-white">
          <FaRegHeart className="text-red-500" />
        </div>
      </div>

      <div className="p-3">
        <p className="line-clamp-2 uppercase font-semibold text-[#011bb6]">
          {data.name}
        </p>

        <div className="flex items-center text-xs text-[#626579] gap-x-2 mt-2">
          <FaCalendarCheck className="text-sm" />
          <p>{data.date}</p>
        </div>

        <div className="flex items-center text-xs text-[#626579] gap-x-2 mt-2">
          <FiMapPin className="text-sm" />
          <p className="flex-1">{data.location}</p>
        </div>

        <div className="flex items-center justify-between mt-3">
          <p className="text-sm text-[#f1600d]">
            <span>Từ </span>
            <span className="font-semibold">{data.ticketPrice}</span>
          </p>

          <button className="bg-[#002876] h-[30px] rounded-[10px] text-white font-semibold text-xs px-6">
            Mua vé
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
