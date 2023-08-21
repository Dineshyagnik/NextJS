"use client";

import { useState } from "react";
import custom from '../custom.module.css';
import other from '../other.module.css';
import outside from '@/styles/outside.module.css';

export default function page() {

    // const [style, setStyle] = useState({ backgroundColor: 'green' });
    const [color,setColor]=useState('red');

    const {red}=outside;

    return (
        <div>
            {/* <h1 style={{backgroundColor:'black'}}>User page</h1>
            <h3>Heading 3</h3>
            <h4 style={style}>Heading 4</h4>

            <button onClick={()=>setStyle({backgroundColor:'blue'})}>Update style</button> */}

            {/* <div>
                <h1 className={custom.main}>Heading 1</h1>
                <h3 className={other.main}>Heading 3</h3>
                <p className={outside.main}>Some content</p>
            </div> */}

            <div>
                <h1 className={color=="red"?outside.red:outside.green}>Heading 1</h1>
                <h3 style={{backgroundColor:color=='red'?'red':'green'}}>Heading 3</h3>
                <p id={outside.orange}>Some content</p>

                <h4 className={red}>Dummy Text</h4>
                <h4 className={red}>Dummy Text</h4>
                <h4 className={red}>Dummy Text</h4>
                <h4 className={red}>Dummy Text</h4>

                <button onClick={()=>setColor("green")}>Update color</button>
            </div>
        </div>
    )
}

export function generateMetadata(){
    return{
        title:'user page title', 
        description:'user page description'
    }
}