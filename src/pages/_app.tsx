import { useState } from 'react';
import { Header } from '../components/Header';
import { Player } from '../components/Player';

import '../styles/global.scss';
import styles from  '../styles/app.module.scss';
import { PlayerContext } from '../contexts/PlayerContext';

function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPLaying, setIsPlaying] = useState(false);

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(!isPLaying);
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }

  return (
      <PlayerContext.Provider
      value={{
        episodeList,
        currentEpisodeIndex,
        play,
        isPLaying,
        togglePlay,
        setPlayingState,
      }}
    >
      <div className={styles.wrapper}>
        <main>
          <Header/>
          <Component {...pageProps} />
        </main>
        <Player/>
      </div>
    </PlayerContext.Provider>
  );
}

export default MyApp
