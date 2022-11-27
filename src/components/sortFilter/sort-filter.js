import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'

import classes from '../../styles/app.module.scss'
import * as actions from '../../redux/actions'

let cx = classNames.bind(classes)

const SortFilter = ({ counter, switchCheapestFilter, switchFastestFilter, switchOptimalFilter }) => {
  let classesForCheapestFilter = cx({
    'price-filter__btn': true,
    active: counter.sort.sortFilterMode === 1,
  })
  let classesForFastestFilter = cx({
    'price-filter__btn': true,
    active: counter.sort.sortFilterMode === 2,
  })
  let classesForOptimalFilter = cx({
    'price-filter__btn': true,
    active: counter.sort.sortFilterMode === 3,
  })

  return (
    <ul className={classes['price-filter']}>
      <li className={classes['price-filter__item']}>
        <button className={classesForCheapestFilter} type="button" onClick={switchCheapestFilter}>
          {counter.a} Самый дешевый
        </button>
      </li>

      <li className={classes['price-filter__item']}>
        <button className={classesForFastestFilter} type="button" onClick={switchFastestFilter}>
          Самый быстрый
        </button>
      </li>

      <li className={classes['price-filter__item']}>
        <button className={classesForOptimalFilter} type="button" onClick={switchOptimalFilter}>
          Оптимальный
        </button>
      </li>
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state,
  }
}

export default connect(mapStateToProps, actions)(SortFilter)
