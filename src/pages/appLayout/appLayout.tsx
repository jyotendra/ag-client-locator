import React from "react";

type AppLayoutProps = {
  children?: React.ReactNode;
};

export const AppLayout: React.FC<AppLayoutProps> = (props) => (
  <div>{props.children}</div>
);
