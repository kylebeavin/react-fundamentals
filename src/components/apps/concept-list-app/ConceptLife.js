import React from 'react';

const ConceptLife = ({lifecycleMethods, toggle}) => {
    const lifedone = (event) => {
        event.preventDefault();
        toggle(lifecycleMethods);
        console.log("props:", lifecycleMethods)
    }
    return (
        <li>
            {lifecycleMethods.lifedone ? (<del>{lifecycleMethods.text}</del>) : (lifecycleMethods.text)} <a href="" onClick={lifedone}>✓</a>
        </li>
    );
}

export default ConceptLife;