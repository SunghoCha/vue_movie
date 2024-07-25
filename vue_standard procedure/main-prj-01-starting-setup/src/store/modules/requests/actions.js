export default {
	async contactCoach(context, payload) {
		const newRequest = {
			userEmail: payload.email,
			message: payload.message
		};
		
		const response = await fetch(`http://localhost:80/mentorings/${payload.coachId}`, {
			method: 'POST',
			headers: {
        'Content-Type': 'application/json'
      },
			body: JSON.stringify(newRequest)
		});

		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(responseData.message || 'Failed to send request.')
			throw error;
		}

		newRequest.id = responseData.id;
		newRequest.coachId = responseData.coach.id;

		context.commit('addRequest', newRequest);
	},

	// GET
	async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const response = await fetch(`http://localhost:80/mentorings/${coachId}`)
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch requests.')
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: responseData[key].id,
        coachId: responseData[key].coachResponse.id,
        userEmail: responseData[key].userEmail,
				message: responseData[key].message
      }
      requests.push(request);
    }
		context.commit('setRequests', requests);
  }
};