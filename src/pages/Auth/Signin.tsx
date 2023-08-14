const SignIn = () => {
    return (
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/71dc8fc1-97c2-493c-bdaa-8d46f51ff85e/nike-just-do-it.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="bg-white w-full md:max-w-md lg:max-w-full  md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
            flex items-center justify-center"
        >
          <div className="w-full h-100">
            <img
              src="https://thietkelogo.com/wp-content/uploads/2017/09/logo-nike.png"
              className="brightness-0 w-1/2 h-10 ml-14"
              alt=""
            />
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Xin Chào! Hãy đăng nhập:
            </h1>
  
            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-gray-700">Email:</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Nhập Email của bạn"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                />
              </div>
  
              <div className="mt-4">
                <label className="block text-gray-700">Mật khẩu:</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Nhập Password của bạn"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none"
                  required
                />
              </div>
              <div className="text-right mt-2">
                <a
                  href="forgotPassword"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Quên Mật Khẩu ?
                </a>
              </div>
  
              <button
                type="submit"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                  px-4 py-3 mt-6"
              >
                Đăng Nhập
              </button>
            </form>
  
            <hr className="my-6 border-gray-300 w-full" />
            <button
              type="button"
              className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            >
              <div className="flex items-center justify-center">
                <span className="ml-4">Log in with Google</span>
              </div>
            </button>
  
            <p className="mt-8">
              <a
                href="signup"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Chưa có tài khoản ?
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  };
  export default SignIn;