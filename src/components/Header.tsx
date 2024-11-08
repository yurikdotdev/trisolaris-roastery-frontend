function Header({ title, className }: { title: string; className?: string }) {
  return (
    <div className={`mx-auto max-w-screen-lg px-4 py-6 ${className}`}>
      <h1 className="text-center text-4xl font-bold tracking-tight text-gray-800">
        {title}
      </h1>
    </div>
  );
}

export default Header;
