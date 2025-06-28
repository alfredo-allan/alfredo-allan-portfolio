"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Loureto",
    position: "Barbeiro",
    message:
      "Cara, o sistema facilitou muito minha rotina aqui na barbearia. Os clientes conseguem agendar sozinhos, recebo as confirmações, e ainda controlo tudo pela página de gerenciamento. Simples, rápido e funciona de verdade!"
  },
  {
    image: "/t-avt-2.png",
    name: "Adenildo",
    position: "Gerente",
    message:
      "Antes era tudo no papel, uma bagunça. Agora com o sistema, cada entrada e saída fica registrada certinho, e ainda imprimo o comprovante na hora. Me deu mais controle e profissionalismo no atendimento. Valeu demais!"
  },
  {
    image: "/t-avt-3.png",
    name: "Gerson",
    position: "Lider de Loja",
    message:
      "O Breakage Control me ajuda a ver quando os produtos vão vencer. Com ele, eu consigo organizar melhor tudo que tá perto do prazo, evitar perdas e entender o que tá acontecendo no estoque. É fácil de usar e resolve um problema que eu sempre tive."
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      className="h-[400px]"
    >
      {testimonialData.map(({ image, name, position, message }, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-8 sm:px-16">
            {/* Avatar, nome e cargo */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                <div className="mb-2 mx-auto">
                  <Image src={image} width={100} height={100} alt={name} />
                </div>
                <div className="text-lg font-medium">{name}</div>
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {position}
                </div>
              </div>
            </div>

            {/* Mensagem */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-hidden
                />
              </div>
              <div className="xl:text-lg text-center md:text-left text-muted-foreground">
                {message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
