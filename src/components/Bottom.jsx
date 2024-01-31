import './Bottom.scss'
import BottomLeft from './BottomLeft'
import BottomRight from './BottomRight'

const Bottom = () => {
  return (
    <div className='bottom'>
      <div className='left'>
        <BottomLeft/>
      </div>
      <div>
        <BottomRight/>
      </div>
    </div>
  )
}

export default Bottom