import Child from "./Child";

function Parent(data) {
  const { name, surname } = data;

  return (
    <>
      <h1>Components & Props</h1>
      <div>
        Hello {name} <Child surname={surname} />{" "}
      </div>
    </>
  );
}

export default Parent;
