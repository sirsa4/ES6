//helper function

function getElement(select){
    const element = document.querySelector(select);

    if(element){
        return element;
    }
    throw new Error(`${select} does not exist`);
}