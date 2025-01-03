import { Button } from "./ui/button";

const Footer = () => {
  return (
    // <div className="flex justify-center items-center  border-t-2 w-screen h-[20vh]">
    //   © 2024 netmovie. All rights reserved.
    // </div>
    <footer className="flex flex-col gap-10 justify-center items-center  border-t-2 w-[99vw]   p-10 mt-10">
      <div>
        <p>
          Powered by{" "}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Movie Database (TMDb)
          </a>
        </p>
        <img
          src="https://files.readme.io/29c6fee-blue_short.svg"
          alt="TMDb logo"
          className="h-[20px]"
        />
      </div>
      <div className="md:text-3xl text-xl">
        made by
        <Button variant="link" className="md:text-3xl text-xl">
          <a href="https://www.kiyotomm.com/" target="_blank">
            {" "}
            kiyotomm.com
          </a>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
