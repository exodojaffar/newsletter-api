import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Teste(req, res) {
	const router = useRouter()

	const { data, error } = useSwr(`/api/newsletter/${router.query.name}`, fetcher)

	if (error) return <div>Erro</div>
	if (!data) return <div>Loading...</div>

	return <div>{data.name}</div>
}
