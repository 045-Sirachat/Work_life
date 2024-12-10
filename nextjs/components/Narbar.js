import Link from "next/link"
import Image from "next/image"
export default function Narbar() {
    return(
        <nav>
            <div>
                <h1> Sirachat Siriporn </h1>
                <Image src="/vercel.svg" alt="Vercel Logo" width={50} height={50}/>
            </div> 
                <Link href="/">First Page |</Link>
                <Link href="/about"> About Us |</Link>
                <Link href="/products"> All Products</Link>
        </nav>
    )
}