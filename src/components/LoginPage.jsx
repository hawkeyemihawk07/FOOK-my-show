import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { resolveAsset } from "../utils/resolveAsset";
import { useAuth } from "../context/useAuth";

const INITIAL_LOGIN_FORM = { email: "", password: "" };
const INITIAL_REGISTER_FORM = { email: "", password: "", confirmPassword: "" };
const INITIAL_RESET_FORM = {
  email: "",
  code: "",
  newPassword: "",
  confirmPassword: "",
};

function LoginPage({ setup }) {
  const { currentUser, login, logout, register, requestPasswordReset, resetPassword } =
    useAuth();
  const overlayRef = useRef(null);
  const cardRef = useRef(null);
  const [mode, setMode] = useState(currentUser ? "account" : "signin");
  const [loginForm, setLoginForm] = useState(INITIAL_LOGIN_FORM);
  const [registerForm, setRegisterForm] = useState(INITIAL_REGISTER_FORM);
  const [resetForm, setResetForm] = useState(INITIAL_RESET_FORM);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [demoResetCode, setDemoResetCode] = useState("");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.25, ease: "power2.out" }
      );

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          ease: "back.out(1.7)",
        }
      );
    }, overlayRef);

    return () => ctx.revert();
  }, []);

  function resetMessages() {
    setErrorMessage("");
    setSuccessMessage("");
  }

  function switchMode(nextMode) {
    resetMessages();
    setMode(nextMode);
  }

  function handleLoginSubmit(event) {
    event.preventDefault();
    resetMessages();

    try {
      login(loginForm);
      setSuccessMessage("You are now signed in.");
      setMode("account");
      setLoginForm(INITIAL_LOGIN_FORM);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  function handleRegisterSubmit(event) {
    event.preventDefault();
    resetMessages();

    try {
      register(registerForm);
      setSuccessMessage("Account created and signed in successfully.");
      setMode("account");
      setRegisterForm(INITIAL_REGISTER_FORM);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  function handleResetRequestSubmit(event) {
    event.preventDefault();
    resetMessages();

    try {
      const code = requestPasswordReset(resetForm.email);
      setDemoResetCode(code);
      setSuccessMessage(
        `Reset code generated for ${resetForm.email.trim().toLowerCase()}.`
      );
      setMode("reset");
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  function handleResetPasswordSubmit(event) {
    event.preventDefault();
    resetMessages();

    try {
      resetPassword(resetForm);
      setSuccessMessage("Password updated. You are now signed in.");
      setDemoResetCode("");
      setMode("account");
      setResetForm(INITIAL_RESET_FORM);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  function handleLogout() {
    logout();
    setDemoResetCode("");
    setResetForm(INITIAL_RESET_FORM);
    setLoginForm(INITIAL_LOGIN_FORM);
    setRegisterForm(INITIAL_REGISTER_FORM);
    setSuccessMessage("You have been signed out.");
    setMode("signin");
  }

  return (
    <div
      id="Float"
      ref={overlayRef}
      onClick={() => setup(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/70 px-4 py-6 backdrop-blur-sm"
    >
      <div
        ref={cardRef}
        onClick={(event) => event.stopPropagation()}
        className="relative flex w-full max-w-[480px] flex-col gap-5 overflow-y-auto rounded-3xl border border-white/10 bg-white px-5 py-6 text-zinc-900 shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:px-8"
      >
        <button
          type="button"
          className="absolute right-5 top-5 rounded-full p-1 transition-colors hover:bg-zinc-100"
          onClick={() => setup(false)}
        >
          <img
            className="cursor-pointer"
            src={resolveAsset("src/assets/Cross.svg")}
            alt="Close login dialog"
          />
        </button>

        <div className="pr-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-500">
            BookMyShow Account
          </p>
          <h1 className="pt-2 text-3xl font-bold">Login with email</h1>
          <p className="pt-2 text-sm text-zinc-500">
            Create an account, sign in, or reset your password from one place.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 rounded-2xl bg-zinc-100 p-1">
          <button
            type="button"
            onClick={() => switchMode("signin")}
            className={`rounded-2xl px-3 py-2 text-sm font-medium transition-colors ${
              mode === "signin" ? "bg-white text-zinc-950 shadow-sm" : "text-zinc-500"
            }`}
          >
            Sign in
          </button>
          <button
            type="button"
            onClick={() => switchMode("register")}
            className={`rounded-2xl px-3 py-2 text-sm font-medium transition-colors ${
              mode === "register" ? "bg-white text-zinc-950 shadow-sm" : "text-zinc-500"
            }`}
          >
            Register
          </button>
          <button
            type="button"
            onClick={() => switchMode("forgot")}
            className={`rounded-2xl px-3 py-2 text-sm font-medium transition-colors ${
              mode === "forgot" || mode === "reset"
                ? "bg-white text-zinc-950 shadow-sm"
                : "text-zinc-500"
            }`}
          >
            Forgot
          </button>
        </div>

        {errorMessage && (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            {successMessage}
          </div>
        )}

        {mode === "signin" && (
          <form className="flex flex-col gap-4" onSubmit={handleLoginSubmit}>
            <label className="flex flex-col gap-2 text-sm font-medium">
              Email address
              <input
                className="rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition-colors focus:border-red-400"
                type="email"
                value={loginForm.email}
                onChange={(event) =>
                  setLoginForm((currentForm) => ({
                    ...currentForm,
                    email: event.target.value,
                  }))
                }
                placeholder="you@example.com"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium">
              Password
              <input
                className="rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition-colors focus:border-red-400"
                type="password"
                value={loginForm.password}
                onChange={(event) =>
                  setLoginForm((currentForm) => ({
                    ...currentForm,
                    password: event.target.value,
                  }))
                }
                placeholder="Enter your password"
              />
            </label>

            <button
              type="submit"
              className="rounded-2xl bg-red-500 px-4 py-3 font-semibold text-white transition-colors hover:bg-red-400"
            >
              Sign in
            </button>

            <button
              type="button"
              onClick={() => switchMode("forgot")}
              className="text-sm font-medium text-red-500"
            >
              Forgot your password?
            </button>
          </form>
        )}

        {mode === "register" && (
          <form className="flex flex-col gap-4" onSubmit={handleRegisterSubmit}>
            <label className="flex flex-col gap-2 text-sm font-medium">
              Email address
              <input
                className="rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition-colors focus:border-red-400"
                type="email"
                value={registerForm.email}
                onChange={(event) =>
                  setRegisterForm((currentForm) => ({
                    ...currentForm,
                    email: event.target.value,
                  }))
                }
                placeholder="you@example.com"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium">
              Password
              <input
                className="rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition-colors focus:border-red-400"
                type="password"
                value={registerForm.password}
                onChange={(event) =>
                  setRegisterForm((currentForm) => ({
                    ...currentForm,
                    password: event.target.value,
                  }))
                }
                placeholder="At least 6 characters"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium">
              Confirm password
              <input
                className="rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition-colors focus:border-red-400"
                type="password"
                value={registerForm.confirmPassword}
                onChange={(event) =>
                  setRegisterForm((currentForm) => ({
                    ...currentForm,
                    confirmPassword: event.target.value,
                  }))
                }
                placeholder="Re-enter your password"
              />
            </label>

            <button
              type="submit"
              className="rounded-2xl bg-red-500 px-4 py-3 font-semibold text-white transition-colors hover:bg-red-400"
            >
              Create account
            </button>
          </form>
        )}

        {mode === "forgot" && (
          <form className="flex flex-col gap-4" onSubmit={handleResetRequestSubmit}>
            <label className="flex flex-col gap-2 text-sm font-medium">
              Registered email
              <input
                className="rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition-colors focus:border-red-400"
                type="email"
                value={resetForm.email}
                onChange={(event) =>
                  setResetForm((currentForm) => ({
                    ...currentForm,
                    email: event.target.value,
                  }))
                }
                placeholder="you@example.com"
              />
            </label>

            <button
              type="submit"
              className="rounded-2xl bg-red-500 px-4 py-3 font-semibold text-white transition-colors hover:bg-red-400"
            >
              Send reset code
            </button>

            <p className="text-xs leading-5 text-zinc-500">
              This demo stores accounts locally in your browser, so the reset code is shown on the
              next step instead of being emailed.
            </p>
          </form>
        )}

        {mode === "reset" && (
          <form className="flex flex-col gap-4" onSubmit={handleResetPasswordSubmit}>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              Demo reset code: <span className="font-semibold">{demoResetCode}</span>
            </div>

            <label className="flex flex-col gap-2 text-sm font-medium">
              Email address
              <input
                className="rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition-colors focus:border-red-400"
                type="email"
                value={resetForm.email}
                onChange={(event) =>
                  setResetForm((currentForm) => ({
                    ...currentForm,
                    email: event.target.value,
                  }))
                }
                placeholder="you@example.com"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium">
              Reset code
              <input
                className="rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition-colors focus:border-red-400"
                type="text"
                value={resetForm.code}
                onChange={(event) =>
                  setResetForm((currentForm) => ({
                    ...currentForm,
                    code: event.target.value,
                  }))
                }
                placeholder="Enter the 6-digit code"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium">
              New password
              <input
                className="rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition-colors focus:border-red-400"
                type="password"
                value={resetForm.newPassword}
                onChange={(event) =>
                  setResetForm((currentForm) => ({
                    ...currentForm,
                    newPassword: event.target.value,
                  }))
                }
                placeholder="Create a new password"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium">
              Confirm new password
              <input
                className="rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition-colors focus:border-red-400"
                type="password"
                value={resetForm.confirmPassword}
                onChange={(event) =>
                  setResetForm((currentForm) => ({
                    ...currentForm,
                    confirmPassword: event.target.value,
                  }))
                }
                placeholder="Re-enter the new password"
              />
            </label>

            <button
              type="submit"
              className="rounded-2xl bg-red-500 px-4 py-3 font-semibold text-white transition-colors hover:bg-red-400"
            >
              Update password
            </button>
          </form>
        )}

        {mode === "account" && currentUser && (
          <div className="flex flex-col gap-4">
            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Signed in</p>
              <p className="pt-2 text-2xl font-semibold text-zinc-950">{currentUser.email}</p>
              <p className="pt-2 text-sm text-zinc-500">
                Your session is saved locally, so you will stay signed in on this browser.
              </p>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="rounded-2xl border border-zinc-200 px-4 py-3 font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
