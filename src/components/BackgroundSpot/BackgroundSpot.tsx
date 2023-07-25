const BackgroundSpot = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 100,
        left: 200,
        width: 200,
        height: 300,
        background: "linear-gradient(to right, green, black)",
        borderRadius: "85%",
        filter: "blur(200px)",
        zIndex: -1,
      }}
    />
  );
};

export default BackgroundSpot;
