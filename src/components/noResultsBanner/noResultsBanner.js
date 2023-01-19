import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import classes from '../../styles/app.module.scss'

const NoResultsBanner = () => {
  const tickets = useSelector((state) => state.tickets.tickets)

  const [isVisible, setIsVisible] = useState(true)
  const isCheckedFilterAll = useSelector((state) => state.stop.stopAll)
  const isCheckedFilter0 = useSelector((state) => state.stop.stop0)
  const isCheckedFilter1 = useSelector((state) => state.stop.stop1)
  const isCheckedFilter2 = useSelector((state) => state.stop.stop2)
  const isCheckedFilter3 = useSelector((state) => state.stop.stop3)

  useEffect(() => {
    if (isCheckedFilterAll || isCheckedFilter0 || isCheckedFilter1 || isCheckedFilter2 || isCheckedFilter3) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
  }, [isCheckedFilterAll, isCheckedFilter0, isCheckedFilter1, isCheckedFilter2, isCheckedFilter3])

  //   показываем если ни один фильтр не выбран
  if (isVisible) {
    return (
      <p className={classes['no-results-bunner']}>
        Мы нашли {tickets.length} билетов.
        <br /> Пожалуйста, выберите количество пересадок.
      </p>
    )
  } else {
    return null
  }
}

export default NoResultsBanner
