import Logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 md:flex md:justify-center lg:flex justify-center md:gap-10 lg:gap-40">
  <aside>
    <div className="flex justify-center items-center gap-2 mb-4">
        <img className="w-[80px]" src={Logo} alt="" />
        <h1 className="text-2xl font-bold gradient-text">HERO.IO</h1>
    </div>
    <p className="gradient-text text-[18px] font-medium">
      Hero Apps Community
      <br />
      Providing reliable tech since-2009.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title gradient-text">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title gradient-text">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title gradient-text">FAQ</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
   <nav>
    <h6 className="footer-title gradient-text">Newsletter</h6>
    <fieldset className="w-80">
      <label className="">Enter your email address</label>
      <div className="join mt-[8px]">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn gradient-btn text-white join-item">Subscribe</button>
      </div>
    </fieldset>
  </nav>
</footer>
    );
};

export default Footer;