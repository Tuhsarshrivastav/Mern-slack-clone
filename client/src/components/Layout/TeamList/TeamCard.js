const TeamCard = ({ title, about, btn_text }) => {
  return (
    <div className="card shadow animate_animated animate__rubberBand p-3 mb-5 bg-body rounded">
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <img
              src="assets/img/team_logo.png"
              alt="logo"
              className="rounded-circle img-fluid"
            />
          </div>
          <div className="col-md-8">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{about}</p>
            <a href="#" className="btn btn-danger">
              {btn_text}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
