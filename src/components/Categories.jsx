import React from "react";

// class Categories extends React.Component {
//   state = {
//     activeItem: 3,
//   };

//   onClickItem = (index) => {
//     this.setState({
//       activeItem: index,
//     });
//   };
 
//   render() {
//     const { items } = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           <li>Все</li>
//           {items.map((name, index) => (
//             <li
//               className={this.state.activeItem === index ? "active" : ""}
//               onClick={() => this.onClickItem(index)}
//               key={`${name}_${index}`}
//             >
//               {name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

const Categories = ({ items, onClick }) => {
  // const [state, setstate] = useState(initialState)
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {items.map((name, index) => (
          <li onClick={() => onClick(name)} key={`${name}_${index}`}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
