import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import PuzzleListing from "../pages/PuzzleListing";
import PuzzleDetails from "../pages/PuzzleDetails";
import Comment from "../pages/Comment";
import CommentDetails from "../pages/CommentDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/puzzles" element={<PuzzleListing />} />
      <Route path="/puzzles/:slug" element={<PuzzleDetails />} />
      <Route path="/comments" element={<Comment />} />
      <Route path="/comments/:slug" element={<CommentDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
