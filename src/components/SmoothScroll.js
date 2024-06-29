import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function ScrollerComponent({ children, smoothness = 1 }) {
  // Default smoothness is 1
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Setup smooth scroll
    smoothScroll("#content", null, smoothness);

    // Pin each box for 300px when they hit the top
    gsap.utils.toArray(".box").forEach((box) => {
      ScrollTrigger.create({
        trigger: box,
        pin: true,
        start: "top top",
        end: "+=300",
      });
    });

    // Refresh ScrollTrigger on window resize
    window.addEventListener("resize", ScrollTrigger.refresh);
    return () => window.removeEventListener("resize", ScrollTrigger.refresh);
  }, [smoothness]); // Rerun effect if smoothness changes

  // Helper function to set up smooth scroll
  function smoothScroll(content, viewport, smoothness) {
    content = gsap.utils.toArray(content)[0];
    smoothness = smoothness || 1;

    gsap.set(viewport || content.parentNode, {
      overflow: "hidden",
      position: "fixed",
      height: "100%",
      width: "100%",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    });
    gsap.set(content, { overflow: "visible", width: "100%" });

    let getProp = gsap.getProperty(content),
      setProp = gsap.quickSetter(content, "y", "px"),
      setScroll = ScrollTrigger.getScrollFunc(window),
      removeScroll = () => (content.style.overflow = "visible"),
      killScrub = (trigger) => {
        let scrub = trigger.getTween
          ? trigger.getTween()
          : gsap.getTweensOf(trigger.animation)[0];
        scrub && scrub.pause();
        trigger.animation.progress(trigger.progress);
      },
      height,
      isProxyScrolling;

    function refreshHeight() {
      height = content.clientHeight;
      content.style.overflow = "visible";
      document.body.style.height = height + "px";
      return height - document.documentElement.clientHeight;
    }

    ScrollTrigger.addEventListener("refresh", () => {
      removeScroll();
      requestAnimationFrame(removeScroll);
    });

    ScrollTrigger.defaults({ scroller: content });
    ScrollTrigger.prototype.update = (p) => p;

    ScrollTrigger.scrollerProxy(content, {
      scrollTop(value) {
        if (arguments.length) {
          isProxyScrolling = true;
          setProp(-value);
          setScroll(value);
          return;
        }
        return -getProp("y");
      },
      scrollHeight: () => document.body.scrollHeight,
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    return ScrollTrigger.create({
      animation: gsap.fromTo(
        content,
        { y: 0 },
        {
          y: () => document.documentElement.clientHeight - height,
          ease: "none",
          onUpdate: ScrollTrigger.update,
        }
      ),
      scroller: window,
      invalidateOnRefresh: true,
      start: 0,
      end: refreshHeight,
      refreshPriority: -999,
      scrub: smoothness,
      onUpdate: (self) => {
        if (isProxyScrolling) {
          killScrub(self);
          isProxyScrolling = false;
        }
      },
      onRefresh: killScrub,
    });
  }

  return (
    <div id="content">
      {/* Your content here */}
      {children}
    </div>
  );
}

export default ScrollerComponent;
