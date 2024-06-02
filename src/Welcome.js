export function Welcome({ name, age, pic }) {
  return (
    <div>
      <img width="200px" height="200px" src={pic} alt={name} />
      <h1>
        Hello {name} {age}😀
      </h1>
    </div>
  );
}
