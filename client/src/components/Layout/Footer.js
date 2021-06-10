const Footer = () => {
  return (
    <div className="container-fluid  py-4 bg-dark" style={{ height: "101px" }}>
      <div className="container text-center text-white">
        <img
          src="assets/img/slack_logo.png"
          alt="logo"
          width="40"
          height="40"
          className="rounded-circle me-2"
        />
        Slack-clone @2021
      </div>
    </div>
  );
};

export default Footer;
