<template>
  <div class="modal" v-if="isModal">
    <div class="inner">
      <h3>{{ data.find(item => item.id == selectedMovie)?.title }}</h3>
      <p>영화 상세정보</p>
      <div></div>
      <button @click="$emit('closeModal')">닫기</button>  <!-- 부모에게 $emit('이벤트명')으로 변경요청-->
    </div>
  </div>
</template>
<script>
export default {
    name: "ModalComponent",
    props: {
        data: Array,
        isModal: Boolean, // props로 전달받은 데이터는 부모만 변경 가능(닫기 버튼 클릭시 부모의 isModal 데이터 직접 변경 불가) 자식이 부모에게 데이터변경 요청가능
        selectedMovie: Number, 
    }
}
</script>
<style>
    
</style>