export default function newsletterHandler(req, res) {
	const {
		query: {name},
		method
	} = req

	switch(method){
		case 'GET':
			res.status(200).json({name: name})
			break
		default:
			res.status(200).json({error: "Somente requests do tipo GET."})
	}
}