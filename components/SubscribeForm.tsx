const SubscribeForm = () => {
  return (
    <div className="flex bg-blue-50 px-5 py-5">
      <div className="flex flex-col space-y-2">
        <h2 className="text-gray-70 text-xl font-bold">
          Subscribe to the email newsletter
        </h2>
        <p>
          Join 5,000+ others and never miss out on new tips, tutorials, and
          more.
        </p>
        <form className="flex flex-col gap-3 md:flex-row">
          <div className="form-control flex-grow">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              className="input input-bordered flex-grow"
            />
          </div>
          <button className="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeForm;
