
class Header extends React.Component {
    render(){
        return(
            <div className="header-w">

                <div className="logo">
                    ydv
                </div>

                <style jsx>
                    {`
                    .header-w{
                        position:relative;
                        width: 70vw;
                        left:50%;
                        transform:translateX(-50%);  
                        grid-column: 1/ 2 span;
                    }

                    .logo{
                        height:100px;
                        background:#fff;
                        font-family: Gotham;
                        padding:1em 0;
                        font-size:2em;
                        font-weight: 700;
                        box-sizing:border-box;
                    }
                    `}
                </style>

            </div>
        )    
    }
}

export default Header