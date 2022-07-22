import {useRouter} from "next/router";

export default function () {

    const router = useRouter()
    console.log(router)

    return (
        <div>
            <h1>Пользователь id: {router.query.id}</h1>
        </div>
    )
}