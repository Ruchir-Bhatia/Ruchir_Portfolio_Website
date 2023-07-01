import { useProgress } from "@react-three/drei";

const useProgressAll = () => {
  const [progress, setProgress] = useState(0);

  const onProgress = (value) => {
    setProgress(value);
  };

  return {
    progress,
    onProgress,
  };
};

const CanvasLoader = () => {
  const { progress, onProgress } = useProgressAll();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
