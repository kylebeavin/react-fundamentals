import React from 'react';
import _ from 'lodash';
import ConceptLife from './ConceptLife';

const LifeCycleConcepts =   ({lifecycleMethods,toggle}) => {console.log(lifecycleMethods);
    let lifecycleSorted = _.sortBy(lifecycleMethods, 'done');
    let lifecycles = lifecycleSorted.map( (lifecycleMethods) =>
        <ConceptLife lifecycleMethods={lifecycleMethods} key={lifecycleMethods.text} toggle={toggle}/>
    );
    return (
        <ul>
            {lifecycles}
        </ul>
    )
}

export default LifeCycleConcepts;