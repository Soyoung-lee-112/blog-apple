import { useState } from 'react';
import { RiDeleteBin6Line, RiSortAlphabetAsc } from "react-icons/ri";
import './App.css';

function App() {
  // 자료 잠깐 저장할 땐 변수 또는 state
  const [title, setTitle] = useState(['파이썬 독학','남자 코트 추천','강남 맛집 추천']);
  const [count, setCount] = useState([0,0,0]);
  const [modal, setModal] = useState(false);
  const [number, setNumber] = useState(0);
  const [input, setInput] = useState('');

  const handleCount = (e, i) => {
    e.stopPropagation();
    let newCount = [...count];
    newCount[i] += 1;
    setCount(newCount);
  };
  const handleChange = () => {
    let copy = [...title];
    copy[0] = '여자 코트 추천';
    setTitle(copy);
  }
  const handleSort = () => {
    let copy = [...title];
    copy.sort();
    setTitle(copy);
  }

  const handleModal = (i) => {
    setModal(!modal);
    setNumber(i);
  }

  const handleInputChange = (e) => {
    setInput(e.target.value); //state 변경함수는 늦게처리됨(비동기처리)
  }
  const handleAdd = () => {
    if (input.trim().length === 0) {
      alert('제목을 입력해 주세요.');
      return;
    }

      setTitle([input, ...title]); // title 배열에 input 값 추가
      setCount([0, ...count]); // 새로운 항목에 대한 카운트를 추가
    };

  const handleDelete = (index) => {
    let newTitle = [...title];
    newTitle.splice(index, 1)
    setTitle(newTitle);

    let newCount = [...count];
    newCount.splice(index, 1);
    setCount(newCount);
}
 
  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{ color: 'aqua', fontSize: '20px'}}>MY BLOG</h4>
      </div>
      <div className="content">
        <div className="wrap_control">
          <div className="contol_left">
            <input type="text" onChange={(e) => handleInputChange(e)} placeholder='제목을 입력해 주세요.'/>
            <button onClick={handleAdd}>발행</button>
          </div>
          <div className="contol_right">
            <button onClick={handleChange}>제목 변경</button>
            <button onClick={handleSort}><RiSortAlphabetAsc /></button>
          </div>
        </div>
        {title.map((a , i) => {
          return (
            <div className='list' key={i}>
              <div>
                <h4 onClick={() => handleModal(i) }><span className="title">{title[i]}</span>
                  <span className="btn-count" onClick={(e) => handleCount(e, i)}> 👍 </span>
                  {count[i]}</h4>
                  <p>발행일 : 2월 17일</p>
                </div>
              <button onClick={() => handleDelete(i)} className="btn-delete"><RiDeleteBin6Line /></button>
          </div>
        )})}
        {modal === true ? <Modal color={'#fafafa'} number={number} title={title} onChange={handleChange} /> : null }
    </div>
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal' style={{ background: props.color }}>
      <div>
        <h4>{props.title[props.number]}</h4>
        {/* <p>날짜</p> */}
        <p>{props.title[props.number]}에 대해 알려드릴게요!</p>
      </div>
        <button onClick={() => props.onChange()} className="btn-modify">수정하기</button>
      </div>
  )
}
export default App;

