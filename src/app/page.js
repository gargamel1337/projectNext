import SignupForm from "../components/SignupForm/page";

export default function Home() {
  const menuItem = ["React", "Git", "MongoDB"];
  return (
    <>
      <div className=" bg-black/60 backdrop-blur-sm ">
        <nav className=" grid grid-cols-2 sm:flex justify-between items-center text-white max-w-screen-xl mx-auto  ">
          <a
            href={"/"}
            className=" hover:bg-white/20 min-h-[3rem] px-4 inline-flex items-center justify-self-start"
          >
            K | N
          </a>
          <input
            type="checkbox"
            className="peer sm:hidden appearance-none justify-self-end min-h-[3rem] px-3 inline-flex items-center text-3xl after:content-['≡'] checked:after:content-['×']"
            aria-controls="navigation-menu"
            aria-label="Toggle navigation menu"
          />
          <ul
            className="hidden sm:flex flex-col sm:gap-8 sm:flex-row peer-checked:flex col-start-1 col-end-3"
            id="navigation-menu"
          >
            {menuItem.map((item, index) => (
              <li key={index}>
                <a
                  href=""
                  className="hover:bg-white/20 min-h-[3rem] px-4 inline-flex items-center"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <main>
        <div className="max-w-max bg-black/60 backdrop-blure-sm p-4 mx-auto  mt-4 rounded-lg ">
          <h1 className=" mb-6 bg-clip-text text-transparent text-4xl font-bold bg-gradient-to-r from-blue-500 to-violet-500">
            Co chcesz wiedziec
          </h1>
          <div className="text-white">
          <p className="mb-4">Lorem ipsuuuuuuu</p>
          <p className="mb-4">Lorem ipsuuuuuuulorem ipsu</p>
          <ul className=" mb-8 list-disc list-inside">
            <li>jedne</li>
            <li>jdwa</li>
            <li>trzy</li>
            <li>cztery</li>
            <li>piec</li>
            <li>szesc</li>
          </ul>
          </div>
          <SignupForm />
        </div>
      </main>
    </>
  );
}
