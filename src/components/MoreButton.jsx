const MoreButton = ({ onSearch }) => {
  return (
    <>
      <div className="moreButton">
        <button className="more-btn" onClick={onSearch}>
          More
        </button>
      </div>
    </>
  );
};

export default MoreButton;
