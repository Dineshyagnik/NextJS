import Link from "next/link";

const StudentList=()=>{

    return(
        <div>
            <h1>Student List</h1>
            <ul>
                <li>
                    <Link href={'/studentlist/anil'}>Anil</Link>
                </li>
                <li>
                    <Link href={'/studentlist/dinesh'}>Dinesh</Link>
                </li>
                <li>
                <Link href={'/studentlist/peter'}>Peter</Link>
                </li>
                <li>
                <Link href={'/studentlist/john'}>John</Link>
                </li>
                <li>
                <Link href={'/studentlist/jenny'}>Jenny</Link>
                </li>
            </ul>
        </div>
    )
}
export default StudentList; 




// import Link from "next/link";

// const StudentList = () => {

//     let name = ['Dinesh', 'Anil', 'John', 'Jenny', 'Peter']
//     return (
//         <div>
//             <h1>Student List</h1>
//             <ul>
//                 {
//                     name.map((item, index) => {
//                         return (
//                             <li key={index}>
//                                 <Link href={'/studentlist/anil'}>{item}</Link>
//                             </li>
//                         )

//                     })
//                 }

//             </ul>
//         </div>
//     )
// }
// export default StudentList; 