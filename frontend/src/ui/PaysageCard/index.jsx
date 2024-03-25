import { Link } from "react-router-dom";

export default function PaysageCard() {

  return (
    <>
      <figure className="group/card w-60 h-auto cursor-pointer overflow-hidden rounded-xl">
        
        <section className="flex justify-center items-center w-60 h-36 overflow-hidden">
            <img className="group-hover/card:scale-105 ease-in-out duration-300" src="/film5.jpg" alt="Film"/>
        </section>
        
        <figcaption className="hidden text-colorWhite bg-colorBgBtnCate px-4 py-3 group-hover/card:block ease-in-out duration-500">
            <h3>Title</h3>
            <p>Description</p>
        </figcaption>
      </figure>
    </>
  );
}