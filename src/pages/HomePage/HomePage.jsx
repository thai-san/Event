import React from "react";
import WrapperContent from "../../components/WrapperContent/WrapperContent";
import { Carousel } from "antd";
import EventItem from "../../components/EventItem/EventItem";

const LIST_EVENT = [
  {
    id: 1,
    name: "GIẢI CHẠY POCARI SWEAT RUN VIỆT NAM 2024",
    date: "Thứ bảy, 24 tháng 8, 2024",
    location: "The Metropole Thủ Thiêm, TP. Thủ Đức, TP. Hồ Chí Minh",
    ticketPrice: "450.000 đ",
    thumbnail: "https://pix.raceez.com/2024/06/03/Banner_1440_x_600.jpg",
  },
  {
    id: 2,
    name: "ĐẤT SEN HỒNG MARATHON ĐỒNG THÁP 2024",
    date: "Thứ bảy, 25 tháng 8, 2024",
    location: "TP. Cao Lãnh, tỉnh Đồng Tháp",
    ticketPrice: "199.000 đ",
    thumbnail: "https://pix.raceez.com/2024/05/29/1440x600-dsh24.png",
  },
  {
    id: 3,
    name: "DISTRICT 1 MIDNIGHT RUN 2024",
    date: "Thứ bảy, 24 tháng 8, 2024",
    location: "Đại lộ Lê Lợi - Nguyễn Huệ, TP. HCM",
    ticketPrice: "399.000 đ",
    thumbnail:
      "https://pix.raceez.com/2024/05/20/1440x600-d1_20240520185650.jpg",
  },
  {
    id: 7,
    name: "GIẢI CHẠY POCARI SWEAT RUN VIỆT NAM 2024",
    date: "Thứ bảy, 24 tháng 8, 2024",
    location: "The Metropole Thủ Thiêm, TP. Thủ Đức, TP. Hồ Chí Minh",
    ticketPrice: "450.000 đ",
    thumbnail: "https://pix.raceez.com/2024/06/03/Banner_1440_x_600.jpg",
  },
  {
    id: 8,
    name: "ĐẤT SEN HỒNG MARATHON ĐỒNG THÁP 2024",
    date: "Thứ bảy, 25 tháng 8, 2024",
    location: "TP. Cao Lãnh, tỉnh Đồng Tháp",
    ticketPrice: "199.000 đ",
    thumbnail: "https://pix.raceez.com/2024/05/29/1440x600-dsh24.png",
  },
  {
    id: 9,
    name: "DISTRICT 1 MIDNIGHT RUN 2024",
    date: "Thứ bảy, 24 tháng 8, 2024",
    location: "Đại lộ Lê Lợi - Nguyễn Huệ, TP. HCM",
    ticketPrice: "399.000 đ",
    thumbnail:
      "https://pix.raceez.com/2024/05/20/1440x600-d1_20240520185650.jpg",
  },
];

const HomePage = () => {
  return (
    <div className="py-4">
      <WrapperContent>
        {/* slider */}
        <Carousel autoplay draggable>
          <div className="pt-[35%] relative">
            <img
              src="/images/banner-1.png"
              alt="Banner 1"
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full block object-cover"
            />
          </div>

          <div className="pt-[35%] relative">
            <img
              src="/images/banner-2.jpg"
              alt="Banner 2"
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full block object-cover"
            />
          </div>

          <div className="pt-[35%] relative">
            <img
              src="/images/banner-3.jpg"
              alt="Banner 3"
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full block object-cover"
            />
          </div>

          <div className="pt-[35%] relative">
            <img
              src="/images/banner-4.jpg"
              alt="Banner 4"
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full block object-cover"
            />
          </div>
        </Carousel>

        <div className="bg-white rounded p-4 my-6">
          <h2 className="text-2xl font-semibold uppercase my-4">
            Sự kiện nổi bật
          </h2>

          <div className="grid gap-4 grid-cols-3">
            {LIST_EVENT.map((it) => (
              <EventItem key={`event-item-${it.id}`} data={it} />
            ))}
          </div>
        </div>
      </WrapperContent>
    </div>
  );
};

export default HomePage;
