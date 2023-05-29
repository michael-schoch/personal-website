export const handleMobileHeight = () => {
  const deviceWidth = window.matchMedia("(max-width: 1024px)");

  if (deviceWidth.matches) {
    return `${window.innerHeight}px`;
  }

  return null;
};
