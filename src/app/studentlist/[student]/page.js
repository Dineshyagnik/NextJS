"use client"
const Student=({params})=>{
    console.log(params)
    return(
        <div>
            <h1>Student Details</h1>
            <h3>Name: {params.student}</h3>
        </div>
    )
}
export default Student; 