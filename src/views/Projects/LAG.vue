<script lang="ts" setup>
import initLAGRust, {
  DriverLanguage,
  generate_lexer_program,
  LexerProgram,
} from "lag_rust";
import wasmURL from "lag_rust/lag_rust_lib_bg.wasm?url";
import ProjectPageLayout from "@/components/layout/ProjectPageLayout.vue";
import { computed, nextTick, ref, watch } from "vue";
import WASMFerris from "@/assets/ext-logos/wasm-ferris.png";
import WASMLogo from "@/assets/ext-logos/wasm-logo.png";
import RustLogo from "@/assets/ext-logos/rust-logo.png";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFileArrowDown,
  faPlay,
  faVialCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faGitAlt, faNpm } from "@fortawesome/free-brands-svg-icons";

const inputText = ref(
  `
class alpha [a-zA-Z_]
class digit [0-9]
class whitespace [\\n\\t\\f\\v\\r\\ ]

token Ident /[alpha]([alpha]|[digit])* /

ignore /[whitespace]+/
`.trim(),
);
const testInputText = ref("var1 var2 ");
const driverLanguage = ref(DriverLanguage.Javascript);

type GeneratedLexerOutput = {
  dfaFileUrl: string;
  driverFileUrl: string;
  driverFilename: string;
  generatedProgram: LexerProgram;
  language: DriverLanguage;
};

const generatedLexerOutput = ref<GeneratedLexerOutput | null>(null);
watch(generatedLexerOutput, (_, oldLexerOutput) => {
  if (!oldLexerOutput) {
    return;
  }
  // If replacing a previously generated file,
  // manually revoke the object URL to avoid memory leaks.
  for (const oldFileUrl of [
    oldLexerOutput.dfaFileUrl,
    oldLexerOutput.driverFileUrl,
  ]) {
    window.URL.revokeObjectURL(oldFileUrl);
  }
});
const outputText = ref("");
const outputElement = ref<HTMLTextAreaElement | null>(null);

const terminalFont = '"Lucida Console", Monaco, monospace';
const languageMIMEMapping = new Map([
  [DriverLanguage.Python, "text/python"],
  [DriverLanguage.Javascript, "text/javascript"],
]);
const testingFeatureEnabled = computed(() => {
  if (!generatedLexerOutput.value) return false;
  return generatedLexerOutput.value.language === DriverLanguage.Javascript;
});

function writeToTerminal(text: string) {
  if (!outputElement.value) {
    return;
  }
  outputText.value += text + "\n";
  nextTick(() => {
    if (outputElement.value !== null) {
      outputElement.value.scrollTop = outputElement.value.scrollHeight;
    }
  });
}

async function runLAG() {
  writeToTerminal("Loading WASM module...");
  await initLAGRust({ module_or_path: wasmURL });
  // Write user input to input.txt virtual file
  writeToTerminal(
    `Generating lexer program in ${DriverLanguage[driverLanguage.value]}...`,
  );
  const generatedProgram = generate_lexer_program(
    inputText.value,
    "UserInput",
    driverLanguage.value,
  );
  writeToTerminal("...Success!");

  // Write text to a blob for file download
  let dfaFileBlob = new Blob([generatedProgram.serialized_dfa_jsonstr], {
    type: "application/json",
  });
  let driverFileBlob = new Blob([generatedProgram.driver_file_contents], {
    type: languageMIMEMapping.get(driverLanguage.value),
  });

  // Expose the generated files as a downloadable link
  generatedLexerOutput.value = {
    dfaFileUrl: window.URL.createObjectURL(dfaFileBlob),
    driverFileUrl: window.URL.createObjectURL(driverFileBlob),
    driverFilename: generatedProgram.driver_filename,
    language: driverLanguage.value,
    generatedProgram,
  };
  writeToTerminal("Your files are available for download below!😏\n");
}

// Dynamically import the generated javascript module and run the lexer through user input
async function executeGeneratedLexer() {
  if (!generatedLexerOutput.value) {
    return;
  }
  function* inputGenerator() {
    for (const c of testInputText.value) {
      yield c;
    }
  }

  // Ignore vite analyzer here since the module is inherently dynamically generated from user input and impossible
  // to know ahead of time
  const { Lexer } = await import(
    /* @vite-ignore */ generatedLexerOutput.value.driverFileUrl
  );
  const dfaJson = JSON.parse(
    generatedLexerOutput.value.generatedProgram.serialized_dfa_jsonstr,
  );
  const lexer = new Lexer(dfaJson);
  const gen = inputGenerator();
  // Run lexer on input
  // Capping at 1000 just in case the generated Lexer has an infinite loop
  writeToTerminal(`--- Starting test run at ${new Date().toTimeString()} ---`);
  for (let i = 0; i < 1000; i++) {
    const token = lexer.getToken(gen);
    writeToTerminal(`(${String(token.token)} ${token.lexeme})`);
    if (String(token.token) === "Symbol(EOI)") {
      break;
    }
  }
  writeToTerminal("\n");
}

const technologies = [
  {
    name: "Rust (Blazingly Fast btw)",
    description: "Source code",
    imgSrc: RustLogo,
  },
  {
    name: "Web Assembly",
    description: "How you're running the program here 😉",
    imgSrc: WASMLogo,
  },
  {
    name: "wasm-pack",
    description: "Compile Rust to WASM and JS Module",
    imgSrc: WASMFerris,
  },
];

