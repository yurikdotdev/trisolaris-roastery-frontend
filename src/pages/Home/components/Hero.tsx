function Hero() {
  return (
    <div className="relative flex h-screen w-full sm:px-8 sm:py-12">
      <div
        className="relative h-96 w-full rounded-lg bg-cover bg-center p-6 text-custom-bgLight sm:w-1/2 md:h-full md:w-full md:p-12"
        style={{
          backgroundImage: `url('https://cdn.dribbble.com/users/1622978/screenshots/16873134/media/7f5d72bce5b94fe1ae56484394de673f.jpg?compress=1&resize=1600x1200&vertical=top')`,
        }}
      />
    </div>
  );
}

export default Hero;
