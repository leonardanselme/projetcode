import Link from "next/link";

const ButtonLogin = ({ isLoggedIn, name, extraStyle }) => {
  if (isLoggedIn) {
    return (
      <Link
        href="/dashboard"
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      >
        <p>Welcome back {name}</p>
      </Link>
    );
  } else {
    return <button>Login</button>;
  }
};

export default ButtonLogin;
