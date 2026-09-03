import profilePhoto from "../assets/hero.png";
export default function Hero() {
  return (
    <div className="hero">
      <div>
        <h1>Mashrur Faiyaz</h1>
        <p className="role">
          Software Engineering · Federated Learning · AI Security
        </p>
      </div>
      <img className="profile-photo" src={profilePhoto} alt="Mashrur Faiyaz" />
    </div>
  );
}
