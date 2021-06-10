import TeamCard from "./TeamCard";

const TeamListView = () => {
  return (
    <div
      className="container-fluid py-5 bg-warning"
      style={{ height: "518px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <TeamCard
              title="React-native-developer"
              about="Team created by @tushar"
              btn_text="Join Now"
            />
          </div>
          <div className="col-md-6 text-center">
            <p className="my-5">
              Join this team with project software developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamListView;
