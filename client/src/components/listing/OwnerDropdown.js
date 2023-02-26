import { Select } from "antd";

// const getStyles = () => ({
//   listLayout: {
//     display: "flex",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: "24px",
//     padding: "15px",
//     marginBottom: "50px",
//   },
// });

const OwnerDropdown = (props) => {
  //   const styles = getStyles();

  return (
    <Select
      defaultValue="Bill"
      style={{
        width: 120,
      }}
      onChange={props.onChange}
      options={props.dropDownOptionList}
    />
  );
};

export default OwnerDropdown;
