import React from 'react';

function ImageComponent() {

    const imagePath = process.env.PUBLIC_URL + '/assets/img/kedai-banner.png';

  return (
    <div>
      <img src={imagePath} alt="My Image" />
    </div>
  );
}

export default ImageComponent;
