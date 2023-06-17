const Part = (props) => {
    return(
      <div>
        {props.name} {props.ex}
      </div>
    )
  }

const OneCourse = ({ edUnit }) => {

    const exList = edUnit.parts.map(edUnit => edUnit.exercises)
  
    const allEx = exList.reduce(function(a, b){
      return a + b
    })
  
    return(
      <div>
        <h3>
          {edUnit.name}
        </h3>
        {edUnit.parts.map(part => <Part key={part.id} name={part.name} ex={part.exercises}/>)}
        <p>
        <b>
            total of {allEx} exercises
        </b>
        </p>
      </div>
    )
  }
  
  const Course = (props) => {
  
    const kurssit = props.courses
  
    return(
      <div>
        {kurssit.map(edUnit => <OneCourse key={edUnit.id} edUnit={edUnit}/>)}
      </div>
    )
  }

export { Part, OneCourse, Course }