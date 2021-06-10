const LoginView = () => {
  return (
    <div className="container-fluid">
      <div className="container my-5">
        <div
          className="card animate__animated animate__rubberBand mx-auto shadow p-3 mb-5 bg-body rounded"
          style={{ width: "25rem" }}
        >
          <div className="card-body">
            <form autoComplete="off" noValidate>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="abc@abc.com"
                className="form-control"
                lblText="Email address"
                infoText="We'll never share your email with anyone else."
              />

              <input
                type="password"
                name="password"
                id="password"
                placeholder="**********"
                className="form-control"
                lblText="Password"
              />
              <button
                type="submit"
                className="btn btn-success"
                style={{ float: "right" }}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
