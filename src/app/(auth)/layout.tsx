interface LayourProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayourProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
        {children}
    </div>
);
};

export default Layout;
 