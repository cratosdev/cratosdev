import { Brand } from "@/types/brand";
import Image from "next/image";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "UIdeck",
    href: "https://uideck.com",
    image: "/images/brands/uideck.svg",
  },
  {
    id: 2,
    name: "Tailgrids",
    href: "https://tailgrids.com",
    image: "/images/brands/tailgrids.svg",
  },
  {
    id: 3,
    name: "Lineicons",
    href: "https://lineicons.com",
    image: "/images/brands/lineicons.svg",
  },
  {
    id: 4,
    name: "GrayGrids",
    href: "https://graygrids.com",
    image: "/images/brands/graygrids.svg",
  },
  {
    id: 5,
    name: "TailAdmin",
    href: "https://tailadmin.com",
    image: "/images/brands/tailadmin.svg",
  },
];

const Brands = () => {
  return (
    
    <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
    <div className="transform scale-110 -rotate-6">
    <img src="/images/ecommerce.png" alt="" loading="lazy" />
    </div>
    <div className="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
    <img src="/images/blog/blog1.jpg" alt="" loading="lazy" />
    </div>
    <div className="transform scale-150 translate-y-11">
    <img src="/images/blog3.png" alt="" loading="lazy" />
    </div>
    <div className="transform translate-y-24 rounded-lg">
    <img src="/images/dashboard.png" className="rounded-lg" alt="" loading="lazy" />
    </div>
    <div className="row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4">
    <img src="/images/ecom.png" alt="" loading="lazy" />
    </div>
    
  </div>
  

    
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={image} alt={name} fill />
      </a>
    </div>
  );
};
