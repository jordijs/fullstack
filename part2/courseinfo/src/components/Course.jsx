import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

  const Course = ({course}) => {

    const total = () =>{
      let sum = 0
      for (const part of course.parts){
        sum += part.exercises
      }
      return sum
    }

    return <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total sum={total()} />
    </div>

  }

  export default Course