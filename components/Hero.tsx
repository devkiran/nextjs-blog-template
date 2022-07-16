import Link from "next/link";

const Hero = () => {
  return (
    <div className="px-40 max-h-max py-10 border-b-2 border-green-400">
      <div className="grid grid-cols-2">
        <div className="space-y-5 flex justify-center flex-col">
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
            className="rounded-full h-96 w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
