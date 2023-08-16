"use client"

const Lectures=({params})=>{
    return(
        <div>
            <h1>Day Of College {params.lectures[0]}</h1>
            <h3>Lecture No. {params.lectures[1]}</h3>
        </div>
    )
}
export default Lectures;