import { Routes, Route } from "react-router-dom";
import { About } from "../about";
import { Resume } from "../resume/resume";
import { BackgroundSlider } from "../background-slider";
import { Contact } from "../contact";
import { Header } from "./header";
import { Miles } from "../miles";

export const Menu = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<BackgroundSlider />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="miles" element={<Miles />} />
      </Routes>
    </>
  );
};
