import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-screen">
      <div className="items-star flex py-5">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center space-y-5">
            <h1 className="text-5xl font-extrabold text-gray-900">
              Kiran Krishnan
            </h1>
            <h2 className="text-2xl font-bold text-gray-500">
              Software Engineer (Open Source, Dev Tools) @ BoxyHQ
            </h2>
            <p className="text-lg">
              Sharing my journey in tech | Open source contributor | Writing
              about Golang, Next.js, Remix.run
            </p>
            <div>
              <Link href="/contact">
                <a className="btn btn-primary">Contact Me</a>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://boxyhq.com/img/team/kiran.jpg"
              alt="Kiran Krishnan"
              className="h-52 w-52 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
