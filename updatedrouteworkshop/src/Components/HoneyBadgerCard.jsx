import { Honeybadgers } from "./HoneyBadgers";
import HoneyBadgersPage from "./HoneyBadgersPage";
import { Link, Outlet, useSearchParams } from "react-router-dom";

export default function HoneyBadgerCard() {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort");
  return (
    <div className="BadgerContainer">
      <hr />
      sort: {sort}
      <Outlet />
      {Honeybadgers.map((item) => (
        <HoneyBadgersPage
          key={item.id}
          name={item.name}
          description={item.description}
          img={item.img}
          alt={item.alt}
        />
      ))}
    </div>
  );
}
