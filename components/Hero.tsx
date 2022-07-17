import Link from "next/link";

const Hero = () => {
  return (
    <div className="py-5">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center space-y-5">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Kiran Krishnan
          </h1>
          <h2 className="text-2xl font-bold text-gray-700">
            Software Engineer (Open Source, Dev Tools) @ BoxyHQ
          </h2>
          <p className="text-lg">
            Sharing my journey in tech. Open source contributor. I&apos;m
            excited to learn new languages and contribute to OSS.
          </p>
          <div>
            <Link href="/contact">
              <a className="btn btn-primary">Contact Me</a>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/kiran.jpeg"
            alt="Kiran Krishnan"
            className="h-52 w-52 rounded-full border-2 border-violet-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
