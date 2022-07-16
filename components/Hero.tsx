import Link from "next/link";

const Hero = () => {
  return (
    <div className="max-h-max border-b-2 border-green-400 px-40 py-10">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center space-y-5">
          <h1 className="text-5xl font-extrabold text-gray-900">
            Kiran Krishnan
          </h1>
          <h2 className="text-2xl font-extrabold text-gray-500">
            Senior Software Engineer @ BoxyHQ
          </h2>
          <p className="text-lg">
            He loves to talk about building startups, programming, OSS and
            astronomy.
          </p>
          <div>
            <Link href="/about">
              <a className="btn btn-primary">Learn About Me</a>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://boxyhq.com/img/team/kiran.jpg"
            alt="Kiran Krishnan"
            className="h-96 w-96 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
