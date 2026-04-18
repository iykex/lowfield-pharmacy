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
      {/* Full-bleed slides: override shadcn carousel pl-4 / -ml-4 so images align with pre-merge */}
      <CarouselContent className="!ml-0">
        {CAROUSEL_BANNER.map((image, index) => (
          <CarouselItem key={index} className="relative h-screen !pl-0 !pt-0 basis-full">
            <Image
              src={image}
              alt="Lowfield Pharmacy"
              fill
              className="object-cover object-center"
              priority={index === 0}
              quality={85}
              placeholder="blur"
              sizes="100vw"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-3 z-20 md:-left-12" />
      <CarouselNext className="right-3 z-20 md:-right-12" />
    </Carousel>
  );
}
