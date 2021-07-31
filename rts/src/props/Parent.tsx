import { ChildAsFC } from './Child'

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => { console.log("clicked!!") }}>
      Child text, embedded content or Another Component
    </ChildAsFC>
  )
}

export default Parent