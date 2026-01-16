import React,{useState} from "react";

// class AddUserInfor extends React.Component {
//   state = {
//     name: "",
//     address: "Hà Nội",
//     age: "",
//   };

//   handleOnChangeInput = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };
//   handleOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };

//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     this.props.handleAddNewUser({
//       id : Math.floor(Math.random() * 1001) + '-random',
//       name : this.state.name,
//       age : this.state.age
//     })
//   };
//   render() {
//     return (
//       <div>
//         My name is {this.state.name} and im from {this.state.address}, im{" "}
//         {this.state.age} years old.
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <label>Name:</label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => this.handleOnChangeInput(event)}
//           />
//           <label>Age:</label>
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(event) => this.handleOnChangeAge(event)}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUserInfor = (props) => {
  //  state = {
  //   name: "",
  //   address: "Hà Nội",
  //   age: "",
  // };

  const [name , setName] = useState('');
  const [age , setAge] = useState('');
  const [address , setAddress] = useState('Hà Nội');

  const handleOnChangeInput = (event) => {
   setName(event.target.value);
  };
  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id : Math.floor(Math.random() * 1001) + '-random',
      name : name,
      age : age
    })
  };
  return (
     <div>
//         My name is {this.state.name} and im from {this.state.address}, im{" "}
//         {this.state.age} years old.
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <label>Name:</label>
//           <input
            value={name}
            type="text"
            onChange={(event) => handleOnChangeInput(event)}
          />
          <label>Age:</label>
          <input
            value={age}
            type="text"
            onChange={(event) => handleOnChangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </div>
  )
}

export default AddUserInfor;
