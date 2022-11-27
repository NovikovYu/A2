import { useSelector, useDispatch } from 'react-redux'

import { showMoreTickets } from '../../redux/actions'
import classes from '../../styles/app.module.scss'

const MoreTicketsBtn = () => {
  const tickets = useSelector((state) => state.tickets.tickets)
  const dispatch = useDispatch()

  const add5Tickets = () => {
    dispatch(showMoreTickets())
  }

  return (
    <button className={classes['more-tickets-btn']} onClick={add5Tickets} type="button">
      Показать еще 5 билетов из {tickets.length}
    </button>
  )
}

export default MoreTicketsBtn
