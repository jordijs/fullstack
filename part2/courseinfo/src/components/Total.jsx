const Total = ({ parts }) => {
  const total = parts.reduce((accumulator, item) => (
    accumulator + item.exercises
  ), 0)

  return <p><strong>Number of exercises {total}</strong></p>
}

export default Total