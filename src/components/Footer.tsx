import logo from "@/assets/four-fells-logo.png";

const Footer = () => {
  return (
    <footer className="py-8 bg-fell-navy border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Four Fells" className="h-8 w-8 object-contain" />
          <span className="font-display text-primary-foreground/80 text-sm">
            Four Fells
          </span>
        </div>
        <p className="text-primary-foreground/40 text-xs">
          © {new Date().getFullYear()} Four Fells. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
