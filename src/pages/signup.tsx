import logo from '../assets/logo.svg';
import signUpBg from '../assets/sign-up-bg.jfif';

const Signup = () => {
  return (
    <div className="min-h-screen">
      <header className="h-[111px] flex justify-between items-center border-b-[1px] border-[#BEBCBD] px-[100px]">
        <img src={logo} alt="logo" className="h-[45px]" />

        {/* seacrch */}
        <label className="input input-sm flex items-center gap-2 bg-[#F6F6F6]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input type="text" className="grow" placeholder="Search" />
        </label>

        {/* dropdown */}
        <select className="select select-ghost select-sm max-w-xs">
          <option selected>English (United States)</option>
        </select>

        {/* action button */}
        <div>
          <button className="btn btn-sm btn-primary px-10 font-normal btn-outline border-[#3C4242]">
            Login
          </button>
          <button className="btn btn-sm btn-primary px-10 font-normal ml-4">
            Sign Up
          </button>
        </div>
      </header>

      <div className="flex gap-x-10 max-h-[calc(100vh-111px)] overflow-hidden">
        {/* image BG */}
        <div className="w-1/2 max-w-[871px]">
          <img src={signUpBg} alt="signup-bg" />
        </div>

        <div className="w-1/2 py-10 pr-5 overflow-y-auto">
          <h2 className="text-[#333] text-[34px] leading-[33.39px] font-semibold mb-2">
            Sign Up
          </h2>
          <p className="text-[16px] leading-[19.2px] text-[#666]">
            Sign up for free to access to in any of our products{' '}
          </p>
          <form className="mt-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Email Address</span>
              </div>
              <input
                type="text"
                placeholder="designer@gmail.com"
                className="input input-bordered w-full"
              />
              <div className="label">
                <span className="label-text-alt text-red-500">
                  Error message
                </span>
              </div>
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Password</span>
                <span className="label-text-alt">
                  <label className="swap">
                    <input type="checkbox" />
                    <div className="swap-on">Show</div>
                    <div className="swap-off">Hide</div>
                  </label>
                </span>
              </div>
              <input
                type="text"
                placeholder="designer@gmail.com"
                className="input input-bordered w-full"
              />
            </label>
            <span className="text-[16px] leading-[19.2px] text-[#666]">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </span>

            {/* term policy */}
            <div className="mt-10">
              <div className="form-control">
                <label className="label cursor-pointer justify-start items-center gap-4">
                  <input type="checkbox" className="checkbox" />
                  <span className="label-text text-[18px] leading-[21.6px] text[#807D7E]">
                    Agree to our Terms of use and Privacy Policy
                  </span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer justify-start items-center gap-4">
                  <input type="checkbox" className="checkbox" />
                  <span className="label-text text-[18px] leading-[21.6px] text[#807D7E]">
                    Subscribe to our monthly newsletter
                  </span>
                </label>
              </div>
            </div>

            {/* submit button */}
            <div className="mt-10">
              <button className="btn btn-md btn-primary px-10 font-normal">
                Sign Up
              </button>
              <p className="text-[16px] leading-[19.2px] text-[#3c4242] mt-2">
                Already have an account? <a href="#">Log in</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
