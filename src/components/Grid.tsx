import PropTypes from 'prop-types'
import Row from './row';


const Grid : React.FC<{children?: React.ReactNode}> = () => {
    const rows = Array.from({length: 9}, (_, i) => i)

    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100" >
        <div className='grid grid-cols-3 gap-4 w-120'>

            
            <Row value={""}></Row>
            <Row value={""}></Row>
            <Row value={""}></Row>
            <Row value={""}></Row>
            <Row value={""}></Row>
            <Row value={""}></Row>
            <Row value={""}></Row>
            <Row value={""}></Row>
            <Row value={""}></Row>
        </div>
    </div>)
}

Grid.propTypes = {
    children: PropTypes.node.isRequired,
}


export default Grid;