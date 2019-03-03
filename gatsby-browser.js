// custom typefaces
import "typeface-montserrat";
import "typeface-merriweather";

// support for page transition, setting time out for animation and waiting for it to be executed until page scrolls to the top
// SOURCE: https://divdev.io/animating-gatsby-pt/
const transitionDelay = 250;

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
  } else {
    const savedPosition = getSavedScrollPosition(location)
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay
    )
  }
  return false;
};