

const Background = ( {headText, image} ) => {
  return (
    <div
      className="background-image"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1>{headText}</h1>
    </div>
  );
};

export default Background;