import React from "react";
const ScrollTop = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      {/* <!--Scroll to top--> */}
      <button
        class="scroll-top scroll-to-target"
        data-target="html"
        onClick={scrollToTop}
      >
        <span class="fal fa-angle-up"></span>
      </button>
    </>
  );
};

export default ScrollTop;
