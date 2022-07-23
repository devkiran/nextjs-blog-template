import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center space-y-5">
      <h1 className="text-4xl font-extrabold text-gray-900">Kiran Krishnan</h1>
      <h2 className="text-xl font-bold text-gray-700">
        Software Engineer (Open Source, Dev Tools) @ BoxyHQ
      </h2>
      <p className="text-lg">
        Sharing my journey in tech. Open source contributor. I&apos;m excited to
        learn new languages and contribute to OSS.
      </p>
      <div>
        <Link href="/contact">
          <a className="btn btn-primary">Contact Me</a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
