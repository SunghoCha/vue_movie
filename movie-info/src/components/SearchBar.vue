<template>
    <div class="search-box">
        <input type="search" 
        @change="inputText = $event.target.value"
        placeholder="검색어 입력"
        >
        <button>검색</button>
    </div>
    <p>{{ inputText }}</p>
</template>
<script>
export default {
    name:"SearchBarComponent",
    data() {
        return {
            inputText: '',
        }
    
    },
    props: {
        data:Array,
    },
    watch: { // 검사할 변수명(변경값) {로직}
        inputText(name) {
            // 입력한 영화제목이 데이터에 있는지 확인
            const findName = this.data.filter(item => {
                return item.title.includes(name);
            })
            console.log(findName);
        }
    }
}
</script>
<style>
    
</style>