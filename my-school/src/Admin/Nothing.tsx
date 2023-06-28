import { Image } from 'antd';
import React from 'react';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
};

const Nothing = () => (
  <div style={styles.container}>
    <Image
     preview={false}
      src="https://c4.wallpaperflare.com/wallpaper/107/689/166/empty-black-text-wallpaper-preview.jpg"
      alt="Centered Image"
      style={styles.image}
    />
  </div>
);

export default Nothing
