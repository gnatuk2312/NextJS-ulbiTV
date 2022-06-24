import A from "./A";

const Layout = ({children}) => {
  return (
    <>
      <nav className="navbar">
        <A href="/">Головна</A>
        <A href="/users">Користувачі</A>
      </nav>
      {children}
      <style jsx>
        {`
          .navbar {
            background-color: orange;
            padding: 16px;
          }
        `}
      </style>
  </>
  );
};

export default Layout;