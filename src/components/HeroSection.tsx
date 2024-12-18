const HeroSection = () => {
  return (
    <div className="w-screen h-[60vh] overflow-hidden">
      <div>
        <img
          className="w-full absolute h-[60vh] object-fill "
          src="https://images.unsplash.com/photo-1663084579817-774940ed6b47?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhbGxwYXBlciUyMGRlc2t0b3B8ZW58MHx8MHx8fDA%3D"
        />
        <div className="relative z-1000 ">
          <div className="text-5xl ">Welcome</div>
          <div className="text-4xl">Watch millions of movies</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
