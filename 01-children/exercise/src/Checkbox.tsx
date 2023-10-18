type Props = {
  children: React.ReactNode;
};

const Checkbox: React.FC<Props> = ({ children }) => {
  return (
    <>
      <label>{children}</label>
      <input type="checkbox" name="react" />
    </>
  );
};

export default Checkbox;
