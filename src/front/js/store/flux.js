const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			// For register and login
			organization_name: null,
			name: null,
			email: null,
			password: null,
			signupData: [],
			token: null,

			// For Add Event
			description: null,
			location: null,
			event_date: null,
			event_time: null,
			duration: null,
			user_role : null,

			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {

			// HANDLE DATA CHANGE IN USER INFO
			handleChange: e => {
				setStore({ [e.target.name]: e.target.value })
			},

			// FETCH USER SIGNUP DATA FROM ENDPOINT
			fetchSignup: async () => {
				const store = getStore()

				// Body request format
				const user = {
					organization_name: store.organization_name,
					name: store.name,
					email: store.email,
					password: store.password,
					user_role : store.user_role
				}

				await fetch("process.env.BACKEND_URL + api/register ", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(user)

				})
					.then(response => response.json())
					.then(data => { setStore({ signupData: data.response }) })
					.catch(err => err)
			},

			// FETCH USER LOGIN DATA FROM ENDPOINT
			fetchLogin: async () => {
				const store = getStore()

				// Body request format
				const user = {
					email: store.email,
					password: store.password
				}

				await fetch("process.env.BACKEND_URL + api/login ", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(user)

				})
					.then(response => response.json())
					.then(data => { localStorage.setItem("jwt-token", data.token) }) // Storage token
					.catch(err => err)
			},

			// FETCH USER-ORGANIZATION ADD EVENT
			fetchAddEvent: async () => { // MISSING AUTHORIZATION HEADER

				const store = getStore()
				let token = localStorage.getItem("token")
				console.log(token)

				// Body request format
				const new_event = {
					name: store.name,
					description: store.description,
					location: store.location,
					event_date: store.event_date,
					event_time: store.event_time,
					duration: store.duration,
				}

				await fetch("process.env.BACKEND_URL=https://crispy-enigma-v9965q55wqgh5j-3001.app.github.dev + api/add-event", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer" + token,
					},
					body: JSON.stringify(new_event)

				})
					.then(response => response.json())
					.then(data => {setStore(data.token)}) // 
					.catch(err => err)

			},


			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
