import { PageContainer } from "@/components/layout/PageContainer";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { gsap, revealFrom } from "@/animations/gsap";
import { ProfileExperience } from "@/components/product/ProfileExperience";

export function FinalMomentSection() {
  const ref = useScrollAnimation<HTMLElement>(({ root, reducedMotion }) => {
    revealFrom(root.querySelectorAll("[data-reveal]"), root, reducedMotion);
    if (reducedMotion) return;
    const phone = root.querySelector("[data-final-phone]");
    if (!phone) return;
    gsap.from(phone, {
      opacity: 0,
      y: 60,
      scale: 0.95,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: { trigger: root, start: "top 70%" },
    });
    gsap.to(phone, { y: -12, duration: 5, ease: "sine.inOut", repeat: -1, yoyo: true });
  });

  return (
    <section ref={ref} className="brand-wash py-32" aria-labelledby="final-heading">
      <PageContainer className="flex flex-col items-center text-center">
        <p
          id="final-heading"
          className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-brand"
          data-reveal
        >
          Mediceen
        </p>
        <p
          className="mt-6 text-balance-tight font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-brand-ink"
          data-reveal
        >
          Your preparation.
          <br />
          Your pace.
        </p>

                <div data-final-phone className="mt-16">
          <PhoneMockup className="w-[min(56vw,14rem)] lg:w-[min(25vw,17.5rem)]">
            <ProfileExperience />
          </PhoneMockup>
        </div>
      </PageContainer>
    </section>
  );
}
