import Movies from "../Movies/Movies";


const Home = props => {
    return(
        <div>
            <Movies data={props.data} onAddCartCapacity={props.onAddCartCapacity}/>
        </div>
    );
};

export default Home;