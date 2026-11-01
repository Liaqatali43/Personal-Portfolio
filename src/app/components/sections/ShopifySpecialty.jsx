const features = [
  "Custom sections and theme settings",
  "Product and collection templates",
  "Liquid and JSON architecture",
  "Responsive product galleries",
  "Variant selection and Ajax cart",
  "Maintainable, reusable theme code",
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function ShopIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M3 9h18l-2 12H5L3 9Z" />
      <path d="M8 9V6a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function StoreMockup() {
  return (
    <div className="h-[255px] overflow-hidden bg-[#e8e3d9] text-[#282923] sm:h-[370px]">
      {/* Store Navigation */}
      <div className="flex items-center justify-between border-b border-black/10 px-4 py-4 sm:px-7">
        <strong className="text-xl tracking-[0.15em]">NORDA</strong>

        <div className="hidden gap-6 text-[10px] sm:flex">
          <span>New in</span>
          <span>Shop</span>
          <span>Journal</span>
        </div>

        <span className="text-[10px]">Bag (0)</span>
      </div>

      {/* Store Hero */}
      <div className="grid h-[205px] grid-cols-2 sm:h-[300px]">
        <div className="flex flex-col justify-center px-4 sm:px-8">
          <span className="text-[8px] uppercase tracking-[0.18em] text-[#77766c] sm:text-[10px]">
            New collection / 26
          </span>

          <h3 className="mt-3 font-serif text-3xl leading-[0.95] tracking-tight sm:text-5xl">
            Form meets
            <br />
            function.
          </h3>

          <span className="mt-5 text-[9px] underline underline-offset-4 sm:text-[11px]">
            Shop the collection →
          </span>
        </div>

        {/* Product Visual */}
        <div className="relative flex items-center justify-center overflow-hidden bg-[#c8c0af]">
          <div className="absolute bottom-8 h-8 w-32 rounded-full bg-black/20 blur-xl" />

          <div className="relative z-10 flex h-36 w-20 items-center justify-center rounded-t-2xl rounded-b-lg border border-white/30 bg-gradient-to-r from-[#d5c8b4] via-[#f0e8d9] to-[#b7a78e] shadow-xl sm:h-52 sm:w-28">
            <div className="absolute -top-5 h-7 w-8 rounded-t-md bg-[#847765]" />
            <span className="text-[8px] tracking-widest text-[#625a4c] sm:text-[10px]">
              NORDA
            </span>
          </div>

          <div className="absolute -right-5 top-8 h-20 w-20 rounded-full bg-[#a7a18f]/50 blur-xl" />
        </div>
      </div>
    </div>
  );
}

function BrowserFrame({ children }) {
  return (
    <div className="relative z-10 overflow-hidden rounded-md bg-white shadow-2xl">
      {/* Browser Bar */}
      <div className="flex h-9 items-center gap-1.5 bg-[#e6e6e6] px-3">
        <span className="h-2 w-2 rounded-full bg-[#f28b82]" />
        <span className="h-2 w-2 rounded-full bg-[#fbbc04]" />
        <span className="h-2 w-2 rounded-full bg-[#81c995]" />

        <div className="ml-3 flex-1 rounded-sm bg-white px-3 py-1 text-center text-[8px] text-gray-500">
          norda-demo.myshopify.com
        </div>
      </div>

      {children}
    </div>
  );
}

function LiquidCard() {
  return (
    <div className="absolute -bottom-2 right-0 z-20 w-[220px] border border-[#95bf47]/20 bg-[#171d18] p-4 shadow-2xl sm:-bottom-5 sm:right-[-15px] sm:w-[285px] sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[9px] text-[#9da99a]">
          sections/product-grid.liquid
        </span>
        <span className="h-2 w-2 rounded-full bg-[#95bf47]" />
      </div>

      <div className="font-mono text-[9px] leading-[2] text-[#c3cbbd] sm:text-[10px]">
        <div>
          <span className="text-[#95bf47]">{"{%"} </span>
          for product in collection.products
          <span className="text-[#95bf47]"> {"%}"}</span>
        </div>

        <div className="pl-4">
          {"{{ "}
          <span className="text-[#7dd3fc]">product.title</span>
          {" }}"}
        </div>

        <div>
          <span className="text-[#95bf47]">{"{%"} </span>
          endfor
          <span className="text-[#95bf47]"> {"%}"}</span>
        </div>
      </div>
    </div>
  );
}

export default function ShopifySpecialist() {
  return (
    <section
      id="shopify"
      className="overflow-hidden border-y border-[#95bf47]/15 bg-[#0d120d] py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-[88px]">
        {/* Left Content */}
        <div className="relative z-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#95bf47]">
            03 / Shopify Specialist
          </span>

          <h2 className="mt-6 font-[family-name:var(--font-space)] text-5xl font-medium leading-[0.98] tracking-[-0.055em] text-[#f5f7fa] sm:text-6xl">
            Shopify Themes
            <br />
            Built for <span className="text-[#95bf47]">Real Stores</span>
          </h2>

          <p className="mb-8 mt-7 max-w-[480px] text-sm leading-7 text-[#a1a8b7]">
            I build thoughtfully structured themes that give merchants control
            without sacrificing design quality, performance, or maintainability.
          </p>

          {/* Features */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 text-xs leading-5 text-[#c5cad4]"
              >
                <span className="mt-0.5 shrink-0 text-[#95bf47]">
                  <CheckIcon />
                </span>

                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="inline-flex items-center gap-4 bg-[#95bf47] px-5 py-3.5 text-xs font-semibold text-[#12180c] transition-all hover:bg-[#a8d45a]"
            >
              Explore Shopify Work
              <ArrowIcon />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-4 border-b border-white/20 pb-2 text-xs font-semibold text-white transition-colors hover:border-[#95bf47] hover:text-[#95bf47]"
            >
              Discuss Your Store
              <ArrowIcon />
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative px-0 py-10 sm:px-8 sm:py-[52px]">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_40%,rgba(149,191,71,0.12),transparent_55%)]" />

          <BrowserFrame>
            <StoreMockup />
          </BrowserFrame>

          <LiquidCard />

          {/* Shopify Badge */}
          <div className="absolute right-0 top-0 z-30 flex items-center gap-2 bg-[#95bf47] px-3 py-2.5 text-[9px] font-semibold text-[#12180c] sm:-right-4 sm:top-6">
            <ShopIcon />
            Shopify Liquid
          </div>
        </div>
      </div>
    </section>
  );
}
