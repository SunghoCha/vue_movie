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
            logMessages: [],
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
        },
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
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'attack', attackValue);
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
            this.addLogMessage('monster', 'attack', attackValue);
        },
        specialAttackMonster() {
            this.attackCount++; 
            const attackValue = getRandomValue(10, 25);     
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'special-attack', attackValue);
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
            this.addLogMessage('player', 'heal', healValue);
            this.attackPlayer();
        },
        restart() {
            this.playerHealth = 100,
            this.monsterHealth = 100,
            this.attackCount = 0,
            this.winner = null,
            this.logMessages = [];
        },
        surrender() {
            this.winner = 'monster';
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            }); // push는 배열의 마지막에 데이터를 추가하지만 unshift는 배열의 맨 앞에 데이터 추가
        }
    },
}) ;

app.mount('#game');