import { useState } from 'react'

const Title = ({ text }) => <h1>{text}</h1>

const StatisticLine = ({ value, text }) => <div>{text} {value}</div>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = () => {
    return (good - bad) / all
  }
  const percentagePositive = () => {
    return (good / all) * 100 + ' %'
  }

  if (all === 0) return <div>No feedback given</div>

  return <div>
    <StatisticLine value={good} text='good' />
    <StatisticLine value={neutral} text='neutral' />
    <StatisticLine value={bad} text='bad' />
    <StatisticLine value={all} text='all' />
    <StatisticLine value={average()} text='average' />
    <StatisticLine value={percentagePositive()} text='positive' />
  </div>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <Title text="give feedback" />
      <div>
        <Button onClick={increaseGood} text={'good'} />
        <Button onClick={increaseNeutral} text={'neutral'} />
        <Button onClick={increaseBad} text={'bad'} />
      </div>
      <Title text="statistics" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App