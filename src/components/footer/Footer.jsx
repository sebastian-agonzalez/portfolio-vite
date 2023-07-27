const Footer = () => {
  return (
    <footer className="w-full px-3 py-2 bg-transparent">
      <div className="hidden sm:flex md:flex text-xs justify-between items-center">
        <span>sebastián andrés gonzaléz</span>
        <span>all rights reserved © 2023</span>
      </div>
      <div className="flex text-xs justify-center items-center">
        <span className="visible sm:hidden md:hidden lg:hidden">
          sebastián andrés gonzaléz - all rights reserved © 2023
        </span>
      </div>
    </footer>
  );
};

export default Footer;
