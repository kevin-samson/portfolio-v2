import React, { useContext } from "react";
import { SmoothScrollContext } from "@/context/smoothScroll";

function contact() {
  const { scroll } = useContext(SmoothScrollContext);
  return (
    <section id="contact" className="h-screen">
      contact
    </section>
  );
}

export default contact;
