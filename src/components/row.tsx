import PropTypes, { number } from 'prop-types'

const Row : React.FC<{value?: React.ReactNode, index?: number}> = ({value}) => {
  return (
    <div className="border-2 w-[150px] h-[150px] shadow-lg translate-x-2 translate-y-2 flex items-center justify-center text-9xl">
      {value}
    </div>
  )
}

Row.propTypes = {
  index : number.isRequired,
  value: PropTypes.oneOf(['O', 'X']).isRequired,  
}

export default Row;