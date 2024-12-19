const HeroSection = () => {
  return (
    <div className="w-screen h-[30vh] overflow-hidden">
      <div>
        <img
          className="w-full absolute h-[30vh] object-cover "
          // src="https://images.unsplash.com/photo-1663084579817-774940ed6b47?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhbGxwYXBlciUyMGRlc2t0b3B8ZW58MHx8MHx8fDA%3D"
          // src={heroImage}
          src="https://image.tmdb.org/t/p/w500/4cp40IyTpFfsT2IKpl0YlUkMBIR.jpg"
        />
        <div className="flex justify-center items-center flex-col relative z-1000  h-[30vh] p-3 ">
          {/* <div className="text-5xl ">Welcome</div> */}
          <div className="md:text-4xl text-2xl">
            <span className="md:text-5xl text-3xl font-semibold">Welcome,</span>{" "}
            <br /> Millions of movies, TV shows and people to discover. Explore
            now.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
