import Image from "next/image";
import NavLinks from "./NavLinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-2">
          {/* Logo + title */}
          <div className="flex items-center gap-2">
            <Image src="/logo.webp" alt="logo" height={40} width={40} />

            <div>
              <h2 className="text-[#cc0000] font-semibold text-[22px]">
                Probaho Portal
              </h2>

              <p className="text-[#7d7073] text-sm">{date}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <button className="btn btn-outline">সাইন ইন</button>
            <button className="btn btn-error">সাইন আপ</button>
          </div>
        </div>

        <NavLinks />
      </div>
    </nav>
  );
};

export default Header;
