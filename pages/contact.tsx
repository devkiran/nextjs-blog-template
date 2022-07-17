import type { NextPage } from "next";
import { GlobeIcon, MailIcon } from "@heroicons/react/solid";
import Layout from "components/Layout";
import { NextSeo } from "next-seo";

const Contact: NextPage = () => {
  return (
    <Layout>
      <>
        <NextSeo title="Contact Me" description="Contact Me" />
        <div className="flex flex-col md:flex-row">
          <div className="flex w-full flex-col space-y-3 bg-blue-600 p-4 text-white md:w-1/2 md:p-8">
            <h1 className="text-2xl font-bold">Get in touch</h1>
            <p className="text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="flex items-center">
              <MailIcon className="h-5 w-5" />
              <p className="ml-2 text-base">kiran@boxyhq.com</p>
            </div>
            <div className="flex items-center">
              <GlobeIcon className="h-5 w-5" />
              <p className="ml-2 text-base">
                Website:
                <a href="https://www.kirandev.com/">&nbsp;kirandev.com</a>
              </p>
            </div>
            <div className="flex items-center">
              <GlobeIcon className="h-5 w-5" />
              <p className="ml-2 text-base">
                Twitter:
                <a href="https://twitter.com/tokirankrishnan">
                  &nbsp;@tokirankrishnan
                </a>
              </p>
            </div>
            <div className="flex items-center">
              <GlobeIcon className="h-5 w-5" />
              <p className="ml-2 text-base">
                GitHub:
                <a href="https://github.com/devkiran">&nbsp;@devkiran</a>
              </p>
            </div>
          </div>
          <div className="w-full border border-gray-200 bg-white p-4 md:w-1/2 md:p-8">
            <form action="#" className="space-y-5">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Phone"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control">
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="Message"
                ></textarea>
              </div>
              <button className="btn btn-primary w-full">Submit</button>
            </form>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Contact;
