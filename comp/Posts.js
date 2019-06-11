import Post from './Post'
import axios from 'axios'

class Posts extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: [''],
            isLoading: true
        }
    }

    componentWillMount() {
        axios.get('/api/all').then( res => {
            console.log(res)
            this.setState(
                {data: res.data,
                isLoading: false})
            console.log(this.state.data)
        }).catch(err => console.log('Error'))
    }

    render() {
        const { data } = this.state
        return (
            <div className="posts-w">
                <h2>Recent Posts </h2>

                {
                    Array.isArray(data) && data.map( post => {
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