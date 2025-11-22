import { PayloadAction } from "@reduxjs/toolkit"

// 1. Импортируем функцию, с помощью которой создаём slice
import { createAppSlice } from "store/createAppSlice"
import { CounterStateSlice } from "./types"

const counterInitialState: CounterStateSlice = {
  count: 0,
}

// 2. Создаём слайс для кайнтера с помощью вызова функции createAppSlice,
// в которую передаём обект настройки

export const counterSlice = createAppSlice({
  // 3. Создаём имя, под которым будет храниться обект со значением каунтера (state)
  // Стейт для отдельных частей данных  всегда представляет собой объект!
  name: "COUNTER",
  // 4. Задаём объект, в котором будет храниться начальное состояние
  initialState: counterInitialState,
  //   5. Создаём объект, внутри которого будут храниться редьюсеры (функции
  // которые отвечают за изменение состояния)
  // reducers: create => ({
  //   plus: create.reducer((state: CounterStateSlice) => {
  //     state.count = state.count + 1
  //   }),
  //   minus: create.reducer((state: CounterStateSlice) => {
  //     state.count = state.count - 1
  //   }),
  // }),
  reducers: create => ({
    plus: create.reducer(
      (state: CounterStateSlice, action: PayloadAction<number>) => {
        state.count = state.count + action.payload
      },
    ),
    minus: create.reducer(
      (state: CounterStateSlice, action: PayloadAction<number>) => {
        state.count = state.count - action.payload
      },
    ),
  }),
  //   6. Создаём селекторы, которые позволяют забрать данные из стейта в компонент
  selectors: {
    counterValue: (state: CounterStateSlice) => state.count,
  },
})

// 7. Экспорт экшенов и селекторов для удобства их использования в компоненте
export const counterActions = counterSlice.actions
export const counterSelectors = counterSlice.selectors
