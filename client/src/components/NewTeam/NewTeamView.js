import TextFieldInput from "../common/TextFieldInput";
const NewTeamView = (props) => {
  return (
    <div className="container-fluid">
      <div className="container my-5">
        <div
          className="card animate__animated animate__rubberBand mx-auto shadow p-3 mb-5 bg-body rounded"
          style={{ width: "25rem" }}
        >
          <div className="card-body">
            <form onSubmit={props.handleSubmit} autoComplete="off" noValidate>
              <TextFieldInput
                type="text"
                name="name"
                id="name"
                value={props.name}
                onChange={props.handleChange}
                placeholder="React-native dev team"
                className="form-control"
                lblText="Team name"
                infoText="This will be your chat group / team"
                // error={error.email}
              />

              <TextFieldInput
                type="text"
                name="desc"
                id="desc"
                value={props.desc}
                onChange={props.handleChange}
                placeholder="web team for video straming project"
                className="form-control"
                lblText="Team Description"
                // error={error.password}
              />
              <button
                type="submit"
                className="btn btn-primary"
                style={{ float: "right" }}
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTeamView;
