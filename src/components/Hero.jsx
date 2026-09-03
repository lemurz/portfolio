import profilePhoto from "../../public/Photo.jpeg";
export default function Hero() {
  return (
    <div className="hero">
      <div>
        <h1>Mashrur Faiyaz</h1>
        <p className="role">
          Backend Development · Federated Learning · AI Security
        </p>
      </div>
      <img className="profile-photo" src={profilePhoto} alt="Mashrur Faiyaz" />
    </div>
  );
}
