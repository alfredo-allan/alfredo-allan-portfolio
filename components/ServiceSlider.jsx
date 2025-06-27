"use client";

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { FreeMode, Pagination } from "swiper/modules";

// Estilos do Swiper
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Registra os módulos Swiper para uso global (importante para SSR e Next.js)
SwiperCore.use([FreeMode, Pagination]);

const serviceData = [
  {
    Icon: RxCrop,
    title: "Branding",
    description: "Identidade visual consistente e memorável para sua marca.",
  },
  {
    Icon: RxPencil2,
    title: "Design",
    description: "Interfaces criativas com foco em usabilidade e impacto.",
  },
  {
    Icon: RxDesktop,
    title: "Development",
    description: "Soluções web modernas, rápidas e escaláveis.",
  },
  {
    Icon: RxReader,
    title: "Copywriting",
    description: "Textos que convertem, comunicam e geram engajamento.",
  },
  {
    Icon: RxRocket,
    title: "SEO",
    description: "Otimização para motores de busca e crescimento orgânico.",
  },
];

const ServiceSlider = () => (
  <Swiper
    modules={[FreeMode, Pagination]}
    breakpoints={{
      320: { slidesPerView: 1, spaceBetween: 15 },
      640: { slidesPerView: 3, spaceBetween: 15 },
    }}
    pagination={{ clickable: true }}
    freeMode
    className="h-[240px] sm:h-[340px]"
  >
    {serviceData.map(({ Icon, title, description }, index) => (
      <SwiperSlide key={index}>
        <div className="bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer transition-all duration-300">
          {/* Ícone */}
          <div className="text-4xl text-accent mb-4">
            <Icon aria-hidden />
          </div>

          {/* Título e descrição */}
          <div className="mb-8">
            <h3 className="mb-2 text-lg font-medium">{title}</h3>
            <p className="max-w-[350px] leading-normal text-sm text-muted-foreground">
              {description}
            </p>
          </div>

          {/* Seta */}
          <div className="text-3xl">
            <RxArrowTopRight
              className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
              aria-hidden
            />
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ServiceSlider;
