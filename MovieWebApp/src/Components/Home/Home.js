import Movies from "../Movies/Movies";


const Home = props => {
    return(
        <div>
            <Movies data={props.data} onUpdateCartCapacity={props.onUpdateCartCapacity}/>
        </div>
    );
};

export default Home;