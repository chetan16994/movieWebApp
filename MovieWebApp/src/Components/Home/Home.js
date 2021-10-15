import Movies from "../Movies/Movies";
import HomeFooter from "./HomeFooter";
import HomeHeader from "./HomeHeader";

const Home = props => {
    return(
        <div>
            <HomeHeader />
            <Movies data={props.data}/>
            <HomeFooter />
        </div>
    );
};

export default Home;