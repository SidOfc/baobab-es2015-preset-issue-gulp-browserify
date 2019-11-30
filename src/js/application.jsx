import React from 'react';
import ReactDOM from 'react-dom';

// NOTE:
//
// to see issue, uncomment these lines and comment the const mocks
// import {useRoot, useBranch} from 'baobab-react/hooks';
// import tree from './store.js';


// const mocks for baobab
const tree = {};
const useBranch = () => ({});
const useRoot = () => React.Fragment;

function Hello() {
    const {dispatch, hello} = useBranch({hello: ['hello']});

    return (
        <div>
            Hello has value: {hello}
        </div>
    )
}

function Application({store}) {
    const Root = useRoot(store);

    return (
        <Root>
            <Hello />
        </Root>
    );
}

ReactDOM.render(<Application store={tree} />, document.getElementById('root'));
