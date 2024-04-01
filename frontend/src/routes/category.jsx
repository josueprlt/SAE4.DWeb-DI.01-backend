import { Outlet, useParams } from "react-router-dom";
import { fetchCategory } from "../main";


export default function Category() {
  const { categoryId } = useParams();

  let data = fetchCategory(categoryId);
  console.log(data);

  return (
    <>
      <section className="bg-colorBgBody relative h-full">
        <Outlet/>
      </section>
    </>
  );
}