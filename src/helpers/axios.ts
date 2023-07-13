import axios from 'axios'

const api = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL
})

api.interceptors.request.use(
	function (config) {
		config.params = {
			...config.params,
			from: '2023-07-11',
			to: '2023-07-11',
			sortBy: 'popularity',
			language: 'pt',
			apiKey: import.meta.env.VITE_API_KEY
		}
		return config
	},
	function (err) {
		return Promise.reject(err)
	}
)

export default api
