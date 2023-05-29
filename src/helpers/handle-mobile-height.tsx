export const handleMobileHeight = () => {
  const deviceWidth = window.matchMedia("(max-width: 1366px)");

  if (deviceWidth.matches) {
    return `${window.innerHeight}px`;
  }

  return null;
};
