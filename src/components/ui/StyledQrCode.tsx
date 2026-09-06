import { useEffect, useRef } from "react";
import QRCodeStyling, { type Options } from "qr-code-styling";

function readThemeColors() {
  const styles = getComputedStyle(document.documentElement);
  return {
    teal: styles.getPropertyValue("--teal").trim(),
    brand: styles.getPropertyValue("--brand").trim(),
    brandInk: styles.getPropertyValue("--brand-ink").trim(),
  };
}

function buildOptions(size: number, data: string): Partial<Options> {
  const { teal, brand, brandInk } = readThemeColors();
  return {
    width: size,
    height: size,
    data,
    type: "svg",
    margin: 0,
    qrOptions: { errorCorrectionLevel: "Q" },
    image: "/mediceen-mark.png",
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.32,
      margin: 4,
      crossOrigin: "anonymous",
    },
    dotsOptions: { type: "dots", color: brandInk },
    backgroundOptions: { color: "transparent" },
    cornersSquareOptions: { type: "extra-rounded", color: teal },
    cornersDotOptions: { type: "dot", color: brand },
  };
}

export function StyledQrCode({
  data,
  size = 220,
  className,
}: {
  data: string;
  size?: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const qrRef = useRef<QRCodeStyling | null>(null);

  useEffect(() => {
    qrRef.current = new QRCodeStyling(buildOptions(size, data));
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
      qrRef.current.append(containerRef.current);
    }

    // Re-read theme colors and redraw whenever the `dark` class toggles on <html>.
    const observer = new MutationObserver(() => {
      qrRef.current?.update(buildOptions(size, data));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    qrRef.current?.update(buildOptions(size, data));
  }, [data, size]);

  return <div ref={containerRef} className={className} />;
}