

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			// For register and login
			organization_name: null,
			name: null,
			email: null,
			password: null,
			signupData: [],
			allEventsList: [],
			token: null,
			orgEvenList: [],

			// For Add Event
			description: null,
			location: null,
			event_date: null,
			event_time: null,
			event_end_time: null,
			duration: null,
			user_role: null,
			event_start_date_time: null,
			event_end_date_time: null,
			creator_id: null,
			org_name: null,
    		category: null,
    		event_img: null,
			events: [],
			allEvents: [],
			

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
			fetchSignup: async (user) => {
				const store = getStore()

				// Body request format
				// const user = {
				// 	organization_name: store.organization_name,
				// 	name: store.name,
				// 	email: store.email,
				// 	password: store.password,
				// 	user_role: store.user_role
				// }

				await fetch(`${process.env.BACKEND_URL}/register`, {
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

				return fetch(`${process.env.BACKEND_URL}/login`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(user)

				})
					.then(response => {
						if (response.status == 400){
							throw new Error('No Json data provided')
						}
						else if (response.status == 401){
							throw new Error('something went wrong, please try again')
						}
						else {
							return response.json()
						}
					})
					.then(data => {
						localStorage.setItem("token", data.token)
						localStorage.setItem("userRole", data.role)
						return true
					}) // Storage token
					.catch(err => {
						console.log(err)
						return false
					})
			},

			//LOG OUT EN EL NAVBAR
			logout: () => {
				localStorage.removeItem('token');
				localStorage.removeItem('userRole');
				return true
			  },

			// FETCH USER-ORGANIZATION ADD EVENT
			fetchAddEvent: async () => { 

				const store = getStore()
				let token = localStorage.getItem("token")
				console.log(token)

				// Body request format
				const new_event = {
					name: store.name,
					description: store.description,
					location: store.location,
					event_time : store.event_time,
					event_end_time : store.event_end_time,
					event_start_date_time: store.event_start_date_time,
                	event_end_date_time : store.event_end_date_time,
					event_time: store.event_time,
					duration: store.duration,
					creator_id: store.token,
					org_name: store.org_name,
    				category: store.category,
    				event_img: store.event_img
				}


				await fetch(`${process.env.BACKEND_URL}/add-event`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${token}`,
					},
					body: JSON.stringify(new_event)

				})
					.then(response => response.json())
					.then(data => { setStore(data.token) }) // 
					.catch(err => err)

			},

			//FETCH ALL EVENTS AND ATTENDANCE FOR ORGANIZATIONS
			fetchAllEventsByOrg: async () => {

				// Get user token
				const store = getStore()
				let token = localStorage.getItem("token")

				// Body request format
				const response_body = {
					"msg": events_list
				}

				await fetch(`${process.env.BACKEND_URL}/all-events`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${token}`,
					},
					body: JSON.stringify(events_list)
				})
					.then(response => response.json())
					.then(data => { setStore(data.token) }) // 
					.then(data => { setStore({ orgEvenList: data.response })})
					.catch(err => err)


			},

			// FETCH ALL EVENTS FOR VOLUNTEERS

			fetchEventsList: async () => {

				const store = getStore()

				const response_body = {
					"msg": events_list
				}

				await fetch(`${process.env.BACKEND_URL}/events-list`, {
					method: "GET",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(events_list)
				})
					.then(response => response.json())
					.then(data => { setStore({ allEventsList: data.response }) }) // 
					.catch(err => err)
			},


			// FETCH FOR DELETING EVENT
			fetchDeleteEvent: async (event_id) => {

				// Get user token
				const store = getStore()
				let token = localStorage.getItem("token")



				fetch(`${process.env.BACKEND_URL}/delete-event/${id=event_id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${token}`,
					}

				})
					.then(response => response.json())
					.then(data => { setStore({ allEventsList: data.response }) }) // 
					.catch(err => err)
			},

			updatePassword: async (token, data) => {
				const response = fetch(`${process.env.BACKEND_URL}/reset-psw/${token}`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${token}`,
					},
					body: JSON.stringify(data)
				})
				.then(response => response.json())
					.then(data => {alert("Contraseña actualizada")})  
					.catch(err => err)
			},

			requestPassword: async (data) => {
				const response = fetch(`${process.env.BACKEND_URL}/reset-psw-request`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				})
				.then(response => {
					console.log(response.status)
					if (response.status == 404){
						throw new Error('No se encontro el usuario para el correo proporcionado')
					} else if (response.status == 500){
						throw new Error('Ocurrio un problema en el servidor')
					} else {
						return response.json()
					}
				})
					.then(data => {alert("Instrucciones enviadas")})  
					.catch(err => alert(err.message))
			},

			getOrgEvents: async () => {
				const token = localStorage.getItem('token')
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/all-events`, {
						method: 'GET',
						headers : {'Content-Type' : 'application/json', 
									"Authorization": `Bearer ${token}`,
					}})
					const body = await response.json()
					if (response.ok){
						setStore({events: body.result})
					} else if (response.status === 404){
					  console.log(body.message)  
					}
				} catch (error) {
					console.log(error);
				}
			},

			getAllEvents: async () => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/events-list`, {
						method: 'GET',
						headers : {'Content-Type' : 'application/json', 
					}})
					const body = await response.json()
					if (response.ok){
						setStore({allEvents: body.result})
					} else if (response.status === 404){
					  console.log(body.message)  
					}
				} catch (error) {
					console.log(error);
				}
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
