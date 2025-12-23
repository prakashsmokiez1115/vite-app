// this is called side effect import
import "./Footer.css"



function Footer() {

    /*  internal css 
    
    
    const footerStyle={
           backgroundColor:"yellow",
           color:"black",
           padding:"10px"
       }

           */



    return (
        <div>
            <div className="footer-1">

                {/* inline css */}
                {/* <h1 style={{color:"red",backgroundColor:"white"}}>This is a Footer component-1</h1> */}

                {/* internal css */}
                {/* <h1 style={footerStyle}>This is a Footer component-1</h1> */}

                

                <h1>This is a Footer component-1</h1>
                <ul>
                    <li>List - 1</li>
                    <li>List - 2</li>
                    <li>List - 3</li>
                    <li>List - 4</li>


                </ul>
            </div>

            <div className="footer-2">
                <h1>This is a Footer component-2</h1>
                <ul>
                    <li>List-5</li>
                    <li>List-5</li>
                    <li>List-6</li>
                    <li>List-7</li>
                </ul>

            </div>
        </div>

    )
}

export default Footer;