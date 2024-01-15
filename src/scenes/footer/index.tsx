import Logo from "@/assets/Logo.png";

function Footer() {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content md:align-baseline mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" className="ml-[-10px]" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            impedit harum ullam? Labore quod similique velit, eaque dolore
            pariatur aliquam ex temporibus sunt aspernatur repudiandae illo
            ullam facere dicta adipisci dignissimos veritatis. Odio, minima
            veniam.
          </p>
          <p>Ⓒ Beactive All Rights Reserved.</p>
        </div>
        <div className="mt-10 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Ipsum dolor sit amet</p>
          <p className="my-5">Amet consectetur</p>
          <p>Consectetur adipisicin</p>
        </div>
        <div className="mt-10 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Dolor sit amet</p>
          <p className="my-5">Amet consectetur</p>
          <p>(420)773-728-851</p>
        </div>
        <div></div>
      </div>
    </footer>
  );
}

export default Footer;
