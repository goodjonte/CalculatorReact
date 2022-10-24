function CalcButtons(props){
    return (
        <div>
            <button className='AppButton' onClick={() => Calculate("+")}>
            +
            </button>
            <button className='AppButton' onClick={() => Calculate("-")}>
            -
            </button>
            <button className='AppButton' onClick={() => Calculate("*")}>
            X
            </button>
            <button className='AppButton' onClick={() => Calculate("/")}>
            /
            </button>
        </div> 
    );
}

export default CalcButtons;