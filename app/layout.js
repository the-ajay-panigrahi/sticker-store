import Link from "next/link";
import "./globals.css";
import Head from "./head";
import "./style.css";
import Cart from "@/components/Cart";
import EmailInput from "@/components/EmailInput";

export const metadata = {
  title: "StickerStore",
  description: "A super cool store for programmers and productivity fiends!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body>
        <div id="portal"></div>
        <div id="app">
          <header>
            <div className="header-content">
              <Link href={"/"}><h1>StickerStore</h1></Link>
              <h5 className="mid-text">- Cool stuff for cool people -</h5>
              <Cart />
            </div>
          </header>
          <main>{children}</main>
          <div className="hr" />
          <footer>
            <div className="email-container">
              <h5>Get a sneak peak at new additions to the store, special offers, and so much more.</h5>
              <EmailInput />
            </div>

            <div className="links-container">
              <div>
                <h3>Socials</h3>
                <Link target="_blank" href={'https://github.com/the-ajay-panigrahi'}>Github</Link>
                <Link target="_blank" href={'https://www.linkedin.com/in/ajay-panigrahi/'}>Linkedin</Link>
              </div>
              <div>
                <h3>Store</h3>
                <Link href={'/'}>Home</Link>
                <Link href={'/cart'}>Cart</Link>
              </div>
              <div>
                <h3>Support</h3>
                <Link href={'/contact'}>Contact</Link>
                <Link href={'/faq'}>FAQs</Link>
              </div>
            </div>

            <div className="socials">
              <p>© <Link href={"/"}>StickerStore</Link> {new Date().getFullYear()}<br />Built with NextJS🔥</p>
              <div className="social-links">
                <Link href={'https://github.com/the-ajay-panigrahi'} target="_blank"><i className="fa-brands fa-github"></i></Link>
                <Link href={'https://www.youtube.com/@ajaybpanigrahi'} target="_blank"><i className="fa-brands fa-youtube"></i></Link>
                <Link href={'https://www.linkedin.com/in/ajay-panigrahi/'} target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                <Link href={'https://x.com/ajaybpanigrahi'} target="_blank"><i className="fa-brands fa-twitter"></i></Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
