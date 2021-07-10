import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app-store/hooks";

import "./home.scss";
import { dummyAction } from "./home.slice";

export const Home = (props: any) => {
  const dispatch = useAppDispatch();
  const exclusiveEvents = useAppSelector((state) => state.home.dummyState);

  useEffect(() => {
    dispatch(dummyAction());
  }, []);

  return <div>Home!</div>;
};
