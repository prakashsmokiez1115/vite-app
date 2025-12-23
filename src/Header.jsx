import "./Header.css"


function Header() {
    return (
        <div>
            <div className="header-1">
                <h1>This is a Header component-1</h1>
                <ol>
                    <li>List- 1</li>
                    <li>List- 2</li>
                    <li>List- 3</li>
                    <li>List- 4</li>
                </ol>
            </div>



            <div className="header-2">
                <h1>This is a Header component-2</h1>
                <ol>
                    <li>List- 5</li>
                    <li>List- 6</li>
                    <li>List- 7</li>
                    <li>List- 8</li>
                </ol>
            </div>
        </div>
    )
}

export default Header;