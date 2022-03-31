import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function List() {
  const location = useLocation();
  console.log(location.pathname);
  console.log(useParams().id);
  return <div>List</div>;
}
