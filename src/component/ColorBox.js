export function ColorBox({ color }) {
  const styles = {
    width: "171px",
    height: "20px",
    backgroundColor: color,
    marginTop: "10px"
  };
  return (
    <div style={styles}></div>
  );
}
