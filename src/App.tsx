import { useCountStore } from './stores/count'

export default function App() {
  const count = useCountStore(state => state.count)
  const double = useCountStore(state => state.double)
  const increase = useCountStore(state => state.increase)
  //const toggleActive = useIsActiveStore(state => state.toggleActive)
  return (
    <>
      <h1>
        {count} / {double}{' '}
      </h1>
      <button onClick={increase}>증가</button>
    </>
  )
}

// 중앙 집중식 데이터 저장소 (Store)
