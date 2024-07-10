function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            attackCount: 0,
            
        }
    },
    computed: {
        monsterBarStyles() {
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyles() {
            return {width: this.playerHealth + '%'}
        },
        isCharged() {
            if (this.attackCount !== 0 && this.attackCount % 3 == 0) {
                return false;
            } else {
                return true;
            }
        }
    },
    methods: {
        attackMonster() {
            this.attackCount++;
            this.monsterHealth -= getRandomValue(5, 12);
            this.attackPlayer();
        },
        attackPlayer() {
            this.playerHealth -= getRandomValue(8, 15);
        },
        specialAttackMonster() {
            this.attackCount++;           
            this.monsterHealth -= getRandomValue(10, 25);
            this.attackPlayer();
           
        }
    },
}) ;

app.mount('#game');