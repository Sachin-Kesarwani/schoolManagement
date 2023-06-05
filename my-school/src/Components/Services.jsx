import React from 'react';
import TextTransition, { presets } from 'react-text-transition';
import '../Styles/services.css'
const TEXTS = ['simplifying fee management', 'transparent parent communications', 'efficient lesson planning', 'automating attendance'];

export const Services = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1 style={{textAlign:"center"}}>
      <TextTransition springConfig={presets.wobbly} >{TEXTS[index % TEXTS.length]}</TextTransition>
    </h1>
  );
};