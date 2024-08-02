import { useState } from 'react';
import './App.css';

function App() {
  // 자료 잠깐 저장할 땐 변수 또는 state
  // const [title, setTitle] = useState(['파이썬 독학','남자 코트 추천','강남 맛집 추천']);
  // const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);
  const [posts, setPosts] = useState([
    { title: '파이썬 독학', count: 0 },
    { title: '남자 코트 추천', count: 0 },
    { title: '강남 맛집 추천', count: 0 }
  ]);
  const [number] = useState(0);

  const handleCount = (i) => {
     let copy = [...posts];
    copy[i].count = copy[i].count + 1;
    setPosts(copy);
  };
  const handleChange = () => {
    let copy = [...posts];
    copy[0].title = '여자 코트 추천';
    setPosts(copy);
  }
  const handleSort = () => {
    let copy = [...posts];
    copy.sort();
    setPosts(copy);
  }

  const handleModal = () => {
    setModal(!modal);
  }

 
  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{ color: 'aqua', fontSize: '20px'}}>MY BLOG</h4>
      </div>
      <button onClick={handleChange}>change</button>
      <button onClick={handleSort}>ㄱㄴㄷ</button>
      {/* <div className='list'>
        <h4>{title[0]} <span onClick={ handleCount}>👍</span> {count}</h4>
        <p>2월 17일 발행</p>
      </div>
        <div className='list'>
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
        <div className='list'>
        <h4 onClick={handleModal}>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
      {posts.map((a , i) => {
        return (
        <div className='list' key={i}>
          <h4 onClick={handleModal}>{a.title}<span onClick={() => handleCount(i)}>👍</span> {a.count}</h4>
          <p>2월 17일 발행</p>
        </div>
      )})}
      {modal === true ? <Modal color={'#fafafa'} number={number} title={posts.title} onChange={handleChange} /> : null }
      
    </div>
  );
}

function Modal(props) {
  return (
      <div className='modal' style={{background: props.color}}>
      <h4>{props.title[props.number]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => props.onChange()}>글 수정</button>
      </div>
  )
}
export default App;

