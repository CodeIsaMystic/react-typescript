import { useState } from 'react'

const users = [
  { name: 'John', age: 20 },
  { name: 'Jane', age: 21 },
  { name: 'Henry', age: 40 },
  { name: 'Harry', age: 20 },
  { name: 'Robert', age: 40 },
  { name: 'Brian', age: 18 },
  { name: 'Scott', age: 20 },
]

const UserSearch: React.FC = () => {
  const [ name, setName ] = useState('')
  const [ user, setUser ] = useState<{ name: string, age: number } | undefined>()

  const onClick = () => {
    const foundUser = users.find(user => user.name === name)
    return setUser(foundUser) 
  }

  return (
    <div>
      User Search
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={onClick} >Find</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>

    </div>
  )
}

export default UserSearch