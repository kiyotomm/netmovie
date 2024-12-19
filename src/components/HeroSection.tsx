import heroImage from "../image/Marvel 4k Wallpaper.jpg";

const HeroSection = () => {
  return (
    <div className="w-screen h-[30vh] overflow-hidden">
      <div>
        <img
          className="w-full absolute h-[30vh] object-cover "
          // src="https://images.unsplash.com/photo-1663084579817-774940ed6b47?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhbGxwYXBlciUyMGRlc2t0b3B8ZW58MHx8MHx8fDA%3D"
          src={heroImage}
        />
        <div className="flex justify-center items-center flex-col relative z-1000  h-[30vh] ">
          {/* <div className="text-5xl ">Welcome</div> */}
          <div className="text-4xl">
            <span className="text-5xl font-semibold">Welcome,</span> <br />{" "}
            Millions of movies, TV shows and people to discover. Explore now.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
