import Header from '../comp/Header'
import Head from 'next/head'
import CreatePost from '../comp/CreatePost'

const Create = () => {
    return (
        <div className="main-w">
            <Head>
                <link rel="stylesheet" href="../static/main.css" />
            </Head>
            <Header />
            <CreatePost />
            <style jsx>
                {`
                .main-w{
                    display:grid;
                    grid-template-columns:1fr;
                }
                `}
            </style>
        </div>
    )
}

export default Create