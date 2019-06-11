import FeaturedPost from './FeaturedPost'

export class MainBody extends React.Component {
    render() {
        return (
            <div className="main-w">
                <h2>Featured</h2>

                <FeaturedPost />

                <style jsx>
                    {`
                    .main-w{
                        background:#fff;
                        margin-left: 15vw;
                        padding: 2em 0;
                    }
                    h2{
                        font-family: Open Sans;
                        color:#9be;
                    }
                    `}
                </style>
            </div>
        )
    }
}

export default MainBody
