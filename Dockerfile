# Docker image exclusively used for building the Lexical Analyzer Generator (LAG)
# from source and outputting it as a WASM build artifact for use when bundling the UI.

FROM emscripten/emsdk as builder

WORKDIR /

RUN git clone -b wasm --single-branch https://github.com/kmdiogo/LAG lag_source

WORKDIR /lag_source/lag_wasm/

WORKDIR /lag_source

RUN emcc main.cpp utils/utils.cpp TokenReturner/TokenReturner.cpp Parser/Parser.cpp \
          ParseTreeNode/ParseTreeNode.cpp NFAGenerator/NFAGenerator.cpp NFANode/NFANode.cpp \
          DFAGenerator/DFAGenerator.cpp FileGenerator/FileGenerator.cpp \
          -s MODULARIZE=1 -s EXPORT_ES6=1 -s EXPORT_NAME=LAG_WASM -s EXPORTED_FUNCTIONS="['_run']" -o lag_wasm/lag.mjs

FROM alpine:latest

WORKDIR /output

COPY --from=builder /lag_source/lag_wasm /lag_wasm

CMD ["cp", "-R", "/lag_wasm/.", "."]
