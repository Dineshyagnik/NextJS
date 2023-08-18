
import { Roboto } from "next/font/google"
const roboto=Roboto({
    weight:'100',
    subsets:['latin'],
    display:'swap'
})
export default function Font(){
    return(
        <div>
            <h1>Font Optimization in Next</h1>
            {/* <h1 style={{fontFamily:'Roboto',fontWeight:100}}>Font With Link Tag in Next</h1> */}
            <h1 className={roboto.className}>Font with NextJs font feature</h1>
        </div>
    )
}