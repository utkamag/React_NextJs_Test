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
            <A href={"/"} text="Главная страница" />
            <A href={"/users"} text="Пользователи" />
        </div>
            </>
    );
};

export default Index;