import { Box } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Continent } from "../../pages";
import { HomeSwiperSlide } from "./HomeSwiperSlide";

interface HomeSwiperProps {
  continents: Continent[];
}

export const HomeSwiper: React.FC<HomeSwiperProps> = ({ continents }) => (
  <Box borderRadius={{ xl: 4 }} overflow="hidden">
    <Swiper
      loop
      navigation
      speed={750}
      slidesPerView={1}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
    >
      {continents.map(continent => (
        <SwiperSlide key={continent.slug}>
          <HomeSwiperSlide {...continent} />
        </SwiperSlide>
      ))}

      {/* <SwiperSlide>
        <HomeSwiperSlide
          continent="south-america"
          heading="América do Sul"
          description="O melhor continente."
        />
      </SwiperSlide>

      <SwiperSlide>
        <HomeSwiperSlide
          continent="central-america"
          heading="América Central"
          description="O paraíso na Terra."
        />
      </SwiperSlide>

      <SwiperSlide>
        <HomeSwiperSlide
          continent="north-america"
          heading="América do Norte"
          description="O lugar do capitalismo selvagem."
        />
      </SwiperSlide>

      <SwiperSlide>
        <HomeSwiperSlide
          continent="africa"
          heading="África"
          description="A natureza mais selvagem."
        />
      </SwiperSlide>

      <SwiperSlide>
        <HomeSwiperSlide
          continent="asia"
          heading="Ásia"
          description="O continente mais exótico."
        />
      </SwiperSlide>

      <SwiperSlide>
        <HomeSwiperSlide
          continent="oceania"
          heading="Oceania"
          description="O continente mais perigoso."
        />
      </SwiperSlide> */}
    </Swiper>
  </Box>
);
