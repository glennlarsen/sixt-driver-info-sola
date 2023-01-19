import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const ScrollTo = (input) => {
  scroller.scrollTo(input, {
    duration: 800,
    delay: 0,
    smooth: true,
    offset: -100,
    isDynamic: true,
  });
};

export default ScrollTo;
