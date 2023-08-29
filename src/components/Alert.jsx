
const Alert = ({msg, color}) => {
  return (
    <div className={`alert ${color} `}>
      {msg}
    </div>
  );
}

export default Alert;