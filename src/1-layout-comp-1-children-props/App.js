import SplitScreen from "./SplitScreen";

const LeftHandComponent = () => {
  return <h1>Left</h1>
}
const RightHandComponent = () => {
  return <p>Right</p>
}

function App() {
  return (
    <SplitScreen
      leftWeight={5}
      rightWeight={2}
    >
      <LeftHandComponent />
      <RightHandComponent />
    </SplitScreen>
  );
}

export default App;
