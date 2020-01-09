// TodoInsert: 새 항목을 등록하는 용도
// TodoItem: 할 일 정보을 보여주는 용도
// TodoList: 여러개의 TodoItem 을 렌더링하는 용도

import React, { useState, ChangeEvent, FormEvent } from 'react';

type TodoInsertProps = {
  onInsert: (text: string) => void;
};

function TodoInsert({ onInsert }: TodoInsertProps) {
  const [value, setValue] = useState(''); // redux 를 사용한다고 하여 모든 상태에 redux 를 사용해야 하는 것은 아님
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    // e 타입을 모르겠다면 렌더링시에 커서 올려보면 알 수 있음
    setValue(e.target.value);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onInsert(value);
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default TodoInsert;
