import React from 'react';
import styled from 'styled-components';

const ArticleCard = styled.div`
background-color: pink;
`

const NytResults = (props) => {
    return (
        <div>
            {props.results.map(result => {
                return (
                <ArticleCard>
                    <button onClick={e => props.changePage(e, 'down')}>Previous 10</button>
                    <button onClick={e => props.changePage(e, 'up')}>Next 10</button>
                    <div key={result._id}>
                        <h2>{result.headline.main}</h2>
                        {result.multimedia.length > 1 ? <img alt="article" src={`http://www.nytimes.com/${result.multimedia[1].url}`} /> : ''}
                        <p>
                            {result.snippet}
                            <br/>
                            {result.keywords.length > 0 ? ' Keywords: ' : ''}
                        </p>
                        <ul>
                            {result.keywords.map(keyword => <li key={keyword.value}>{keyword.value}</li>)}
                        </ul>
                        <a href={result.web_url}><button>Read It</button></a>
                    </div>
                </ArticleCard>
                )
            })}
        </div>
    )
}
export default NytResults; 