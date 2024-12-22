<script setup>
import { onMounted, reactive } from "vue";
import dayjs from "dayjs";
// import services from "@/services";

const Data = [
  { txt: "张", showTime: "1500", bgColor: "yellow" },
  { txt: "李", showTime: "800" },
  { txt: "钱", showTime: "1000", bgColor: "red" },
  { txt: "赵", showTime: "900" },
  { txt: "吴", showTime: "1300", bgColor: "purple" },
  { txt: "刘", showTime: "700" },
  { txt: "周", showTime: "1800", bgColor: "pink" },
  { txt: "冯", showTime: "940" },
  { txt: "王", showTime: "1100", bgColor: "grey" },
  { txt: "邹", showTime: "800" },
  { txt: "孙", showTime: "1200" },
];
const DATA = Data.concat(Data).concat(Data);
const ARR = [
  { text: "", show: false, time: 0 },
  { text: "", show: false, time: 0 },
  { text: "", show: false, time: 0 },
  { text: "", show: false, time: 0 },
  { text: "", show: false, time: 0 },
  { text: "", show: false, time: 0 },
  { text: "", show: false, time: 0 },
  { text: "", show: false, time: 0 },
  { text: "", show: false, time: 0 },
];
const state = reactive({
  wordList: [],

  holes: Array(9).fill(false),
  holes1: ARR,
  score: 0,
  gameInterval: null,
  moleInterval: null,
  //点击的字 记下来
  num: 0,
  showTxt: "",
  showTime: 500,
  total: 0,
  totalStr: [],
  bgColor: "pink",
});

function startGame() {
  state.score = 0;
  state.totalStr = [];
  state.num = 0;
  // state.holes = Array(9).fill(false);
  state.holes1 = ARR;
  clearInterval(state.gameInterval);
  clearInterval(state.moleInterval);
  state.moleInterval = setInterval(showMole, 1000);
  state.gameInterval = setTimeout(endGame, 30000); // 30秒游戏时间
}

function endGame() {
  // requestAnimationFrame 动画
  clearInterval(state.moleInterval);
  state.moleInterval = null;
  clearTimeout(state.gameInterval);
  state.gameInterval = null;
  console.log(`游戏结束！您的得分是 ${state.score}`);
  console.log("展示了", state.num, "次", state.totalStr);
  alert(`游戏结束！您的得分结果是: ${state.totalStr}`);
}

//展示地鼠
function showMole() {
  const randomIndex = Math.floor(Math.random() * 9);
  state.num++;

  if (state.wordList[state.num]?.keyWord) {
    state.holes1[randomIndex] = {
      text: state.wordList[state.num].keyWord,
      show: true,
      // bgColor: state.wordList[state.num].bgColor || '#EE8282FF',
      time: state.wordList[state.num].speed,
    };
    setTimeout(() => {
      state.holes1[randomIndex] = { text: "", show: false, time: 0 };
    }, state.wordList[state.num].speed * 1.3);
  } else {
    state.holes1[randomIndex] = {
      text: "",
      show: true,
      // bgColor: state.wordList[state.num].bgColor || '#EE8282FF',
      time: 1300,
    };
    setTimeout(() => {
      state.holes1[randomIndex] = { text: "", show: false, time: 0 };
    }, 1300);
  }
  console.log("randomIndex: ", randomIndex, "+++", dayjs().second());
}

//打击地鼠
function whackMole(index) {
  console.log(state.holes1[index]);
  if (state.holes1[index]?.show) {
    console.log("打中了");
    //此位置有地鼠
    state.score++; //打到地鼠，记分
    if (state.holes1[index]?.text) {
      state.totalStr.push(state.holes1[index]?.text); //打到字，记字
    }
    state.holes1[index] = { text: "", show: false, time: 0 };
  }
}

function toDeleteRepeatStr(arr) {
  return Array(...new Set(arr));
}

onMounted(async () => {
//   try {
//     const { success, code, message, result } = await services.getWordList();
//     if (success && code === 200 && result) {
//       state.wordList = result || [];
//     } else {
//       state.wordList = [];
//     }
//   } catch (e) {
//     state.wordList = [];
//   }
});
</script>

<template>
  <div id="app">
    <h1 class="titleBg">打地鼠游戏</h1>
    <div class="game-board">
      <!--            <div v-for="(hole, index) in state.holes" :key="index" class="hole" @click="whackMole(index)">-->
      <div
        v-for="(hole, index) in state.holes1"
        :key="index"
        class="hole"
        @click="whackMole(index)"
      >
        <div
          v-if="hole.show"
          class="mole moleAppear layout-row-flex-center"
          :style="{ '--bgColor-': hole.bgColor, '--time': hole.time + 'ms' }"
        >
          <div
            class="nameTxt nameTxtAppear layout-row-flex-center"
            :style="{ '--time1': hole.time + 'ms' }"
          >
            {{ hole.text }}
          </div>
        </div>
      </div>
    </div>
    <div class="score-board">
      <p class="resultBg">得分: {{ state.score }}</p >

      <div class="layout-row-flex-center">
        <p class="resultBg">去重结果: {{ toDeleteRepeatStr(state.totalStr) }}</p >
        <p class="resultBg ml-40" v-show="state.totalStr && state.totalStr.length > 0">
          打中结果: {{ state.totalStr }}
        </p >
      </div>
      <div class="layout-row-flex-center">
        <div class="btnBg layout-row-flex-center" @click="startGame">开始游戏</div>
        <div
          class="btnBg layout-row-flex-center ml-40"
          style="background-color: #ce7676"
          @click="endGame"
        >
          结束游戏
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  text-align: center;
}
.titleBg {
  padding: 20px;
}

.game-board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 10px;
  justify-content: center;
  margin: 10px auto 20px;
  .hole {
    width: 100px;
    height: 100px;
    background-color: #fff;
    border: 1px solid #333;
    position: relative;
  }

  .mole {
    width: 80px;
    height: 80px;
    //background-color: brown;
    background-color: var(--bgColor-);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    //animation: appear_f var(--time) ease-in;
    //animation: appear_f 500ms ease-in;

    .nameTxt {
      color: greenyellow;
      //font-size: 20px;
      font-weight: bolder;
      animation: appear_txt_f var(--time1) ease-in;
    }
  }

  .score-board {
    margin-top: 20px;
  }
}

.resultBg {
  margin-bottom: 10px;
}

.btnBg {
  align-self: center;
  background-color: #70c1f6;
  width: 100px;
  height: 36px;
  border-radius: 4px;

  color: white;
  font-size: 14px;
  font-weight: bold;
}

@keyframes appear_f {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes appear_txt_f {
  0% {
    width: 15px;
    height: 15px;
    font-size: 10px;
    border-radius: 10px;
    background-color: #8499f3;
    transform: scale(0);
  }
  100% {
    width: 70px;
    height: 70px;
    font-size: 30px;
    border-radius: 10px;
    background-color: #0541dc;
    transform: scale(1);
  }
}
</style>