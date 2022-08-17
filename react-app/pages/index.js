import Link from "next/link";
import A from "../components/A";
import Head from "next/head";

const Index = () => {
    return (
        <>
            <Head>
                <meta keywords="Next.js, test"></meta>
            </Head>
            <div className="wrapper">
                <h1 className="index">Next.js test project</h1>
                <span>Элементы сайта:</span>
                <Link href="/"><a>Главная страница</a></Link>
                <Link href="/users"><a>Пользователи</a></Link>
            </div>
        </>
    );
};

export default Index;