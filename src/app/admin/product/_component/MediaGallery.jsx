"use client";

import { useState } from "react";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const images = [
  { src: "/images/product/product.png" },
  { src: "/images/product/product.png" },
  { src: "/images/product/product.png" },
  { src: "/images/product/product.png" },
  { src: "/images/product/product.png" },
  { src: "/images/product/product.png" },
];

export default function MediaGallery() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="bg-white rounded-[24px] ">
        <h2 className="text-[24px] font-normal text-(--dark1) px-6 py-4 border-b-2 border-(--grey5)">Media</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:gird-cols-4 xl:grid-cols-5 gap-4 p-4">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className="cursor-pointer bg-white rounded-xl p-3 hover:shadow-md transition"
            >
              <div className="relative w-full h-[220px]">
                <Image
                  src={img.src}
                  fill
                  alt=""
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        slides={images}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Zoom, Thumbnails]}
      />
    </>
  );
}