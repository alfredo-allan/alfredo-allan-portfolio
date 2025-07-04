"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        { title: "title", path: "/thumb1.jpg", link: "https://alfredo-allan.github.io/My-Make-System/" },
        { title: "title", path: "/thumb2.jpg", link: "https://breakage-control.vercel.app/" },
        { title: "title", path: "/thumb3.jpg", link: "https://alfredo-allan.github.io/presentation-page/" },
        { title: "title", path: "/thumb4.jpg", link: "https://alfredo-allan.github.io/one-park/" },
      ],
    },
    // {
    //   images: [
    //     { title: "title", path: "/thumb4.jpg", link: "http://example.com" },
    //     { title: "title", path: "/thumb1.jpg", link: "http://example.com" },
    //     { title: "title", path: "/thumb2.jpg", link: "http://example.com" },
    //     { title: "title", path: "/thumb3.jpg", link: "http://example.com" },
    //   ],
    // },
  ],
};

const WorkSlider = () => (
  <Swiper
    modules={[Pagination]}
    spaceBetween={10}
    pagination={{ clickable: true }}
    className="h-[280px] sm:h-[480px]"
  >
    {workSlides.slides.map((slide, i) => (
      <SwiperSlide key={i}>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {slide.images.map(({ title, path, link }, imageI) => (
            <div
              className="relative rounded-lg overflow-hidden flex items-center justify-center group"
              key={imageI}
            >
              <div className="flex items-center justify-center relative overflow-hidden group">
                {/* Imagem */}
                <Image src={path} alt={title} width={500} height={300} />

                {/* Gradiente de overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                  aria-hidden
                />

                {/* Título com link */}
                <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                  <Link
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                  >
                    <div className="delay-100">LIVE</div>
                    <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                      PROJECT
                    </div>
                    <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                      <BsArrowRight aria-hidden />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default WorkSlider;
