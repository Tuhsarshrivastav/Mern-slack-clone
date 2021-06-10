import TextFieldInput from "../common/TextFieldInput";
const RegisterView = () => {
  return (
    <div className="container-fluid">
      <div className="container my-5">
        <div
          className="card animate__animated animate__rubberBand mx-auto shadow p-3 mb-5 bg-body rounded"
          style={{ width: "25rem" }}
        >
          <div className="card-body">
            <form>
              <TextFieldInput
                type="text"
                name="username"
                id="username"
                placeholder="sandeep_dev"
                className="form-control"
                lblText="Username"
                infoText="Your username will shown in chat list."
              />
              <TextFieldInput
                type="email"
                name="email"
                id="email"
                placeholder="abc@abc.com"
                className="form-control"
                lblText="Email address"
                infoText="We'll never share your email with anyone else."
              />

              <TextFieldInput
                type="password"
                name="password"
                id="password"
                placeholder="**********"
                className="form-control"
                lblText="Password"
              />
              <TextFieldInput
                type="password"
                name="password1"
                id="password1"
                placeholder="**********"
                className="form-control"
                lblText="Re-Type Password Again: "
                infoText="Type same password as above."
              />

              <button
                type="submit"
                className="btn btn-success"
                style={{ float: "right" }}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterView;
