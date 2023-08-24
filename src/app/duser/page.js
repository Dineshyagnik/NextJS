// import {redirect} from 'next/navigation'

export default function User(){

    // redirect('/login')

    return(
        <div>
            <h1>D User Page</h1>
        </div>
    )
};

export function generateMetadata(){
    return{
        title:'user page title', 
        description:'user page description'
    }
}