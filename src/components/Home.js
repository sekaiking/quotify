import React from 'react'

import Welcome from './Welcome';
import Loading from './Loading';
import Quote from './Quote';


export default function Home(props) {
    let content = <Welcome />;
    content = props.loading || props.quote == null ? <Loading /> : <Quote quote={props.quote} />;
    content = props.welcome ? <Welcome /> : content;
    return (
        <div>
            {content}
        </div>
    )
}

