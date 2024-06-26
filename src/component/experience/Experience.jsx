import React from "react";
import "./Experience.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import Techpix from "../../img/techpix.png";
import GLogo from "../../img/gdsclogo.webp";
import KVLogo from "../../img/KvLogo.jpeg";
import Skillark from "../../img/Skillark.jpg";

const Experience = () => {
  // Datas
  const teams = [
    {
      img: Techpix,
      Name: `Techpix IT Solutions Pvt. Ltd.`,
      Detail: `Frontend Developer | Crafted Pixel Perfect UIs | Creating ERP System | Collaborating in Team & managing Software Development Lifecycle`,
    },
    {
      img: Skillark,
      Name: `Skillark Pvt. Ltd`,
      Detail: `Frontend Developer👨‍💻 | Creating reusable & responsive UI components such as MCQ Test component | Designing Schemas of Database`,
    },
    {
      img: GLogo,
      Name: `Google Developer Students Club`,
      Detail: `Web Dev Mentor🎓 of Google Developer Students Club BBDITM (2022-2023) | Organised Google Devfest22' | Coordinating Google Wow23' | Organising Weave a Web 2k23`,
    },
    {
      img: KVLogo,
      Name: `Karmavesh - a zeal to create`,
      Detail: `Dramatics Head🎭 | Organising many events such as K-Hunts, Utakrsh2k23, zeal to career`,
    },
  ];

  return (
    <div className="t-wrapper" id="Team">
      <div className="t-heading">
        <span>My </span>
        <span>Work Experience</span>
        <div
          className="blur t-blur-1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur-2" style={{ background: "skyblue" }}></div>
      </div>

      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {teams.map((team, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="team">
                <img src={team.img} alt="" />
                <span>{team.Name}</span>
                <span>{team.Detail}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Experience;
