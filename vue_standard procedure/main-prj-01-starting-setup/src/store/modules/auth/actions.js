export default {
	login() {},
	async signup(context, payload) {
		const response = await fetch('임시경로 추가 수정', {
			method: 'POST',
			headers: {
        'Content-Type': 'application/json'
      },
			body: JSON.stringify({
				email: payload.email.val,
				password: payload.password.val,
				returnSecureToken: true
			})
		});

		const responseData = await response.json();

		if (!response.ok) {
			console.log(responseData);
			const error = new Error(responseData.message || 'Failed to authenticate.');
			throw error;
		}

		console.log(responseData);
		context.commit('setUser', {
			token: responseData.idToken,
			userId: responseData.localId,
			tokenExpiration: responseData.exiresIn
		});
	},
};