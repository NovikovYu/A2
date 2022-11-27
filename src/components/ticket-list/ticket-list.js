import { useSelector } from 'react-redux'
import uniqid from 'uniqid'

import Ticket from '../ticket/ticket'
import classes from '../../styles/app.module.scss'

const TicketList = () => {
  let tickets = useSelector((state) => state.tickets.tickets)
  let ourTickets = JSON.parse(JSON.stringify(tickets))
  const numOfShowingTickets = useSelector((state) => state.tickets.numOfShowingTickets)
  const sortFilterMode = useSelector((state) => state.sort.sortFilterMode)
  const stopAll = useSelector((state) => state.stop.stopAll)
  const stop0 = useSelector((state) => state.stop.stop0)
  const stop1 = useSelector((state) => state.stop.stop1)
  const stop2 = useSelector((state) => state.stop.stop2)
  const stop3 = useSelector((state) => state.stop.stop3)

  // сортируем билеты в зависимости от количества пересадок
  let sortedTickets = []

  // показываем все билеты
  if (stopAll) {
    sortedTickets = ourTickets
  }
  // к показываем билетам добавляем билеты с 0 пересадок
  if (stop0) {
    sortedTickets = [...ourTickets.filter((ticket) => ticket.segments[0].stops.length === 0), ...sortedTickets]
  }
  // к показываем билетам добавляем билеты с 1 пересадокой
  if (stop1) {
    sortedTickets = [...ourTickets.filter((ticket) => ticket.segments[0].stops.length === 1), ...sortedTickets]
  }
  // к показываем билетам добавляем билеты с 2 пересадками
  if (stop2) {
    sortedTickets = [...ourTickets.filter((ticket) => ticket.segments[0].stops.length === 2), ...sortedTickets]
  }
  // к показываем билетам добавляем билеты с 3 пересадками
  if (stop3) {
    sortedTickets = [...ourTickets.filter((ticket) => ticket.segments[0].stops.length === 3), ...sortedTickets]
  }

  // сортируем билеты в зависимости от верхнего фильтра
  function comparePrice(a, b) {
    if (a.price < b.price) {
      return -1
    }
    if (a.price > b.price) {
      return 1
    }
    return 0
  }
  function compareTime(a, b) {
    if (a.segments[0].duration < b.segments[0].duration) {
      return -1
    }
    if (a.segments[0].duration > b.segments[0].duration) {
      return 1
    }
    return 0
  }
  function compareOurCommission(a, b) {
    if (a.price > b.price) {
      return -1
    }
    if (a.price < b.price) {
      return 1
    }
    return 0
  }
  if (sortFilterMode === 1) {
    sortedTickets = sortedTickets.sort(comparePrice)
  } else if (sortFilterMode === 2) {
    sortedTickets = sortedTickets.sort(compareTime)
  } else if (sortFilterMode === 3) {
    sortedTickets = sortedTickets.sort(compareOurCommission)
  }

  // отрезаем часть билетов, которую покажем
  let shortTickets = sortedTickets.slice(0, numOfShowingTickets)

  const ticketListContent = shortTickets.map((ticketInfo) => {
    return <Ticket ticketInfo={ticketInfo} key={uniqid()} />
  })
  return <ul className={classes.cards}>{ticketListContent}</ul>
}

export default TicketList
