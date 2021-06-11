import TextFieldInput from "../common/TextFieldInput";
const RegisterView = (props) => {
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
                placeholder="username"
                className="form-control"
                lblText="Username"
                infoText="Your username will shown in chat list."
                value={props.username}
                onChange={props.handleChange}
              />
              <TextFieldInput
                type="email"
                name="email"
                id="email"
                value={props.email}
                onChange={props.handleChange}
                placeholder="abc@abc.com"
                className="form-control"
                lblText="Email address"
                infoText="We'll never share your email with anyone else."
              />

              <TextFieldInput
                type="password"
                name="password"
                value={props.password}
                onChange={props.handleChange}
                id="password"
                placeholder="**********"
                className="form-control"
                lblText="Password"
              />
              <TextFieldInput
                type="password"
                name="password1"
                value={props.password1}
                onChange={props.handleChange}
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
