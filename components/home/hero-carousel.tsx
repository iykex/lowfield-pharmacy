"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { CAROUSEL_BANNER } from "@/lib/constants/general";

export function BackgroundCarousel() {
  const plugin = useRef(Autoplay({ delay: 10000, stopOnInteraction: false }));

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        duration: 50,
      }}
      plugins={[plugin.current]}
      className="w-full h-full absolute inset-0"
    >
      <CarouselContent>
        {CAROUSEL_BANNER.map((image, index) => {
          return (
            <CarouselItem key={index} className="h-screen relative">
              <Image
                src={image}
                alt="Lowfield Pharmacy"
                fill
                className="object-cover object-center"
                priority
                quality={85}
                placeholder="blur"
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
