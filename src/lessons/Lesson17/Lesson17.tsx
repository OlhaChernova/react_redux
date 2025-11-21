import Counter from "components/Counter/Counter"
import { Lesson17Wrapper } from "./styles"
// 9. Импортируем хуки для диспатча(useAppDispatch) и получения данных(useAppSelector)
import { useAppDispatch, useAppSelector } from "store/hooks"
// 10. Импортируем экшены и селекторы из файла со слайсом
import { counterActions, counterSelectors } from "store/redux/counter/counterSlice"

function Lesson17() {
// 11. Получанием функцию dispatch, которую возвращает хук useAppDispatch
const dispatch = useAppDispatch();

// 12. Забираем значение каунтера из store
const counter = useAppSelector(counterSelectors.counterValue)


  // 13. Вызываем dispatch и передаём в него вызов необходимых экшенов.
  // Вызов диспатча нужно делать внутри функции, которая срабатывает при клике кнопку
  const onPlus = () => {
    dispatch(counterActions.plus())
  }
  const onMinus = () => {
    dispatch(counterActions.minus())
  }
  return (
    <Lesson17Wrapper>
      <Counter
        counter={counter}
        onPlusClick={onPlus}
        onMinusClick={onMinus}
      />
    </Lesson17Wrapper>
  )
}
export default Lesson17
