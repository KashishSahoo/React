function handleClick(event){
    console.log("Hello!");
    console.log(event);
}
function handleMouseOver(){
    console.log("Bye!");
}

function handleDblClick(){
    console.log("You double clicked");
}
export default function Button(){
    return(
        <div>
            <button onClick={handleClick}>Click Me</button>
            <p onMouseOver={handleMouseOver}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Labore laudantium sunt molestias quam cum, recusandae placeat delectus vitae. 
                Ipsa, quibusdam.</p>
            <button onDoubleClick={handleDblClick}>Submit</button>
        </div>
    )
}