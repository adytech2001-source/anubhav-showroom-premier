import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-8 bg-surface border-t border-border">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logo} alt="Anubhav" className="w-32" loading="lazy" />
        <p className="text-muted-foreground text-sm text-center">
          © {new Date().getFullYear()} Anubhav Electronics & Furniture Showroom. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
