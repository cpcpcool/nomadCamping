import React from 'react';

const MainImage = ({ image }) => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '500px',
      backgroundImage: `url(${image})`, // 이미지 URL을 사용하여 배경 이미지 설정
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    }}>
      <div style={{
        position: 'absolute',
        left: '25px',
        bottom: '25px',
        maxWidth: '500px',
        color: '#fff',
      }}>
        {/* 내용을 추가할 수 있습니다. */}
      </div>
    </div>
  );
}

export default MainImage;