const categories = [
  { label: "রাজনীতি", href: "/politics" },
  { label: "বিশ্ব", href: "/world" },
  { label: "অর্থনীতি", href: "/economy" },
  { label: "স্বাস্থ্য", href: "/health" },
  { label: "খেলা", href: "/sports" },
  { label: "প্রযুক্তি", href: "/technology" },
];

const info = [
  { label: "আমাদের সম্পর্কে", href: "/about" },
  { label: "যোগাযোগ", href: "/contact" },
  { label: "বিজ্ঞাপন দিন", href: "/advertise" },
  { label: "গোপনীয়তা নীতি", href: "/privacy" },
  { label: "শর্তাবলী", href: "/terms" },
];

const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z",
  },
  {
    name: "X",
    href: "https://x.com",
    path: "M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    path: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z",
  },
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-gray-950 text-gray-300">
      {/* Newsletter band */}
      <div className="bg-red-700">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">
              সর্বশেষ খবর সরাসরি আপনার ইনবক্সে
            </h3>
            <p className="text-sm text-red-100">
              প্রতিদিন সকালে একটি ইমেইলে দিনের গুরুত্বপূর্ণ খবর।
            </p>
          </div>
          <form className="flex w-full gap-2 md:w-auto">
            <input
              type="email"
              required
              placeholder="আপনার ইমেইল"
              className="w-full bg-white rounded-md px-4 py-2 text-sm text-gray-900 outline-none md:w-72"
            />
            <button
              type="submit"
              className="shrink-0 rounded-md bg-gray-950 px-5 py-2 text-sm font-medium text-white hover:bg-black"
            >
              সাবস্ক্রাইব
            </button>
          </form>
        </div>
      </div>

      {/* Main grid */}
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-700 text-xl font-bold text-white">
              B
            </span>
            <span className="font-serif text-2xl font-bold text-white">
              Probaho Portal
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            দেশ ও বিশ্বের সর্বশেষ খবর, বিশ্লেষণ ও মতামত — এক জায়গায়।
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition hover:bg-red-700 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h4 className="mb-4 font-semibold text-white">বিভাগ</h4>
          <ul className="space-y-2 text-sm">
            {categories.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-red-500">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div>
          <h4 className="mb-4 font-semibold text-white">তথ্য</h4>
          <ul className="space-y-2 text-sm">
            {info.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-red-500">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 font-semibold text-white">যোগাযোগ</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>ঢাকা, বাংলাদেশ</li>
            <li>
              <a href="mailto:info@probahoportal.com" className="hover:text-red-500">
                info@probahoportal.com
              </a>
            </li>
            <li>
              <a href="tel:+8801000000000" className="hover:text-red-500">
                +880 1000-000000
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-4 text-xs text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Probaho Portal। সর্বস্বত্ব সংরক্ষিত।</p>
          <a href="#top" className="hover:text-red-500">
            উপরে ফিরে যান ↑
          </a>
        </div>
      </div>
    </footer>
  );
}