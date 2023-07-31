const Toggle = (props) => {
  return (
    <>
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
      />

      <label
        htmlFor="my-drawer"
        className="btn btn-circle "
        role="switch"
        {...props}
      />
    </>
  );
};

export default Toggle;
