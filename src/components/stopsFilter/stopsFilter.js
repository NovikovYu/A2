import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

import classes from '../../styles/app.module.scss'
import { checkStopAll, checkStop0, checkStop1, checkStop2, checkStop3 } from '../../redux/actions'

const StopsFilter = () => {
  // получаем и рендерим состояние чекбокса
  const [checkboxForAllStop, setCheckboxForAllStop] = useState(false)
  const [checkboxFor0Stop, setCheckboxFor0Stop] = useState(false)
  const [checkboxFor1Stop, setCheckboxFor1Stop] = useState(false)
  const [checkboxFor2Stop, setCheckboxFor2Stop] = useState(false)
  const [checkboxFor3Stop, setCheckboxFor3Stop] = useState(false)

  // синхронизируем глобальный стейт с локальным
  const globalStateOfCheckboxForAllStop = useSelector((state) => state.stop.stopAll)
  const globalStateOfCheckboxFor0Stop = useSelector((state) => state.stop.stop0)
  const globalStateOfCheckboxFor1Stop = useSelector((state) => state.stop.stop1)
  const globalStateOfCheckboxFor2Stop = useSelector((state) => state.stop.stop2)
  const globalStateOfCheckboxFor3Stop = useSelector((state) => state.stop.stop3)
  useEffect(() => {
    setCheckboxForAllStop(globalStateOfCheckboxForAllStop)
    setCheckboxFor0Stop(globalStateOfCheckboxFor0Stop)
    setCheckboxFor1Stop(globalStateOfCheckboxFor1Stop)
    setCheckboxFor2Stop(globalStateOfCheckboxFor2Stop)
    setCheckboxFor3Stop(globalStateOfCheckboxFor3Stop)
  }, [
    globalStateOfCheckboxForAllStop,
    globalStateOfCheckboxFor0Stop,
    globalStateOfCheckboxFor1Stop,
    globalStateOfCheckboxFor2Stop,
    globalStateOfCheckboxFor3Stop,
  ])

  //   отправляем изменение в глобальный стейт при клике
  const dispatch = useDispatch()
  const checkAllStop = () => {
    dispatch(checkStopAll())
  }
  const check0Stop = () => {
    dispatch(checkStop0())
  }
  const check1Stop = () => {
    dispatch(checkStop1())
  }
  const check2Stop = () => {
    dispatch(checkStop2())
  }
  const check3Stop = () => {
    dispatch(checkStop3())
  }

  return (
    <>
      <div className={classes.filter}>
        <span className={classes['filter__title']}> Количество пересадок </span>

        <label className={classes['filter__check-label']}>
          <input type="checkbox" checked={checkboxForAllStop} onChange={checkAllStop}></input>
          Все
        </label>

        <label className={classes['filter__check-label']}>
          <input type="checkbox" checked={checkboxFor0Stop} onChange={check0Stop}></input>Без пересадок
        </label>

        <label className={classes['filter__check-label']}>
          <input type="checkbox" checked={checkboxFor1Stop} onChange={check1Stop}></input>1 пересадка
        </label>

        <label className={classes['filter__check-label']}>
          <input type="checkbox" checked={checkboxFor2Stop} onChange={check2Stop}></input>2 пересадки
        </label>

        <label className={classes['filter__check-label']}>
          <input type="checkbox" checked={checkboxFor3Stop} onChange={check3Stop}></input>3 пересадки
        </label>
      </div>
    </>
  )
}

export default StopsFilter
