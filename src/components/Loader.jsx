import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = (props) => {
  const { progress } = useProgress();

  if (progress == 100) {
    props.load(true);
  }
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
  
      <div className="cube">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(0)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
