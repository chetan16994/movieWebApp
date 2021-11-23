// import { useState , Fragment} from "react";
// import AddMovie from "./AddMovie";

// import classes from './AddMovie.module.css';

// const AddID =props=>{
//     // const [imdbID,setimdbID]= useState('');
//     const id="";
//     const idSubmitHandler = (event) => {
//         console.log(event.target.value);
//         // id = event.target.value;
                
//     };
//     const onIDChangeHandler = event => {
//         console.log(event.target.value);
//         // console.log(idRef.current.value)
//         id = event.target.value

//     }
//     return(
//         <Fragment>
//             <form onSubmit={onIDChangeHandler } >
//                 <div className={classes.control} >
//                     <label htmlFor='id'>IMDB id</label>
//                     <input type='text' id='id'  />
//                 </div>
//                 <button>submit ID</button>
//         </form >
//             <AddMovie onAddMovie={props.onAddMovie} id={id}/>
//         </Fragment>
//     );
// };

// export default AddID;