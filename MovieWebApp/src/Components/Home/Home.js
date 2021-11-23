import Movies from "../Movies/Movies";


const Home = props => {
    return(
        <div>{console.log(props.data)}
            <Movies data={props.data} onUpdateCartCapacity={props.onUpdateCartCapacity}/>
        </div>
    );
};

export default Home;