import { ReactNode } from "react";

export type TGlobalRoute = {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TGlobalRoute[];
};
export type TRoute = {
  path?: string;
  element?: ReactNode;
};

export type TNavLinkItem = {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  children?: TNavLinkItem[];
};
