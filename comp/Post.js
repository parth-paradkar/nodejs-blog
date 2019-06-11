
export class Post extends React.Component {
    render() {
        return (
            <div className="post-w">
                <a href="#">
                    {this.props.title}
                </a>
                <div className="info-w">
                    May 18, 2019
                </div>

                <style jsx>
                    {`
                    .info-w{
                        font-family: Open Sans;
                        font-size: 0.9em;
                        padding: 10px 0 0 0;
                        letter-spacing: 0.5px;
                        color:#666;
                        cursor:default;
                    }

                    .post-w{
                        padding:1em 2em;
                        box-sizing:border-box;
                        height:max-content;
                        width:100%;
                        background:#fafafa;
                        margin-top:10px;
                        border-radius:6px;
                    }
                    a{
                        font-family: Open Sans;
                        text-decoration: none;
                        font-size: 1.2em;
                        font-weight:600;
                        color:#333;
                    }
                    a:hover{
                        text-decoration:underline;
                    }
                    `} 
                </style>
            </div>
        )
    }
}

export default Post
