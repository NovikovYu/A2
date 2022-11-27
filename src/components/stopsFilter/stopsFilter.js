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
  const checkStopOn = (e) => {
    switch (e.target.id) {
      case 'stopNumberAll':
        dispatch(checkStopAll())
        break
      case 'stopNumber0':
        dispatch(checkStop0())
        break
      case 'stopNumber1':
        dispatch(checkStop1())
        break
      case 'stopNumber2':
        dispatch(checkStop2())
        break
      case 'stopNumber3':
        dispatch(checkStop3())
        break
    }
    dispatch(checkStop1())
  }
  const l = () => {
    console.log('')
  }

  return (
    <>
      <div className={classes.filter}>
        <span className={classes['filter__title']}> Количество пересадок </span>

        <label className={`${classes['check']} ${classes['filter__check']}`} id="stopNumberAll" onClick={checkStopOn}>
          <input checked={checkboxForAllStop} className={classes['check__input']} type="checkbox" onChange={l}></input>
          <span className={classes['check__box']}></span>
          Все
        </label>
        <label className={`${classes['check']} ${classes['filter__check']}`} id="stopNumber0" onClick={checkStopOn}>
          <input checked={checkboxFor0Stop} className={classes['check__input']} type="checkbox" onChange={l}></input>
          <span className={classes['check__box']}></span>
          Без пересадок
        </label>

        <label className={`${classes['check']} ${classes['filter__check']}`} id="stopNumber1" onClick={checkStopOn}>
          <input checked={checkboxFor1Stop} className={classes['check__input']} type="checkbox" onChange={l}></input>
          <span className={classes['check__box']}></span> 1 пересадка
        </label>

        <label className={`${classes['check']} ${classes['filter__check']}`} id="stopNumber2" onClick={checkStopOn}>
          <input checked={checkboxFor2Stop} className={classes['check__input']} type="checkbox" onChange={l}></input>
          <span className={classes['check__box']}></span>2 пересадки
        </label>

        <label className={`${classes['check']} ${classes['filter__check']}`} id="stopNumber3" onClick={checkStopOn}>
          <input checked={checkboxFor3Stop} className={classes['check__input']} type="checkbox" onChange={l}></input>
          <span className={classes['check__box']}></span>3 пересадки
        </label>
      </div>
    </>
  )
}

export default StopsFilter
