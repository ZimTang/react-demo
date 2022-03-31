import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  let id = searchParams.getAll("id");
  return <div>Home- {id}</div>;
}
