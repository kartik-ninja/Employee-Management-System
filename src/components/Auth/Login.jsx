import { useRef } from "react";

const Login = ({ handleLogin }) => {
  const emailElement = useRef();
  const passwordElement = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const email = emailElement.current.value;
    const password = passwordElement.current.value;
    handleLogin(email, password);
    emailElement.current.value = "";
    passwordElement.current.value = "";
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className=" rounded-xl border-2 border-emerald-600 p-20">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <input
            ref={emailElement}
            required
            className="text-xl outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full placeholder: text-gray-400"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            ref={passwordElement}
            required
            className="text-xl outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 mt-5 rounded-full placeholder: text-gray-400"
            type="password"
            placeholder="Enter Password"
          />
          <button className="text-white text-xl outline-none border-none bg-emerald-600 py-3 px-5 mt-5 rounded-full placeholder: text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
