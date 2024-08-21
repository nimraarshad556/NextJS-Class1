// app/layout.tsx

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <h1>Hello, World!</h1>
        {children}
      </body>
    </html>
  );
};

export default Layout;