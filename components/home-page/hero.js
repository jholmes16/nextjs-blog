import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/gitHubImage.jpg"
          alt="An image of Jahmaul"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Jahmaul</h1>
      <p>
        I blog about web development - especially frontend framworks like React.
      </p>
    </section>
  );
}

export default Hero;
