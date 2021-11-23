import Modal from "./Modal";

const NoSeatPopUp =props=>{
    return(
        <Modal >
            <h1 style={{color:'red'}}>no more tickets</h1>
            <button onClick={props.onClose}>
                    Close
                </button>
        </Modal>
    );
};
export default NoSeatPopUp;