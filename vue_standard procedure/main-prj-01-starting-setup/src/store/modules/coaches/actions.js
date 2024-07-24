export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate : data.rate,
      areas: data.areas
    };
  
    const response = await fetch(`http://localhost:80/coaches/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(coachData)
    })

    //const responseData = await response.json();

    if (!response.ok) {
      // 에러 핸들링...
    }
    context.commit('registerCoach', {
      ...coachData,
      id: userId
    });
  }
};