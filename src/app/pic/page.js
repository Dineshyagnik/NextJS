
import Image from "next/image"
import profile from '../../../public/vercel.svg'

export default function Home() {
    console.log(profile)
    return (
        <div>
            <h1>Image Optimization in NextJS</h1>
            {/* <Image
                src={profile}
                height={500}
                width={500}
            />
            <img src={profile.src} /> */}

            <Image 
            src='https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg'
            height={200}
            width={200}
            />
        </div>
    )
}