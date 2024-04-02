
export default function PaysageCard({mov}) {
  
    return (
      <section className="m-24 mr-0 flex w-full flex-wrap gap-2 pb-24">
        {mov.map((movie) => (
          <figure
            key={movie.id}
            className="group/card h-36 w-60 cursor-pointer overflow-hidden rounded-xl bg-colorBgBtnCate transition-transform delay-500 hover:h-auto hover:scale-125"
          >
            <section className="flex h-36 w-60 items-center justify-center overflow-hidden">
              <img
                className="w-full duration-300 ease-in-out group-hover/card:scale-105"
                src={movie.img}
                alt="Film"
              />
            </section>
            <figcaption className="px-4 py-3 text-colorWhite">
              <h3>{movie.name}</h3>
              <p>{movie.description}</p>
            </figcaption>
          </figure>
        ))}
      </section>
    );
  }