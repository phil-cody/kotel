export const handleAccordion = () => {
  const accordBlocks = document.querySelectorAll(".accordion");

  accordBlocks.forEach((block) => {
    const item = block.querySelector(".accordion-item");

    block.addEventListener("click", (e) => {
      const isActive = block.classList.contains("active");

      accordBlocks.forEach((b) => {
        b.classList.remove("active");
        const otherItem = b.querySelector(".accordion-item");
        otherItem.style.maxHeight = null;
      });

      if (!isActive) {
        block.classList.add("active");
        item.style.maxHeight = item.scrollHeight + "px";
      }
    });
  });
};
