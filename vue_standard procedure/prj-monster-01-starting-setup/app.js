function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            attackCount: 0,
            winner: null,
        }
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return {width: '0%'}
            }
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return {width: '0%'}
            }
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
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'player'
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
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.attackPlayer();
        },
        restart() {
            this.playerHealth = 100,
            this.monsterHealth = 100,
            this.attackCount = 0,
            this.winner = null;
        },
        surrender() {
            this.winner = 'monster';
        },
    },
}) ;

app.mount('#game');