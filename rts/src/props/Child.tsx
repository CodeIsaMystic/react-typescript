interface ChildProps {
  color: string
  onClick: () => void
}

export const Child = ({ color, onClick }: ChildProps ) => {
  return (
    <div>
      { color}
      <button onClick={ onClick } ></button>
    </div>
  )
}

export const ChildAsFC: React.FC<ChildProps> = ({ color , onClick}, children) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Here</button>
      {children}
    </div>
  )
}