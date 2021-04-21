//import de API
//SPA - useEffect (nao indexa no google)
{/*
useEffect(()=>{
    fetch('http://localhost:3333/episodes')
      .then(response => response.json())
      .then(data => console.log(data))
  },[]);
*/}
//SSR - getServerSideProps - faz a chamada sempre que entrar na página, mas só renderiza depois que tiver os dados e indexa ao google
//SSG - getStaticProps - só funciona em produção, consegue setar intervalos de chamadas ao back

import { GetStaticProps } from "next"

type Episode = {
  id: string;
  title: string;
  members: string;
};

type HomeProps = {
  episodes: Episode[];
};

export default function Home(props: HomeProps) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()
  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 *8,
  } 
}