const links = [
  {
    href: "https://github.com/kmdiogo/lag-rust",
    icon: faGitAlt,
  },
  {
    href: "https://github.com/kmdiogo/LAG/tree/wasm",
    icon: faGitAlt,
  },
  {
    href: "https://www.npmjs.com/package/lag_rust",
    icon: faNpm,
  },
];
</script>

<template>
  <ProjectPageLayout
    title="Lexical Analyzer Generator"
    description=""
    :technologies="technologies"
    :links="links"
  >
    <div class="text-page d-flex flex-column">
      <h4>
        Welcome to my Lexical Analyzer Generator! This program is both a WASM
        library and Rust CLI program written in Rust. The WASM module was
        compiled using
        <a
          class="font-bold underline"
          href="https://rustwasm.github.io/wasm-pack/"
          >wasm-pack</a
        >
        and is ran in currently running in your browser with
        <a class="font-bold underline" href="https://webassembly.org/"
          >WebAssembly!</a
        >
      </h4>

      <h3 class="m-0 font-bold text-lg">What it does</h3>
      <p class="mt-0">
        Given a list of tokens, this program will generate a Lexical Analyzer
        class in either JavaScript or Python (your choice, but Javascript is
        more fun because you can run it here and now). The Deterministic Finite
        Automata (DFA) that drives the Lexical Analyzer is generated (without
        any regex libraries) directly from your provided regexes to a DFA using
        the Direct DFA construction algorithm described in the
        <a
          class="font-bold underline"
          href="https://en.wikipedia.org/wiki/Compilers:_Principles,_Techniques,_and_Tools"
          >Compilers Dragon Book</a
        >
      </p>

      <h3 class="m-0 font-bold text-lg">Instructions</h3>
      <div class="instructions">
        <p class="m-0">
          Use the input box below to define the tokens you want the Analyzer to
          recognize. The tokens are defined using regular expressions. Character
          sets are supported. You can also define ignore sequences which the
          Analyzer will recognize but not return anything. A template is already
          provided to show how to define standard C++ identifier tokens.
        </p>

        <p>
          Once your tokens are defined, click the run button below. Two download
          links will appear below the input box. One is a driver file in the
          language you chose and the other is a JSON serialized representation
          of the DFA
        </p>
      </div>
    </div>
    <template #extra-content>
      <div class="flex flex-col mt-2">
        <h3 class="font-bold text-lg">Input:</h3>
        <div>
          <textarea
            v-model="inputText"
            class="w-full text-black bg-gray-50 p-1 text-sm leading-tight"
            rows="12"
          />
        </div>
        <div class="flex flex-col lg:flex-row lg:gap-2">
          <select
            v-model="driverLanguage"
            class="bg-darcula-500 rounded px-3 min-h-12"
          >
            <option
              v-for="lang in Object.keys(DriverLanguage).filter((key) =>
                isNaN(Number(key)),
              )"
              :key="lang"
              :value="DriverLanguage[lang as keyof typeof DriverLanguage]"
            >
              {{ lang }}
            </option>
          </select>
          <button
            class="py-2 px-10 bg-forest-green-500 rounded hover:text-white hover:bg-forest-green-600 transition-colors duration-100"
            @click="runLAG"
          >
            <FontAwesomeIcon :icon="faPlay" size="lg" />
          </button>
        </div>

        <h3 class="font-bold text-lg mt-6">Output:</h3>
        <div class="grid grid-cols-12">
          <textarea
            ref="outputElement"
            v-model="outputText"
            class="w-full bg-black text-white outline-none border border-darcula-300 col-span-12"
            disabled
            rows="12"
            :style="{ 'font-family': terminalFont }"
          />

          <div
            class="lg:col-span-3 col-span-12 border border-darcula-300 p-4 flex flex-col"
          >
            <span>File output</span>
            <hr class="mt-1 mb-3" />
            <div class="flex flex-col gap-2">
              <a
                v-if="generatedLexerOutput"
                class="hover:text-white"
                :href="generatedLexerOutput.driverFileUrl"
                :download="generatedLexerOutput.driverFilename"
              >
                <FontAwesomeIcon :icon="faFileArrowDown" />
                {{ generatedLexerOutput.driverFilename }}
              </a>
              <a
                v-if="generatedLexerOutput"
                class="hover:text-white"
                :href="generatedLexerOutput.dfaFileUrl"
                download="states.json"
              >
                <FontAwesomeIcon :icon="faFileArrowDown" />
                states.json
              </a>
            </div>
          </div>

          <span
            class="border border-darcula-300 lg:col-span-9 col-span-12 p-3 overflow-auto flex flex-col gap-2"
          >
            <div class="flex flex-col lg:flex-row gap-2">
              <span v-if="testingFeatureEnabled">
                Try out your new lexer with some sample input!
              </span>
              <span v-else>
                Testing feature not available for non-javascript languages
              </span>
              <button
                class="px-4 py-1 bg-forest-green-500 rounded hover:text-white hover:bg-forest-green-600 transition-colors duration-100 disabled:opacity-50 disabled:cursor-not-allowed"
                :disabled="!testingFeatureEnabled"
                @click="executeGeneratedLexer"
              >
                <FontAwesomeIcon :icon="faVialCircleCheck" />
              </button>
            </div>
            <textarea
              v-model="testInputText"
              class="bg-gray-50 text-black h-full disabled:opacity-50"
              :disabled="!testingFeatureEnabled"
            />
          </span>
        </div>
      </div>
    </template>
  </ProjectPageLayout>
</template>
