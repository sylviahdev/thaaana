// THAANA HARDWARE LIMITED — logo lockup rendered from the official image.
//
// The image at /logo.png already contains the hex badge + wordmark in
// one composition, so this component is mostly a wrapper that places it
// well on light or dark backgrounds.
//
// Exports:
//   <LogoMark />     — just the image, square, suitable for tight spots
//   <LogoWordmark /> — re-uses the same image (tagline optional)
//   <Logo />         — default lockup used in Navbar and Footer

const LOGO_SRC = "/logo.png";

// On dark backgrounds, invert luminosity (and hue-rotate back) so the dark
// wordmark in the PNG reads as light, without slapping a white tile behind it.
function MarkImage({ className = "h-10 w-10", variant = "onLight", title }) {
  const onDark = variant === "onDark";
  return (
    <span
      className={`inline-flex items-center justify-center overflow-hidden shrink-0 ${className}`}
    >
      <img
        src={LOGO_SRC}
        alt={title || "THAANA Hardware Limited"}
        className="h-full w-full object-contain"
        style={
          onDark
            ? { filter: "invert(1) hue-rotate(180deg) brightness(1.1)" }
            : undefined
        }
        draggable="false"
      />
    </span>
  );
}

export function LogoMark({
  className = "h-10 w-10",
  variant = "onLight",
  title = "THAANA Hardware Limited",
}) {
  return <MarkImage className={className} variant={variant} title={title} />;
}

export function LogoWordmark({
  className = "",
  variant = "onLight",
  showTagline = true,
}) {
  // The wordmark is baked into the image, so we just render the image at a
  // wider aspect. A tagline is added underneath when requested.
  const tagColor = variant === "onDark" ? "text-slate-400" : "text-slate-500";
  return (
    <div className={`leading-none text-center ${className}`}>
      <MarkImage variant={variant} className="h-28 w-28 mx-auto" />
      {showTagline && (
        <div
          className={`mt-3 text-[9px] sm:text-[10px] uppercase tracking-[0.22em] font-semibold ${tagColor}`}
        >
          Building Trust. Building Better.
        </div>
      )}
    </div>
  );
}

// Default lockup — just the image (which already includes the wordmark).
export default function Logo({
  className = "",
  markClassName = "h-10 w-10",
  variant = "onLight",
  showTagline = false,
}) {
  const tagColor = variant === "onDark" ? "text-slate-400" : "text-slate-500";
  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      <MarkImage variant={variant} className={markClassName} />
      {showTagline && (
        <div
          className={`mt-2 text-[10px] uppercase tracking-[0.22em] font-semibold ${tagColor}`}
        >
          Building Trust. Building Better.
        </div>
      )}
    </div>
  );
}
