import React, { useEffect } from 'react';

function PainterPickPage() {
  useEffect(() => {
    const answerData = sessionStorage.getItem('answerData');
    // const answerData2 = JSON.parse(answerData);
    // 객체 수정할 때 JSON.parse로 객체로 변경해서 수정한 후에 JSON.stringigy로 session에 저장해야함
    const answerData2 = answerData || '';
    console.log(answerData2);
  }, []);

  return (
    <>
      <div>좋아하는 화가를 선택하든가?</div>
    </>
  );
}

export default PainterPickPage;
