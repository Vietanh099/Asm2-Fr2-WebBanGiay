const Banner = () => {
  return (
    <div>
      <section className="relative bg-[url(https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1519,c_limit/25774e19-bbf4-4637-8bbb-6e578754c87b/nike-just-do-it.jpg)] bg-cover bg-center bg-no-repeat h-[450px]">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 hight:300px">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Let us find your
              <strong className="block font-extrabold text-rose-700">
                Forever Home.
              </strong>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
