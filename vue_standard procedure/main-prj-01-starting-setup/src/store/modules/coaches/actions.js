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
    console.log("post 요청");
    //const responseData = await response.json();

    if (!response.ok) {
      // 에러 핸들링...
      console.log("post 요청 에러");
    }
    console.log("post 요청 도착");
    context.commit('registerCoach', {
      ...coachData,
      id: userId
    });
    console.log("post 요청 커밋");
  },
  // 기본 GET 방식
  async loadCoaches(context) {
    const response = await fetch(
      `http://localhost:80/coaches`
    );
    const responseData = await response.json();

    if (!response.ok) {
      console.log("Get 요청 실패");
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const coaches = [];

    for (const key in responseData) {
      const coach = {
        id : key,
        firstName : responseData[key].firstName,
        lastName : responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas
      }
      coaches.push(coach);
    }
    context.commit('setCoaches', coaches);
  }
};