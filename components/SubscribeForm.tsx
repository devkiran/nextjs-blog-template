const SubscribeForm = () => {
  return (
    <div className="flex justify-center bg-gray-100 py-5">
      <div className="flex flex-col space-y-3">
        <h2 className="text-gray-70 text-xl font-bold">
          Subscribe to the Email Newsletter
        </h2>
        <form className="flex flex-col space-y-3">
          <div className="form-control">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              className="input input-bordered"
            />
          </div>
          <button className="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeForm;
