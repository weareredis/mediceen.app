import { gsap, isMobileViewport } from "./gsap";
import type { SceneBuilder } from "@/hooks/useScrollAnimation";

/**
 * Hero motion:
 * - Nested wrappers so entrance / idle / scrub never overwrite the same node's transform.
 * - Phone + QR share identical scrub/idle values (separate nodes) so z-order can be
 *   behind → phone → front floaters → QR while floaters stay outside the scrub tree.
 */
export const heroTimeline: SceneBuilder = ({ root, reducedMotion }) => {
  const copy = root.querySelectorAll("[data-reveal]");
  const deviceEnter = root.querySelector("[data-hero-device-enter]");
  const deviceScrub = root.querySelector("[data-hero-device-scrub]");
  const deviceIdle = root.querySelector("[data-hero-device-idle]");
  const qrEnter = root.querySelector("[data-hero-qr-enter]");
  const qrScrub = root.querySelector("[data-hero-qr-scrub]");
  const qrIdle = root.querySelector("[data-hero-qr-idle]");
  const floaterEnters = root.querySelectorAll("[data-hero-floater-enter]");
  const floaterIdles = root.querySelectorAll("[data-hero-floater-idle]");

  const scrubTargets = [deviceScrub, qrScrub].filter(Boolean);
  const idleTargets = [deviceIdle, qrIdle].filter(Boolean);
  const enterTargets = [deviceEnter, qrEnter].filter(Boolean);

  if (reducedMotion) {
    gsap.set([copy, ...enterTargets, floaterEnters], { opacity: 1, y: 0, scale: 1 });
    gsap.set([...scrubTargets, ...idleTargets, floaterIdles], {
      y: 0,
      scale: 1,
      yPercent: 0,
    });
    return;
  }

  const mobile = isMobileViewport();

  gsap
    .timeline({ defaults: { ease: "power3.out" } })
    .from(copy, { opacity: 0, y: 28, duration: 1, stagger: 0.09 })
    .from(enterTargets, { opacity: 0, y: 60, scale: 0.94, duration: 1.3 }, 0.2);

  if (floaterEnters.length) {
    gsap.from(floaterEnters, {
      opacity: 0,
      y: 16,
      duration: 0.85,
      stagger: 0.06,
      ease: "power3.out",
      delay: 0.45,
    });
  }

  if (idleTargets.length) {
    gsap.to(idleTargets, {
      y: mobile ? -5 : -10,
      duration: 4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }

  if (scrubTargets.length) {
    // Mild scrub keeps phone + QR visually attached without warping floaters.
    gsap.to(scrubTargets, {
      scale: mobile ? 1.02 : 1.04,
      yPercent: mobile ? 1.5 : 3,
      ease: "none",
      scrollTrigger: {
        trigger: root,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
      },
    });
  }

  if (floaterIdles.length && !mobile) {
    floaterIdles.forEach((el, i) => {
      gsap.to(el, {
        y: i % 2 === 0 ? -4 : 4,
        duration: 4.5 + (i % 3) * 0.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: i * 0.12,
      });
    });
  }
};
