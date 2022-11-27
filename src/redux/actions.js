export const switchCheapestFilter = () => ({ type: 'SWITCH_CHEAPEST_FILTER' })
export const switchFastestFilter = () => ({ type: 'SWITCH_FASTEST_FILTER' })
export const switchOptimalFilter = () => ({ type: 'SWITCH_OPTIMAL_FILTER' })
export const showMoreTickets = () => ({ type: 'ADD_TICKETS' })
export const checkStopAll = () => ({ type: 'CHECK_STOP_ALL' })
export const checkStop0 = () => ({ type: 'CHECK_STOP_0' })
export const checkStop1 = () => ({ type: 'CHECK_STOP_1' })
export const checkStop2 = () => ({ type: 'CHECK_STOP_2' })
export const checkStop3 = () => ({ type: 'CHECK_STOP_3' })
export const loaderOn = () => ({ type: 'LOADING_ON' })
export const loaderOff = () => ({ type: 'LOADING_OFF' })
export const loadMoreTickets = () => {
  return async (dispatch) => {
    try {
      dispatch(loaderOn())

      // получаем ключ
      const responseKey = await fetch('https://aviasales-test-api.kata.academy/search')
      const key = await responseKey.json()

      // запрос
      // загружаем билеты пока не кончатся
      const loadTickets = async () => {
        let request = ''
        let response = ''

        try {
          // отправляем запрос
          request = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${key.searchId}`)

          if (request.ok) {
            // если ответ нормальный, то извлекаем билеты,
            response = await request.json()
          } else {
            // если плохой - запускаем заново функицю
            if (request.stop || request.status !== 404) {
              dispatch(loaderOff())
            }
          }
        } catch (err) {
          if (request.stop) {
            dispatch(loaderOff())
          }
        }

        // если ответ норм, прокидываем его в редьюсер
        if (response) {
          dispatch({
            type: 'LOAD_MORE_TICKETS',
            tickets: response,
          })
        }

        if (request.status !== 404) {
          loadTickets()
        } else {
          dispatch(loaderOff())
        }
      }

      loadTickets()
    } catch (err) {
      console.log('Ошибка при загрузке', err)
    }
  }
}
