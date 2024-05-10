<template>
  <div style="position: relative; top: 100px" @click="incr">
    this is the about page;
  </div>
</template>

<script setup lang="ts">
import Http, { setToken } from "../utils/request"
import { FetchError } from "ofetch"

async function incr() {
  try {
    let data = await Http.get<string>("/test")
    setToken(data.message)
  } catch (error: any) {
    let errorMessage = ""
    if (error instanceof FetchError) {
      // FetchErrorの場合
      const { cause, data, message, status } = error
      if (
        cause &&
        ((cause as DOMException).message || "").indexOf("abort") > -1
      ) {
        // ファイルアップロードを中断した場合の処理
        // Abort時の動作がブラウザによって異なるので、上記の条件で拾いきれるかは不明...
        errorMessage = "ファイルのアップロードを中止しました。"
      } else if (typeof data === "string" || data instanceof String) {
        // APIから返却されたエラーメッセージを取り出す
        errorMessage = data as string
      } else {
        // その他の場合の処理
        errorMessage = message
      }
      console.log(status)
      console.log(errorMessage)
    } else {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" scoped></style>
