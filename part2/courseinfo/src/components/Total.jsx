const Total = ({ parts }) => {
  const total = parts.reduce((accumulator, item) => (
    accumulator + item.exercises
  ), 0)

  return <p><strong>total of {total} exercises</strong></p>
}

export default Total