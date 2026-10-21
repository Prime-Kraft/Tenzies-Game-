// import OPENAI, { OpenAI } from "openai"
// import DOMPURIFY from "dompurify"
//
// import  { marked } from "marked"
//
// const API_URL = import.meta.env.VITE_API_URL;
// const API_KEY = import.meta.env.VITE_API_KEY;
// const API_MODEL = import.meta.env.VITE_API_MODEL;
//
//
// const openai = new OpenAI({
//   baseURL: API_URL,
//   apiKey: API_KEY,
//   dangerouslyAllowBrowser: true,
// })
//
// const prompt = ` Suggest some good advice for someone practicing, software engineering and facing some little chanllenges with his father,
//   that doesnt support or encourage him at all in not more than 100 words`
//
//
// const userMessage = {
//   role: "user",
//   content: prompt
// }
//
// const systemMessage = {
//   role: "system",
//   content: `make the advice more thoughtful and practical by giving me resources`
// }
//
//
//
// const messages = []
//
// messages.push(userMessage, systemMessage)
//
//
// try {
//   const streamResponse = await openai.chat.completions.create({
//     model: API_MODEL,
//     messages,
//     stream: true
//
//   })
//   console.log(streamResponse)
//
//
//
//
//   let streamResponseArray = []
//
//   for await (let chunk of streamResponse) {
//
//
//
//
//     const chunkPieces = chunk.choices[0]?.delta?.content ?? ""
//     streamResponseArray.push(chunkPieces)
//
//   }
//
// const fullContent = streamResponseArray.join('')
//
// console.log(fullContent)
//
// //   const unSafeAiOutput = response.choices[0].message.content
// //
// //   const unsafeHtml = marked.parse(unSafeAiOutput)
// //
// //
// //   const safeHtml = DOMPURIFY.sanitize(unsafeHtml)
// //
// //
// //
//
// }
//
//
// catch (error) {
//   console.error(" There was an issue please try again")
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //
// // const openai = new OpenAI({
// //   baseURL: API_URL,
// //   apiKey: API_KEY,
// //   dangerouslyAllowBrowser: true,
// // })
// //
// // const prompt = " Suggest some good advice for someone practicing, software engineering and facing some little chanllenges with his father, that doesnt support or encourage him at all"
// //
// //
// // const userMessage = {
// //   role: "user",
// //   content: prompt
// // }
// //
// // const response = await openai.chat.completions.create({
// //   model: API_MODEL,
// //   messages: [ userMessage ]
// // })
// //
// // const result = response.choices[0].message.content
// //
// //
// //
// // localStorage.setItem(result, JSON.stringify(result))
// //
// // const savedResult = JSON.parse(localStorage.getItem(result))
// //
// // console.log(savedResult)
