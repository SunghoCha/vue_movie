export default {
	async contactCoach(context, payload) {
		const newRequest = {
			userEmail: payload.email,
			message: payload.message
		};
		
		const response = await fetch(`http://locahhost:80/Mentorings/${payload.coachId}`, {
			method: 'POST',
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
	}
};