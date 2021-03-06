import { NavigationItemType } from "@appTypes/NavigationTypes";
import NavigationItemDesktop from "./NavigationItemDesktop";

const items: NavigationItemType[] = [
  {
    label: "About",
    accessor: "about",
    path: "/about",
  },
  {
    label: "Services",
    accessor: "services",
    path: "/services",
  },
  {
    label: "Pricing",
    accessor: "pricing",
    path: "/pricing",
  },
  {
    label: "Blog",
    accessor: "blog",
    path: "/blog",
  },
];

const NavigationDesktop = () => {
  return (
    <div className="w-full px-dNav">
      <ul className="flex items-center justify-between">
        {items &&
          items.map((item: NavigationItemType, index: number) => (
            <NavigationItemDesktop key={index} item={item} />
          ))}
      </ul>
    </div>
  );
};

export default NavigationDesktop;
