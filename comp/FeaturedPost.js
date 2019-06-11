
export class FeaturedPost extends React.Component {
    render() {
        return (
            <div className="f-post">
                <div className="img"></div>
                <div className="overlay">
                    <a className="title" href="#">
                        Taking a look at the Facebook APIs
                    </a>
                    <a href="#">Ajay Yadav</a>
                </div>

                <style jsx>
                    {`
                    .f-post{
                        box-sizing: border-box;
                        height:100%;
                        width:100%;
                        background:transparent;
                        position:relative;
                        border-bottom:4px solid #f6f6f6;
                    }
                    .img{
                        height:100%;
                        width:100%;
                        background:#4399ec;
                        background-position: center;
                        background-size: cover;
                        background-repeat: no-repeat;
                    }
                    .overlay{
                        box-sizing:border-box;
                        height:auto;
                        width:100%;
                        position:absolute;
                        background:#fff;
                        bottom:0;
                        padding:1em;
                        left: 0;
                    }
                    .title{
                        display:block;
                        font-size: 1.8em;
                        color:#233;
                        font-family:Open Sans;
                        font-weight: 800;
                    }
                    a{
                        font-family: Open Sans;
                        font-weight: 600;
                        text-decoration: none;
                        color:#abd;
                    }
                    `}
                </style>
            </div>
        )
    }
}

export default FeaturedPost
