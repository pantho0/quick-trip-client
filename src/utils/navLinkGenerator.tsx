import { NavLink } from "react-router-dom";
import { TGlobalRoute, TNavLinkItem } from "../types/route.types";

export const navLinkGenerator = (items: TGlobalRoute[]) => {
  const navLinkItems = items.reduce((acc: TNavLinkItem[], item) => {
    if (item.name && item.path) {
      acc.push({
        key: item.name,
        label: <NavLink to={item.path}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name!,
        label: item.name,
        children: item.children.map((child) => {
          if (child.name) {
            return {
              key: child.name,
              label: <NavLink to={child.path!}>{child.name}</NavLink>,
            };
          }
        }),
      });
    }

    return acc;
  }, []);

  return navLinkItems;
};
