export const isElementNotInViewport = (el: HTMLElement) => {
  const { top, bottom } = el?.getBoundingClientRect() ?? {};
  return (
    (top >= (window.innerHeight || document.documentElement.clientHeight) ||
      bottom <= 0) &&
    !!el
  );
};
