import logo from "@/assets/four-fells-logo.png";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Four Fells Logo" className="h-10 w-10 object-contain" />
          <span className="font-display text-xl text-foreground">Four Fells</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center px-5 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
