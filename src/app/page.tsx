export default function Home() {
  return (
    <main>
      <div className="flex flex-col h-screen">
        <nav className="flex flex-row items-center justify-between w-full p-4">
          <h1 className="text-4xl font-bold">BuildU</h1>
          <div className="flex flex-row items-center justify-center space-x-4">
            <a className="" href="#">
              Contact
            </a>
            <button className="text-white p-2 rounded-md bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
              Login
            </button>
            <button className="bg-blue-500 text-white p-2 rounded-md">
              Sign Up
            </button>
          </div>
        </nav>
        <div className="flex flex-col items-center justify-start h-screen">
          <h1 className="text-8xl font-bold">BuildU</h1>
          <h3 className="text-2xl text-center m-4">
            Buildu is a platform for building and deploying web apps.
          </h3>
        </div>
      </div>
    </main>
  );
}
