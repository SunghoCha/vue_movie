<template>
   <section id="about" class="container">
        <h1>About</h1>
        <div class="row gx-5">
            <figure class="col-md-6">
                <img src="../assets/images/profile.jpg" alt="profile">
                <figcaption>About ??? ??</figcaption>
            </figure>
            <p class="col-md-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>
        <article class="row mt-5">
            <h2>Skills</h2>
            <dl v-for="(skill, i) in skills" :key="i">
                <dt class="">{{ skill.name }}</dt>
                <dd>
                    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" :style="{width: skill.point}">{{ skill.point }}</div>
                    </div>
                </dd>
            </dl>
        </article>
   </section>
</template>
<script setup>
    const skills = [
        { name: 'HTML', point: '25%' },
        { name: 'CSS', point: '15%' },
        { name : 'JAVASCRIPT', point: '8%'},
        { name: 'VUE', point: '3%'},
    ]
</script>
<style lang="scss">
    figure img {
        width: 50%;
    }
</style>