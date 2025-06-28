const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t-zinc-300 mb-2 border-t-2 text-center py-2 mt-10">
      <p className="text-zinc-600">
        © {currentYear} Michael Omonedo. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
