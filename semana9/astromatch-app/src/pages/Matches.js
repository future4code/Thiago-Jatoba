
function Matches(props) {
    return (
        <div>
            Deu Match!
            <button onClick={()=> props.change('likes')}>Troca</button>
        </div>
    );
}

export default Matches;