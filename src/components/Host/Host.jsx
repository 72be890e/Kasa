function Host({ hostName, hostPicture }) {
  return (
    <div className="host-container">
      <p className="host-name">{hostName}</p>
      <div className="host-picture">
        <img src={hostPicture} alt={"Photo de " + hostName} />
      </div>
    </div>
  );
}
export default Host;
