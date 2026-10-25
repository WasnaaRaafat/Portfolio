import { RefObject, useEffect, useState } from 'react';

export type RevealState = 'static' | 'armed' | 'revealed';

// Content is visible by default ('static'). Only when the browser supports
// IntersectionObserver and the user hasn't asked for reduced motion do we
// animate: the element is hidden ('armed') while it is still just below the
// viewport, then animates in ('revealed') once it actually scrolls into view.
// Elements already on screen, and anything a crawler or full-page screenshot
// sees without scrolling, are never hidden.
const ARM_DISTANCE = 200;
const ARM_MARGIN = `0px 0px ${ARM_DISTANCE}px 0px`;

export const useReveal = (ref: RefObject<Element>): RevealState => {
  const [state, setState] = useState<RevealState>('static');

  useEffect(() => {
    const element = ref.current;
    if (
      !element ||
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    // Anything on screen, or about to be, at load stays as it is.
    const { top, bottom } = element.getBoundingClientRect();
    if (top < window.innerHeight + ARM_DISTANCE && bottom > 0) return;

    const armObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState((s) => (s === 'static' ? 'armed' : s));
          armObserver.disconnect();
        }
      },
      { rootMargin: ARM_MARGIN }
    );
    const revealObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Coming straight from 'static' (e.g. a jump via a nav link) there
        // is nothing to animate, so the content simply stays visible.
        setState((s) => (s === 'armed' ? 'revealed' : s));
        armObserver.disconnect();
        revealObserver.disconnect();
      }
    });

    armObserver.observe(element);
    revealObserver.observe(element);
    return () => {
      armObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [ref]);

  return state;
};
