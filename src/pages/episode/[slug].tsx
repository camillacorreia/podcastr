import { useRouter }  from 'next/router';

export default function Episode() {
  const router = useRouter();

  return (
    <p>{router.query.slug}</p>
  )
}
