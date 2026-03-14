import { gsap } from "gsap";
function LoginPage({ setup }) {
  use;
  const others = [
    {
      src: "src/assets/Google.svg",
      h1: "Continue With Google",
    },
    {
      src: "src/assets/mail_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg",
      h1: "Continue With Email",
    },
    {
      src: "src/assets/Apple.svg",
      h1: "Contiue With Apple",
    },
  ];
  return (
    <div id="Float" className="absolute w-full h-screen z-50 bg-zinc-800/70">
      <div className="flex justify-center items-center  ">
        <div className="flex h-[560px] w-[450px]  flex-col gap-6  rounded-md items-center relative bg-white">
          <div className="absolute top-8 right-6">
            <img
              className=""
              onClick={() => setup(false)}
              src="src/assets/Cross.svg"
              alt="cross"
            />
          </div>
          <div className="flex font-bold py-5 ">
            <h1 className="text-xl">Get Started</h1>
          </div>
          <div className="flex flex-col justify-between gap-8">
            {others.map((other) => (
              <div className="flex gap-8 flex-col justify-center">
                <div className="flex items-center gap-20 rounded-md px-2.5 py-2 border hover:border-zinc-200  w-96">
                  <img className="h-5  w-6 " src={other.src} alt="" />
                  <h1 className="">{other.h1}</h1>
                </div>
              </div>
            ))}
          </div>

          <div className="text-zinc-600">OR</div>
          <div className="flex items-center">
            <img
              className="h-8 w-8"
              src="src/assets/india-flag-icon.svg"
              alt="India"
            />
            <p>+91</p>
            <img className="h-5 " src="src/assets/Downarrow.svg" alt="" />

            <input
              className="h-8 w-64 outline-none border-b-2 "
              maxLength={15}
              type=""
            />
          </div>

          <div className="flex h-11 gap-2 pt-20">
            <p>I agree</p>{" "}
            <a
              className="text-indigo-500 border-b-indigo-950 underline"
              href=""
            >
              Terms&Conditions
            </a>{" "}
            <p>and</p>
            <a className="text-indigo-800 underline" href="">
              PrivacyPolicy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
