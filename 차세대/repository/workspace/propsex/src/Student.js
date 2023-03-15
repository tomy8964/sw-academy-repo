function University(props) {
    return <h2>I am a { props.studentName }!</h2>;
}

function Student() {
    const studentName = "Ham Geonwook";
    return(
        <>
         <h1>Gachon University</h1>
         <University studentName={studentName}/>
        </>
    );  
}

export default Student;