import Post from './Post'
import axios from 'axios'

class Posts extends React.Component {

    ids = []

    state = {
        posts: [],
        isLoading: true,
    }

    async componentDidMount() {
        
        const { data } = await axios.get('/api/all')
        this.setState({posts: data, isLoading: false})

        console.log(this.state.posts)

    }

    render() {
        const { posts } = this.state
        return (
            <div className="posts-w">
                <h2>Recent Posts </h2>

                {
                    posts.map( post => {
                        <Post title={post.title} /> 
                    })
                }
                <Post title="Exploring React and axios in deep" />

                <style jsx>
                    {`
                    .posts-w{
                        margin-top: 50px;
                        position:relative;
                        left:50%;
                        transform:translateX(-50%);
                        width:70%;
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

export default Posts