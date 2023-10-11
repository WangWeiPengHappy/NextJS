//index.html
import { useState } from 'react'


function Header() {
    return <>
        <h1>Develop. Preview. Ship. 🚀</h1>
    </>
}

function Content(props) {
    return <>
        <h2>{props.descript}</h2>
    </>
}

export default function HomePage() {
    const detailContents = ["qwer", "asdf", "zxcv"];
    const [likesNum, setLikesNum] = useState(0);

    function handleClick() {
        setLikesNum(likesNum + 1);
    }

    return <>
        <Header />
        <Content descript="Description 1" />
        <Content descript="Description 2" />
        <ul>
            {detailContents.map(item =>
                <li key={item}>{item}
                </li>
            )}
        </ul>
        <button onClick={handleClick}>❤️ {likesNum}</button>
    </>
}