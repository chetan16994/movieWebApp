import Movies from "../Movies/Movies";


const Home = props => {
    return(
        <div>
            <Movies data={props.data}/>
        </div>
    );
};

export default Home;