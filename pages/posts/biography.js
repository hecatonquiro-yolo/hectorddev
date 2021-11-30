import Link from 'next/link'



export default function Biography(){
    return(
        <>
            <h1>This is my bio</h1>
            <p>Hi, my name is Hector!</p>
            <Link href="/"> 
                <a>Volver</a>
            </Link>
        </>
    )
}