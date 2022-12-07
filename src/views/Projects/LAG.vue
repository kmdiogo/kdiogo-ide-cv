<script lang="ts" setup>
import LAG_WASM from "../../../lag_wasm/lag.mjs";

async function handleClick() {
  const module = await LAG_WASM();
  module.ccall("generateFiles", null);
  console.log("done");
}
// onMounted(async () => {
//
// })
</script>
<template>
  <div><button @click="handleClick">Click Me</button></div>
</template>

<!--<script lang="ts">-->
<!--import { stringToBytes } from "@/utils";-->
<!--import init from "../../assets/wasm/LAG/LAG.wasm?init"-->

<!--export default {-->
<!--  name: "LAG",-->
<!--  data() {-->
<!--    return {-->
<!--      inputText:-->
<!--          "class alpha [a-zA-Z_]\n" +-->
<!--          "class digit [0-9]\n" +-->
<!--          "class whitespace [\\n\\t\\f\\v\\r\\ ]\n" +-->
<!--          "\n" +-->
<!--          "token Ident /[alpha]([alpha]|[digit])* /\n" +-->
<!--          "\n" +-->
<!--          "ignore /[whitespace]+/\n",-->
<!--      headerFile: null,-->
<!--      bodyFile: null,-->
<!--      lagScriptName: "LAG.js",-->
<!--      outputScriptName: "wasm_output.js",-->
<!--      isInstructionOpen: false,-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    runLAG() {-->
<!--      // Write user input to input.txt virtual file-->
<!--      let outputText = document.getElementById("output");-->
<!--      outputText.innerHTML = "";-->
<!--      let data = stringToBytes(this.inputText);-->
<!--      //Module['FS_createDataFile']('/', 'input.txt', data, true, true, true);-->
<!--      let stream = FS.open("input.txt", "w");-->
<!--      FS.write(stream, data, 0, data.length, 0);-->
<!--      FS.close(stream);-->

<!--      // Call C++ function-->
<!--      Module.ccall("generateFiles", null);-->

<!--      // Read in generated virtual files-->
<!--      let headerFileText = FS.readFile("LexicalAnalyzer.h", {-->
<!--        encoding: "utf8",-->
<!--        flags: "r",-->
<!--      });-->
<!--      let bodyFileText = FS.readFile("LexicalAnalyzer.cpp", {-->
<!--        encoding: "utf8",-->
<!--        flags: "r",-->
<!--      });-->

<!--      // Write text to a blob for file download-->
<!--      let headerFileBlobData = new Blob([headerFileText], {-->
<!--        type: "text/plain",-->
<!--      });-->
<!--      let bodyFileBlobData = new Blob([bodyFileText], { type: "text/plain" });-->

<!--      // If replacing a previously generated file,-->
<!--      // manually revoke the object URL to avoid memory leaks.-->
<!--      if (this.headerFile !== null) {-->
<!--        window.URL.revokeObjectURL(this.headerFile);-->
<!--      }-->
<!--      if (this.bodyFile !== null) {-->
<!--        window.URL.revokeObjectURL(this.bodyFile);-->
<!--      }-->

<!--      this.headerFile = window.URL.createObjectURL(headerFileBlobData);-->
<!--      this.bodyFile = window.URL.createObjectURL(bodyFileBlobData);-->
<!--    },-->
<!--  },-->
<!--  mounted() {-->
<!--    // Load LAG WASM Script-->
<!--    let lagScript = document.createElement("script");-->
<!--    lagScript.setAttribute("src", this.lagScriptName);-->
<!--    lagScript.id = "lag-script";-->
<!--    document.head.appendChild(lagScript);-->
<!--    console.log("LAG Script Loaded.");-->

<!--    // Load script that hooks WASM program output to HTML-->
<!--    let wasmOutputScript = document.createElement("script");-->
<!--    wasmOutputScript.setAttribute("src", this.outputScriptName);-->
<!--    wasmOutputScript.id = "wasm-output-script";-->
<!--    document.head.appendChild(wasmOutputScript);-->
<!--    console.log("Emscripten Output Script Loaded.");-->
<!--  },-->
<!--  beforeRouteLeave(to, from, next) {-->
<!--    // Remove loaded scripts-->
<!--    let elem = document.getElementById("lag-script");-->
<!--    elem.parentNode.removeChild(elem);-->

<!--    elem = document.getElementById("wasm-output-script");-->
<!--    elem.parentNode.removeChild(elem);-->
<!--    next();-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<template>-->
<!--  <div class="text-page d-flex flex-column">-->
<!--    <div class="d-flex">-->
<!--      <h1 style="color: forestgreen; margin: 0">Lexical Analyzer Generator</h1>-->
<!--      <a-->
<!--        class="hover-jump"-->
<!--        href="https://github.com/kmdiogo/LAG"-->
<!--        style="margin-left: auto"-->
<!--      >-->
<!--        <i class="fab fa-github fa-2x"></i>-->
<!--      </a>-->
<!--    </div>-->

<!--    <div class="d-flex align-items-center">-->
<!--      <h2>Powered by:</h2>-->
<!--      <img src="../../assets/media/emscripten_logo.png" id="emscripten-logo" />-->
<!--    </div>-->

<!--    <h3 class="m-0">Technologies: C++</h3>-->

<!--    <hr style="width: 100%" />-->

<!--    <h4>-->
<!--      Welcome to my Lexical Analyzer Generator! The original program is written-->
<!--      in C++. This is a slightly modified version that is compiled using-->
<!--      <a href="https://emscripten.org/index.html">Emscripten</a> and is ran in-->
<!--      your browser with <a href="https://webassembly.org/">WebAssembly!</a>-->
<!--    </h4>-->

<!--    <h3 class="m-0">What it does:</h3>-->
<!--    <p class="m-0">-->
<!--      Given a list of tokens, this program will generate a C++ Lexical Analyzer-->
<!--      class. The DFA that drives the Lexical Analyzer is generated by first-->
<!--      creating an NFA using-->
<!--      <a href="https://en.wikipedia.org/wiki/Thompson%27s_construction"-->
<!--        >Thompson's Construction Algorithm</a-->
<!--      >-->
<!--      then converting that NFA to a DFA using-->
<!--      <a href="https://en.wikipedia.org/wiki/Powerset_construction"-->
<!--        >Powerset Construction</a-->
<!--      >-->
<!--    </p>-->

<!--    <br />-->

<!--    <div-->
<!--      class="d-flex align-items-center dropdown-header"-->
<!--      @click="isInstructionOpen = !isInstructionOpen"-->
<!--    >-->
<!--      <h3 class="m-0">Instructions:&nbsp;</h3>-->
<!--      <div class="chevrons">-->
<!--        <i-->
<!--          class="fas fa-chevron-down"-->
<!--          style="width: 1rem"-->
<!--          v-if="isInstructionOpen"-->
<!--        ></i>-->
<!--        <i class="fas fa-chevron-right" style="width: 1rem" v-else></i>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="instructions" v-if="isInstructionOpen">-->
<!--      <p class="m-0">-->
<!--        Use the input box below to define the tokens you want the Analyzer to-->
<!--        recognize. The tokens are defined using regular expressions. Character-->
<!--        sets are supported. You can also define ignore sequences which the-->
<!--        Analyzer will recognize but not return anything. A template is already-->
<!--        provided to show how to define standard C++ identifier tokens.-->
<!--      </p>-->

<!--      <p>-->
<!--        Once your tokens are defined, click the run button. Two download links-->
<!--        will appear below the input box. One is a header file and the other is a-->
<!--        cpp file for the Lexical Analyzer class.-->
<!--      </p>-->
<!--    </div>-->

<!--    <h3>Input:</h3>-->
<!--    <div>-->
<!--      <textarea id="input" v-model="inputText" rows="12"></textarea>-->
<!--    </div>-->
<!--    <button @click="runLAG">Run</button>-->

<!--    <h3>Output:</h3>-->
<!--    <div>-->
<!--      <textarea id="output" disabled rows="12"></textarea>-->
<!--    </div>-->

<!--    <a :href="headerFile" download="LexicalAnalyzer.h" v-if="headerFile"-->
<!--      >Download Header File</a-->
<!--    >-->
<!--    <a :href="bodyFile" download="LexicalAnalyzer.cpp" v-if="headerFile"-->
<!--      >Download Body File</a-->
<!--    >-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped lang="scss">-->
<!--#output {-->
<!--  width: 100%;-->
<!--  background-color: black;-->
<!--  color: white;-->
<!--  font-family: "Lucida Console", Monaco, monospace;-->
<!--  outline: none;-->
<!--  border: 1px solid gray;-->
<!--}-->

<!--#input {-->
<!--  width: 100%;-->
<!--  //height: auto;-->
<!--}-->

<!--#emscripten-logo {-->
<!--  width: 200px;-->
<!--  height: 50px;-->
<!--}-->

<!--.chevrons {-->
<!--  color: gray;-->
<!--}-->
<!--.dropdown-header:hover > .chevrons {-->
<!--  color: white;-->
<!--}-->
<!--.dropdown-header:hover {-->
<!--  cursor: pointer;-->
<!--}-->
<!--</style>-->
